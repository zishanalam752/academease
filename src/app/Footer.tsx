import React from 'react'
import Link from 'next/link'
export default function Footer 
<div>
() { 
  return (
    <div className='w-full flex flex-col justify-center items-center md:gap-6 gap-4 lg:gap-8 relative bottom-0 left-0 right-0 bg-slate-900 py-10'>
      <div className='w-[70%] h-[280px]  bg-slate-600 rounded-lg flex justify-center items-center absolute bottom-[330px] z-20 ' >
                <div className='flex justify-between items-center h-[40%] gap-20'>
                    <h1 className='text-3xl font-bold'>Would you like to join?<br />Join us today</h1>
                    <Link href="/signup" className=' p-3 px-1 text-lg'><button className='bg-slate-800 p-3 rounded-lg'>Get started</button></Link>
                </div>
            </div>
        {/* all list */}
        <div className=' h-auto w-[80%] flex  justify-between gap-4 md:gap-6 lg:gap-8 mt-14'>
           <div className='flex flex-col gap-1 md:gap-3 lg:gap-4 items-center justify-center'>
            <h1 className='sm:text-sm md:text-md lg:text-xl'>AcademEase</h1>
            <div className='font-light  text-[12px] md:text-sm lg:text-sm'>
               Your One step solution <br /> towards your goal 
            </div>
           </div>
           <div className='flex flex-col gap-1 md:gap-3 lg:gap-4 items-center justify-center text-center'>
            <h1 className='sm:text-sm md:text-md lg:text-xl'>Links</h1>
           <ul className=' list-none font-light  text-[12px] md:text-sm lg:text-sm text-center'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contactus">Contact Us</Link></li>
                </ul>
           </div>
           <div className='flex flex-col gap-1 md:gap-3 lg:gap-4 items-center justify-center'>
            <h1 className='sm:text-sm md:text-md lg:text-xl'>Privacy Policy</h1>
            <div>
                <ul className='list-none font-light  text-[12px] md:text-sm lg:text-sm text-center'>
                <li><Link href="/">Privacy Policy</Link></li>
                <li><Link href="/">Terms and Condition</Link></li>
                </ul>
            </div>
           </div>
           <div className='flex flex-col gap-1 md:gap-3 lg:gap-4 items-center justify-center'>
            <h1 className='sm:text-sm md:text-md lg:text-xl'>Contact Us</h1>
            <div className='text-center'>
                <ul className='list-none font-light  text-[12px] md:text-sm lg:text-sm text-center'>
                    <li>+91 62022 14007</li>
                    <li>AcademEase@gmail.com</li>
                </ul>
            </div>
           </div>
        </div>
        {/* copyright section */}
         <div className='text-center mt-20'>
            <p className='sm:text-[10px] md:text-sm lg:text-lg'>Copyright © AcademEase</p>
            <p className='sm:text-[10px] md:text-sm lg:text-lg'>All Rights Reserved</p>
         </div>
    </div>
  )
}
