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
    <div className="font-semibold text-sm leading-5 bg-white w-full lg:pb-[82px] h-auto relative flex justify-center">
      {/* IMAGE MOBILE  */}
      <Image
        src={Bitcoin}
        alt={"bitcoin"}
        priority
        className="lg:hidden block w-screen h-[356px] object-cover z-0"
      />
    
      <div className="bg-white lg:mt-0 mt-4 lg:p-0 py-6 px-4 lg:rounded-none rounded top-[260px] lg:top-0 lg:max-w-none max-w-[calc(100vw-32px)] z-10 absolute lg:relative w-screen">
        <div className="flex lg:flex-row flex-col justify-between lg:w-[1010px] custom:w-[1200px] lg:max-w-[1010px] custom:max-w-[1200px] lg:px-0 lg:py-6 mx-auto lg:gap-0 gap-3">
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
