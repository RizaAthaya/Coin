import React from "react";

interface TextProps {
  children: React.ReactNode;
  type: "heading" | "paragraph" | "article" | "other";
  size?: string;
}

interface Styles {
  [key: string]: { [key: string]: string };
}

const Text = ({ children, type, size }: TextProps) => {
  const styles:Styles = {
    heading: {
      "1": "font-bold text-2xl leading-8 md:font-bold md:text-[32px] md:leading-[44px]",
      "2": "font-bold text-xl leading-7 md:font-bold md:text-2xl md:leading-7",
      "3": "font-bold text-base leading-6 md:text-bold md:text-xl md:leading-6 ",
      "4": "font-bold text-sm leading-6",
    },
    paragraph: {
      lg: "text-base leading-6 md:text-xl md:leading-8 font-inter",
      md: "text-sm leading-5 md:text-base md:leading-6 font-inter",
      sm: "text-sm leading-5 font-inter",
      caption: "text-xs leading-4",
    },
    article: {
      md: "font-medium text-base leading-8 font-inter tracking-custom",
    },
    other: {
      md: "font-medium text-base leading-6",
    },
  };

  const getStyles = () => {
    switch (type) {
      case "heading":
        return size ? styles.heading[size] : styles.heading[4];
      case "paragraph":
        return size ? styles.paragraph[size] : styles.paragraph.md;
      case "article":
        return `${styles.article.md}`;
      case "other":
        return `${styles.other.md}`;
      default:
        return "";
    }
  };

  return <div className={getStyles()}>{children}</div>;
};

export default Text;
