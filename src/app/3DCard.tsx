"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

export function ThreeDCardDemo({sub,name}:any) {
  return (
    <CardContainer className="inter-var w-[250px] ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-[-1px_1px_31px_2px_#F2281A7E] dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[.3] border-black/[0.1] w-400px sm:w-[30rem] h-[300px] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent"
        >
          {name}
        </CardItem>
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
        <CardItem translateZ="100" className="w-full mt-4 border-l-[1px]">
        <div className='w-[90%]  '>
                <ul className=' flex flex-col justify-between gap-2 mt-2 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent  '>
                    <li ><div className='flex items-center gap-2 '><span className="w-[10px] h-[1px] bg-white"></span><Link href="" className='hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent duration-200'>{sub[0]}</Link></div></li>
                    <li ><div className='flex items-center gap-2 '><span className="w-[10px] h-[1px] bg-white"></span><Link href="" className='hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent duration-200'>{sub[1]}</Link></div></li>
                    <li ><div className='flex items-center gap-2'><span className="w-[10px] h-[1px] bg-white"></span><Link href="" className='hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent duration-200'>{sub[2]}</Link></div></li>
                    <li ><div className='flex items-center gap-2'><span className="w-[10px] h-[1px] bg-white"></span><Link href="" className='hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent duration-200'>{sub[3]}</Link></div></li>
                    <li ><div className='flex items-center gap-2'><span className="w-[10px] h-[1px] bg-white"></span><Link href="" className='hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent duration-200'>{sub[4]}</Link></div></li>

                </ul>
            </div>
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
