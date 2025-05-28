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
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    }
});

export default mongoose.model('Admin', schema);