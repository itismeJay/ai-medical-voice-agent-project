import React from "react";
import FeaturesInformation from "@/constants/FeaturesInformation";
import { features } from "process";

export default function Features() {
  return (
    <div className="lg:mx-20 xl:mx-50 flex flex-col items-center pt-15 pb-35 justify-center">
      <h1 className="text-4xl mb-4 font-semibold text-[#344256]">
        Smart AI Health Solutions
      </h1>
      <p className="text-[21px] text-[#65758B] text-center ">
        Everything you need to manage your health with intelligent AI assistance
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
        {FeaturesInformation.map((feature) => (
          <div
            key={feature.id}
            className="p-4 md:p-6 border border-neutral-200 rounded-lg flex flex-col justify-center items-center hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="w-14 h-14 md:w-18 md:h-18 bg-[#33B7B4] rounded-full flex items-center justify-center mb-4">
              <feature.icon className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-[18px] font-semibold mb-3">{feature?.Header}</h2>
            <p className="text-center text-neutral-500">{feature?.Subheader}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
