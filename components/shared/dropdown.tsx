"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "./icons";

interface DropdownProps {
  label: string;
  items?: string[];
}

const Dropdown = ({ label, items }: DropdownProps) => {
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
        <ul className="font-normal text-sm lg:text-lg leading-6 relative lg:absolute top-full lg:shadow-slate-200 lg:shadow-xl left-0 bg-white w-52 rounded lg:px-5 lg:py-5 px-2 py-2 gap-1 lg:gap-0 flex flex-col font-inter transition-opacity duration-300 opacity-100 lg:z-50">
          {items?.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer lg:px-4 lg:py-3 hover:bg-slate-100 rounded transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
