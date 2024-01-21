"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variation?: "secondary" | "primary" | "share";
}

const Button = ({ children, type, onClick, variation }: ButtonProps) => {
  // VARIATION LIST
  const variationList = {
    secondary:
      "bg-[#1E386B] hover:bg-[#33466c] font-semibold text-sm leading-5 px-5 custom:px-6 py-3 custom:py-4 text-white",
    primary:
      "bg-[#F2B124] hover:bg-[#f7c557] text-sm custom:text-base font-normal leading-6 font-medium px-5 custom:px-6 py-3 custom:py-4 text-white",
    share:
      "px-3 py-2 rounded border border-[#BBC9E8] justify-center items-center gap-1 font-medium hover:bg-[#BBC9E8] hover:text-white",
  };

  const getColor = () => {
    return variation ? variationList[variation] : variationList.primary;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-center rounded transition-variationList duration-700 ${getColor()}`}
    >
      {children}
    </button>
  );
};

export default Button;
