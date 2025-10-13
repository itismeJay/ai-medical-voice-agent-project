"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import {
  Stethoscope,
  Mic,
  FileText,
  Shield,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Users,
  Award,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { SignOutButton, useAuth, UserButton, UserProfile } from "@clerk/nextjs";

function Hero() {
  return (
    <div>
      <div className="relative mx-auto flex bg-[#EAF8FD] flex-col items-center  justify-center">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="px-4 py-10">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
            className="relative z-10 mt-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300"
          >
            Talk to an AI Medical Assistant,
            <span className="bg-gradient-to-r from-[#33B7B4] to-[#55B3EA] bg-clip-text text-transparent">
              Anytime
            </span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
          >
            With AI, you can launch your website in hours, not days. Try our
            best in class, state of the art, cutting edge AI tools to get your
            website up.
          </motion.p>
          <Link href={"/dashboard"}>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 1,
              }}
              className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="w-60 transform rounded-lg cursor-pointer bg-gradient-to-r from-[#33B7B4] to-[#55B3EA] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Explore Now
              </button>
            </motion.div>
          </Link>
        </div>
        <div className="relative w-full mb-5 max-w-[400px] md:max-w-2xl lg:max-w-3xl mx-auto px-4">
          <Card className="medical-shadow hover-shadow medical-transition overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="aspect-video bg-[#E9F7F7] rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#33B7B4] rounded-full medical-gradient mx-auto flex items-center justify-center">
                    <Mic className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg">
                    "I've been experiencing headaches and fatigue..."
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-6 md:h-8 bg-primary rounded-full voice-wave"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const { isSignedIn } = useAuth();
};

export default Hero;
