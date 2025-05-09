import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ClassSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  schoolId: {
    type: String,
    ref: 'School', 
    required: true
  },
  name: {
    type: String,
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

export default mongoose.model('Class', ClassSchema);
