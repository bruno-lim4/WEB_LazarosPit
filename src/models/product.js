import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true,
        trim: true
    }],
    image: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model('Product', schema);