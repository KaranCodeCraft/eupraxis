"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";

const OurProjectsPage = () => {
  return (
    <>
      <PageLinks
        title="Our Projects"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Our Projects", link: "/our-projects" },
        ]}
      />
      <div className="container mx-auto py-8 px-5">
        <h3 className="theme-clr  text-3xl"> Work With Us</h3>

      </div>
    </>
  );
};

export default OurProjectsPage;
