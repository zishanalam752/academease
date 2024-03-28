"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Reveal from "./Reveal";
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <Reveal><h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white">
            Fuel Your <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Ambition </span><br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold mt-1 leading-none">
              Discover New <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">Job/Internship</span> Opportunities Every Day
              </span>
            </h1></Reveal>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Microsoft",
    image: "https://developer.microsoft.com/_devcom/images/logo-ms-social.png",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Google",
    image: "https://drraymondasemente.com/wp-content/uploads/2017/08/google_logo1600.png",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Meta/Facebook",
    image: "https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Netflix",
    image: "http://1000logos.net/wp-content/uploads/2017/05/emblem-Netflix.jpg",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Apple",
    image: "https://tse2.mm.bing.net/th?id=OIP.ZtrNE9GnhsrUDpGXFZ2gagHaJG&pid=Api&P=0&h=180",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "Amazon",
    image: "https://tse3.mm.bing.net/th?id=OIP.RbDmmt0F982-5AzJmXvXtAHaHa&pid=Api&P=0&h=180",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "Goldman Sachs",
    image: "http://2.bp.blogspot.com/-2GyN-6BbwGI/U5bSWf6OXuI/AAAAAAAACpI/diNFxERAoh4/s1600/Logo+Goldman_Sachs.png",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "Uber",
    image: "https://tse3.mm.bing.net/th?id=OIP.NF9pXP4AlXPqSgrCBRhnsQHaHa&pid=Api&P=0&h=180",
  },
  {
    name: "James Wilson",
    designation: "Flipkart",
    image: "https://assets.entrepreneur.com/content/3x2/2000/20170410124602-Flipkartw.png",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "IBM",
    image: "https://logosmarcas.net/wp-content/uploads/2020/09/IBM-Logo-1967-1972.png",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Accenture",
    image: "https://logodix.com/logo/83251.png",
  },
  {
    name: "Linda Anderson",
    designation: "Oracle",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Symbol.png",
  },
  {
    name: "William Thomas",
    designation: "Adobe",
    image: "https://logodownload.org/wp-content/uploads/2017/04/adobe-logo-1-1.png",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "SAP",
    image: "https://tse3.mm.bing.net/th?id=OIP.0JTV8yOtKYOVWkBKpBqPVwHaE8&pid=Api&P=0&h=180",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "OLA",
    image: "https://tse1.mm.bing.net/th?id=OIP.MWpIizUbVSWK9s0RE9aLMgHaCm&pid=Api&P=0&h=180",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];
