import Heading from "@/components/shared/typography/heading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-semibold text-sm leading-5 bg-[#1E386B] hover:bg-[#33466c]">
      TEST
    <Heading type={"h1"}>Title</Heading>
    <Heading type={"h2"}>Title</Heading>
    <Heading type={"h3"}>Title</Heading>
    <Heading type={"h4"}>Title</Heading>
    </div>
  );
}
