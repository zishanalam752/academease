
"use client";
// import { SignupFormDemo } from '../Signup'

import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";
export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[user,setUser]=React.useState({firstName:"",lastName:"",email:"",password:"",confirmpassword:"",rollno:""});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const[buttonDisabled, setButtonDisabled]=React.useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading,setLoading]=React.useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
         if(user.email.length>0&& user.password.length>0&&user.firstName.length>0&& user.lastName.length>0&&user.rollno.length>0){
            setButtonDisabled(false);
         }
         else{
            setButtonDisabled(true);
         }
  },[user])
  function handleChange(e:any) {
    console.log(user);
    setUser((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const submitHandler=async(e:any)=>{
    try {
      e.preventDefault();
        setLoading(true);
        const response=await axios.post("/api/users/signup",user);
        console.log("Signup success",response.data);
        router.push("/login")
    } catch (error:any) {
        console.log("Signup failed",error.message)
      toast.error(error.message);  
    }
    finally{
        setLoading(false);
    }
  }
  return (
    <div className='w-full h-[1050px] mt-[80px]'>
       <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        {loading?("Processing"):("Signup")}
      </h2>
      

      <form className="my-8" onSubmit={submitHandler} >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="Tyler" type="text" value={user.firstName} name="firstName"  onChange={handleChange} required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Durden" type="text" value={user.lastName} name="lastName"   onChange={handleChange} required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="rollno">Roll No.</Label>
          <Input id="rollno" placeholder="eg: 12912032" type="text" value={user.rollno} name="rollno"  onChange={handleChange} required />
        </LabelInputContainer> 
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={user.email} name="email"  onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={user.password} name="password" onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmpassword">Confirm password</Label>
          <Input
            id="confirmpassword"
            placeholder="••••••••"
            type="confirmpassword"
            value={user.confirmpassword}
            onChange={handleChange}
            name="confirmpassword"
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"

        >
         {
            buttonDisabled?("No signup (please fill all feilds)"):("signup")
         }
          <BottomGradient />
        </button>
        <div className="text-[13px] text-center mt-3">
        <Link href="/login" className="">Visit  Login Page &rarr;</Link>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  
    </div>
  )
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

