import React from "react";
import { Link } from "react-router-dom";
import firstimage from "../assets/I-1.jpg";
import secondimage from "../assets/Image.jpg";
import thirdimage from "../assets/Reconnectsection.jpg";
import Footer from "./Footer";
import SmoothImage from "./SmoothImage";
import Reveal from "./Reveal";

const About = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ fontFamily: "Anek Tamil, sans-serif" }}
    >
      <Reveal immediate variant="fade-up">
        <h1 className="mb-2 w-full px-4 py-2 text-[29px] md:text-[72px] lg:text-[100px] xl:text-[150px] font-black tracking-[-0.05em] leading-none uppercase">
          About <span className="text-[#7B85FF]">Us</span>
        </h1>
      </Reveal>

      {/* FIRST SPLIT SECTION */}
      <div className="flex flex-col md:flex-row w-full border-t border-b border-black">
        {/* TEXT SECTION */}
        <div className="group w-full md:flex-[2] min-h-[380px] md:h-[480px] bg-[#808CFD] hover:bg-[#7683fc] transition-colors duration-500 flex flex-col justify-between p-6 md:p-8">
          <Reveal immediate variant="fade-right" delay={100}>
            <h2 className="text-[32px] md:text-[50px] font-bold uppercase leading-tight transition-transform duration-300 group-hover:translate-x-1">
              Tap into Your Primal Power. <br />
              Forge a Stronger You.
            </h2>
          </Reveal>

          <Reveal immediate variant="fade-up" delay={200}>
            <div className="mt-6">
              <h3 className="font-bold tracking-wider mb-2">OUR VISION</h3>
              <p className="max-w-[650px] leading-relaxed text-black/90">
                Primal Training is committed to delivering a training experience
                rooted in raw strength, functional fitness, and unwavering
                community support. We empower our members to tap into their
                primal power, achieve their goals, and live a life of strength,
                resilience, and unwavering determination.
              </p>
            </div>
          </Reveal>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:flex-1 h-[300px] md:h-[480px]">
          <SmoothImage
            src={firstimage}
            alt="Athletes fist bumping after workout"
            eager={true}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* SECOND SPLIT SECTION */}
      <div className="flex flex-col-reverse lg:flex-row w-full border-b border-black">
        {/* IMAGE SECTION */}
        <div className="w-full lg:w-[62%] h-[280px] md:h-[380px] lg:h-[480px] flex-shrink-0">
          <SmoothImage
            src={secondimage}
            alt="Deadlift strength training"
            eager={true}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT SECTION */}
        <div className="group w-full lg:flex-1 min-h-[280px] lg:h-[480px] bg-[#E9ECFF] hover:bg-[#dce1ff] transition-colors duration-500 flex flex-col justify-between p-6 md:p-8">
          <Reveal variant="fade-left" delay={100}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#5b67f7]">
              DYNAMIC OPEN <br className="hidden sm:block" /> GYM
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <div>
              <div className="mb-4 h-1 w-12 bg-[#808CFD] group-hover:w-24 transition-all duration-300" />
              <p className="text-sm md:text-base leading-relaxed text-gray-800">
                At Primal Training, we strip away the fluff and focus on the
                fundamentals. Our expert coaches guide you through intense,
                functional workouts designed to build raw strength, resilience,
                and a body capable of anything.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* RECONNECT BANNER */}
      <Reveal variant="fade-up">
        <div className="w-full border-b border-black">
          <SmoothImage
            src={thirdimage}
            alt="Reconnect with your primal self"
            containerClassName="w-full"
            className="w-full h-auto block object-cover"
          />
        </div>
      </Reveal>

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

      <Footer />
    </div>
  );
};

export default About;
