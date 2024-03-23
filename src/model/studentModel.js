import mongoose from 'mongoose'
// import { tree } from 'next/dist/build/templates/app-page'
const studentModel=new mongoose.Schema({
    name:{
        type:String,
        // required:true,
        trim:true,
    },
    rollno:{
        type:String,
        // required:true,
        unique:true
    },
    branch:{
        type:String,
        // required:true,
    },
    section:{
        type:String,
        // required:true,
    },
    subsection:{
        type:String,
        // required:true,
    }
})
const  Student2022 =mongoose.models.students2022 || mongoose.model('students2022',studentModel);
export default Student2022;