import PageShell from '../components/PageShell'

export default function InvestorRelationsPage() {
  return (
    <PageShell
      label="Investor Relations"
      title="Investor Information"
      description="Financial reports, governance documents, shareholding patterns, and announcements for Safex Chemicals investors."
    >
      <div className="corp-card p-10 text-center">
        <div className="w-16 h-16 bg-corp-green-bg rounded-md flex items-center justify-center mx-auto mb-5 text-3xl">📊</div>
        <h2 className="text-xl font-bold text-corp-text mb-2">Investor Relations</h2>
        <p className="text-corp-text-2 text-sm max-w-md mx-auto">
          Annual reports, board disclosures, and investor resources will be available here.
        </p>
      </div>
    </PageShell>
  )
}
