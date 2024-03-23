import { NextRequest, NextResponse } from "next/server"
import { connect } from "@/dbconfig/dbconfig"
import bcryptjs from "bcryptjs"
import User from "@/model/userModel";
import jwt from "jsonwebtoken";

connect();

interface RequestBody {
  rollno: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { rollno, password } = body;

    if (!rollno || !password) {
      return NextResponse.json({
        success: false,
        message: "All fields are required!",
      }, { status: 400 })
    }

    if (isNaN(Number(rollno))) {
      return NextResponse.json({
        success: false,
        message: 'Invalid Roll Number!',
      }, { status: 400 })
    }

    const user = await User.findOne({ rollno });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User Not Found!",
      }, { status: 401 });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        message: "Incorrect Password!",
      }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      rollno: user.rollno,
      email: user.email,
    }

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return NextResponse.json({
        success: false,
        message: error.message,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: "Internal Server Error!",
      error: error.message,
    }, { status: 500 });
  }
}