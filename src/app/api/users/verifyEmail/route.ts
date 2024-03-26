import { connect } from "@/dbconfig/dbconfig";
import User from "@/model/userModel";

import { NextRequest,NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest) {
    try {
        const reqBody=await request.json();
        const {token} =reqBody;
        const user=await User.findOne({verifyToken:token,verifyTokenExpiry:{ $gt : new Date()}});  //check if token is valid and not exp
        if(!user){
            return  new Response("User not found",{status:401});
        }
        user.isVerified=true,
        user.verifyToken=undefined
        user.verifyTokenExpiry=undefined
        await user.save();

        return NextResponse.json({message:"Account Verification Successful",
    success:true},{status:200})
    
    } catch (error:any) {
        return NextResponse.json({
            success:false,
            message:"Something went wrong",
            error:error.message
        },{status:500})
    }
}