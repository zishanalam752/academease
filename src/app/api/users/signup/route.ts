import {connect} from "@/dbconfig/dbconfig"
import User from "@/model/userModel"
import { NextRequest,NextResponse } from "next/server";

import bcryptjs from "bcryptjs"

connect();
export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {firstName,lastName,email,password,rollno}=reqBody;  
        console.log(reqBody)
        if(!firstName || !lastName  ||!email||!password||!rollno){
            return NextResponse.json({
                success:false,
                message: 'All fields are required'
            },{status:400})
        }
      const user=await User.findOne({email});
      if(user){
        return NextResponse.json({
            success: false,
            message:'User already exists.'
        },{status:400})
      }
      //hash password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword=await bcryptjs.hash(password,salt)
      
      const newUser=new User({
          firstName,
          lastName,
          email,
          password:hashedPassword,
          rollno
      })
     const savedUser= await newUser.save();
      console.log(savedUser)
      return NextResponse.json({
          success:true,
          data:savedUser,
          message:"User created successfully"
      },{status:200})
    } catch (error:any) {
        return NextResponse.json({
            sucess:false,error:error.message,},{status:500})
    }
}