"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Zishan",
    designation: "Full Stack Developer",
    image:
      "https://res.cloudinary.com/dekq1nixt/image/upload/v1712217015/FileUpload/gsnzpgypagbz34tqfh18.jpg",
  },
  {
    id: 2,
    name: "Moksh",
    designation: "Frontend Developer",
    image:"https://res.cloudinary.com/dekq1nixt/image/upload/v1712216595/FileUpload/i2qxfnseqgwdm8ap086z.jpg",
  },
  {
    id: 3,
    name: "Nihal",
    designation: "Frontend Developer",
    image:"https://res.cloudinary.com/dekq1nixt/image/upload/v1712216567/FileUpload/ogzdnpmerrqe08iowizj.jpg",
  },
  {
    id: 4,
    name: "Nitin",
    designation: "",
    image:
      "https://res.cloudinary.com/dekq1nixt/image/upload/v1712216568/FileUpload/lmzwvlfcxj5qgx0vxznh.jpg",
  },
  {
    id: 5,
    name: "Ayush",
    designation: " ",
    image:
      "",
  },
  
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
