import { Email, Phone, LocationOn } from "@mui/icons-material";
import ContactForm from "./ContactForm";

const ContactCard = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="theme-clr text-4xl text-center font-bold">Contact us</div>

      <div className="flex flex-col md:flex-row gap-6 mt-10 px-3 lg:px-10 ">
        <div className=" flex flex-col gap-6 w-full md:w-1/2 align-middle ">
          <div className="contact  border rounded-2xl bg-white shadow-lg ">
            <h3 className="text-2xl font-semibold theme-bg text-white text-center py-2 rounded-t-2xl">
              Headoffice
            </h3>
            <div className="space-y-3 text-sm p-4 ">
              <div className="flex items-center gap-3">
                <Email className="theme-clr" />
                <a
                  href="mailto:skillscentres@igcsm.in"
                  className="text-blue-600 hover:theme-clr"
                >
                  skillscentres@igcsm.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="theme-clr" />
                <a
                  href="tel:+919990617617"
                  className="text-blue-600 hover:theme-clr"
                >
                  +91-9990-617-617
                </a>
                ,
                <a
                  href="tel:+918860094657"
                  className="text-blue-600 hover:theme-clr"
                >
                  +91-8860-094-657
                </a>
              </div>
              <div className="flex items-start gap-3">
                <LocationOn className="theme-clr" />
                <span>
                  424, 4th Floor, DLF Prime Tower, Okhla Industrial Area, Phase
                  1, New Delhi 110020
                </span>
              </div>
            </div>
          </div>

          <div className="map h-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.675595770547!2d77.28073537416357!3d28.519406389211245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce14ba115d61b%3A0x3b032b8fffdcc574!2sDLF%20Prime%20Towers!5e0!3m2!1sen!2sin!4v1740768465000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className=" w-full md:w-1/2">
          <ContactForm />
        </div>
        
      </div>
    </div>
  );
};

export default ContactCard;
