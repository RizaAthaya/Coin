import Image from "next/image";
import React from "react";
import Paragraph from "./typography/paragraph";
import Quote from "../../public/quote.svg";

const Blockquote = () => {
  return (
    <div className="flex h-auto p-2">
      <div className="min-w-1 h-full bg-gradient-to-b from-orange-500 to-orange-400" />
      <blockquote className="h-full p-6 ml-4 rounded-sm bg-[#F8F8F8] gap-4 flex flex-col">
        <Image src={Quote} alt={"quote icon"} />
        <Paragraph
          className="italic font-medium text-[#43464D] self-stretch leading-[200%]"
          type={"article"}
        >
          "Dengan mekanisme tersebut di masa depan, harga Bitcoin akan akan
          melambung tinggi dan bagi para investor yang memulai investasi Bitcoin
          sejak dini sangat dimungkinkan untuk mendapatkan keuntungan besar dari
          Bitcoin yang sudah mereka miliki sejak harganya belum terlalu tinggi.
          Bitcoin sendiri tercatat pernah menyentuh harga tertingginya pada 933
          juta Rupiah pada April 2021.
        </Paragraph>

        <Paragraph className="italic font-medium text-[#43464D]" type={"md"}>
          — John Doe
        </Paragraph>
      </blockquote>
    </div>
  );
};

export default Blockquote;
