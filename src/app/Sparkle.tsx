"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { TextGenerateEffectDemo } from "./TextGenEffect";
import { FaArrowRight } from "react-icons/fa";

export function SparklesPreview() {
  function clickHandler(){
    
  }
  return (
    <div className="h-auto w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-6">
      <h1 className="md:text-6xl text-5xl lg:text-7xl font-bold text-center text-white relative z-20">
        AcademEase
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center gap-5">
        <h1 className="">Unlock Academic <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Excellence</span> with AcademEase: Your Trusted Student <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent" >Companion!</span></h1>
        <TextGenerateEffectDemo></TextGenerateEffectDemo>
        <div className="flex  space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-center items-center gap-8">
          <div className="h-[100px]"></div>
        <button className=" w-20 md:w-30 lg:w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-[8px] md:text-[12px] lg:text-sm">
          <div className="flex justify-center items-center gap-2">Join now <FaArrowRight /></div>
        </button>
        <button className="w-20 md:w-30 lg:w-40 h-10 rounded-xl bg-white text-black border border-black text-[8px] md:text-[12px] lg:text-sm" onClick={clickHandler}>
          Login
        </button>
      </div>
      </div>
    </div>
  );
}
