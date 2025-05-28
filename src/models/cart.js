import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  products: {
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Minimum quantity is 1"]
        }
      }
    ],
    validate: [
      {
        validator: function (products) {
          return products.length > 0;
        },
        message: "The cart must contain at least one product."
      },
      {
        validator: function (products) {
          const uniqueIds = new Set(products.map(p => p.product.toString()));
          return uniqueIds.size === products.length;
        },
        message: "Duplicate products are not allowed in the cart."
      }
    ]
  },
  sold: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  }
});

// Prevent changes if the cart has already been marked as sold
cartSchema.pre('save', function (next) {
  if (!this.isNew && this.sold && this.isModified()) {
    return next(new Error("Finalized cart cannot be modified."));
  }
  next();
});

export default mongoose.model('Cart', cartSchema);
