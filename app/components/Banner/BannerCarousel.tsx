"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { bannersData } from "@/app/data/BannersData";

const BannerCarousel = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {bannersData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-[80vh] flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                layout="responsive" 
                width={1920} 
                height={1080} 
                objectFit="contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
