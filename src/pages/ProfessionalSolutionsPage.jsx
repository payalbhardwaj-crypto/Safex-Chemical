import PageShell from '../components/PageShell'

export default function ProfessionalSolutionsPage() {
  return (
    <PageShell
      label="Professional Solutions"
      title="Solutions for Every Crop"
      description="Expert-recommended Safex products tailored to specific crops, seasons, and agricultural challenges across India."
    >
      <div className="corp-card p-10 text-center">
        <div className="w-16 h-16 bg-corp-green-bg rounded-md flex items-center justify-center mx-auto mb-5 text-3xl">🌾</div>
        <h2 className="text-xl font-bold text-corp-text mb-2">Professional Solutions</h2>
        <p className="text-corp-text-2 text-sm max-w-md mx-auto">
          Crop-specific recommendations and professional-grade solutions will be listed here soon.
        </p>
      </div>
    </PageShell>
  )
}
