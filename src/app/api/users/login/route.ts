// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import bcryptjs from "bcryptjs";
import User from "@/model/userModel";
import jwt from "jsonwebtoken";

// Establish database connection
connect();

// Interface for the request body
interface RequestBody {
  rollno: string;
  password: string;
}

// Handler function for POST request
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: RequestBody = await request.json();
    const { rollno, password } = body;

    // Check if roll number and password are provided
    if (!rollno || !password) {
      return NextResponse.json({
        success: false,
        message: "All fields are required!",
      }, { status: 400 });
    }

    // Check if roll number is a valid number
    if (isNaN(Number(rollno))) {
      return NextResponse.json({
        success: false,
        message: 'Invalid Roll Number!',
      }, { status: 400 });
    }

    // Find user in the database based on roll number
    const user = await User.findOne({ rollno });

    // If user not found, return error response
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User Not Found!",
      }, { status: 401 });
    }

    // Compare provided password with hashed password stored in the database
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    // If password is incorrect, return error response
    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        message: "Incorrect Password!",
      }, { status: 400 });
    }

    // Generate JWT token containing user data
    const tokenData = {
      id: user._id,
      rollno: user.rollno,
      email: user.email,
    };

    // Sign the token with a secret key
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

    // Create a success response
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // Set the token in response cookies
    response.cookies.set("token", token, { httpOnly: true });

    // Return the response
    return response;
  } catch (error: any) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      return NextResponse.json({
        success: false,
        message: error.message,
      }, { status: 400 });
    }

    // Handle other errors
    return NextResponse.json({
      success: false,
      message: "Internal Server Error!",
      error: error.message,
    }, { status: 500 });
  }
}
