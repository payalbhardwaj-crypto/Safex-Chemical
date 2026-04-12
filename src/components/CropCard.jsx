export default function CropCard({ crop, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 border min-w-[90px] flex-shrink-0 ${
        active
          ? 'bg-green-600 text-white border-green-600 shadow-[0_0_14px_rgba(34,197,94,0.28)] scale-105'
          : 'bg-white/[0.04] text-gray-400 border-white/[0.09] hover:border-green-500/30 hover:text-green-400 hover:bg-green-500/[0.06]'
      }`}
    >
      <span className="text-xl">{crop.icon}</span>
      <span className="text-xs">{crop.name}</span>
    </button>
  )
}
