'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
export default function CodeBlock({codecolor,codeblock}:any) {
  return (
    <div className='h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px] border-l-[1px] border-t-[1px] border-slate-500 rounded-lg'> 
               <div className='text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold text-slate-500'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
               </div>
               <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codecolor} pr-1`}>
                 <TypeAnimation sequence={[codeblock, 5000, ""]} repeat={Infinity} cursor={true} style={
                    {whiteSpace:"pre-line",
                display:'block'}
                 } omitDeletionAnimation={true}></TypeAnimation>
               </div>
            </div>
  )
}
