import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',    // nome do modelo do cliente
    required: true
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',  // nome do modelo do produto
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  sold: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Cart', cartSchema);
