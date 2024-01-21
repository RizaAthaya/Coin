"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "./icons";

interface DropdownProps {
  label: string;
}

const Dropdown = ({ label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
        
      {/* LABEL  */}
      <div
        className="flex items-center gap-[2px] cursor-pointer lg:hover:underline lg:justify-normal justify-between transition-colors duration-300 hover:text-[#1E386B]"
        onClick={handleDropdownClick}
      >
        {label}{" "}
        {isOpen ? (
          <ChevronUp className="custom:w-6 custom:h-6 h-4 w-4 custom:p-1" />
        ) : (
          <ChevronDown className="custom:w-6 custom:h-6 h-4 w-4 custom:p-1" />
        )}
      </div>

      {/* DROPDOWN  */}
      {isOpen && (
        <ul className="font-normal text-sm lg:text-lg leading-6 absolute top-full lg:shadow-slate-200 lg:shadow-xl left-0 bg-white w-48 rounded px-5 py-5 flex flex-col font-inter transition-opacity duration-300 opacity-100 z-50">
          {Array.from({ length: 4 }, (_, index) => (
            <li
              key={index}
              className="cursor-pointer lg:px-4 lg:py-3 hover:bg-slate-100 rounded transition-colors duration-300"
            >
              Material {index + 1}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
