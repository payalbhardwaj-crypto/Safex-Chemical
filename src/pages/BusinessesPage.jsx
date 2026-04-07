import PageShell from '../components/PageShell'

export default function BusinessesPage() {
  return (
    <PageShell
      label="Our Businesses"
      title="Business Verticals"
      description="Safex operates across multiple agricultural segments — from crop protection to organic solutions and beyond."
    >
      <div className="corp-card p-10 text-center">
        <div className="w-16 h-16 bg-corp-green-bg rounded-md flex items-center justify-center mx-auto mb-5 text-3xl">🏢</div>
        <h2 className="text-xl font-bold text-corp-text mb-2">Our Businesses</h2>
        <p className="text-corp-text-2 text-sm max-w-md mx-auto">
          Details about our business segments and verticals will be available here soon.
        </p>
      </div>
    </PageShell>
  )
}
