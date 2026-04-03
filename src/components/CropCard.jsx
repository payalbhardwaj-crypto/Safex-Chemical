export default function CropCard({ crop, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-200 min-w-[90px] flex-shrink-0 ${
        active
          ? 'bg-primary-dark text-white shadow-lg scale-105'
          : 'bg-beige dark:bg-dark-card text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary-dark dark:hover:text-primary'
      }`}
    >
      <span className="text-2xl">{crop.icon}</span>
      <span>{crop.name}</span>
    </button>
  )
}
