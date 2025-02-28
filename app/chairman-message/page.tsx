"use client";
import React from "react";
import Image from "next/image";
import PageLinks from "../components/common/PageLink";
import img from "@/public/assets/team/chairmar.webp";

const ChairmanMessagePage = () => {
  return (
    <>
      {/* Breadcrumbs */}
      <PageLinks
        title="Chairman's Message"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Chairman's Message", link: "/chairman-message" },
        ]}
      />

      {/* Chairman's Message Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/3">
            <Image
              src={img}
              alt="Chairman"
              width={200}
              height={200}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-7 -right-5 bg-red text-white py-3 px-6 rounded-lg text-lg font-bold shadow-md">
              <p className="border-4 border-white border-dashed p-3 font-extrabold tracking-wide">
                15 Years
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-gray-800">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {`Chairman's Message`}
            </h2>
            <p className="mb-4 leading-relaxed">
              Education is essential for the growth and development of a
              country, but with skilled specific education, it adds to the
              overall socio-economic and human resource development of the
              nation.
            </p>
            <p className="mb-4 leading-relaxed">
              We have been working on empowering youth through various skill
              training programs along with NSQF/SSC aligned courses since 2008,
              contributing towards Viksit Bharat and Akhand Bharat to
              fulfill the vision of our Honble Prime Minister Shri Narendra
              Modi of making India the Skill Capital of the World.
            </p>
            <p className="mb-4 leading-relaxed">
              Skilling is the essential ingredient that keeps the wheels of
              progress and development of a person running smoothly. The primary
              aim of skill development is to help the youth recognize their
              potential and maximize their contribution to nation-building.
            </p>
            <p className="mb-4 leading-relaxed">
              In our pursuit of excellence, we have embarked on a journey to
              shape the future of education and inspire a new generation by
              launching Sikkim Global Technical University (SGTU) in the
              beautiful valleys of Sikkim.
            </p>
            <p className="mb-4 leading-relaxed">
              Let us use our knowledge and skills for the betterment of society
              and to address the pressing challenges faced by humanity.
            </p>

            {/* Signature Section */}
            <div className="mt-6">
              <p className="text-lg font-bold text-gray-900">
                Chairman - IGCSM
              </p>
              <span className="text-2xl font-semibold text-gray-900">
                Dr. Saurabh Singhal
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairmanMessagePage;
