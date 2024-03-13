import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffectDemo } from "./TextGenEffect";

export function SpotlightPreview() {
  return (
    <div className="h-[35rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.3] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Unlock Academic <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Excellence</span> with <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">AcademEase</span>
        </h1>
        <TextGenerateEffectDemo></TextGenerateEffectDemo>
      </div>
    </div>
  );
}
