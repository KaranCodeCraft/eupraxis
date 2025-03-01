import { CMP_TITLE } from "@/app/lib/constants";
import Image from "next/image";
import React from "react";
import servicesImg from "@/public/assets/about/services.png";

const WhoWeAre = () => {
  return (
    <div className=" container mx-auto ">
      <div className="text-start mx-auto ">
        <h4 className="theme-clr text-4xl font-bold px-6">Who We Are</h4>
        <div className="flex flex-col justify-evenly p-2 md:flex-row gap-5 ">
          <p className="text-gray-700 w-full md:w-1/2 my-auto">
            {CMP_TITLE} is dedicated to empowering individuals through skill
            development, bridging the gap between education and industry needs.
            Our mission is to equip aspiring professionals with practical,
            job-ready skills through comprehensive training programs, industry
            collaborations, and innovative learning solutions. With a strong
            commitment to excellence, we focus on transforming careers,
            fostering entrepreneurship, and driving economic growth through
            skill-based education. Join us in shaping a future where skills open
            doors to limitless opportunities
          </p>
          <div className=" w-full md:w-1/3">
            <Image
              src={servicesImg}
              width={400}
              height={400}
              alt="services"
              className="w-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
