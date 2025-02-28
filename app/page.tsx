import Banner from "./components/Banner/index";
import Courses from "./components/Courses/index";
import Testimonials from "./components/Testimonials/index";
import Newsletter from "./components/Newsletter/Newsletter";
import About from "./components/About";
import Services from "./components/Services";
import ScrollToTop from "./components/common/ScrollToTop";
import BannerCarousel from "./components/Banner/BannerCarousel";
import OurPartners from "./components/LandingPage/OurPartners";
import ContactForm from "./components/LandingPage/ContactForm";
import ContactUs from "./components/LandingPage/ContactUs";
import OurTeam from "./components/LandingPage/OurTeam";

export default function Home() {
  return (
    <main>
      <div id="home-section" className="">
        <BannerCarousel />
        <div className="bg-lightkblue py-10">
          <Banner />
        </div>
      </div>

      <div id="about" className="py-20 container mx-auto ">
        <About />
      </div>

      <div id="services" className=" bg-lightkblue py-20">
        <Services />
      </div>
      <ScrollToTop />

      <div className="py-20" id="testimonial">
        <Testimonials />
      </div>

      <div id="partners" className="text-center py-10 bg-gray-100">
        <OurPartners />
      </div>

      <div id="team" className=" py-10 ">
        <OurTeam />
      </div>

      <div id="contact" className="contact-us bg-blue-50 py-20">
        <ContactUs />
      </div>
      {/* <Newsletter /> */}
    </main>
  );
}
