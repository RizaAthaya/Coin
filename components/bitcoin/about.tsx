import Image from "next/image";
import React from "react";
import Paragraph from "../shared/typography/paragraph";
import PhotoProfile from "../../public/PhotoProfile.svg";
import Linkedin from "../../public/Linkedin.svg";
import Email from "../../public/Email.svg";
import Twitter from "../../public/Twitter.svg";

const About = () => {
  return (
    <section className="flex pl-[72px] gap-8 lg:w-[1010px] custom:w-[1200px] mx-auto mt-10">
      <div className="p-14 gap-4 bg-[#F2F5F9] max-w-[830px] flex items-start">
        <Image src={PhotoProfile} alt={"foto penulis"} />
        <div className="flex flex-col gap-2">
          <Paragraph type={"md"} className="text-[#A6B0C0] font-medium">
            <span className="text-[#43464D] text-base font-bold leading-6">
              Tentang penulis — User:
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Paragraph>
          <div className="flex gap-3">
            <Image src={Linkedin} alt={"logo linkedIn"} />
            <Image src={Twitter} alt={"logo twitter"} />
            <Image src={Email} alt={"logo email"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
