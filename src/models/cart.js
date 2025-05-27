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
          min: [1, "A quantidade mínima é 1"]
        }
      }
    ],
    validate: [
      {
        validator: function (products) {
          return products.length > 0;
        },
        message: "O carrinho deve conter ao menos um produto."
      },
      {
        validator: function (products) {
          const uniqueIds = new Set(products.map(p => p.product.toString()));
          return uniqueIds.size === products.length;
        },
        message: "Não é permitido ter o mesmo produto mais de uma vez no carrinho."
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

// Impede alterações se o carrinho já foi vendido
cartSchema.pre('save', function (next) {
  if (!this.isNew && this.sold && this.isModified()) {
    return next(new Error("Carrinho já finalizado não pode ser modificado."));
  }
  next();
});

export default mongoose.model('Cart', cartSchema);
