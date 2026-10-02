import { FaTrash, FaLeaf } from "react-icons/fa";

function TodaysCollection() {
  return (
    <section className="mb-4 rounded-2xl border border-green-200 bg-linear-to-r from-green-50 to-blue-50 px-4 py-4">
      
      <h2 className="mb-4 text-[13px] font-semibold text-gray-700">
        Today's Collections
      </h2>

      <div className="space-y-3">

        {/* General Waste */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
            <FaTrash size={16} />
          </div>

          <div>
            <p className="text-[12px] font-medium text-gray-700">
              General Waste
            </p>

            <p className="mt-0.5 text-[10px] text-green-500">
              8:00 AM - 10:00 AM
            </p>
          </div>
        </div>


        {/* Organic Waste */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-500">
            <FaLeaf size={16} />
          </div>

          <div>
            <p className="text-[12px] font-medium text-gray-700">
              Organic Waste
            </p>

            <p className="mt-0.5 text-[10px] text-green-500">
              9:00 AM - 11:00 AM
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default TodaysCollection;