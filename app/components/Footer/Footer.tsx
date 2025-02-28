import Link from "next/link";
import Image from "next/image";
import { CMP_TITLE } from "@/app/lib/constants";

interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "www.facebook.com",
    width: 10,
  },
  {
    imgSrc: "/assets/footer/insta.svg",
    link: "www.instagram.com",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/twitter.svg",
    link: "www.twitter.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About", "How we work?"],
  },
  {
    id: 2,
    section: "Contact",
    link: ["Help/FAQ", "Partners"],
  },
  {
    id: 3,
    section: "Our Branches",
    link: [
      "IGCSM, 36B/1, Gali Number 1, near Kalkaji Depot, Govindpuri, New Delhi, Delhi 110019 ",
    ],
  },
];

const footer = () => {
  return (
    <div className="px-4 sm:px-6  lg:px-8 theme-bg text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 py-5 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
          <div className="sm:col-span-6 lg:col-span-5">
            <div className="flex flex-shrink-0 items-center border-right">
              <Link href="/" className="text-3xl font-bold ">
                {CMP_TITLE}
              </Link>
            </div>
            <h3 className="text-xs font-medium  lh-160 mt-5 mb-4 lg:mb-16 pr-10">
              {CMP_TITLE} is dedicated to empowering learners by offering
              accessible, high-quality education and skill development
              opportunities worldwide
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className="bg-white h-12 w-12 shadow-xl  rounded-full flex items-center justify-center  hover:theme-clr">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={items.width}
                      height={2}
                      className="sepiaa"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3/4 */}

          {products.map((product) => (
            <div key={product.id} className="sm:col-span-2">
              <p className="text-white text-lg font-medium mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white text-base font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* All Rights Reserved */}

        <div className="py-3 md:flex items-center justify-between border-t border-t-gray-blue">
          <h4 className="text-white  text-sm text-center md:text-start font-normal">
            @2025.{CMP_TITLE}.All rights reserved
          </h4>
          <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
            <h4 className="text-white  text-sm font-normal">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-white opacity-25 w-0.5"></div>
            <h4 className="text-white text-sm font-normal">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
