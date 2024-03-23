import  mongoose  from 'mongoose';
const userModel =new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"please provide your first name"],
           
    },
    lastName:{
        type:String,
        required:[true,"please provide your last name"],
    },
    email:{
        type:String,
        required:[true,'Please provide an Email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please provide a Password"]
    }, 
    isVerfied: {
        type: Boolean,
        default: false,
    },
    rollno:
    {
        type:String,
        required:true,
        unique:true
    },
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})
const User = mongoose.models.users || mongoose.model("users", userModel);
export default User;