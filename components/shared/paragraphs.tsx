import React from "react";
import Paragraph from "./typography/paragraph";

const Paragraphs = ({ items }: { items: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((text, index) => (
        <Paragraph key={index} type="article">
          {text}
        </Paragraph>
      ))}
    </div>
  );
};

export default Paragraphs;
