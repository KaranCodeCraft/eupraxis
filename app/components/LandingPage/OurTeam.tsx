"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ourTeamData } from "@/app/data/ourTeamData";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="container mx-auto">
      <h4 className="theme-clr text-4xl font-bold ">Our Team</h4>

      <div className=" mx-auto pt-3 ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} 
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true} 
          className=""
        >
          {ourTeamData?.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 shadow-lg rounded-xl p-4 text-center hover:cursor-pointer transition duration-300 hover:scale-105 flex flex-col justify-between h-[300px]">
                <div className="w-full h-48">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="w-full h-full rounded-md"
                  />
                </div>
                
                <div className="py-4">
                  <h3 className="text-md font-semibold">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
