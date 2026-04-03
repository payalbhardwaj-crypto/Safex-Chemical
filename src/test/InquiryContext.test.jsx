import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InquiryProvider, useInquiry } from '../context/InquiryContext'

const product1 = { id: 'girdle', name: 'Girdle', category: 'Insecticide' }
const product2 = { id: 'hallabol', name: 'Hallabol', category: 'Fungicide' }

function TestConsumer() {
  const { cart, addProduct, removeProduct, clearCart } = useInquiry()
  return (
    <div>
      <div data-testid="count">{cart.length}</div>
      <div data-testid="ids">{cart.map(p => p.id).join(',')}</div>
      <button onClick={() => addProduct(product1)}>add1</button>
      <button onClick={() => addProduct(product2)}>add2</button>
      <button onClick={() => removeProduct('girdle')}>remove1</button>
      <button onClick={() => clearCart()}>clear</button>
    </div>
  )
}

describe('InquiryContext', () => {
  it('starts with empty cart', () => {
    render(<InquiryProvider><TestConsumer /></InquiryProvider>)
    expect(screen.getByTestId('count').textContent).toBe('0')
  })

  it('adds a product', async () => {
    render(<InquiryProvider><TestConsumer /></InquiryProvider>)
    await userEvent.click(screen.getByText('add1'))
    expect(screen.getByTestId('count').textContent).toBe('1')
    expect(screen.getByTestId('ids').textContent).toBe('girdle')
  })

  it('does not add duplicate products', async () => {
    render(<InquiryProvider><TestConsumer /></InquiryProvider>)
    await userEvent.click(screen.getByText('add1'))
    await userEvent.click(screen.getByText('add1'))
    expect(screen.getByTestId('count').textContent).toBe('1')
  })

  it('removes a product', async () => {
    render(<InquiryProvider><TestConsumer /></InquiryProvider>)
    await userEvent.click(screen.getByText('add1'))
    await userEvent.click(screen.getByText('add2'))
    await userEvent.click(screen.getByText('remove1'))
    expect(screen.getByTestId('count').textContent).toBe('1')
    expect(screen.getByTestId('ids').textContent).toBe('hallabol')
  })

  it('clears the cart', async () => {
    render(<InquiryProvider><TestConsumer /></InquiryProvider>)
    await userEvent.click(screen.getByText('add1'))
    await userEvent.click(screen.getByText('add2'))
    await userEvent.click(screen.getByText('clear'))
    expect(screen.getByTestId('count').textContent).toBe('0')
  })
})
