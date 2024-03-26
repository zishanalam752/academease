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
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "99e37217a42393",
        pass: "66dfcaa93b9788"
      }
    });
      const mailOptions={
        from:'zishanalam752@gmail.com',
        to:email,
        sunbject:emailType==='VERIFY'?"Verify your email":"Reset your password",
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
      }
      const mailresponse = await transport.sendMail
      (mailOptions);
      return mailresponse;
}
    catch (error:any) {
      throw new Error(error.message)  
    }
}