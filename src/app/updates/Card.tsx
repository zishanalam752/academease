import Link from 'next/link';
import React from 'react'
import { FaBuilding, FaRupeeSign } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoTime } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi"
import { GiMoneyStack } from "react-icons/gi";
export default function cards(props:any) {
    // console.log(props)
    // console.log(props.course)
  return (
    <div className="card1 google relative flex w-[95%] bg-slate-900 border-gray-600 p-5 rounded-md gap-6 group hover:border-gray-500 border-[1.5px] border-transparent duration-300">
              {/* <!-- EMPTY DIV  --> */}
              <div className="absolute rounded-md h-full w-0 bg-black opacity-25 top-0 left-0
      group-hover:w-full duration-500 ease-in-out"></div>
              {/* <!-- Logo --> */}
              <div className="h-20 w-20 logo1 relative z-10 group-hover:scale-105 duration-500">
                <img src={props.course.logo} alt="" className=" object-cover rounded-md" />
              </div>

              {/* <!-- Content  --> */}
              <div className="description flex flex-col space-y-2">
                {/* <!-- ROLE / --> */}
                <h2 className="role relative z-10  text-white font-bold text-2xl">{props.course.role}</h2>
                {/* <!-- Description  --> */}
                <div className="description flex space-x-6">

                  <div className="company flex items-center gap-2">
                    <FaBuilding/>
                    <div className="text1 text-lg text-gray-400  inline font-bold">{props.course.company}</div>
                  </div>
                  <div className="location flex items-center gap-2">
                  <ImLocation />
                    <div className="text1 text-lg text-gray-400  inline">{props.course.location.slice(0,20)}...</div>
                  </div>

                  <div className="time flex items-center gap-2">
                    <IoTime/>
                    <div className="text1 text-lg text-gray-400  inline">{props.course.posted}</div>
                  </div>

                  <div className="stipend flex items-center gap-2">
                  <GiMoneyStack/>
                    <div className="text1 text-lg text-gray-400  inline">{props.course.stipendOrSalary?props.course.stipendOrSalary:"Not disclose"}</div>
                  </div>

                </div>
                <div className="para text-gray-300">
                  {props.course.description}
                </div>
                <Link href={props.course.link}
                  className="w-36 relative z-10 py-2 px-3 flex gap-4 items-center justify-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 group-hover:border-sky-500 duration-300">
                  <p>Apply Now</p>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
  )
}
