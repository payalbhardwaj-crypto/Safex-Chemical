import PageShell from '../components/PageShell'

export default function AboutPage() {
  return (
    <PageShell
      label="About Us"
      title="Who We Are"
      description="Learn about Safex Chemicals — our history, mission, values, and the people who drive our commitment to Indian agriculture."
    >
      <div className="corp-card p-10 text-center">
        <div className="w-16 h-16 bg-corp-green-bg rounded-md flex items-center justify-center mx-auto mb-5 text-3xl">🌿</div>
        <h2 className="text-xl font-bold text-corp-text mb-2">About Us</h2>
        <p className="text-corp-text-2 text-sm max-w-md mx-auto">
          Our story, leadership team, and company milestones will be shared here.
        </p>
      </div>
    </PageShell>
  )
}
