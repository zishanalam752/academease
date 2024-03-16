import Link from 'next/link';
import React from 'react';
import { GrNotes } from "react-icons/gr";
export default function Card({ sub }: any) {
    return (
        <div className='w-[200px] h-[220px] border-[1px] border-slate-600 gap-5 flex justify-center rounded-lg items-center '>
            <div className='w-[90%]  '>
                <ul className=' flex flex-col justify-between gap-2 mt-2 ml-4 '>
                    <li ><div className='flex items-center gap-2'><GrNotes /><Link href="" className='hover:text-purple-700 duration-200'>{sub[0]}</Link></div></li>
                    <li ><div className='flex items-center gap-2'><GrNotes /><Link href="" className='hover:text-purple-700 duration-200'>{sub[1]}</Link></div></li>
                    <li ><div className='flex items-center gap-2'><GrNotes /><Link href="" className='hover:text-purple-700 duration-200'>{sub[2]}</Link></div></li>
                    <li ><div className='flex items-center gap-2'><GrNotes /><Link href="" className='hover:text-purple-700 duration-200'>{sub[3]}</Link></div></li>
                    <li ><div className='flex items-center gap-2'><GrNotes /><Link href="" className='hover:text-purple-700 duration-200'>{sub[4]}</Link></div></li>

                </ul>
            </div>
        </div>
    );
}
