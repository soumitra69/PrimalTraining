import React from "react";
import heroimage from "../assets/Image-2.png";
import heroimage2 from "../assets/Image.png";
import heroimage3 from "../assets/Image-1.png";

const Hero = () => {
  return (
    <div className="w-full " style={{ fontFamily: "Anek Tamil, sans-serif" }}>
      {/* MAIN HEADING */}
      <h1
        className="
  w-full
  px-4
  text-[33px]
  md:text-[72px]
  lg:text-[100px]
  xl:text-[150px]
  font-black
  tracking-[-0.05em]
  leading-none
"
      >
        <span className="text-black">TRAIN HARD.</span>{" "}
        <span className="text-[#7B85FF]">LIVE BETTER</span>
      </h1>

      {/* IMAGE + CONTENT */}
      <div className="flex flex-col lg:flex-row items-center ">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={heroimage}
            alt="Fitness"
            className="max-w-full  max-w-[2560px] w-[854px] h-[480px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full p-5 px-4 lg:w-1/2 flex flex-col bg-[#808CFD] justify-between w-[426px] h-[480px] ">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight">
            FOR THE COMMITTED
          </h2>

          <div>
            <p className="mt-3  text-black">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>

            <button className="mt-4 bg-white text-black px-8 py-3 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-6 h-full flex flex-col justify-between bg-[#E9ECFF] border-r-2 border-b-2 border-black">
          <h5 className="font-bold mb-2 text-[45px] uppercase">
            Guided by experts
          </h5>
          <p className="text-black text-sm text-[20px] mb-10">
            We believe in creating a positive environment where you can thrive.
            We're here to help you achieve your goals and unlock your full
            potential.
          </p>
        </div>

        <div className="p-6 h-full flex flex-col justify-between bg-[#E9ECFF] border-b-2 border-black">
          <h5 className="font-bold text-[40px] mb-2">DYNAMIC OPEN GYM</h5>
          <p className="text-black text-sm text-[20px] mb-10">
            Our facility is the optimal environment for strength training and
            performance, fully equipped with top-of-the-line tools.
          </p>
        </div>

        <div className=" h-full flex justify-center items-center">
          <img
            src={heroimage3}
            alt="Gym"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* COMMUNITY SECTION */}
      <div className="w-full">
        <h2
          className="
    w-full
    px-4
    text-[clamp(28px,6vw,120px)]
    font-black
    tracking-[-0.05em]
    leading-none
    text-center
    
    md:text-[175px]
    lg:text-[110px]
    md:text-[85px]
    xl:text-[175px]
    text-xl
  "
        >
          JOIN THE <span className="text-[#7B85FF]">COMMUNITY</span>
        </h2>

        <div className="flex flex-col md:flex-row border border-black">
          {/* LEFT */}
          <div className="bg-[#E9ECFF] flex flex-col gap-4">
            {/* TITLE BLOCK */}
            <div className="w-[426px] h-[151px] p-6 border-b-2 border-black pb-1">
              <h4 className="mb-6 font-black text-[45px] drop-shadow-lg">
                DISCOVER YOUR POTENTIAL
              </h4>
            </div>

            {/* ITEM 1 */}
            <div className="w-[426px] h-[112.25px] p-6 border-b-2 border-black pb-1">
              <h6 className="font-bold">EXPERT COACHING</h6>
              <p className="text-sm text-gray-600">
                Trainers who are passionate about your progress.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="w-[426px] h-[112.25px] p-6 border-b-2 border-black pb-1">
              <h6 className="font-bold">RESULTS-DRIVEN PROGRAMS</h6>
              <p className="text-sm text-gray-600">
                Workouts that deliver tangible, measurable results.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="w-[426px] h-[112.25px] p-6 border-b-2 border-black pb-1">
              <h6 className="font-bold">A SUPPORTIVE TRIBE</h6>
              <p className="text-sm text-gray-600">
                A community that pushes you to be your best.
              </p>
            </div>

            {/* BUTTON */}
            <div className="w-[426px] h-[48px] border-b-2 border-black flex items-center p-6">
              <button className="hover:bg-black hover:text-white transition">
                VIEW CLASSES
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:flex-1">
            <img
              src={heroimage2}
              alt="Workout"
              className="w-full h-[602px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className=" text-center py-16  bg-[#808CFD] ">
        <p className="uppercase text-sm mb-2">What we believe in</p>
        <h2 className="text-3xl font-black mb-6">
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
