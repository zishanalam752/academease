import { NextRequest, NextResponse } from "next/server";
// import Student2022 from "@/model/studentModel";
import { connect } from "@/dbconfig/dbconfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import Attendance from "@/model/attendenceModel"; // Corrected the typo here

connect();

export async function GET(req: NextRequest) {
    try {
        // Accessing query parameters from request URL
        const rollno = await getDataFromToken(req);
               
        // Find student in the database based on roll number
        
         const attendance=await Attendance.findOne({rollNo : rollno}); 
         
         if(!attendance){
             return new Response(" Attendance record Not Found",{status:404})}
        
         // If both student and attendance found, return success response with data
         return NextResponse.json({
            success: true,
            message: "Student data fetched successfully",
            attendance,
        }, { status: 200 });
        

    } catch (error: any) {
        // Handle internal server errors
        return NextResponse.json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        }, { status: 500 });
    }
}

