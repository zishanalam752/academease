import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an Email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a Password']
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
});

// Define the User model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
