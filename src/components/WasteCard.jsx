import {
  FaTrash,
  FaRecycle,
  FaLeaf,
  FaTrashAlt,
} from "react-icons/fa";

function WasteCard({ waste, onSelect, selected }) {
  const icons = {
    general: FaTrash,
    recyclables: FaRecycle,
    organic: FaLeaf,
    hazardous: FaTrashAlt,
  };

  const Icon = icons[waste.id];

  const iconBackground = {
    general: "bg-gray-100 text-gray-500",
    recyclables: "bg-blue-100 text-blue-500",
    organic: "bg-green-100 text-green-500",
    hazardous: "bg-red-100 text-red-500",
  };

  const dotColor = {
    general: "bg-gray-500",
    recyclables: "bg-blue-500",
    organic: "bg-green-500",
    hazardous: "bg-red-500",
  };

  return (
    <button
      onClick={() => onSelect(waste)}
      className={`min-h-35 w-full rounded-2xl border bg-white p-3 text-left transition-all duration-200 ${
        selected
          ? "border-green-200 shadow-sm"
          : "border-gray-200 hover:border-green-200 hover:shadow-sm"
      }`}
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconBackground[waste.id]}`}
        >
          <Icon size={16} />
        </div>

        <span
          className={`mt-1 h-2 w-2 rounded-full ${dotColor[waste.id]}`}
        />
      </div>

      {/* Name */}
      <h3 className="mt-4 text-[12px] font-semibold text-gray-800">
        {waste.name}
      </h3>

      {/* Frequency */}
      <p className="mt-1 text-[10px] text-gray-400">
        {waste.frequency}
      </p>

     
    </button>
  );
}

export default WasteCard;