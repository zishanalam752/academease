import Link from 'next/link';
import React from 'react';
import { GrNotes } from "react-icons/gr";
import { ThreeDCardDemo } from './3DCard';
export default function Card({ sub,name }: any) {
    return (
        <div className='w-[200px] h-[220px] border-[1px] border-slate-600  gap-28 flex justify-center rounded-lg items-center '>
            <ThreeDCardDemo sub={sub} name={name}></ThreeDCardDemo>
        </div>
    );
}
