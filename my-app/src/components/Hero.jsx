import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">

      {/* Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 sm:px-12">
        <div className="text-[#414141] space-y-4">

          {/* Top line */}
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">
              OUR BESTSELLER
            </p>
          </div>

          {/* Heading */}
          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed font-semibold">
            Latest Arrival Product
          </h1>

          {/* Bottom CTA */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <p className="font-semibold text-sm md:text-base">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>

        </div>
      </div>

      {/* Right side */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="Hero"
      />

    </div>
  );
};

export default Hero;
