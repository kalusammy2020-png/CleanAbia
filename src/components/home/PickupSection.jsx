import { Link } from "react-router-dom";
import { Truck } from "lucide-react";

function PickupSection() {
  return (
    <section className="relative overflow-hidden py-35 px-6 text-center bg-[#0b3323]">
        <img
            src="/Construction-truck.png"
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 left-1/2  -translate-x-1/4 -translate-y-1/2
            w-550 max-w-none opacity-15 pointer-events-none select-none"
        
        />
      <div className="relative bottom-15 z-10 max-w-3xl mx-auto text-white">
        <div className="flex justify-center mb-4">
          <div className="bg-[#0b3323] p-4  rounded-full">
            <Truck className="text-white w-8 h-8" />
          </div>
        </div>

        <h2 className="text-3xl font-bold font-sans mb-3 sm:text-4xl md:text-6xl
        tracking-wide leading-tight ">
          Need a Pickup?
        </h2>

        <p className="text-lg max-w-3xl sm:xl md:text-2xl font-sans mb-6 leading-relaxed">
          Skip the wait — schedule a direct pickup for your home or business.
          Pre-sort your waste for a discount, or let our agents handle it all.
        </p>

        <Link
          to="/pickup"
          className="inline-block bg-white text-green-700 font-medium font-sans px-6 py-3 rounded-full
           hover:bg-[#0b3323] transition"
        >
          Request a Pickup →
        </Link>
      </div>
    </section>
  );
}

export default PickupSection;

