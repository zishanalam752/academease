"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import {CardHoverEffectDemo} from "./CardHover"
export function BackgroundGradientDemo() {
  return (
    <div className="">
      <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
        
        <div className="flex flex-row justify-between items-center">
        <div className="w-[60%] flex flex-col justify-between items-center gap-4">
          <h1 className="text-center text-4xl font-bold">Past Exam Papers Vault</h1>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Now you can access NIT KKR notes and past year question papers on our educational platform. Accessible anytime, anywhere, our user-friendly website is your key to unlocking success in your studies.
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
        </div>
        <div className="">
          <CardHoverEffectDemo></CardHoverEffectDemo>
        </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
