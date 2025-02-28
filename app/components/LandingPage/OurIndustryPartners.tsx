"use client";

import Image from "next/image";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
const data = [
    { imgSrc: "/assets/partners/industry/1.jpg" },
    { imgSrc: "/assets/partners/2.jpg" },
    { imgSrc: "/assets/partners/3.jpg" },
    { imgSrc: "/assets/partners/4.jpg" },
    { imgSrc: "/assets/partners/5.jpg" },
    { imgSrc: "/assets/partners/6.jpg" },
    { imgSrc: "/assets/partners/7.jpg" },
    { imgSrc: "/assets/partners/8.jpg" },
    { imgSrc: "/assets/partners/9.jpg" },
    { imgSrc: "/assets/partners/10.jpg" },
    { imgSrc: "/assets/partners/11.jpg" },
    { imgSrc: "/assets/partners/12.jpg" },
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
