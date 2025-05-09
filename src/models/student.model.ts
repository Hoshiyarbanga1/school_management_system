import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const StudentSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  name: {
    type:String,
    required: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  age:{
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
}, {
  _id: false,
  timestamps: true
});

export default mongoose.model('Student', StudentSchema);
