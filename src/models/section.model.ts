import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const SectionSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  classId: {
    type: String,
    ref: 'Class', // Foreign key referencing Class
    required: true
  },
  name: {
    type: String,
    required: true
  }
}, {
  _id: false,
  timestamps: true
});

export default mongoose.model('Section', SectionSchema);
