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
    trim: true
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
        const minAge = 13;
  
        const ageDifMs = now - value;
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  
        // Condições:
        return value < now && age >= minAge;
      },
      message: 'Birth date is not valid. Users must be at least 13 years old, and the date must not be in the future'
    }
  },
  zipCode: {
    type: String,
    required: true,
    trim: true,
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
