import React from "react";
import Image from "next/image";
import CoinvestasiLogo from "../../public/CoinvestasiLogo.svg";
import Desktop from "./navbar/desktop";
import Mobile from "./navbar/mobile";

interface NavItem {
  label: string;
  link?: string;
}

export const navItems: NavItem[] = [
  { label: "Bitcoin", link: undefined },
  { label: "Aplikasi" },
  { label: "Berita", link: "/berita" },
  { label: "Blockchain", link: "/blockchain" },
  { label: "Defi" },
  { label: "NFT" },
  { label: "Acara", link: "/acara" },
];

const Navbar = () => {
  return (
    <nav className="lg:w-[1010px] custom:w-[1200px] flex justify-between lg:px-0 px-4 py-4 lg:py-6 items-center mx-auto">
      {/* LOGO  */}
      <div className="w-[140px] lg:w-[182px] cursor-pointer">
        <Image src={CoinvestasiLogo} alt="Logo Coinvestasi" />
      </div>

      {/* NAV for Desktop ver. */}
      <Desktop />

      {/* NAV for Mobile ver.  */}
      <Mobile />
    </nav>
  );
};

export default Navbar;
