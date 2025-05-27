import Tag from '../models/tag.js';

const controller = {};

// GET - Listar todas as tags
controller.get = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).send(tags);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

// POST - Criar nova tag
controller.post = async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(201).send({ message: "Tag criada com sucesso" });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

// DELETE - Remover tag por ID
controller.delete = async (req, res) => {
  try {
    const deleted = await Tag.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).send({ message: "Tag não encontrada" });
    }

    res.status(200).send({ message: "Tag deletada com sucesso" });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export default controller;
