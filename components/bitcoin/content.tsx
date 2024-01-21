import React from "react";
import {
  kepemilikanList,
  paragraphs,
  paragraphs4,
  pasokanList,
} from "@/utils/bitcoin/data";

// COMPONENTS
import Paragraph from "../shared/typography/paragraph";
import Heading from "../shared/typography/heading";
import Button from "@/components/shared/button";
import Bitcoin from "../../public/Bitcoin.png";
import Blockquote from "../shared/blockquote";
import ImageCard from "../shared/imagecard";
import Table from "./table";
import List from "../shared/list";
import Paragraphs from "../shared/paragraphs";

const Content = () => {
  return (
    <section className="flex custom:pl-[72px] gap-2 custom:gap-8 lg:w-[1010px] custom:w-[1200px] mx-auto mt-10 max-w-full lg:max-w-none w-full">
      <main className="p-0 m-0 flex flex-col gap-6 max-w-full lg:max-w-[calc(100%-290px)]">
        {/* CONTENT 1  */}
        <Paragraphs items={paragraphs} />

        {/* CONTENT 2  */}
        <div className="flex flex-col gap-2">
          <Heading type={"h2"}>Proses Kepemilikan</Heading>
          <ol
            type="1"
            className="list-decimal list-outside font-medium text-base leading-8 font-inter tracking-custom pl-4"
          >
            {kepemilikanList.map((item, index) => (
              <li key={index}>
                {item.text}
                {item.subItems.length > 0 && (
                  <List items={item.subItems} listType={"ol"} />
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* CONTENT 3  */}
        <div className="flex flex-col gap-2">
          <Heading type={"h2"}>Pasokan</Heading>
          <List items={pasokanList} listType={"ul"} />
          <Blockquote />
          <ImageCard
            text="Mengenal Whale Bitcoin yang Bikin Market Gonjang-Ganjing"
            image={Bitcoin}
          />

          <Paragraph type={"article"}>
            Berbeda dengan Bitcoin, saham tidak mengenal istilah pasokan yang
            terbatas, karena akan selalu ada perusahaan baru yang mendaftar di
            bursa saham dan melakukan{" "}
            <span className="text-[#2B64CE] cursor-pointer">
              penawaran saham ke publik
            </span>
            . Ini tidak akan menjadikannya langka, karena pilihan saham sangat
            beragam, mau yang tinggi, menengah, hingga saham kecil atau yg biasa
            disebut saham gorengan.
          </Paragraph>
        </div>

        {/* CONTENT 4  */}
        <div className="flex flex-col gap-2">
          <Heading type={"h2"}>Kapasitas untuk Menghasilkan Untung</Heading>

          <Paragraph type={"article"}>
            Berinvestasi di pasar saham membutuhkan banyak kesabaran karena
            menghasilkan keuntungan dari investasi ini membutuhkan waktu yang
            tidak sebentar bahkan hingga bertahun-tahun.
          </Paragraph>
          <Paragraph type={"article"}>
            Sedangkan Bitcoin terkenal dengan sifatnya yang volatil dan
            fluktuatif, sehingga bisa mendapatkan keuntungan dengan sangat cepat
            karena harganya berubah dengan cepat pula.
          </Paragraph>

          <ImageCard
            text={"6 Alasan Kenapa Kamu Harus Investasi Bitcoin Di 2021"}
            image={Bitcoin}
          />

          <Paragraph type={"article"}>
            Meski begitu perlu diingat kapasitas mendapatkan untung dengan cepat
            biasanya diimbangi dengan risiko yang tinggi pula, karena itu kamu
            perlu bijak melakukan manajemen risiko dalam melakukan investasi.
          </Paragraph>
        </div>

        {/* CONTENT 5  */}
        <div className="flex flex-col gap-2 max-w-full lg:max-w-none w-full">
          <Heading type={"h2"}>
            Komparasi Profit BTC vs Top 5 Saham Indonesia
          </Heading>
          <div className="max-w-full overflow-auto w-full lg:max-w-none lg:w-auto lg:overflow-hidden">
            <Table />
          </div>
          <Paragraphs items={paragraphs4} />
        </div>

        <hr className="border border-[#D3D9E3]" />

        {/* TAGS  */}
        <div className="p-2 flex flex-col justify-between gap-4">
          <Paragraph type={"sm"} className="text-[#778090] font-medium">
            Tags
          </Paragraph>
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-8 custom:grid-cols-10 gap-2.5 mx-auto w-fit">
            {Array.from({ length: 20 }, (_, index) => (
              <div
                key={index}
                className="p-2 rounded-[27px] text-center bg-[#F8F8F8]"
              >
                <Paragraph type="sm">#Bitcoin</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* LEFT SIDE  */}
      <aside className="min-w-[258px] hidden lg:flex flex-col gap-6 ml-6">
        {/* BOX  */}
        <div className="p-6 flex flex-col gap-4 bg-[#F2F5F9] rounded-lg">
          <div className="flex flex-col gap-1">
            <Paragraph type={"md"} className="font-bold text-[#241B1B]">
              This is A Heading Example Of the Leads Sticky
            </Paragraph>{" "}
            <Paragraph type={"sm"} className="font-medium text-[#A6B0C0]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque{" "}
            </Paragraph>
          </div>
          <Button type={"button"} variation="secondary">
            Lorem ipsum dolor
          </Button>
        </div>

        {/* RELATED  */}
        <div className="flex flex-col gap-4">
          <Heading type={"h2"}>Related</Heading>

          <div className="flex flex-col gap-2">
            <Paragraph
              type={"caption"}
              className="text-[#43464D] bg-[#F8F8F8] rounded-[37px] font-medium px-2 py-1 w-fit"
            >
              Technology
            </Paragraph>
            <Paragraph
              className="font-poppins text-black font-semibold"
              type={"sm"}
            >
              FTX Siapkan Dana $2 Miliar untuk Investasi Project Web3
            </Paragraph>
            <Paragraph
              type={"caption"}
              className="text-[3A6B0C0] font-semibold"
            >
              Jane Doe · Rabu, 19 January 2021
            </Paragraph>
          </div>

          {/* TOPIK - TAGS  */}
          <div className="flex flex-col gap-4">
            <Heading type={"h2"}>Topik lainnya</Heading>
            <div className="flex flex-wrap">
              <Paragraph
                type={"caption"}
                className="text-[#43464D] bg-[#F8F8F8] rounded-[37px] font-medium p-2  w-fit"
              >
                Topics1
              </Paragraph>
              <Paragraph
                type={"caption"}
                className="text-[#43464D] bg-[#F8F8F8] rounded-[37px] font-medium p-2  w-fit"
              >
                Topics2
              </Paragraph>
              <Paragraph
                type={"caption"}
                className="text-[#43464D] bg-[#F8F8F8] rounded-[37px] font-medium p-2  w-fit"
              >
                Topics 3
              </Paragraph>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Content;
