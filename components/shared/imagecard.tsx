import Image, { StaticImageData } from "next/image";
import React from "react";
import Paragraph from "./typography/paragraph";

interface ImageCardProps {
  text: string;
  image: StaticImageData;
}

const ImageCard = ({ text, image }: ImageCardProps) => {
  return (
    <div className="flex justify-between rounded-sm">
      <div className="p-6 flex flex-col justify-between border border-[#F2F5F9]">
        <Paragraph type={"md"} className="font-semibold text-[#2B4A86]">
          {text}
        </Paragraph>
        <Paragraph type={"caption"} className="font-medium text-[#9CADD3]">
          Coinvestasi.com
        </Paragraph>
      </div>
      <Image
        src={image}
        alt={"image"}
        width={172}
        height={96}
        className="rounded-br-sm rounded-tr-sm"
      />
    </div>
  );
};
export default ImageCard;
