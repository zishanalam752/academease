"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import  {toast}  from "react-hot-toast";
import Link from "next/link";
import {Login,Logout} from "@/lib/features/auth-slice"
import { UseDispatch, useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function LoginPage() {
  const dispatch=useDispatch<AppDispatch>();
  const router = useRouter();
  const [login, setLogin] = useState({
    rollno: "",
    password: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", login);
      // console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
      dispatch(Login());
    } catch (error:any) {
      console.log("Login Failed", error);
      toast.error("passwrd incorrect! or account not found!");

    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    setButtonDisabled(!(login.rollno.length > 0 && login.password.length > 0));
  }, [login]);

  return (
    <div className='w-full h-full'>
      <div className="max-w-md h-auto w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 my-24 shadow-input bg-white dark:bg-black border-slate-700 border-[.25px] mb-[14rem] ">
        <p className="text-neutral-600 text-2xl max-w-sm mt-2 dark:text-white text-center">
          {loading ? "Processing" : "Login"}
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="rollno">Roll No.</Label>
            <Input
              id="rollno"
              placeholder="eg: 12912032"
              type="text"
              value={login.rollno}
              name="rollno"
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              value={login.password}
              name="password"
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={buttonDisabled}
          >
            {loading ? "Processing" : "Login"} &rarr;
            <BottomGradient />
          </button>
          <Link href="/signup">Go to Signup page</Link>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
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
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};
