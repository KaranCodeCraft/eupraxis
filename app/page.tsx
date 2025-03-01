import Testimonials from "./components/Testimonials/index";
import Services from "./components/Services";
import ScrollToTop from "./components/common/ScrollToTop";
import BannerCarousel from "./components/Banner/BannerCarousel";
import ContactUs from "./components/LandingPage/ContactUs";
import OurTeam from "./components/LandingPage/OurTeam";
import WhoWeAre from "./components/LandingPage/WhoWeAre";
import NewsAndNotifications from "./components/LandingPage/NewsAndNotifications";
import OurPartnersLogoSlider from "./components/LandingPage/OurPartnersLogoSlider";
import { industryPartnersImages } from "./lib/constants";

export default function Home() {
  return (
    <main>
      <div id="home-section" className="">
        <BannerCarousel />
      </div>

      <div className="py-10 container mx-auto ">
        <WhoWeAre />
      </div>

      {/* <hr className="w-3/6 h-1 mx-auto  theme-bg border-0 rounded-sm  dark:bg-gray-700" /> */}

      <div id="services" className=" bg-lightkblue py-10">
        <Services />
      </div>

      <ScrollToTop />

      <div id="team" className=" py-10 ">
        <OurTeam />
      </div>

      <div className="py-10" id="testimonial">
        <Testimonials />
      </div>

      <div className="py-10 bg-gray-50" id="industry">

        <OurPartnersLogoSlider title={"Industry Partners"}  images={industryPartnersImages}/>
      </div>

      <div className="py-10 bg-gray-50" id="news">
        <NewsAndNotifications />
      </div>

      {/* <div id="contact" className="contact-us bg-blue-50 py-10">
        <ContactUs />
      </div> */}
    </main>
  );
}
