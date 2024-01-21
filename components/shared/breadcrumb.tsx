import Link from "next/link";
import React from "react";
import Paragraph from "./typography/paragraph";
import { ArrowRight } from "./icons";

interface BreadcrumbItem {
  name: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex gap-1 lg:gap-2 items-center lg:text-sm lg:leading-5 text-xs leading-4 font-inter font-medium">
      {items.map((item, index) =>
        item.link ? (
          <React.Fragment key={index}>
            <Link href={item.link} className="text-[#2B64CE]">
              {item.name}
            </Link>
            <div className="w-6 h-6 flex justify-center items-center">
              <ArrowRight className="mx-1" />
            </div>
          </React.Fragment>
        ) : (
          <Paragraph
            key={index}
            type={"sm"}
            className="text-[#D3D9E3] whitespace-nowrap max-w-full overflow-hidden text-xs leading-4"
          >
            {item.name}
          </Paragraph>
        )
      )}
    </nav>
  );
};

export default Breadcrumb;
