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
  },
  weight: {
    type: Number,
    required: true,
    min: [20, "Peso muito baixo."],
    max: [500, "Peso muito alto."]
  },
  birthDate: {
    type: Date,
    required: true
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
