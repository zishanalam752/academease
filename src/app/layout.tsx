import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { useEffect,useRef } from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "@/lib/provider";

const inter = Poppins({
 weight:"600",
 subsets:["devanagari"],
})


export const metadata: Metadata = {
  title: 'AcademEase',
  description: 'Student Portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Toaster></Toaster>
        </ReduxProvider>
        </body>
    </html>
  );
}
