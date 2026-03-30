import React from "react";
import Title from "../components/title";
import { assets } from "../assets/assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="About Us"
          className="w-full md:w-1/2 rounded-lg"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to our shopping platform — your one-stop destination for a
            seamless and enjoyable online shopping experience.
          </p>
          <p>
            We are passionate about bringing you a wide range of high-quality
            products, from the latest fashion trends to everyday essentials, all
            in one convenient place. Our goal is to make shopping simple, fast,
            and accessible for everyone.
          </p>
          <p>
            At our core, we believe that shopping should not only be easy but
            also enjoyable. That’s why we focus on delivering a user-friendly
            interface, secure transactions, and reliable customer service to
            ensure your satisfaction at every step.
          </p>
          <b className="text-pink-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className="flex flex-col md:flex-row  mb-20">
        <div className="border text-pink-800 text-base px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg">
          <b> Quality Assurance :</b>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border  text-pink-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg">
          <b> Convenience :</b>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border text-pink-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg">
          <b> Customer Support :</b>
          <p className="text-gray-400 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
