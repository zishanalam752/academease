"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Logout } from "@/lib/features/auth-slice"
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/lib/store";

export default function ProfilePage() {
    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)
    const router = useRouter()
    const [data, setData] = React.useState(null)
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
            dispatch(Logout())
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
   async function  getDetails(){
    const userdata=getUserDetails();
    setData(await userdata)
   }
   
    useEffect(() => {
        if (isAuth) {
           getDetails();
        }
    }, [isAuth])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            {
                data === null ? ("Nothing") : (
                    <div>
                        <p>{data.name}</p>
                        <p>{data.branch}</p>
                        <p>{data.rollno}</p>
                        <p>{data.section}</p>
                        <p>{data.subsection}</p>

                    </div>
                )
            }
            <hr />
            <button
                onClick={logout}
                className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Logout</button>
        </div>
    )
}
export const getUserDetails = async () => {
    const res = await axios.get('/api/users/userdata')
    return res.data.data;
}