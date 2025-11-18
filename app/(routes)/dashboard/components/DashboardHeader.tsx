import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const menuOptions = [
  { id: 1, label: "Home", path: "/dashboard" },
  { id: 2, label: "History", path: "/dashboard/history" },
  { id: 3, label: "Pricing", path: "/dashboard/pricing" },
  //{ id: 4, label: "Profile", path: "/dashboard/profile" },
];

export default function AppHeader() {
  return (
    <div className="flex items-center p-5 px-10 shadow-md md:px-20 lg:px-40">
      {/* Logo on the left */}
      <Link href={"/"}>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="size-7 rounded-full bg-gradient-to-r from-[#33B7B4] to-[#55B3EA]" />
          <h1 className="text-base font-bold md:text-2xl">Auracare AI</h1>
        </div>
      </Link>

      {/* Links centered */}
      <div className="hidden md:flex flex-1 justify-center gap-12 mr-12">
        {menuOptions.map((option, index) => (
          <Link key={index} href={option.path}>
            <h2 className="hover:font-bold transition-all text-lg cursor-pointer">
              {option.label}
            </h2>
          </Link>
        ))}
      </div>

      {/* User button on the right */}
      <UserButton />
    </div>
  );
}
