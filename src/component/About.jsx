import React from "react";
import Nav from "./Nav";
import firstimage from "../assets/I-1.jpg";
import secondimage from "../assets/Image.jpg";
import thirdimage from "../assets/Reconnectsection.png";
import Footer from "./Footer";

const About = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <h1 className=" mb-2  w-full px-4 text-[29px] md:text-[72px] lg:text-[100px] xl:text-[150px] font-black tracking-[-0.05em] leading-none uppercase">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row w-full">
        {/* TEXT SECTION */}
        <div className="w-full md:flex-[2] h-[480px] bg-[#808CFD] flex flex-col justify-between px-6">
          <h2 className="text-[32px] md:text-[50px] font-bold uppercase mt-6">
            Tap into Your Primal Power. <br />
            Forge a Stronger You.
          </h2>

          <div className="mb-6">
            <h3 className="font-bold mb-2">OUR VISION</h3>
            <p className="max-w-[650px]">
              Primal Training is committed to delivering a training experience
              rooted in raw strength, functional fitness, and unwavering
              community support. We empower our members to tap into their primal
              power, achieve their goals, and live a life of strength,
              resilience, and unwavering determination.
            </p>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:flex-1 h-[300px] md:h-[480px] overflow-hidden">
          <img src={firstimage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row w-full">
        {/* IMAGE SECTION */}
        <div className="w-full lg:w-[1030px] h-[260px] md:h-[360px] lg:h-[480px] flex-shrink-0">
          <img
            src={secondimage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="w-full lg:flex-1 h-auto lg:h-[480px] bg-[#808CFD] flex flex-col justify-between p-4 md:p-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            DYNAMIC OPEN <br className="hidden sm:block" /> GYM
          </h2>

          <p className="text-sm md:text-base leading-relaxed">
            At Primal Training, we strip away the fluff and focus on the
            fundamentals. Our expert coaches guide you through intense,
            functional workouts designed to build raw strength, resilience, and
            a body capable of anything.
          </p>
        </div>
      </div>

      <div className="">
        <img className="w-full" src={thirdimage} alt="" />
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
      <Footer />
    </div>
  );
};

export default About;
