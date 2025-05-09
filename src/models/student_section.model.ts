import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const SectionSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  sectionId: {
    type: String,
    ref: 'Section', 
    required: true
  },
  studentId: {
    type: String,
    ref: 'Student', 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: null
},
}, {
  _id: false,
  timestamps: true
});

export default mongoose.model('Student_section', SectionSchema);
