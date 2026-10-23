import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Reveal from "./Reveal";

const sessions = [
  {
    title: "Strength",
    titleSize: "text-[42px] md:text-[50px]",
    schedules: ["Weekdays at 6AM", "Weekends and Holidays at 8AM"],
    desc: "Build a foundation of raw power with our comprehensive weightlifting and strength training programs.",
  },
  {
    title: "Conditioning",
    titleSize: "text-[40px] md:text-[45px]",
    schedules: ["Weekdays at 8AM", "Weekends and Holidays at 10AM"],
    desc: "Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.",
  },
  {
    title: "COMMUNITY CLASSES",
    titleSize: "text-[40px] md:text-[50px] leading-none",
    schedules: ["Weekends and Holidays at 8AM"],
    desc: "Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.",
  },
];

const Spot = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <Reveal immediate variant="fade-up">
        <h1 className="mb-2 w-full px-4 py-3 text-[9.2vw] font-black tracking-[-0.05em] leading-none uppercase whitespace-nowrap">
          BOOK A <span className="text-[#7B85FF]">SESSION</span>
        </h1>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-[#E9ECFF] border-b border-t border-black">
        {sessions.map((item, idx) => (
          <Reveal
            key={item.title}
            immediate
            variant="fade-up"
            delay={idx * 120}
            className={`group min-h-[460px] md:h-[480px] p-[30px] flex flex-col justify-between border-b lg:border-b-0 ${
              idx < 2 ? "lg:border-r" : ""
            } ${
              idx % 2 === 0 ? "md:border-r" : "md:border-r-0 lg:border-r"
            } border-black hover:bg-[#dce1ff] transition-all duration-300`}
          >
            <h2
              className={`uppercase font-bold ${item.titleSize} transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[#5b67f7]`}
            >
              {item.title}
            </h2>

            <div>
              {item.schedules.map((sched, sIdx) => (
                <React.Fragment key={sIdx}>
                  <p className="font-medium flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#7B85FF]" />
                    {sched}
                  </p>
                  <hr className="my-2.5 border border-black/80 group-hover:border-[#5b67f7] transition-colors duration-300" />
                </React.Fragment>
              ))}
              <p className="mt-3 text-gray-800 leading-relaxed">{item.desc}</p>
            </div>

            <Link to="/#contact" className="w-full">
              <button className="w-full h-[44px] bg-[#808CFD] text-black hover:bg-black hover:text-white uppercase font-semibold rounded-md hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer">
                reserve your spot
              </button>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal variant="zoom-in">
        <div className="text-center py-16 bg-[#808CFD] px-4 transition-colors duration-500 hover:bg-[#7582fc]">
          <p className="uppercase text-sm tracking-widest font-semibold mb-2">
            What we believe in
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black mb-6">
            JOIN THE PRIMAL TRIBE TODAY!
          </h2>
          <Link to="/#contact">
            <button className="group bg-black text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
              <span>RESERVE YOUR SPOT</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </button>
          </Link>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
};

export default Spot;
