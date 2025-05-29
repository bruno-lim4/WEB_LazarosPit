import mongoose from "mongoose";
import Cart from "../models/cart.js";

const controller = {};

controller.get = async (req, res) => {
  try {
    const carts = await Cart.find()
      .populate('client', 'name email')
      .populate('products.product', 'name price');
    res.status(200).send(carts);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

controller.getById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id)
      .populate('client', 'name email')
      .populate('products.product', 'name price');
    if (!cart) return res.status(404).send({ message: "Carrinho não encontrado" });
    res.status(200).send(cart);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

controller.getByClient = async (req, res) => {
  const { clientId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(clientId)) {
    return res.status(400).send({ message: 'ID de cliente inválido.' });
  }

  try {
    const carts = await Cart.find({ client: clientId })
      .populate('client', 'name email')
      .populate('products.product', 'name price');

    return res.status(200).send(carts);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};

export async function addItemToCart(clientId, productId, quantity = 1) {
  try {
    let cart = await Cart.findOne({ client: clientId, sold: false });

    if (!cart) {
      cart = new Cart({
        client: clientId,
        products: [{ product: productId, quantity }],
      });
    } else {
      const idx = cart.products.findIndex(
        (p) => p.product.toString() === productId.toString(),
      );

      if (idx > -1) {
        cart.products[idx].quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
    }
      await cart.save();
      return cart;
    } catch (err) {
      console.log(err);
      throw err;
    }
}

controller.post = async (req, res) => {
  const cart = new Cart(req.body);
  try {
    await cart.save();
    res.status(201).send({ message: "Carrinho criado com sucesso" });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

controller.put = async (req, res) => {
  try {
    const updated = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updated) return res.status(404).send({ message: "Carrinho não encontrado" });
    res.status(200).send({ message: "Carrinho atualizado com sucesso" });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

controller.delete = async (req, res) => {
  try {
    const deleted = await Cart.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send({ message: "Carrinho não encontrado" });
    res.status(200).send({ message: "Carrinho deletado com sucesso" });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

controller.addProduct = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const clientId = req.user.userId;

    const cart = await addItemToCart(clientId, productId, quantity);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default controller;
