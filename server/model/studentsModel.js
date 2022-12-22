
 
import mongoose  from "mongoose";
const studentSchema = new mongoose.Schema({
  shop_name:{
    type: String,
    required: true,
  },
  student_token: {
    type: String,  
  },
  formData: {
    type: Array,
  },
  shop_id: {
    type: String,  
  },
  serverRequestData: {
    type: String,
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  }

}, {collection: 'student_information'})

const Student = mongoose.model("studentSchema", studentSchema)

export default Student;
 