import { NextRequest,NextResponse } from "next/server";
import User from "@/model/userModel";
import otpGenerator from "otp-generator"


export async function POST(request:NextRequest){
    try {
       const reqbody= await request.json();
       const{email}=reqbody; 
       const existingUser =await User.findOne({email});
       if(existingUser) throw new Error("Email is already in use");
       const otp= otpGenerator.generate(6, 
        { upperCaseAlphabets: false, specialChars: false });
        
    
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:"OTP cannot be sent"
        },{status:500})
    }
}