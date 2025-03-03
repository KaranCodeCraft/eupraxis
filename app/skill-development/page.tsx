"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";

const SkillDevelopment = () => {
  return (
    <>
      <PageLinks
        title="Skill Development"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Skill Development", link: "/skill-development" },
        ]}
      />
      <div className="container mx-auto px-4 py-5">
        <h4 className="theme-clr text-4xl font-bold text-start pl-6 pb-5">
          Skill Development
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          .
        </div>
      </div>
    </>
  );
};

export default SkillDevelopment;
