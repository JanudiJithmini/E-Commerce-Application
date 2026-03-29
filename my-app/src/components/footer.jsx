import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const footer = () => {
  return (
    <div className="flex  border-5 border-black mt-10 mb-10 flex-flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm px-6 sm:px-12 py-12 ">
      <div className="flex flex-col gap-4">
        <img src={assets.logo} alt="Logo" className="w-36 mb-5" />
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Voluptates, consequuntur.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li className="cursor-pointer hover:text-gray-900">Home</li>
          <li className="cursor-pointer hover:text-gray-900">About Us</li>
          <li className="cursor-pointer hover:text-gray-900">
            Delivery Information
          </li>
          <li className="cursor-pointer hover:text-gray-900">Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <p className="text-gray-700">123 Main Street, City, Country</p>
        <p className="text-gray-700">Email: info@example.com</p>
        <p className="text-gray-700">Phone: +1 (123) 456-7890</p>
      </div>
      <div className="col-span-3 mt-10 pt-5 flex flex-col items-center">
        {/* Gradient divider */}
        <div
          className="w-full max-w-[800px] h-[4px] rounded-full mb-4
                  bg-gradient-to-r from-pink-200 via-black to-pink-200"
        ></div>

        {/* Copyright text */}
        <p
          className="text-center text-black font-bold text-sm sm:text-base
                tracking-wider
                px-4 sm:px-0"
        >
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default footer;
