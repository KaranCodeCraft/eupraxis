"use client";
import PageLinks from "@/app/components/common/PageLink";
import OurPartnersLogoSlider from "@/app/components/LandingPage/OurPartnersLogoSlider";
import { industryPartnersImages } from "@/app/lib/constants";
import React, { useState } from "react";
const IndustryTieUpsPage = () => {
  return (
    <>
      <PageLinks
        title="Industry Partners "
        imageUrl="/assets/pagelinks/partnership.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Industry Partners",
            link: "/approvals-and-collabrations/industry-tie-ups",
          },
        ]}
      />
      <div className="container mx-auto py-10 flex flex-col gap-5 ">
        <p className="text-gray-600  px-5 indent-10  mx-auto flex flex-col gap-4">
          {`
          At Eupraxis, we believe in the power of collaboration to drive
          meaningful change. Our partnerships with leading industry players help
          bridge the gap between rural talent and modern workforce demands.
          Through hands-on training, mentorship programs, and employment
          opportunities, we equip individuals with the skills needed to thrive
          in today’s competitive job market. These collaborations not only
          uplift rural communities but also create a sustainable pipeline of
          skilled professionals for various industries. Together, we are shaping
          a future where talent knows no boundaries.
          `}
        </p>
        <p className="text-gray-600  px-5 indent-10  mx-auto flex flex-col gap-4">
       {`
        Our industry partners contribute by providing skill-based training, apprenticeships, job placements, and mentorship, helping rural individuals gain the confidence and knowledge required to thrive in today's competitive job market. By working together, we are not only enhancing employability but also fostering entrepreneurship and economic growth in rural areas.
       `}
        </p>
        <OurPartnersLogoSlider title="Industry Partners" images={industryPartnersImages}/>
      </div>
    </>
  );
};

export default IndustryTieUpsPage;
