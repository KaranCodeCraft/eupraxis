"use client";

import Image from "next/image";
import Slider from "react-slick";
// IMAGES DATA FOR CAROUSEL
const data = [
    { imgSrc: "/assets/partners/industry/1.jpg" },
    { imgSrc: "/assets/partners/industry/2.png" },
    { imgSrc: "/assets/partners/industry/3.png" },
    { imgSrc: "/assets/partners/industry/4.png" },
    { imgSrc: "/assets/partners/industry/5.png" },
    { imgSrc: "/assets/partners/industry/6.jpg" },
    { imgSrc: "/assets/partners/industry/7.png" },
    { imgSrc: "/assets/partners/industry/8.png" },
    { imgSrc: "/assets/partners/industry/9.png" },
    { imgSrc: "/assets/partners/industry/10.png" },
    { imgSrc: "/assets/partners/industry/11.png" },
    { imgSrc: "/assets/partners/industry/12.jpg" },
    { imgSrc: "/assets/partners/industry/13.jpg" },
];

const OurIndustryPartners = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
            <div className="mx-auto container px-4 sm:px-6  lg:px-8">
                <h2 className="theme-clr text-start text-2xl font-bold">
                    Industry Partners
                </h2>
                <div className="py-4 ">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className="flex justify-center items-center h-full">
                                {item?.imgSrc &&
                                    <Image
                                        src={item.imgSrc}
                                        alt={`Partner ${index + 1}`}
                                        width={116}
                                        height={50}
                                        className="bg-white h-32 w-52 p-3 rounded-xl "
                                    />}
                            </div>
                        ))}
                    </Slider>
                </div>
                <hr />
            </div>
    );
};

export default OurIndustryPartners;
