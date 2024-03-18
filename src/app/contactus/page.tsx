import React from 'react'
import img from "../../assets/contactusbg.jpg"
import Image from 'next/image'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
export default function page() {
    return (
        <div className='w-full h-[1000px] flex flex-col justify-center mt-12 op'>
            <div className=' h-[30%] relative'>
                <Image
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-full w-full object-cover group-hover/card:shadow-xl opacity-70"
                    alt="thumbnail"
                />
                <div className='absolute top-20 left-36 text-black'>
                    <h1 className='text-5xl font-bold'>Get in Touch</h1>
                    <p className='text-3xl font-semibold'>The ultimate guide to excel your academic</p>
                </div>
            </div>
            {/* form container */}
            <div className='h-[1600px] flex justify-center items-center bg-inherit'>
                <div className='w-[70%] flex justify-between items-center absolute top-[290px] z-20'>
                    {/* left div */}
                    <div className='bg-slate-800 w-[60%] h-[550px] pl-12 py-4  '>
                        <div className='w-[520px] pl-4 gap-8'>
                            <h1 className='text-4xl font-bold text-left mb-2 '>Send  us a message!</h1>
                            <form action="#" className='gap-2 border-[1px] border-slate-500 bg-slate-900 py-6 pl-4 pr-2 rounded-sm'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col items-left'><label htmlFor="name">Name</label>
                                        <input type="text" placeholder="Name" id='name' className='bg-slate-900  border-[1px] p-1 pl-1 rounded-md' /></div>
                                    <div> <label htmlFor="email">Email</label><br />
                                        <input type="email" id="email" placeholder="Email Address" className='bg-slate-900 border-[1px] p-1 pl-1 rounded-md' /></div>
                                </div>
                                <label htmlFor="phno">Phone Number</label><br />
                                <input type="text" name="" id="phno" placeholder="Phone Number" className='bg-slate-900  border-[1px] p-1 pl-1 rounded-md' /><br />
                                <label htmlFor="message" className='mt-3'>Message</label><br />
                                <textarea name="" cols={30} rows={10} placeholder="Message" id="message" className='bg-slate-900 border-[1px] p-1 pl-1 rounded-md'></textarea><br />
                                <button type="submit" className='bg-blue-600 p-1 px-1 rounded-md'>Submit</button>
                            </form>
                        </div>
                    </div>
                    {/* right div */}

                    <div className=' bg-blue-800 h-[550px] w-[40%] py-4 flex flex-col justify-between pl-6'>
                        <h1 className='text-4xl font-bold'>Contact Information</h1>
                        <div className='flex justify-center flex-col items-center gap-4'>
                            <IoIosMail className='text-4xl' />
                            <p>support@academease.in</p>
                        </div>
                        <div className='flex gap-4 text-2xl'>
                            <FaLinkedin className=' hover:text-purple-950 cursor-pointer duration-500 ' />
                            <FaInstagram className=' hover:text-purple-950 cursor-pointer duration-500 ' />
                            <FaTwitter className=' hover:text-purple-950 cursor-pointer duration-500' />
                        </div>
                    </div>
                </div>

            </div>
            {/* bottom div */}
            
        </div>
    )
}
