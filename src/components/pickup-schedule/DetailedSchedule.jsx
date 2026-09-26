import {
  FaTrash,
  FaRecycle,
  FaLeaf,
  FaTrashAlt,
  FaCalendarAlt,
  FaClock,
  FaBell,
  FaBellSlash,
} from "react-icons/fa";

import {
  getNextCollection,
  getCollectionStatus,
  formatCollectionDate,
} from "../Utils/scheduleUtils";

function DetailedSchedule({
  waste,
  currentTime,
  reminderOn,
  onToggleReminder,
  scheduleRef,
}) {
  const icons = {
    general: FaTrash,
    recyclables: FaRecycle,
    organic: FaLeaf,
    hazardous: FaTrashAlt,
  };

  const iconBackground = {
    general: "bg-gray-100 text-gray-500",
    recyclables: "bg-blue-100 text-blue-500",
    organic: "bg-green-100 text-green-500",
    hazardous: "bg-red-100 text-red-500",
  };

  const Icon = icons[waste.id];

  const nextCollection = getNextCollection(
    waste,
    currentTime
  );

  const status = getCollectionStatus(
    nextCollection,
    currentTime
  );

  const nextText = formatCollectionDate(
    nextCollection,
    currentTime
  );

  return (
    <div
      ref={scheduleRef}
      className="scroll-mt-5 rounded-2xl border border-gray-200 bg-white p-3.5"
    >
      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconBackground[waste.id]}`}
          >
            <Icon size={16} />
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-800">
              {waste.name}
            </h3>

            <p className="mt-0.5 text-[10px] text-gray-400">
              {waste.frequency}
            </p>
          </div>

        </div>

        {/* Dynamic status */}
        {status === "Today" && (
          <span className="rounded-md bg-green-100 px-2 py-1 text-[9px] font-medium text-green-500">
            Today
          </span>
        )}

      </div>

      {/* Days */}
      <div className="mt-4 flex items-center gap-3">
        <FaCalendarAlt
          size={13}
          className="text-gray-400"
        />

        <span className="text-[11px] text-gray-600">
          {waste.days.join(", ")}
        </span>
      </div>

      {/* Time */}
      <div className="mt-2 flex items-center gap-3">
        <FaClock
          size={13}
          className="text-gray-400"
        />

        <span className="text-[11px] text-gray-600">
          {waste.time}
        </span>
      </div>

      {/* Next collection */}
      <div className="mt-3 rounded-lg bg-[#f7f7f9] px-2 py-2">
        <p className="text-[11px] text-gray-500">
          <span className="text-gray-400">
            Next:
          </span>{" "}

          <span className="font-medium text-gray-600">
            {nextText}
          </span>
        </p>
      </div>

      {/* Description */}
      <p className="mt-3 text-[10px] leading-relaxed text-gray-400">
        {waste.description}
      </p>

      {/* Divider */}
      <div className="my-3 border-t border-gray-200" />

      {/* Reminder */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          {reminderOn ? (
            <FaBell
              size={13}
              className="text-green-500"
            />
          ) : (
            <FaBellSlash
              size={13}
              className="text-gray-400"
            />
          )}

          <span className="text-[11px] font-medium text-gray-600">
            Collection reminder
          </span>

        </div>

        {/* Toggle */}
        <button
            type="button"
            onClick={onToggleReminder}
            aria-pressed={reminderOn}
            className={`relative h-5 w-9 rounded-full transition-colors duration-200 ${
                reminderOn ? "bg-black" : "bg-gray-300"
            }`}
            >
            <span
                className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                reminderOn ? "translate-x-4" : "translate-x-0"
                }`}
            />
        </button>

      </div>
    </div>
  );
}

export default DetailedSchedule;