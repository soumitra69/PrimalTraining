import React from "react";
import Footer from "./Footer";

const Spot = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <h1 className=" mb-2  w-full px-4 text-[29px] md:text-[72px] lg:text-[100px] xl:text-[150px] font-black tracking-[-0.05em] leading-none uppercase">
        BOOK A <span className="text-[#7B85FF]">SESSION</span>
      </h1>
      <div className="flex flex-wrap w-full bg-[#E9ECFF] border-b border-black border-t">
        {/* CARD */}
        <div className="w-full md:w-1/2 lg:w-1/3 h-[480px] p-[30px] flex flex-col justify-between border-r border-black">
          <h2 className="uppercase font-bold text-[50px]">Strength</h2>

          <div>
            <p>Weekdays at 6AM</p>
            <hr className="my-2 border border-black" />
            <p>Weekends and Holidays at 8AM</p>
            <hr className="my-2 border border-black" />
            <p>
              Build a foundation of raw power with our comprehensive
              weightlifting and strength training programs.
            </p>
          </div>

          <button className="w-full h-[41px] bg-[#808CFD] uppercase font-semibold rounded">
            reserve your spot
          </button>
        </div>

        {/* DUPLICATE CARD */}
        <div className="w-full md:w-1/2 lg:w-1/3 h-[480px] p-[30px] flex flex-col justify-between border-r border-black">
          <h2 className="uppercase font-bold text-[45px]">Conditioning</h2>

          <div>
            <p>Weekdays at 8AM</p>
            <hr className="my-2 border border-black" />
            <p>Weekends and Holidays at 10AM</p>
            <hr className="my-2 border border-black" />
            <p>
              Push your limits with high-intensity workouts that challenge your
              cardiovascular endurance and build functional fitness.
            </p>
          </div>

          <button className="w-full h-[41px] bg-[#808CFD] uppercase font-semibold rounded">
            reserve your spot
          </button>
        </div>

        {/* DUPLICATE CARD */}
        <div className="w-full md:w-1/2 lg:w-1/3 h-[480px] p-[30px] flex flex-col justify-between">
          <h2 className="uppercase font-bold text-[50px]">
            COMMUNITY <br /> CLASSES
          </h2>

          <div>
            <p>Weekends and Holidays at 8AM</p>
            <hr className="my-2 border border-black" />
            <p>
              Experience the power of collective effort with our custom Workout
              of the Day. Push your limits alongside like-minded individuals.
            </p>
          </div>

          <button className="w-full h-[41px] bg-[#808CFD] uppercase font-semibold rounded">
            reserve your spot
          </button>
        </div>
      </div>
      <div className="text-center py-16 bg-[#808CFD] px-4">
        <p className="uppercase text-sm mb-2">What we believe in</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black mb-6">
          JOIN THE PRIMAL TRIBE TODAY!
        </h2>
        <button className="bg-black text-white px-8 py-3 hover:bg-white hover:text-black transition">
          RESERVE YOUR SPOT
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Spot;
