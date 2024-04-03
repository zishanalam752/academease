import { NextRequest, NextResponse } from "next/server";
// import Student2022 from "@/model/studentModel";
import { connect } from "@/dbconfig/dbconfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
connect();

export async function GET(req:NextRequest) {
    try {
        const token =await getDataFromToken(req);
        if(!token)
        return NextResponse.json({success:false,data:false})
    else
    return NextResponse.json({success:true,data:true})
    } catch (error:any) {
        return NextResponse.json({
            success: false,
            message: error.message,
        },{status:500})
    }
    
}