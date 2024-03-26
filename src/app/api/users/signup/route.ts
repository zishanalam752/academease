import { connect } from "@/dbconfig/dbconfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";
import Student2022 from "@/model/studentModel"
// Establish database connection
connect();

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const reqBody = await request.json();
        const { email, password, rollno, confirmpassword } = reqBody;

        // Validate required fields
        if (!email || !password || !rollno || !confirmpassword) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required'
            }, { status: 400 });
        }

        // Check if password matches confirmation password
        if (password !== confirmpassword) {
            return NextResponse.json({
                success: false,
                message: "Password and Confirm password do not match",
            }, { status: 409 });
        }

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: 'User already exists.'
            }, { status: 400 });
        }

        // Validate roll number format
        if (isNaN(Number(rollno))) {
            return NextResponse.json({
                success: false,
                message: 'Invalid Roll Number!'
            }, { status: 400 });
        }
        // const checkEmail= email.split('@');
        // if(isNaN(Number(checkEmail[0]))){
        //     return NextResponse.json({
        //         success :false ,
        //         message:"Please enter valid Email id"
        //     })
        // }
            const checkRollno=await Student2022.findOne({rollno})
            // const checkEmailIdNum=await Student2022.findOne({rollno:checkEmail[0]});

                if(!checkRollno  ) {
                    return NextResponse.json({
                        success:false,
                        message:"RollNo or EmailId is wrong, please enter Domain mail and  correct Roll No."
                    },{status:404});
                } 
        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create new user instance
        const newUser = new User({
            email,
            password: hashedPassword,
            rollno,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();


        //send verification mail

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
        // Return success response

        return NextResponse.json({
            success: true,
            data: savedUser,
            message: "User created successfully"
        }, { status: 201 });

    } catch (error: any) {
        // Handle internal server errors
        console.error("Signup error:", error.message);
        return NextResponse.json({
            success: false,
            error: "Internal server error"
        }, { status: 500 });
    }
}
