"use client";
import { logo } from "@/shared/images";
import Image from "next/image";
import { Search, User, Heart, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FAFAF0] py-4 px-8 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
      <Image src={logo.logoImg} alt="Cricket Lovers Global" className="h-16 w-32" />
        
      </div>

      {/* Center: Nav links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-black tracking-wide">
        <li className="hover:text-lime-600 cursor-pointer">HOME</li>
        <li className="hover:text-lime-600 cursor-pointer">SHOPS</li>
        <li className="hover:text-lime-600 cursor-pointer">PRODUCTS</li>
        <li className="hover:text-lime-600 cursor-pointer">BLOG</li>
        <li className="hover:text-lime-600 cursor-pointer">PAGES</li>
      </ul>

      {/* Right: Icons */}
      <div className="flex items-center gap-5 text-black">
        <Search className="w-5 h-5 cursor-pointer hover:text-lime-600" />
        <User className="w-5 h-5 cursor-pointer hover:text-lime-600" />
        <Heart className="w-5 h-5 cursor-pointer hover:text-lime-600" />
        <div className="relative">
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-lime-600" />
          <span className="absolute -top-2 -right-2 bg-lime-500 text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">0</span>
        </div>
      </div>
    </nav>
  );
}
