"use client";
import React, { useEffect } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import axios from "axios";
import {useRouter} from "next/navigation"
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { toast } from "sonner";


export function LoginFormDemo() {
  const router=useRouter();
  const [user,setUser]=React.useState({
    rollno:"",
    password:""
  })
  const [loading,setLoading]=React.useState(false);
  const [buttonDisabled,setButtonDisabled]=React.useState(true)
 const handleSubmit=async()=>{
    try {
         setLoading(true);
         if (user.rollno==="") throw new Error("Roll No is required");
         else if (user.password=="" )throw new Error ("Password is required");

         const response=await axios.post("/api/users/login",user);
         console.log("Login success",response.data);
         toast.success("Login success");
         router.push("/profile");
        //  console.log(response)
    } catch (error:any) {
     console.log("Error occur while login",error.message)
     toast.error("Something went wrong")
    }
    finally{
      setLoading(false);
    }
 }
  function handleChange(e:any){
     e.preventDefault();
     setUser((prevData)=>({
         ...prevData,
         [e.target.name]:e.target.value
     }))
     console.log(user)
  }
  useEffect(()=>{
    if(user.rollno.length>0&& user.password.length>0){
       setButtonDisabled(false);
    }
    else{
       setButtonDisabled(true);
    }
},[user])
  return (
    <div className="max-w-md h-auto w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 my-24  shadow-input bg-white dark:bg-black  border-slate-700 border-[.25px] mb-[14rem] ">
      <p className="text-neutral-600 text-2xl max-w-sm mt-2 dark:text-white text-center">
        {
          loading?("Processing"):("Login")
        }
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="rollno">Roll No.</Label>
          <Input id="rollno" placeholder="eg: 12912032" type="rollno" value={user.rollno} name="rollno" onChange={handleChange} required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={user.password} name="password" onChange={handleChange} required />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {"Login"} &rarr;
          <BottomGradient />
        </button>

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
  );
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
