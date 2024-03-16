"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { CardHoverEffectDemo } from "./CardHover"
import CodeBlock from "./CodeBlock";
import Reveal from "./Reveal";
import Link from "next/link";
export function BackgroundGradientDemo(props: any) {
  return (
    <div className="w-auto md:w-[89%] lg:w-[89%] flex  flex-col md:flex-col lg:flex-row justify-between ml-8">
      <div className="w-[11%]"></div>
      <BackgroundGradient className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 ">

        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
          <div className="s-full md:w-[60%] lg:w-[60%] flex flex-col  justify-between items-center gap-4">
            <Reveal><h1 className="text-center text-2xl md:text-3xl  lg:text-4xl font-bold">{props.heading}</h1></Reveal>
            <Reveal><p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {props.description}
            </p></Reveal>

            <Link href="/signup">
            <button className="rounded-lg px-2 md:px-4 lg:px-6 py-4 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 text-center">
              Join Now
            </button></Link>
          </div>
          <Reveal><div className="overflow-hidden">
            {
              props.scroll ? (<CardHoverEffectDemo></CardHoverEffectDemo>) : (<CodeBlock codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a><a href="/two">Two</a><a href="/three">Three</a>\n</nav>\n</body>`}
                codecolor={"bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent"} ></CodeBlock>)
            }
          </div></Reveal>
        </div>
      </BackgroundGradient>
    </div>
  );
}
