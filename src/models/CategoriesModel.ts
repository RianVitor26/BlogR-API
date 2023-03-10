import mongoose from 'mongoose';

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    ref: 'Users',
    required: false,
  },

  description: {
    type: String,
    require: false,
  },
  color: {
    type: String,
    required: false,
  }
});

export const CategoriesModel = mongoose.model('Categories', CategoriesSchema);
