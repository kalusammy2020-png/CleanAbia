import { FaLightbulb } from "react-icons/fa";

function QuickTips() {
  const tips = [
    "Place bins outside 30 minutes before collection time",
    "Clean recyclables to avoid contamination",
    "Separate different waste types properly",
    "Flatten cardboard boxes to save space",
  ];

  return (
    <section className="mt-4 rounded-2xl border border-green-100 bg-linear-to-r from-green-50 to-blue-50 p-4 max-w-6xl mx-auto">
      <div className="mb-3 flex items-center gap-2">
        <FaLightbulb
          size={14}
          className="text-yellow-500"
        />

        <h2 className="text-[13px] font-semibold text-gray-700">
          Quick Tips
        </h2>
      </div>

      <div className="space-y-2">
        {tips.map((tip, index) => (
          <p
            key={index}
            className="text-[11px] leading-relaxed text-blue-700"
          >
            <span className="mr-1 text-blue-700">•</span>
            {tip}
          </p>
        ))}
      </div>
    </section>
  );
}

export default QuickTips;