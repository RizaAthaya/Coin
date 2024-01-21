import React from "react";
import Paragraph from "../shared/typography/paragraph";
import Heading from "../shared/typography/heading";
import Image from "next/image";
import { Links } from "../shared/icons";
import Button from "../shared/button";
import Link from "next/link";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter.svg";
import Bitcoin from "../../public/Bitcoin.png";

const shareButtons = [
  {
    href: "link-to-facebook",
    icon: <Image src={facebook} alt={"facebook"} />,
    alt: "facebook",
    label: "Share",
  },
  {
    href: "link-to-twitter",
    icon: <Image src={twitter} alt={"twitter"} />,
    alt: "twitter",
    label: "Share",
  },
  {
    href: "link-to-other-platform",
    icon: <Links className="w-4 h-4" />,
    alt: "other",
    label: "Share",
  },
];

const Hero = () => {
  return (
    <section className="flex relative lg:w-screen justify-center items-center lg:pt-0 pt-3">
      {/* BACKGROUND  */}
      <div className="bg-gradient-to-r from-slate-100 via-violet-50 to-pink-50 shadow w-7/12 h-[492px] z-0 lg:block hidden" />
      <div className="bg-white h-[492px] z-0 w-5/12 lg:block hidden" />

      {/* TEXT  */}
      <div className="z-10 lg:absolute lg:w-[1010px] custom:w-[1200px] flex justify-between lg:px-0 lg:py-6 items-center lg:mx-auto">
        {/* TITLE  */}
        <div className="flex flex-col lg:gap-4 justify-center items-center lg:py-[126px]">
          <div className="flex flex-col gap-4 justify-start">
            <div className="flex flex-col gap-3 lg:gap-2 lg:max-w-[318px]">
              <Paragraph
                type={"sm"}
                className="text-[#2792DF] uppercase font-semibold"
              >
                BITCOIN
              </Paragraph>
              <Heading type={"h1"} className="text-[#241B1B]">
                Bitcoin VS Saham, Mana Yang Lebih Untung?
              </Heading>
              <Paragraph type={"sm"} className="text-[#A6B0C0] font-medium">
                User · Rabu, 19 January 2021
              </Paragraph>
            </div>

            {/* SHARE BUTTONS  */}
            <div className="flex justify-start gap-2 items-start">
              {shareButtons.map((button, index) => (
                <Button key={index} type="button" variation="share">
                  <Link
                    href={button.href}
                    className="flex gap-1 justify-center items-center"
                  >
                    {button.icon}
                    <Paragraph type="sm">{button.label}</Paragraph>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* IMAGE DESKTOP */}
        <div className="hidden lg:flex justify-center items-center ">
          <Image src={Bitcoin} alt={"bitcoin"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
