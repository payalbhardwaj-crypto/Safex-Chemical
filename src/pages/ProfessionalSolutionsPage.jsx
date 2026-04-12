import PageShell from '../components/PageShell'

export default function ProfessionalSolutionsPage() {
  return (
    <PageShell
      label="Professional Solutions"
      title="Solutions for Every Crop"
      description="Expert-recommended Safex products tailored to specific crops, seasons, and agricultural challenges across India."
    >
      <div className="bg-[#151A16] border border-white/[0.08] rounded-xl p-10 text-center">
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-5 text-3xl">🌾</div>
        <h2 className="text-xl font-bold text-white mb-2">Professional Solutions</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Crop-specific recommendations and professional-grade solutions will be listed here soon.
        </p>
      </div>
    </PageShell>
  )
}
