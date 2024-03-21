import { NextRequest, NextResponse } from "next/server"
import { connect } from "@/dbconfig/dbconfig"
import bcryptjs from "bcryptjs"
import User from "@/model/userModel";
import jwt from "jsonwebtoken";
connect();


export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { rollno, password } = body;
        // console.log(body)
        if (!rollno || !password) {
            return NextResponse.json({
                success: false,
                message: "All fields are required!"
            }, { status: 400 })
        }
        // Checking the roll number format
        if (isNaN(Number(rollno))) {
            return NextResponse.json({
                success: false,
                message: 'Invalid Roll Number!'
            }, { status: 400 })
        }
        console.log(isNaN(Number(rollno)))
        const user = await User.findOne({ rollno });
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User Not Found!",
            }, { status: 401 });
        }
        const passwordIsValid = await bcryptjs.compare(password, user.password);
        console.log(passwordIsValid)
        if (!passwordIsValid) {
            return NextResponse.json({
                success: false,
                message: "Incorrect Password!",
            }, { status: 400});
        }
        // console.log(user)
        //create token data
        const tokenData = {
            id: user._id,
            rollno: user.rollno,
            email: user.email
        }
        console.log("tokendata",tokenData)
        //create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        console.log(token)
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, { httpOnly: true });
        console.log(response)
        return response;
    }
    catch (error: any) {
        return NextResponse.json({
            success: false,
            message: "Internal Server Error!",
            error: error.message
        }, { status: 500 })
    }
}