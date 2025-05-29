import mongoose from "mongoose";
import Product from '../models/product.js';

const controller = {};

controller.get = async (req, res) => {
    try {
        const data = await Product.find({ active: true }).populate('tags', 'name').select('name image description price quantity quantitySold tags');
        res.status(200).send(data)
    } catch (e) {
        res.status(400).send({e})
    }
}
controller.getByTag = async (req, res) => {
    try {
        const data = await Product.find({active: true, tags: req.params.tag});
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({e})
    }
}
controller.getById = async (req, res) => {
    try {
        const data = await Product.findOne({_id: req.params.id}).populate('tags', 'name');
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({e})
    }
}

controller.post = async (req, res) => {
    const product = new Product(req.body)
    try {
        await product.save();
        res.status(201).send({
            message: "Produto cadastrado"
        });
    } catch(e) {
        res.status(400).send({e})
    }
}

controller.put = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,               
            { $set: req.body }
        );

        if (!updatedProduct) {
            return res.status(404).send({ message: "Produto não encontrado" });
        }

        res.status(200).send({
            message: "Produto atualizado com sucesso"
        });
    } catch (error) {
        res.status(400).send({
            message: "Erro ao atualizar o produto",
            error: error
        });
    }
};


controller.delete = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {
            return res.status(404).send({ message: "Produto não encontrado" });
        }

        res.status(200).send({
            message: "Produto deletado com sucesso"
        });
    } catch (error) {
        res.status(400).send({
            message: "Erro ao deletar o produto",
            error: error
        });
    }
};

export default controller;