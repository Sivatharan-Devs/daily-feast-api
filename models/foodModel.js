import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A food must have a name'],
    unique: true,
    trim: true,
  },
  categories: {
    type: [String],
    required: [true, 'A food must have atleast one category'],
    validate: {
      validator: (value) => value.length > 0,
      message: 'A food must have atleast one category',
    },
  },
  ratingsAverage: {
    type: Number,
    default: 0.0,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A food must have a price'],
  },
  priceDiscount: {
    type: Number,
    default: 0.0,
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A food must have a description'],
  },
  imageCover: {
    type: String,
    required: [true, 'A food must have a cover image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = mongoose.model('Food', foodSchema);

export default Food;
