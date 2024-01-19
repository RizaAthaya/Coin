import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variation?: "secondary" | "primary";
}

const Button = ({ children, type, onClick, variation }: ButtonProps) => {

  const colors = {
    secondary: "bg-amber-400" ,
    primary: "bg-blue-500 hover:bg-blue-700",
  };

  const getColor = () => {
    return variation ? colors[variation] : colors.primary;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white text-base font-medium text-center px-6 py-4 rounded  ${getColor()}`}
    >
      {children}
    </button>
  );
};

export default Button;
