"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";
import { CMP_TITLE } from "../lib/constants";
import Image from "next/image";
import aboutImg from "@/public/assets/about/about.png";

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
      <div className="container mx-auto py-8 px-5">
        <h3 className="theme-clr  text-3xl"> About Eupraxis</h3>

        <div className="flex flex-col justify-evenly  md:flex-row gap-5 py-5 ">
          <div className="about flex flex-col gap-3 text-gray-700 w-full md:w-1/2">
            <p className="">
             {`
              ${CMP_TITLE} is dedicated to empowering individuals in rural areas
              by bridging the gap between education and industry needs. Our
              mission is to provide aspiring professionals in underserved
              communities with practical, job-ready skills that align with the
              demands of today's job market. Through comprehensive training
              programs, industry collaborations, and innovative learning
              solutions, we aim to create pathways to employment and
              entrepreneurship in rural regions.
             `}
            </p>
            <p>
              With a strong commitment to excellence, we focus on transforming
              careers, fostering entrepreneurship, and driving economic growth
              in rural communities through skill-based education. Our programs
              are designed to be hands-on and industry-relevant, ensuring that
              learners acquire the knowledge and experience necessary to succeed
              in the workforce.
            </p>
            <p>
              By working closely with local industries and experts, we offer
              real-world insights that help learners stay competitive in an
              ever-changing economy. Whether individuals are looking to enhance
              existing skills or pursue new career opportunities, Eupraxis
              provides the training and support needed to thrive
            </p>
            <p>
              Join us in shaping a future where skill development in rural areas
              opens doors to limitless opportunities, empowering individuals and
              driving sustainable economic growth in rural communities.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={aboutImg}
              width={400}
              height={400}
              alt="services"
              className="w-full object-cover "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
