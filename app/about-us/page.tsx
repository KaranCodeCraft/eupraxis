"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";
import { CMP_TITLE } from "../lib/constants";
import Image from "next/image";
import aboutImg1 from "@/public/assets/about/about.png";
import aboutImg2 from "@/public/assets/about/services.png";
import AchievementsSection from "../components/Projects/Achievement";

const AboutUsPage = () => {
  return (
    <>
      <PageLinks
        title="About Eupraxis"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "About Eupraxis", link: "/about-us" },
        ]}
      />
      <div className="container mx-auto py-8 px-4 md:px-8">
        <h3 className="theme-clr  font-bold text-4xl"> About Eupraxis</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="flex flex-col gap-4  text-gray-700">
            <p>
              Eupraxis is dedicated to empowering individuals in rural areas by
              bridging the gap between education and industry needs. Our mission
              is to provide aspiring professionals in underserved communities
              with practical, job-ready skills that align with the demands of
              today's job market. Through comprehensive training programs,
              industry collaborations, and innovative learning solutions, we aim
              to create pathways to employment and entrepreneurship in rural
              regions.
            </p>
            <p>
              With a strong commitment to excellence, we focus on transforming
              careers, fostering entrepreneurship, and driving economic growth
              in rural communities through skill-based education.
            </p>
          </div>

          <div className="w-full flex justify-center bg-gray-50 order-2 md:order-1">
            <Image
              src={aboutImg1}
              width={400}
              height={250}
              alt="About Us"
              className="w-full max-w-[300px] h-auto rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 text-gray-700  order-3">
            <p>
              By working closely with local industries and experts, we offer
              real-world insights that help learners stay competitive in an
              ever-changing economy. Whether individuals are looking to enhance
              existing skills or pursue new career opportunities, Eupraxis
              provides the training and support needed to thrive.
            </p>
            <p>
              Join us in shaping a future where skill development in rural areas
              opens doors to limitless opportunities, empowering individuals and
              driving sustainable economic growth in rural communities.
            </p>
          </div>

          <div className="w-full flex justify-center order-4  bg-gray-50 md:order-2">
            <Image
              src={aboutImg2}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full max-w-[300px] h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="py-5">
          <AchievementsSection />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
