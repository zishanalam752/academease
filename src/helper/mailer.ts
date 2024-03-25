import nodemailer from "nodemailer"
import User from "@/model/userModel"
import bcrypt from "bcryptjs"
export const sendEmail=async({email,emailType,userId}:any)=>{
    try {
       //create a hashed token
       const hashedToken=await bcrypt.hash(userId.toString(),10);
       if(emailType==="VERIFY"){
        await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpiry:Date.now()+3600000})
       }
       else if(emailType==='FORGET'){
           let userInfo = await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now()+3600000})
    } 
    const transporter = nodemailer.createTransport({
        host: "zishanalam752@gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });
      const mailOptions={
        from:'zishanalam752@gmail.com',
        to:email,
        sunbject:emailType==='VERIFY'?"Verify your email":"Reset your password",
        
      }
}
    catch (error:any) {
      throw new Error(error.message)  
    }
}