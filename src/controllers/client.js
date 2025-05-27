import mongoose from "mongoose";
import Client from '../models/client.js'; 

const controller = {};

controller.get = async (req, res) => {
    try {
        const data = await Client.find({}, 'name email phoneNumber city state');
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

controller.getById = async (req, res) => {
    try {
        const data = await Client.findById(req.params.id);
        if (!data) return res.status(404).send({ message: "Cliente não encontrado" });
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

controller.post = async (req, res) => {
    const client = new Client(req.body);
    try {
        await client.save();
        res.status(201).send({ message: "Cliente cadastrado com sucesso" });
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

controller.put = async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedClient) {
            return res.status(404).send({ message: "Cliente não encontrado" });
        }

        res.status(200).send({ message: "Cliente atualizado com sucesso" });
    } catch (e) {
        res.status(400).send({ message: "Erro ao atualizar o cliente", error: e.message });
    }
};

controller.delete = async (req, res) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);

        if (!deletedClient) {
            return res.status(404).send({ message: "Cliente não encontrado" });
        }

        res.status(200).send({ message: "Cliente deletado com sucesso" });
    } catch (e) {
        res.status(400).send({ message: "Erro ao deletar o cliente", error: e.message });
    }
};

export default controller;
