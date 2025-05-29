import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number"],
    set: v => Math.round(v * 100) / 100
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity in stock must be positive."]
  },
  quantitySold: {
    type: Number,
    required: true,
    min: [0, "Quantity sold must be positive."]
  },
  active: {
    type: Boolean,
    default: true,
    required: true
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
      required: false
    }
  ],
  image: {
    type: String,
    required: true,
    trim: true
  }
});

export default mongoose.model('Product', schema);
