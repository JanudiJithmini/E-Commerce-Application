import React from "react";
import Title from "../components/title";
import { assets } from "../assets/assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:w-1/2 rounded-lg"
          src={assets.contact_img}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-500">
            239 <br />
            Wakwella Road <br />
            Galle, Sri Lanka <br />
            80000 <br />
          </p>
          <p>
            Email: info@example.com <br />
            Phone: +94 77 123 4567
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job opening
          </p>
          <button className="border border-pink-500 px-4 py-4 text-base hover:bg-black hover:text-white transition-all duration-500">
            Explore Job
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
