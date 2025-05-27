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

export default controller;
