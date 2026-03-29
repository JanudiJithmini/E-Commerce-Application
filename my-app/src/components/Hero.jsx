import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 sm:px-12 bg-black">
        <div className="text-gray-700 space-y-6 group">
          {/* Top line */}
          <div className="flex items-center gap-3">
            <p className="w-8 md:w-11 h-[2px] bg-pink-400 transition-all duration-500 group-hover:bg-pink-600 group-hover:w-14"></p>

            <p className="font-semibold text-sm md:text-base tracking-wide text-pink-500 transition-colors duration-500 group-hover:text-pink-700">
              OUR BESTSELLER
            </p>
          </div>

          {/* Heading with color transformation */}
          <h1
            className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed font-semibold 
                   bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 
                   bg-clip-text text-transparent
                   transition-all duration-500
                   group-hover:from-pink-600 group-hover:via-pink-400 group-hover:to-pink-700"
          >
            Latest Arrival Product
          </h1>

          {/* CTA */}
          <div className="flex items-center gap-3 cursor-pointer w-fit">
            {/* Text */}
            <p className="font-semibold text-sm md:text-base relative overflow-hidden">
              <span className="relative z-10 text-pink-600 transition-colors duration-300 group-hover:text-white">
                SHOP NOW
              </span>

              {/* Background sliding color */}
              <span className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-500 group-hover:w-full rounded"></span>
            </p>

            {/* Animated line */}
            <p className="w-8 md:w-11 h-[2px] bg-pink-400 transition-all duration-500 group-hover:bg-pink-700 group-hover:w-16"></p>
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
