"use client"
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto"; // Import chart.js for rendering charts
import Link from "next/link";
import Sidebar from "../Sidebar";
import { FaBriefcaseMedical, FaChartBar, FaHome, FaPen, FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { Bar } from "react-chartjs-2"
import { CategoryScale, scales } from 'chart.js';
import { useGenerationStore } from "@/store/idea-generation";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";
import { timeTable } from "../timtable"
import axios from "axios";
Chart.register(CategoryScale);

const ProfilePage = () => {
  const [user, setUser] = useState("");
  // const [Attendance,setAttendance]=useState(null)
  const router = useRouter();
  const { setIsLoading } = useGenerationStore();
  const [isActive, setIsActive] = useState({
    home: true,
    profile: false,
    attendence: false,
    updates: false,
    editprofile: false,
    logout: false,
  })
  const resetState = {
    home: false,
    profile: false,
    attendence: false,
    updates: false,
    editprofile: false,
    logout: false,
  }
  const clickHandler = (section: any) => {
    setIsActive(() => ({
      ...resetState,
      [section]: true,
    }));
  };
  async function getUserDetails() {
    try {
      const user = await axios.get("/api/users/userdata");
      console.log(user.data.data)
      setUser(user.data.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [])

  async function logoutHandler() {
    try {
      setIsLoading(true);
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      // setIsAuth(false)

      router.push('/login')
    } catch (error: any) {
      toast.error(error.message);
    }
    finally {
      setIsLoading(false);
    }
  }
  const date = new Date();
  const day = date.getDay();
  let section = user.section || 'A';
  if (section === 'A')
    section = 0;
  if (section === 'B')
    section = 1
  if (section === 'C')
    section = 2;
  const subsectionArr = (user.subsection && user.subsection.split('-')) || ["", ""];
  let subsection = Number(subsectionArr[1]);
  console.log(subsection)

  const DayTimetable = timeTable[day - 1].Branches[0].sections[section].subsections[subsection - 1];
  // console.log();
  // const period1 = DayTimetable.cls[0].period || "";
  // console.log(DayTimetable.cls[0].period)
  const Timetable=DayTimetable?DayTimetable:"";
 const period1=Timetable? Timetable.cls[0].class : "";
  const period2 = Timetable? Timetable.cls[1].class : "";
  const period3 = Timetable? Timetable.cls[2].class : "";
  const period4 = Timetable? Timetable.cls[3].class : "";
  const period5 = Timetable? Timetable.cls[4].class : "";
  const period6 = Timetable? Timetable.cls[5].class : "";
  const period7 = Timetable? Timetable.cls[6].class : "";
  const period8 = Timetable? Timetable.cls[7].class: "";
  const loaction1=Timetable?Timetable.cls[0].Location:""
  const loaction2=Timetable?Timetable.cls[1].Location:""
  const loaction3=Timetable?Timetable.cls[2].Location:""
  const loaction4=Timetable?Timetable.cls[3].Location:""
  const loaction5=Timetable?Timetable.cls[4].Location:""
  const loaction6=Timetable?Timetable.cls[5].Location:""
  const loaction7=Timetable?Timetable.cls[6].Location:""
  const loaction8=Timetable?Timetable.cls[7].Location:""




// console.log(period2)

  return (
    <div className="flex flex-col">
      <div className="w-full h-[50px]"></div>
      <div className="min-h-screen flex gap-16 bg-slate-950 mb-56" id="page-top">

        {/* Sidebar */}
        <div className="w-[16%] h-[44.85rem] mt-6 mb-6 sticky top-0 left-0 rounded-e-2xl text-slate-950 bg-slate-200  sidebar">
          <ul className="flex flex-col justify-center gap-11 w-full h-full font-normal">
            <Link href="#" className="relative py-4 ml-10 px-6 text-lg  rounded-e-full w-[93.5%] cursor-pointer">
              <li className={`flex text-center gap-5 items-center w-full pl-4 py-2 ${isActive.home ? "bg-slate-950 text-white rounded-s-full" : "bg-slate-200 text-slate-950"}`} onClick={() => clickHandler("home")}>
                <FaHome />
                <p>Home</p>
              </li>
            </Link>
            <Link href="#page-top" className="relative py-4 ml-10 px-6 text-lg rounded-s-2xl w-[93.5%] cursor-pointer">
              <li className={`flex text-center gap-5 items-center w-full pl-4 py-2 ${isActive.profile ? "bg-slate-950 text-white rounded-s-full" : "bg-slate-200 text-slate-950"}`} onClick={() => clickHandler("profile")}>
                <FaUser />
                <p>Profile</p>
              </li>
            </Link>
            <Link href="#Attendence" className="relative py-4 ml-10 px-6 text-lg rounded-s-2xl w-[93.5%] cursor-pointer">
              <li className={`flex text-center gap-5 items-center w-full pl-4 py-2 ${isActive.attendence ? "bg-slate-950 text-white rounded-s-full" : "bg-slate-200 text-slate-950"}`} onClick={() => clickHandler("attendence")} >
                <FaChartBar />

                <p>Attendence</p>
              </li>
            </Link>
            <Link href="#Updates" className="relative py-4 ml-10 px-6 text-lg rounded-s-2xl w-[93.5%] cursor-pointer">
              <li className={`flex text-center gap-5 items-center w-full pl-4 py-2 ${isActive.updates ? "bg-slate-950 text-white rounded-s-full" : "bg-slate-200 text-slate-950"}`} onClick={() => clickHandler("updates")} >
                <FaBriefcaseMedical />
                <p>Updates</p>
              </li>
            </Link>
            <Link href="#" className="relative py-4 ml-10 px-6 text-lg rounded-s-2xl w-[93.5%] cursor-pointer">
              <li className={`flex text-center gap-5 items-center w-full pl-4 py-2 ${isActive.editprofile ? "bg-slate-950 text-white rounded-s-full" : "bg-slate-200 text-slate-950"}`} onClick={() => clickHandler("editprofile")}>
                <FaPen />
                <p>Edit Profile</p>
              </li>
            </Link>
            <Link href="" className="relative py-4 ml-10 px-6 text-lg rounded-s-2xl w-[93.5%] cursor-pointer">
              <li className={`flex text-center gap-5 items-center w-full pl-4 py-2 ${isActive.logout ? "bg-slate-950 text-white rounded-s-full" : "bg-slate-200 text-slate-950"}`} onClick={logoutHandler}>
                <MdOutlineLogout />
                <p>Log Out</p>
              </li>
            </Link>
          </ul>

        </div>
        {/* Right section (main) */}
        <div className="w-[75%] h-full">
          {/* Profile card */}
          <div className="w-full h-[32.5rem] mt-6 flex rounded-2xl  bg-cyan-800 bg-opacity-35 shadow-lg shadow-slate-950">
            <div className="relative w-[40%] h-full flex flex-col items-center text-gray-100 
                after:absolute after:right-0 after:w-[2px] after:bg-slate-500 after:top-[12%] after:bottom-[15%]">
              <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.name}`} alt="img" className="block w-72 h-72 my-12 rounded-full border-2 border-gray-100" />
              <h1 className="text-3xl font-medium mb-4 line-clamp-1">{user.name}</h1>
              <h2 className="text-xl">{user.subsection}</h2>
            </div>
            <div className="w-[60%] pt-24 pl-16 flex flex-col gap-11 font-medium text-xl text-gray-100">
              <div>
                <p className="inline-block w-36">Roll No. </p>
                <span className="inline-block w-28">:</span>
                <p className="inline-block">{user.rollno}</p>
              </div>
              <div>
                <p className="inline-block w-36">Branch </p>
                <span className="inline-block w-28">:</span>
                <p className="inline-block">{user.branch}</p>
              </div>
              <div>
                <p className="inline-block w-36">Semester</p>
                <span className="inline-block w-28">:</span>
                <p className="inline-block">4 th</p>
              </div>
              <div>
                <p className="inline-block w-36">Section</p>
                <span className="inline-block w-28">:</span>
                <p className="inline-block">{user.subsection}</p>
              </div>
              <div>
                <button className="flex justify-around items-center mt-5 w-40 p-1.5 rounded-md
                         bg-gray-100 text-gray-900 hover:bg-slate-200 duration-150">
                  <i className="fa-solid fa-pen w-1/5"></i>
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          </div>
          {/* Lecture Timeline */}
          <div className="w-full h-[25rem] my-20">
            <div className="h-1/2 flex gap-16">
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-lime-400 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(163,230,53,0.65)] duration-200">1</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-lime-400 group-hover:shadow-[0_0_0_3px_rgb(163,230,53,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period1? period1 : "No Class"}</p>
                  <p className="text-center font-medium text-base">{loaction1?loaction1:"----"}</p>
                </div>
                <div className="absolute h-[6.4rem] top-24 left-24 border-l border-dashed border-gray-100"></div>
              </div>
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-cyan-400 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(34,211,238,0.65)] duration-200">3</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-cyan-400 group-hover:shadow-[0_0_0_3px_rgb(34,211,238,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period3? period3 : "No Class"} </p>
                  <p className="text-center font-medium text-base">{loaction3?loaction3:"----"}</p>
                </div>
                <div className="absolute h-[6.4rem] top-24 left-24 border-l border-dashed border-gray-100"></div>
              </div>
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-orange-400 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(251,146,60,0.65)] duration-200">5</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-orange-400 group-hover:shadow-[0_0_0_3px_rgb(251,146,60,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period5? period5 : "No Class"} </p>
                  <p className="text-center font-medium text-base">{loaction5?loaction5:"----"}</p>
                </div>
                <div className="absolute h-[6.4rem] top-24 left-24 border-l border-dashed border-gray-100"></div>
              </div>
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-teal-400 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(45,212,191,0.65)] duration-200">7</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-teal-400 group-hover:shadow-[0_0_0_3px_rgb(45,212,191,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period7? period7 : "No Class"}</p>
                  <p className="text-center font-medium text-base">{loaction7?loaction7:"----"}</p>
                </div>
                <div className="absolute h-[6.4rem] top-24 left-24 border-l border-dashed border-gray-100"></div>
              </div>
            </div>
            <hr className="w-[82.6%] mx-auto border-dashed border-white" />
            <div className="h-1/2 flex flex-row-reverse items-end gap-16 ">
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-cyan-400 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(34,211,238,0.65)] duration-200">8</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-cyan-400 group-hover:shadow-[0_0_0_3px_rgb(34,211,238,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period8? period8 : "No Class"}</p>
                  <p className="text-center font-medium text-base">{loaction8?loaction8:"----"}</p>
                </div>
                <div className="absolute  h-[6.4rem] top-[-6.4rem] left-24 border-l border-dashed border-gray-100"></div>
              </div>
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-fuchsia-500 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(217,70,239,0.65)] duration-200">6</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-fuchsia-500 group-hover:shadow-[0_0_0_3px_rgb(217,70,239,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period6? period6 : "No Class"}</p>
                  <p className="text-center font-medium text-base">{loaction6?loaction6:"----"}</p>
                </div>
                <div className="absolute  h-[6.4rem] top-[-6.4rem] left-24 border-l border-dashed border-gray-100"></div>
              </div>
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-lime-400 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(163,230,53,0.65)] duration-200">4</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-lime-400 group-hover:shadow-[0_0_0_3px_rgb(163,230,53,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period4? period4 : "No Class"}</p>
                  <p className="text-center font-medium text-base">{loaction4?loaction4:"----"}</p>
                </div>
                <div className="absolute  h-[6.4rem] top-[-6.4rem] left-24 border-l border-dashed border-gray-100"></div>
              </div>
              <div className="relative w-48 h-24 group">
                <div className="absolute z-20 w-12 h-12 flex justify-center items-center -top-5 -left-5 text-center font-medium
                        text-xl text-gray-900 rounded-full border-2 border-orange-400 bg-gray-100 group-hover:shadow-[0_0_0_3px_rgb(251,146,60,0.65)] duration-200">2</div>
                <div className="absolute z-10 w-full h-full p-5 text-lg text-gray-900 rounded-xl bg-orange-400 group-hover:shadow-[0_0_0_3px_rgb(251,146,60,0.65)] duration-200">
                  <p className="text-center line-clamp-1">{period2? period2 : "No Class"}</p>
                  <p className="text-center font-medium text-base">{loaction2?loaction2:"----"}</p>
                </div>
                <div className="absolute  h-[6.4rem] top-[-6.4rem] left-24 border-l border-dashed border-gray-100"></div>
              </div>
            </div>
          </div>
          {/* Attendance Section */}
          <div className=" h-[50rem] gap-0" id="Attendence">
            <p className=" text-[90px] font-bold text-gray-200 select-none">
              Attendance
            </p>
            <div className=" border-2 bg-[#082538] text-slate-200">
              <Bar
                data={{
                  labels: [
                    "DBMS",
                    "Scripting",
                    "Computer Networks",
                    "Operating Systems",
                    "AI & Soft Computing",
                  ],
                  datasets: [
                    {
                      label: "Current",
                      data: [15, 10, 13, 16, 18],
                      borderColor: "#36A2EB",
                      backgroundColor: "#59e6e6",
                    },
                    {
                      label: "Required (To complete 75%)",
                      data: [9, 10, 9, 4, 7],
                      borderColor: "#FF6384",
                      backgroundColor: "#ff6384",
                    },
                  ],
                }}
                className="text-slate-200"
                options={{
                  scales: {
                    x: {
                      beginAtZero: true,
                      stacked: true,
                    },
                    y: {
                      beginAtZero: true,
                      stacked: true,
                    },
                  },
                }}
              />
            </div>
          </div>
          {/* Updates */}
          <div className="relative h-[47.8rem] px-3 mt-10 gap-10" id="Updates">
            <div className=" relative z-10 h-full px-10 pt-16 flex flex-col gap-14">
              {/* <!-- heading --> */}
              <div className="text-[40px] font-medium flex gap-4">
                <div className="relative">
                  <span className=" text-gray-200 text-[45px]">Opportunities</span>
                  <div className="absolute left-20 bottom-1 w-48 h-1 bg-sky-500 rounded-md"></div>
                  <div className="absolute left-1 bottom-1 w-7 h-1 bg-sky-500 rounded-md"></div>
                </div>
                <span className="relative top-2 text-sky-500 bg-sky-800 rounded-sm  px-1 inline-block -skew-x-[15deg]">
                  <span className="font-normal">For You</span>
                </span>
              </div>
              {/* <!-- cards --> */}
              <div className="flex gap-10">
                {/* <!-- card 1 --> */}
                <div className="relative w-1/3 h-[25rem] px-6 py-8 bg-slate-900  border-[1.5px] border-gray-600 rounded-lg 
                        group hover:border-gray-500 duration-200">
                  <div className="absolute rounded-md h-full w-0 bg-slate-950 opacity-25 top-0 left-0
                            group-hover:w-full duration-200 ease-in-out"></div>
                  <div className="flex items-center gap-6">
                    <img src="linkedin-logo-linkedin-icon-transparent-free-png.png" alt="logo" className="relative z-40 w-16 h-16 rounded-lg group-hover:scale-105 duration-200" />
                    <div className="text-gray-200 flex flex-col gap-1">
                      <h2 className="relative z-40 text-2xl font-semibold">Linked In</h2>
                      <div className="flex gap-2 items-center text-sm text-gray-400">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Bangalore</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-1">
                    <h2 className="text-gray-200 font-medium text-xl line-clamp-1">React Native Web Dev eloper</h2>
                    <div className="flex gap-5 items-center text-sm text-gray-400">
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-building"></i>
                        <p>Full Time</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-clock"></i>
                        <p>5 Hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-gray-200">
                    <p className="text-balance tracking-wider line-clamp-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, cupiditate, pariatur ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                  <div className="mt-7 flex">
                    <button className="relative z-40 py-2 px-3 flex gap-3 items-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 group-hover:border-sky-500 duration-200">
                      <p>Know more</p>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- card 2 --> */}
                <div className="relative w-1/3 h-[25rem] px-6 py-8 bg-slate-900  border-[1.5px] border-gray-600 rounded-lg 
                        group hover:border-gray-500 duration-200">
                  <div className="absolute rounded-md h-full w-0 bg-slate-950 opacity-25 top-0 left-0
                            group-hover:w-full duration-200 ease-in-out"></div>
                  <div className="flex items-center gap-6">
                    <img src="1_MxZpRFN3hnZrCC05s1q73A.png" alt="logo" className="relative z-40 w-16 h-16 rounded-lg group-hover:scale-105 duration-200" />
                    <div className="text-gray-200 flex flex-col gap-1">
                      <h2 className="relative z-40 text-2xl font-semibold">Microsoft</h2>
                      <div className="flex gap-2 items-center text-sm text-gray-400">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Bangalore</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-1">
                    <h2 className="text-gray-200 font-medium text-xl line-clamp-1">Summer Internship Program</h2>
                    <div className="flex gap-5 items-center text-sm text-gray-400">
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-building"></i>
                        <p>Part Time</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-clock"></i>
                        <p>5 Hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-gray-200">
                    <p className="text-balance tracking-wider line-clamp-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, cupiditate, pariatur ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                  <div className="mt-7 flex">
                    <button className="relative z-40 py-2 px-3 flex gap-3 items-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 group-hover:border-sky-500 duration-200">
                      <p>Know more</p>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- card 3 --> */}
                <div className="relative w-1/3 h-[25rem] px-6 py-8 bg-slate-900  border-[1.5px] border-gray-600 rounded-lg 
                        group hover:border-gray-500 duration-200">
                  <div className="absolute rounded-md h-full w-0 bg-slate-950 opacity-25 top-0 left-0
                            group-hover:w-full duration-200 ease-in-out"></div>
                  <div className="flex items-center gap-6">
                    <img src="Oracle-Logo.jpg" alt="logo" className="relative z-40 w-16 h-16 rounded-lg group-hover:scale-105 duration-200" />
                    <div className="text-gray-200 flex flex-col gap-1">
                      <h2 className="relative z-40 text-2xl font-semibold">Oracle</h2>
                      <div className="flex gap-2 items-center text-sm text-gray-400">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>New Delhi</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-1">
                    <h2 className="text-gray-200 font-medium text-xl line-clamp-1">Java Software Engineer</h2>
                    <div className="flex gap-5 items-center text-sm text-gray-400">
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-building"></i>
                        <p>Full Time</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-clock"></i>
                        <p>5 Hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-gray-200">
                    <p className="text-balance tracking-wider line-clamp-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, cupiditate, pariatur ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                  <div className="mt-7 flex">
                    <button className="relative z-40 py-2 px-3 flex gap-3 items-center rounded-md border-[1.5px] border-transparent bg-sky-900 text-sky-500 group-hover:border-sky-500 duration-200">
                      <p>Know more</p>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- button --> */}
              <div className="flex justify-end items-end gap-4 pr-8">
                <div className="h-4 w-4 rounded-full bg-sky-500 -skew-x-[15deg]"></div>
                <div className="h-4 w-4 rounded-full bg-sky-500 -skew-x-[15deg]"></div>
                <div className="h-4 w-4 rounded-full bg-sky-500 -skew-x-[15deg]"></div>
                <div>
                  <Link href="/review">
                  <button className="relative z-20 w-48 h-14 py-2 px-3 flex gap-4 justify-center items-center rounded-sm bg-gray-200 text-sky-600 hover:bg-gray-200">
                    <div className="absolute z-30 w-7 h-[70px] right-6 bg-sky-700 -skew-x-[15deg]" ></div>
                    <p className="text-xl font-medium">View more</p>
                    <i className="z-40 fa-solid fa-arrow-right text-gray-200"></i>
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>

  );
};

export default ProfilePage;
