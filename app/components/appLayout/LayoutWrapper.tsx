"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // For App Router (Next.js 13+)
import PreLoader from "../common/PreLoader";
import Navbar from "../Navbar/Navbar";
import OurPartnersLogoSlider from "../LandingPage/OurPartnersLogoSlider";
import Footer from "../Footer/Footer";
import { govPartnersImages } from "@/app/lib/constants";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Track route changes

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [pathname]); // Re-run effect on every route change

  return (
    <>
      {loading && <PreLoader />}
      {!loading && (
        <>
          <Navbar />
          <div className="min-h-[300px] pt-20">{children}</div>

          <div id="partners" className="text-center py-3 bg-gray-100">
            <OurPartnersLogoSlider images={govPartnersImages} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
