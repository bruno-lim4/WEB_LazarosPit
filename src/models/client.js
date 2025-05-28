import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: "Invalid email"
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [6, 'Password must be at least 6 characters long']
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d+$/, 'Phone number must contain digits only']
  },
  weight: {
    type: Number,
    required: true,
    min: [20, "Weight must be at least 20kg"],
    max: [500, "Weight must be less than 500kg"]
  },
  birthDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const now = new Date();
        return value < now && 1900 <= value.getFullYear();
      },
      message: 'Birth date is not valid. The date must not be in the future, and the year must be greater than or equal to 1900'
    }
  },
  zipCode: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: v => /^\d{8}$/.test(v),
      message: 'ZIP code must be exactly 8 digits'
    }
  },
  street: {
    type: String,
    required: true,
    trim: true
  },
  addressNumber: {
    type: String,
    required: true,
    trim: true
  },
  neighborhood: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  complement: {
    type: String,
    trim: true // não obrigatório
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  }
});

export default mongoose.model('Client', schema);
