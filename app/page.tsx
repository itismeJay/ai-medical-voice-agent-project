"use client";

import { div } from "motion/react-client";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Homepage() {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <nav className="flex lg:mx-20 xl:mx-40 items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-r from-[#33B7B4] to-[#55B3EA]" />
          <h1 className="text-base font-bold md:text-2xl">Auracare AI</h1>
        </div>
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <Link href={"/dashboard"}>
              <button className="w-24 cursor-pointer transform rounded-lg bg-gradient-to-r from-[#33B7B4] to-[#55B3EA] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Dashboard
              </button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div>
            <Link href={"/sign-in"}>
              <button className="w-24 cursor-pointer transform rounded-lg bg-gradient-to-r from-[#33B7B4] to-[#55B3EA] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Login
              </button>
            </Link>
          </div>
        )}
      </nav>
      <Hero />
      <Features />
    </div>
  );
}
