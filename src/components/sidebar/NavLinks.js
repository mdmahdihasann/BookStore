import Link from 'next/link'
import React from 'react'
import { FaHome } from "react-icons/fa";
import { PiBookOpenFill, PiCubeTransparentFill } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { HiMiniRectangleStack, HiMiniUserGroup, HiCog6Tooth, HiMiniSquaresPlus } from "react-icons/hi2";

const links = [
  { name: "home", href: "/", icon: FaHome },
  { name: "Books", href: "/store", icon: PiBookOpenFill },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: HiMiniRectangleStack },
  { name: "Track Order", href: "/store/track", icon: FaTruckFast },
  { name: "Community", href: "/store/community", icon: HiMiniUserGroup },
  { name: "Settings", href: "/store/settings", icon: HiCog6Tooth },
  { name: "About", href: "/store/about", icon: HiMiniSquaresPlus },
  { name: "Admin", href: "/store/admin", icon: PiCubeTransparentFill },
]

const Navbar = () => {
  return (
    <>
      {links.map((link, index) => {
        const IconComponent = link.icon;

        return (
          <Link
            key={index}  
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <IconComponent className="w-5 h-5" />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </>
  )
}

export default Navbar