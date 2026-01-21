import React from "react";
import heroimage from "../assets/Image-2.png";
import heroimage2 from "../assets/Image.png";
import heroimage3 from "../assets/Image-1.png";

const Hero = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      {/* MAIN HEADING */}
      <h1
        className="
     w-full px-4 text-[29px] md:text-[72px] lg:text-[100px] xl:text-[150px] font-black tracking-[-0.05em] leading-none
    "
      >
        <span className="text-black">TRAIN HARD.</span>{" "}
        <span className="text-[#7B85FF]">LIVE BETTER</span>
      </h1>

      {/* IMAGE + CONTENT */}
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroimage}
            alt="Fitness"
            className="w-full aspect-[4/3] lg:aspect-auto lg:h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 bg-[#808CFD] p-6 flex flex-col justify-between">
          <h2 className="text-[clamp(32px,5vw,64px)] font-black leading-tight">
            FOR THE COMMITTED
          </h2>

          <div>
            <p className="mt-4 text-black text-base md:text-lg">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>

            <button className="mt-6 bg-white text-black px-8 py-3 font-semibold rounded-md hover:bg-black hover:text-white transition">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-6 bg-[#E9ECFF] border-r-0 md:border-r-2 border-b-2 border-black">
          <h5 className="font-bold text-[clamp(28px,4vw,45px)] uppercase mb-4">
            Guided by experts
          </h5>
          <p className="text-black text-[clamp(16px,2vw,20px)]">
            We believe in creating a positive environment where you can thrive.
            We're here to help you achieve your goals.
          </p>
        </div>

        <div className="p-6 bg-[#E9ECFF] border-b-2 border-black">
          <h5 className="font-bold text-[clamp(26px,4vw,40px)] mb-4">
            Dynamic Open Gym
          </h5>
          <p className="text-black text-[clamp(16px,2vw,20px)]">
            Our facility is the optimal environment for strength training and
            performance.
          </p>
        </div>

        <div className="w-full">
          <img
            src={heroimage3}
            alt="Gym"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>

      {/* COMMUNITY SECTION */}
      <div className="w-full">
        <h2
          className="
        w-full
        px-4
        text-center
        text-[clamp(34px,8vw,175px)]
        font-black
        tracking-[-0.05em]
        leading-none
      "
        >
          JOIN THE <span className="text-[#7B85FF]">COMMUNITY</span>
        </h2>

        <div className="flex flex-col lg:flex-row border border-black mt-10">
          {/* LEFT */}
          <div className="bg-[#E9ECFF] flex-1">
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
              <div key={i} className="p-6 border-b-2 border-black">
                <h4 className="font-black text-[clamp(22px,4vw,40px)]">
                  {title}
                </h4>
                {desc && <p className="text-gray-600 mt-1">{desc}</p>}
              </div>
            ))}

            <div className="p-6">
              <button className="hover:bg-black hover:text-white transition">
                VIEW CLASSES
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              src={heroimage2}
              alt="Workout"
              className="w-full aspect-[4/3] lg:h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center py-16 bg-[#808CFD] px-4">
        <p className="uppercase text-sm mb-2">What we believe in</p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black mb-6">
          JOIN THE PRIMAL TRIBE TODAY!
        </h2>
        <button className="bg-black text-white px-8 py-3 hover:bg-white hover:text-black transition">
          RESERVE YOUR SPOT
        </button>
      </div>
    </div>
  );
};

export default Hero;
