import PageShell from '../components/PageShell'

export default function InvestorRelationsPage() {
  return (
    <PageShell
      label="Investor Relations"
      title="Investor Information"
      description="Financial reports, governance documents, shareholding patterns, and announcements for Safex Chemicals investors."
    >
      <div className="bg-[#151A16] border border-white/[0.08] rounded-xl p-10 text-center">
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-5 text-3xl">📊</div>
        <h2 className="text-xl font-bold text-white mb-2">Investor Relations</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Annual reports, board disclosures, and investor resources will be available here.
        </p>
      </div>
    </PageShell>
  )
}
