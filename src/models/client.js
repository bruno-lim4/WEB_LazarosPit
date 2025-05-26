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
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    weight: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    zipCode: {
        type: String,
        required: true,
        trim: true
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
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Client', schema);