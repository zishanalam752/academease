import mongoose from 'mongoose';
require("dotenv").config();
export async function connect() {
    try {
        mongoose.connect(process.env.MONG0_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit(1);
        })
    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}