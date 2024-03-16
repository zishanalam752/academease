"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { TypeAnimation } from "react-type-animation";

export function LampDemo({title,description,codeblock}:any) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="h-auto bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {title}
        <p className=' w-11/12 text-2xl mt-6'>{description}</p>
      </motion.h1>
      <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent pr-1 text-2xl`}>
                 <TypeAnimation sequence={[codeblock, 5000, ""]} repeat={Infinity} cursor={true} style={
                    {whiteSpace:"pre-line",
                display:'block'}
                 } omitDeletionAnimation={true}></TypeAnimation>
               </div>
    </LampContainer>
  );
}
