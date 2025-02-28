import { CMP_TITLE } from '@/app/lib/constants';
import Image from 'next/image';
import React from 'react';
import servicesImg from "@/public/assets/about/services.jpg"

const WhoWeAre = () => {
    return (
            <div  className=" container mx-auto ">
                <div className="text-center mx-auto pb-5">
                    <h4 className="theme-clr text-4xl font-bold">Who We Are</h4>
                    <div className="flex flex-col justify-center p-4 md:flex-row gap-4 ">
                        <p className="text-gray-700 w-full md:w-1/2 my-auto">
                            {CMP_TITLE}  is dedicated to empowering individuals through skill development, bridging the gap between education and industry needs. Our mission is to equip aspiring professionals with practical, job-ready skills through comprehensive training programs, industry collaborations, and innovative learning solutions. With a strong commitment to excellence, we focus on transforming careers, fostering entrepreneurship, and driving economic growth through skill-based education. Join us in shaping a future where skills open doors to limitless opportunities
                        </p>
                        <div className="img">
                            <div className="">
                                <Image src={servicesImg} width={350} height={350} alt="services" className="w-full object-cover rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default WhoWeAre;
