import mongoose from "mongoose"
const attendenceSchema = new mongoose.Schema({
    rollno: {
      type: String,
      required: true,
      unique: true,
    },
    subjects: [{
      subject: {
        type: String,
        required: true,
      },
      attendance: {
        type: String,
        required: true,
      },
    }],
  });
 const Attendance=mongoose.model.Attendance||mongoose.model("Attendance",attendenceSchema);
 export default Attendance;