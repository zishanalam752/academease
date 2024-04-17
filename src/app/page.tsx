
import { BackgroundGradientDemo } from "./BgGradient";
import { SparklesPreview } from "./Sparkle";
import { HeroScrollDemo } from "./HeroScroll";
import Reveal from "./Reveal";
import { AnimatedTooltipPreview } from "./Tooltip";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";
const content = [
  {
    heading: `Access Notes & PYQs Branchwise`,
    description: "Now you can access NIT KKR notes and past year question papers on our educational platform. Accessible anytime, anywhere, our user-friendly website is your key to unlocking success in your studies.",
    scroll: true
  },

  {
    heading: `Access Your Attendence Records Now`,
    description: "Stay on top of your academic journey with our attendance records feature! Easily monitor your progress, track punctuality, and optimize your learning experience. Join us today to access your attendance records and achieve your goals!",
    scroll: false
  }
]
export default function Home() {
  return (

    <main className="w-full relative flex items-center justify-center -z-0 ">

      {/* heading div */}
      <div className="w-[80%] flex justify-center flex-col overflow-hidden">
        {/* top-container */}
        <div className="w-full flex flex-col justify-between ">
          <div className="h-[100px]"></div>
          <div className="w-full  rounded-2xl ">

            <SparklesPreview></SparklesPreview>
            <div className="h-[50px] bg-black rounded-2xl"></div>
          </div>
        </div>

        {/* pyqs */}
        <Reveal><div className="w-full mt-14 flex flex-col">
          <h1 className=" bg-black mb-10 text-center font-bold text-3xl md:text-4xl lg:text-5xl ">Past Exam <span className="bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent ">Papers Vault</span></h1>
          <BackgroundGradientDemo heading={content[0].heading} description={content[0].description} scroll={content[0].scroll}></BackgroundGradientDemo>
        </div></Reveal>
        {/* updates */}
        <Reveal><div className="w-full">
          <HeroScrollDemo></HeroScrollDemo>

        </div></Reveal>
        <Reveal><div className="w-full  flex flex-col mb-28">
          <div className="flex justify-center">

            <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-8 w-[80%] justify-center items-center">Stay <span className="bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent ">Accountable</span>, Stay Engaged: <span className="bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent ">Monitor</span> Your Attendance with Us!</h1>

          </div>

          <BackgroundGradientDemo heading={content[1].heading} description={content[1].description} scroll={content[1].scroll}></BackgroundGradientDemo>
        </div></Reveal>

        {/* devloper */}
       {/* <div>
          <div className="w-full flex justify-center">
            <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-8 w-[80%] justify-center items-center">Our <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Developers</span></h1>
          </div>
          <div>
            <AnimatedTooltipPreview></AnimatedTooltipPreview>
          </div>

        </div> */}

        {/* review */}
        <Reveal>
          <div className=" bg-grid-slate-900">

            <div className="bg-grid-salte-900">
              
              <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
            </div>
          </div>
        </Reveal>

      </div>

    </main>

  );
}
