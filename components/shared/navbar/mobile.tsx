"use client";

import React, { useState } from "react";
import { Exit, Hamburger } from "../icons";
import { navItems } from "../navbar";
import Link from "next/link";
import Dropdown from "../dropdown";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* HAMBURGER ICON  */}
      <div className="flex lg:hidden" onClick={handleClick}>
        <Hamburger />
      </div>

      {/* SIDEBAR  */}
      <div
        className={`lg:hidden fixed z-50 right-0 top-0 p-4 bg-white w-[70vw] min-h-screen h-auto shadow-xl transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        
        {/* EXIT ICON  */}
        <div className="flex justify-end" onClick={handleClick}>
          <Exit />
        </div>

        {/* NAV LIST  */}
        <ul className="flex flex-col gap-0 font-medium text-base leading-6 pt-2">
          {navItems.map(({ label, link }, index) => (
            <li key={index} className="p-2">
              {link ? (
                <Link href={link} className="font-medium text-base leading-6">
                  {label}
                </Link>
              ) : (
                <Dropdown label={label} />
              )}
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default Mobile;
