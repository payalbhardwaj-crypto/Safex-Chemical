export default function CropCard({ crop, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 px-5 py-3.5 rounded-md text-sm font-medium transition-all duration-200 border min-w-[90px] flex-shrink-0 ${
        active
          ? 'bg-corp-green text-white border-corp-green shadow-green'
          : 'bg-white text-corp-text-2 border-corp-border hover:border-corp-green hover:text-corp-green hover:bg-corp-green-bg'
      }`}
    >
      <span className="text-xl">{crop.icon}</span>
      <span className="text-xs">{crop.name}</span>
    </button>
  )
}
