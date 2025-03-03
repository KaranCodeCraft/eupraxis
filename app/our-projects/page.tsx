"use client";
import React from "react";
import PageLinks from "../components/common/PageLink";
import { projectsData } from "../data/projectsData";
import AchievementsSection from "../components/Projects/Achievement";

const OurProjectsPage = () => {
  // Calculate totals for numeric columns
  const totals = projectsData.trainingPartners.reduce(
    (acc, tp) => {
      acc.batches += tp.batches;
      acc.enrolled += tp.enrolled;
      acc.trained += tp.trained;
      acc.underTraining += tp.underTraining;
      acc.placement += tp.placement;
      return acc;
    },
    { batches: 0, enrolled: 0, trained: 0, underTraining: 0, placement: 0 }
  );

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
        <h3 className="theme-clr font-bold text-3xl">Our Projects</h3>
        <div className="overflow-x-auto py-4">
          <table className="w-full border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-center border border-gray-400">
                <th className="p-1 text-sm border border-gray-400">TP Name</th>
                <th className="p-1 text-sm border border-gray-400">District</th>
                <th className="p-1 text-sm border border-gray-400">
                  Sector Name
                </th>
                <th className="p-1 text-sm border border-gray-400">Course</th>
                <th className="p-1 text-sm border border-gray-400">Scheme</th>
                <th className="p-1 text-sm border border-gray-400">Batches</th>
                <th className="p-1 text-sm border border-gray-400">Enrolled</th>
                <th className="p-1 text-sm border border-gray-400">Trained</th>
                <th className="p-1 text-sm border border-gray-400">
                  Under Training
                </th>
                <th className="p-1 text-sm border border-gray-400">
                  Placement
                </th>
              </tr>
            </thead>
            <tbody>
              {projectsData?.trainingPartners.map((tp, index) => (
                <tr key={index} className="text-gray-700 text-left border">
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.tpName}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.district}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.sector.name}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.sector.course}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.scheme}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.batches}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.enrolled}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.trained}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.underTraining}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.placement}
                  </td>
                </tr>
              ))}
              <tr className="font-bold bg-gray-100 text-gray-900 text-left">
                <td
                  className="p-2 text-sm text-center border border-gray-400"
                  colSpan={5}
                >
                  Total
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.batches}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.enrolled}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.trained}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.underTraining}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.placement}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <AchievementsSection />
      </div>
    </>
  );
};

export default OurProjectsPage;
