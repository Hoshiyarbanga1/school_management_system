import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const SchoolSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4 
  },
  name: {
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  status:{
    type: Boolean,
    default: true
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

export default mongoose.model('School', SchoolSchema);
