"use client";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variation?: "secondary" | "primary";
}

const Button = ({ children, type, onClick, variation }: ButtonProps) => {
  // VARIATION LIST
  const variationList = {
    secondary:
      "bg-[#1E386B] hover:bg-[#33466c] font-semibold text-sm leading-5",
    primary:
      "bg-[#F2B124] hover:bg-[#f7c557] text-sm custom:text-base font-normal leading-6 font-medium",
  };

  const getColor = () => {
    return variation ? variationList[variation] : variationList.primary;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white text-center px-5 custom:px-6 py-3 custom:py-4 rounded transition-variationList duration-700 ${getColor()}`}
    >
      {children}
    </button>
  );
};

export default Button;
