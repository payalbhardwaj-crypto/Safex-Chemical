import PageShell from '../components/PageShell'

export default function CareersPage() {
  return (
    <PageShell
      label="Careers"
      title="Join Our Team"
      description="Explore opportunities to grow with Safex Chemicals — a company committed to feeding the nation and building careers that matter."
    >
      <div className="bg-[#151A16] border border-white/[0.08] rounded-xl p-10 text-center">
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-5 text-3xl">💼</div>
        <h2 className="text-xl font-bold text-white mb-2">Careers</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Open positions, our culture, and how to apply at Safex will be listed here soon.
        </p>
      </div>
    </PageShell>
  )
}
