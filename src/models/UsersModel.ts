import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
  photo: {
    type: String,
    required: false
  }
});

export const UserModel = mongoose.model('User', userSchema);


