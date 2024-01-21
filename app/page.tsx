import Breadcrumb from "@/components/shared/breadcrumb";
import { Timer } from "@/components/shared/icons";
import Paragraph from "@/components/shared/typography/paragraph";
import Image from "next/image";
import Bitcoin from "../public/Bitcoin.png";
import Hero from "@/components/bitcoin/hero";
import Content from "@/components/bitcoin/content";
import { breadcrumbPath } from "@/utils/bitcoin/data";
import About from "@/components/bitcoin/about";

export default function Home() {
  return (
    <div className="font-semibold text-sm leading-5 bg-white w-screen lg:pb-[82px]">
      {/* IMAGE MOBILE  */}
      <Image
        src={Bitcoin}
        alt={"bitcoin"}
        className="lg:hidden block w-screen h-[356px] object-cover"
        width={375}
        height={356}
      />

      <div className="bg-white lg:mt-0 mt-4 lg:p-0 py-6 px-4 lg:rounded-none rounded transform translate-y-[-20%] lg:transform-none lg:max-w-none max-w-[calc(100vw-32px)] mx-auto ">
        <div className="flex lg:flex-row flex-col justify-between lg:w-[1010px] custom:w-[1200px] lg:px-0 lg:py-6 mx-auto lg:gap-0 gap-3">
          {/* BREAD CRUMB  */}
          <Breadcrumb items={breadcrumbPath} />

          {/* READ TIMER  */}
          <div className="p-2 lg:p-3 flex gap-[2px] justify-center items-center bg-[#F8F8F8] rounded-[55px] w-fit">
            <Timer className="w-5 h-5" />
            <Paragraph type={"sm"} className="font-medium text-[#43464D] ">
              5 min read
            </Paragraph>
          </div>
        </div>

        {/* SECTION 1 - HERO */}
        <Hero />

        {/* SECTION 2 - CONTENT */}
        <Content />

        {/* SECTION 3 - TENTANG PENULIS  */}
        <About />

      </div>
    </div>
  );
}
