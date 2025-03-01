"use client";
import PageLinks from "@/app/components/common/PageLink";
import React, { useState } from "react";
const GovernmentPartnersPage = () => {
  return (
    <>
      <PageLinks
        title="Government Partners "
        imageUrl="/assets/pagelinks/partnership.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Government Partners",
            link: "/approvals-and-collabrations/approvals",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-10 flex flex-col gap-5 ">
        <h2 className="text-4xl theme-clr font-bold">Government Partnership</h2>
        <p className="text-gray-600 indent-10">
          {`
          Our partnerships with government agencies are a cornerstone of our
          mission to uplift rural communities through skill development. By
          collaborating with central and state governments, we align our
          training programs with national initiatives like Skill India, PMKVY
          (Pradhan Mantri Kaushal Vikas Yojana), and other rural employment
          schemes. These collaborations allow us to bring structured vocational
          education, industry-relevant certifications, and sustainable
          employment solutions to remote areas where opportunities are scarce.
          `}
        </p>

        <p className="text-gray-600 indent-10">
          {`
          Government support also enables us to build training centers, provide
          stipends for learners, and develop infrastructure that supports
          skill-building in rural regions. By working hand-in-hand with
          policymakers, we ensure that our initiatives reach those who need them
          the most, empowering women, youth, and marginalized communities with
          the skills necessary to secure stable jobs. Through these
          collaborations, we are not only creating employment but also
          contributing to India’s vision of an inclusive and self-reliant
          workforce.
          `}
        </p>
      </div>
    </>
  );
};

export default GovernmentPartnersPage;
