"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Reveal from "./Reveal";
export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mb-[14rem]">
            <div className="w-full flex justify-center text-center">
                <h1 className="text-center flex font-bold text-2xl md:text-3xl lg:text-5xl mb-8 w-[80%] justify-center items-center">Students <span className="bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent ">Testimonial</span></h1>
            </div>  
            <Reveal><InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            /></Reveal>
        </div>
    );
}

const testimonials = [
    {
        quote:
            "The notes on this website are incredibly detailed and well-organized. They have been a lifesaver for my B.Tech studies, helping me understand complex concepts easily.",
        name: "Tanya",
        title: "Student",
    },
    {
        quote:
            "I am extremely impressed with the overall experience on this website. The notes are well-structured, the PYQ collection is extensive, and the user interface is excellent. Highly recommended!",
        name: "Moksh",
        title: "Student",
    },
    {
        quote: "The PYQ section has been a game-changer for me. Practicing previous year questions has significantly improved my exam performance and boosted my confidence.",
        name: "Zishan",
        title: "Student",
    },
    {
        quote:
            " The quality of the notes is top-notch. They cover all the important topics and are written in a concise yet comprehensive manner, making studying a breeze.",
        name: "Khalid",
        title: "Student",
    },
    {
        quote:
            "I love how user-friendly the website is. The interface is intuitive, making it easy to navigate through different subjects and find the specific notes or PYQ I need.",
        name: "Karan",
        title: "Student",
    },
];
