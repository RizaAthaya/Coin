import React from "react";
import Image from "next/image";
import CoinvestasiLogo from "../../public/CoinvestasiLogo.svg";
import Desktop from "./navbar/desktop";
import Mobile from "./navbar/mobile";

export interface NavItem {
  label: string;
  link?: string;
  items?: string[];
}

export const navItems: NavItem[] = [
  { label: "Bitcoin", items: ["Beli Bitcoin", "Bitcoin Gratis", "Mining Bitcoin"] },
  { label: "Aplikasi", items: ["Aplikasi Bitcoin", "Aplikasi Futures"] },
  {
    label: "Berita",
    items: ["Berita Bitcoin", "Berita NFT", "Berita Harga", "Siaran Pers"],
  },
  { label: "Blockchain", link: "/blockchain" },
  { label: "Defi", items: ["Defi", "Staking"] },
  { label: "NFT", items: ["NFT", "Gaming", "Art"] },
  { label: "Acara", link: "/acara" },
];

const Navbar = () => {
  return (
    <nav className="w-screen bg-white lg:flex lg:justify-center fixed top-0 z-50">
      <div className="bg-white lg:w-[1010px] custom:w-[1200px] flex justify-between lg:px-0 px-4 py-4 lg:py-6 items-center mx-auto">
        {/* LOGO  */}
        <div className="w-[140px] lg:w-[182px] cursor-pointer">
          <Image src={CoinvestasiLogo} alt="Logo Coinvestasi" />
        </div>

        {/* NAV for Desktop ver. */}
        <Desktop />

        {/* NAV for Mobile ver.  */}
        <Mobile />
      </div>
    </nav>
  );
};

export default Navbar;
