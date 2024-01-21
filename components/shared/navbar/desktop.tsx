import React from "react";
import { navItems } from "../navbar";
import Link from "next/link";
import Dropdown from "../dropdown";
import { Magnifier } from "../icons";
import Button from "../button";

const Desktop = () => {
  return (
    <>
      {/* NAVLIST  */}
      <ul className="hidden lg:flex gap-3 custom:gap-4 font-medium text-sm custom:text-base leading-6">
        {navItems.map(({ label, link, items }, index) => (
          <li key={index} className="p-2">
            {link ? (
              <Link
                href={link}
                className="font-medium text-sm custom:text-base leading-6 lg:hover:underline hover:text-[#1E386B]"
              >
                {label}
              </Link>
            ) : (
              <Dropdown label={label} items={items}/>
            )}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <div className="hidden lg:flex gap-4 items-center">
        <Magnifier className="w-6 h-6 cursor-pointer" />
        <Button type="button" variation="primary">
          Beli Bitcoin Sekarang
        </Button>
      </div>
    </>
  );
};

export default Desktop;
