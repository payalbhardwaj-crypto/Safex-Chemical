import PageShell from '../components/PageShell'

export default function InnovationPage() {
  return (
    <PageShell
      label="Innovation"
      title="Research & Innovation"
      description="Safex invests in cutting-edge R&D to develop the next generation of crop protection products that are safer, smarter, and more effective."
    >
      <div className="corp-card p-10 text-center">
        <div className="w-16 h-16 bg-corp-green-bg rounded-md flex items-center justify-center mx-auto mb-5 text-3xl">🔬</div>
        <h2 className="text-xl font-bold text-corp-text mb-2">Innovation</h2>
        <p className="text-corp-text-2 text-sm max-w-md mx-auto">
          Our R&amp;D pipeline, patented formulations, and innovation initiatives will be showcased here.
        </p>
      </div>
    </PageShell>
  )
}
