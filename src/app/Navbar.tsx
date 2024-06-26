'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrClose } from "react-icons/gr";
import { FaAlignJustify } from "react-icons/fa";
// import StaggeredDropDown from './dropdown'
// import { Login } from "@/lib/features/auth-slice"
import { useDispatch, useSelector } from "react-redux";
// import { getUserDetails } from './profile/page';
import { AppDispatch, RootState } from "@/store/store";
import axios from 'axios';
import { useGenerationStore } from '@/store/idea-generation';
// import { buttons } from './Button';
const Navbar: React.FC = () => {
  // const { isAuth } = useGenerationStore()\
  const[isAuth,setIsAuth]=useState(false);
  // const [user,setUser]=useState("")
  // console.log(user)
  const [user, setUser] = useState({
    name:""
  })
  const [navbar, setNavbar] = useState<boolean>(false);
  async function getUserDetails() {
    try {
      const user = await axios.get("/api/users/userdata");
      console.log(user.data.data)
      setUser(user.data.data);
    } catch (error) {
      throw error;
    }
  }
async function checkAuth() {
  try {
    const response=await axios.get("/api/users/chekAuth");
    const data=response.data.data?true:false;
    setIsAuth(data)
  } catch (error:any) {
    throw error.message
  }
}
useEffect(()=>{
   checkAuth();
   getUserDetails();
},[])
// const User = user ? user : "";
const name = user && typeof user === "object" && user.name ? user.name : "";

  return (
    <div className='w-full h-[20px]'>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-30">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent font-bold">AcademEase</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <GrClose className='text-2xl text-slate-300' />
                  ) : (
                    <FaAlignJustify className='text-2xl text-slate-300' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
            <div
              className={`flex-1 flex-row justify-self-center pb-3  items-center mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center  md:flex ">
                <li className="pb-6 text-xl text-purple-600 py-2 md:px-6 text-center md:border-b-0  hover:bg-purple-900  border-purple-900   md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center   md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/updates" onClick={() => setNavbar(!navbar)}>
                    Updates
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Review
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center   md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/contactus" onClick={() => setNavbar(!navbar)}>
                    Contactus
                  </Link>
                </li>
                {!isAuth && <ul className='flex gap-1 ml-8'>
                  <li className='w-20 md:w-24 lg:w-32 h-10 rounded-xl bg-white text-black border border-black text-[8px] md:text-[12px] lg:text-sm sm:mx '>
                    <Link href="/signup" className='flex justify-center items-center gap-2 h-full w-full lg:hover:text-lg md:hover:text-sm hover:text-[10px] duration-200'>Signup</Link>
                  </li>
                  <li className='ml-6 w-20 md:w-24 lg:w-32 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-[8px] md:text-[12px] lg:text-sm  '>
                    <Link href="/login" className='flex justify-center items-center gap-2 w-full h-full lg:hover:text-lg md:hover:text-sm hover:text-[10px] duration-200'>login</Link>
                  </li>
                </ul>
                }
                {
                  isAuth &&
                  <Link href="/profile" className='w-full h-full'><button className='bg-white py-2 px-2 rounded-lg text-black font-bold text-xl mb-3'>Hi! {name}</button></Link>
                }
              </ul>

            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
