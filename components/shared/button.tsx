import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variation?: "secondary" | "primary";
}

const Button = ({ children, type, onClick, variation }: ButtonProps) => {

  const colors = {
    secondary: "bg-[#1E386B] hover:bg-[#33466c] font-semibold text-sm leading-5" ,
    primary: "bg-[#F2B124] hover:bg-[#efbd52] text-base font-normal leading-6 font-medium",
  };

  const getColor = () => {
    return variation ? colors[variation] : colors.primary;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white text-center px-6 py-4 rounded ${getColor()}`}
    >
      {children}
    </button>
  );
};

export default Button;
