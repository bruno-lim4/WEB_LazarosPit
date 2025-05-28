import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Client from '../models/client.js'; 
import Admin from '../models/admin.js';
import bcrypt from "bcrypt";

const controller = {};

controller.get = async (req, res) => {
    try {
        const data = await Client.find({}, 'name password email phoneNumber city state');
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
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const client = new Client(req.body);
    try {
        await client.save();
        res.status(201).send({ message: "Cliente cadastrado com sucesso" });
    } catch (e) {
        if (e.code === 11000 && e.keyPattern.email) {
            // Erro de duplicidade de e-mail
            return res.status(409).json({ error: 'This email is already registered.' });
        }
        res.status(400).json({ error: 'Registration failed.' });
    }
};

controller.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let isAdmin = false

        let user = await Admin.findOne({ email });

        if (user) {
            isAdmin = true;
        } else {
            user = await Client.findOne({ email });
            if (!user) return res.status(400).json({error:'Invalid email or password'});
        }

        const correctPasswd = await bcrypt.compare(password, user.password);
        if (!correctPasswd) return res.status(400).json({error:'Invalid email or password'});

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                isAdmin
            },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );
        res.status(200).json({ token });
    } catch(e) {
        res.status(500).json({ error: e });
    }
}

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
