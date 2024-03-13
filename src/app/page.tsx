import Image from "next/image";
import { BackgroundGradientDemo } from "./BgGradient";
// import { Spotlight } from "@/components/ui/Spotlight";
import { SpotlightPreview } from "./Spotlight";
import lottie from 'lottie-react';
import animation from "../assets/Animation - 1709914625963.gif"
import { HeroParallaxDemo } from "./HeroParlx";
import { SparklesPreview } from "./Sparkle";
import { TypewriterEffectSmoothDemo } from "./TypeWriter";
import { ThreeDCardDemo } from "./3DCard";
import { HeroScrollDemo } from "./HeroScroll";
import { TailwindcssButtons } from "./Button"
import Navbar from "./Navbar";
export default function Home() {
  return (

    <main className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.15] bg-grid-black/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       {/* heading div */}
      <div className="w-[80%] flex justify-center flex-col  ">
        <div className="w-full flex flex-col justify-between ">
          <div className="h-[100px]"></div>
          <div className="w-full border-fuchsia-700 border-l-2 border-r-2 border-b-2 rounded-2xl">
            <SparklesPreview></SparklesPreview>
            <div className="h-[50px] bg-black rounded-2xl"></div>
          </div>
        </div>
        {/* updates */}
        <div className="w-full">
          <HeroScrollDemo></HeroScrollDemo>
        </div>
        {/* pyqs */}
        <div className="w-full">
          <BackgroundGradientDemo></BackgroundGradientDemo>
        </div>
      </div>

    </main>

  );
}
