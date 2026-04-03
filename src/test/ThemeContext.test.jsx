import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, useTheme } from '../context/ThemeContext'

function TestConsumer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <div data-testid="theme">{theme}</div>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('ThemeContext', () => {
  it('defaults to light theme', () => {
    render(<ThemeProvider><TestConsumer /></ThemeProvider>)
    expect(screen.getByTestId('theme').textContent).toBe('light')
  })

  it('toggles to dark', async () => {
    render(<ThemeProvider><TestConsumer /></ThemeProvider>)
    await userEvent.click(screen.getByText('toggle'))
    expect(screen.getByTestId('theme').textContent).toBe('dark')
  })

  it('persists theme in localStorage', async () => {
    render(<ThemeProvider><TestConsumer /></ThemeProvider>)
    await userEvent.click(screen.getByText('toggle'))
    expect(localStorage.getItem('safex-theme')).toBe('dark')
  })

  it('reads initial theme from localStorage', () => {
    localStorage.setItem('safex-theme', 'dark')
    render(<ThemeProvider><TestConsumer /></ThemeProvider>)
    expect(screen.getByTestId('theme').textContent).toBe('dark')
  })
})
