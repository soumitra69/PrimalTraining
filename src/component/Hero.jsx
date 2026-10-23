import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/HeroMain.jpg";
import heroimage2 from "../assets/HeroCommunity.jpg";
import heroimage3 from "../assets/HeroCard.jpg";
import SmoothImage from "./SmoothImage";
import Reveal from "./Reveal";
import FitHeading from "./FitHeading";

const Hero = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      {/* MAIN HEADING */}
      <Reveal immediate variant="fade-up">
        <FitHeading as="h1" initialVw={8.9} containerClassName="w-full px-3 md:px-4 py-2">
          <span className="text-black transition-colors duration-300">
            TRAIN HARD.
          </span>{" "}
          <span className="text-[#7B85FF] transition-colors duration-300 hover:text-[#636efa]">
            LIVE BETTER
          </span>
        </FitHeading>
      </Reveal>

      {/* IMAGE + CONTENT */}
      <div className="flex flex-col lg:flex-row items-stretch border-t border-b border-black">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <SmoothImage
            src={heroimage}
            alt="Fitness training at PrimalTraining"
            eager={true}
            containerClassName="w-full h-full"
            className="w-full aspect-[4/3] lg:aspect-auto lg:h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 bg-[#808CFD] p-6 md:p-10 flex flex-col justify-between transition-colors duration-500 hover:bg-[#7683fc]">
          <Reveal variant="fade-left" delay={100}>
            <h2 className="text-[clamp(32px,5vw,64px)] font-black leading-tight tracking-tight">
              FOR THE COMMITTED
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <div>
              <p className="mt-4 text-black text-base md:text-lg leading-relaxed max-w-xl">
                Train like an athlete with top-tier equipment and expert
                programming. Whether you're building muscle or breaking PRs, we
                help you push past limits.
              </p>

              <Link to="/about" className="inline-block mt-6">
                <button className="group bg-white text-black px-8 py-3 font-semibold rounded-md hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
                  <span>About Us</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Reveal
          variant="fade-up"
          delay={0}
          className="group p-6 md:p-8 bg-[#E9ECFF] hover:bg-[#dce1ff] border-r-0 md:border-r-2 border-b-2 border-black transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <h5 className="font-bold text-[clamp(28px,4vw,45px)] uppercase mb-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#5b67f7]">
              Guided by experts
            </h5>
            <p className="text-black text-[clamp(16px,2vw,20px)] leading-relaxed">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals.
            </p>
          </div>
          <div className="mt-6 h-1 w-12 bg-[#808CFD] group-hover:w-24 transition-all duration-300" />
        </Reveal>

        <Reveal
          variant="fade-up"
          delay={120}
          className="group p-6 md:p-8 bg-[#E9ECFF] hover:bg-[#dce1ff] border-r-0 md:border-r-2 border-b-2 border-black transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <h5 className="font-bold text-[clamp(26px,4vw,40px)] uppercase mb-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#5b67f7]">
              Dynamic Open Gym
            </h5>
            <p className="text-black text-[clamp(16px,2vw,20px)] leading-relaxed">
              Our facility is the optimal environment for strength training and
              performance.
            </p>
          </div>
          <div className="mt-6 h-1 w-12 bg-[#808CFD] group-hover:w-24 transition-all duration-300" />
        </Reveal>

        <div className="w-full border-b-2 border-black">
          <SmoothImage
            src={heroimage3}
            alt="Gym athlete"
            eager={true}
            containerClassName="w-full h-full"
            className="w-full aspect-[4/3] h-full object-cover"
          />
        </div>
      </div>

      {/* COMMUNITY SECTION */}
      <div className="w-full pt-8">
        <Reveal variant="fade-up">
          <FitHeading as="h2" initialVw={10.8} containerClassName="w-full px-3 md:px-4">
            JOIN THE{" "}
            <span className="text-[#7B85FF] transition-colors duration-300 hover:text-[#636efa]">
              COMMUNITY
            </span>
          </FitHeading>
        </Reveal>

        <div className="flex flex-col lg:flex-row border-t border-b border-black mt-8">
          {/* LEFT */}
          <div className="bg-[#E9ECFF] flex-1 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black">
            <div>
              {[
                ["DISCOVER YOUR POTENTIAL", ""],
                [
                  "EXPERT COACHING",
                  "Trainers who are passionate about your progress.",
                ],
                [
                  "RESULTS-DRIVEN PROGRAMS",
                  "Workouts that deliver measurable results.",
                ],
                [
                  "A SUPPORTIVE TRIBE",
                  "A community that pushes you to be your best.",
                ],
              ].map(([title, desc], i) => (
                <Reveal key={i} variant="fade-right" delay={i * 80}>
                  <div className="group p-6 border-b-2 border-black hover:bg-[#dce1ff] hover:pl-8 transition-all duration-300 cursor-default">
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-[clamp(22px,4vw,40px)] group-hover:text-[#5b67f7] transition-colors duration-300">
                        {title}
                      </h4>
                      {desc && (
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#5b67f7] font-bold text-xl">
                          →
                        </span>
                      )}
                    </div>
                    {desc && (
                      <p className="text-gray-700 mt-1 transition-colors duration-300 group-hover:text-black">
                        {desc}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="p-6">
              <Link to="/spot">
                <button className="group px-6 py-3 font-bold border-2 border-black rounded-md hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
                  <span>VIEW CLASSES</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <SmoothImage
              src={heroimage2}
              alt="Workout community"
              containerClassName="w-full h-full"
              className="w-full aspect-[4/3] lg:h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <Reveal variant="zoom-in">
        <div className="text-center py-16 bg-[#808CFD] px-4 transition-colors duration-500 hover:bg-[#7582fc]">
          <p className="uppercase text-sm tracking-widest font-semibold mb-2">
            What we believe in
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black mb-6">
            JOIN THE PRIMAL TRIBE TODAY!
          </h2>
          <Link to="/spot">
            <button className="group bg-black text-white font-semibold px-8 py-3.5 rounded-md hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
              <span>RESERVE YOUR SPOT</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </button>
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default Hero;
