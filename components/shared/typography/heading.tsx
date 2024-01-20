import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4";
}

const Heading = ({ children, type }: HeadingProps) => {
  // STYLE LIST
  const styles = {
    h1: "font-bold text-2xl leading-8 md:font-bold md:text-[32px] md:leading-[44px]",
    h2: "font-bold text-xl leading-7 md:font-bold md:text-2xl md:leading-7",
    h3: "font-bold text-base leading-6 md:text-bold md:text-xl md:leading-6",
    h4: "font-bold text-sm leading-6",
  };

  // GET TAG <h1/> <h2/> <h3/> <h4/> 
  const Element = type as keyof JSX.IntrinsicElements;

  return <Element className={styles[type]}>{children}</Element>;
};

export default Heading;
