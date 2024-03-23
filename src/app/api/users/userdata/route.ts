import { NextRequest, NextResponse } from "next/server";
import Student2022 from "@/model/studentModel";
import { connect } from "@/dbconfig/dbconfig";
import { getDataFromToken } from "@/helper/getDataFromToken";

connect();

export async function GET(req: NextRequest) {
    try {
        // Accessing query parameters from request URL
        const rollno = await getDataFromToken(req);
        
        // Find student in the database based on roll number
        const student = await Student2022.findOne({ rollno:rollno });
        // If no student found, return a not found response
        if (!student) {
            return NextResponse.json({
                success: false,
                message: "Student not found"
            }, { status: 404 });
        }

        // If student found, return success response with student data
        return NextResponse.json({
            success: true,
            message: "Student data fetched successfully",
            data: student
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
