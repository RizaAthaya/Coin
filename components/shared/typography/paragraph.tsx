import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  type: "lg" | "md" | "sm" | "caption" | "article";
  className?: string;
}

const Paragraph = ({ children, type, className }: ParagraphProps) => {
  // STYLE LIST
  const styles = {
    lg: "text-base leading-6 md:text-xl md:leading-8 font-inter",
    md: "text-sm leading-5 md:text-base md:leading-6 font-inter",
    sm: "lg:text-sm lg:leading-5 font-inter text-xs leading-4",
    caption: "text-xs leading-4 font-inter",
    article: "font-medium text-base leading-8 font-inter tracking-custom",
  };

  return <p className={`${styles[type]} ${className}`}>{children}</p>;
};

export default Paragraph;
