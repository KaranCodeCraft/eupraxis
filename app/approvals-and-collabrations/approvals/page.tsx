"use client";
import PageLinks from "@/app/components/common/PageLink";
import React, { useState } from "react";
const ApprovalsPage = () => {
  return (
    <>
      <PageLinks
        title="Our Approvals "
        imageUrl="/assets/pagelinks/approval.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Our Approvals",
            link: "/approvals-and-collabrations/approvals",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-5">
        Approvals
      </div>
    </>
  );
};

export default ApprovalsPage;
