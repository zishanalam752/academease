import React from 'react'
// import React from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";


export default function Sidebar() {
  return (
   <div className='w-full sticky '>
    <div className='flex flex-col justify-between h-screen'>
      <ul className='flex flex-col justify-between item-center '>
        <li className=''><Link href="#" className='w-full flex items-center gap-8'><FaHome /><p>Home</p></Link></li>
        <li className=''><Link href="#" className='w-full flex items-center gap-8'><FaHome /><p>Profile</p></Link></li>
        <li className=''><Link href="#" className='w-full flex items-center gap-8'><FaHome /><p>Attendence</p></Link></li>
        <li className=''><Link href="#" className='w-full flex items-center gap-8'><FaHome /><p>Updates</p></Link></li>
        <li className=''><Link href="#" className='w-full flex items-center gap-8'><FaHome /><p>Edit Profile</p></Link></li>
        <li className=''><Link href="#" className='w-full flex items-center gap-8'><FaHome /><p>Logout</p></Link></li>

      </ul>
    </div>
   </div>
  );
}

