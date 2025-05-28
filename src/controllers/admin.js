import mongoose from "mongoose";
import Admin from '../models/admin.js';
import bcrypt from 'bcrypt';

const controller = {};

controller.get = async (req, res) => {
    try {
        const data = await Admin.find({}, 'name phoneNumber createdAt email');
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

controller.getById = async (req, res) => {
    try {
        const data = await Admin.findById(req.params.id);
        if (!data) return res.status(404).send({ message: "Administrador não encontrado" });
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

controller.post = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const admin = new Admin(req.body);
    try {
        await admin.save();
        res.status(201).send({ message: "Administrador cadastrado com sucesso" });
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

controller.put = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedAdmin) {
            return res.status(404).send({ message: "Administrador não encontrado" });
        }

        res.status(200).send({ message: "Administrador atualizado com sucesso" });
    } catch (e) {
        res.status(400).send({ message: "Erro ao atualizar o administrador", error: e.message });
    }
};

controller.delete = async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);

        if (!deletedAdmin) {
            return res.status(404).send({ message: "Administrador não encontrado" });
        }

        res.status(200).send({ message: "Administrador deletado com sucesso" });
    } catch (e) {
        res.status(400).send({ message: "Erro ao deletar o administrador", error: e.message });
    }
};

export default controller;
