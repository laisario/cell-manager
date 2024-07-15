const userService = require('../services/user')

const create = async (req, res) => {
    try {
        const user = await userService.create(req.body);
        return res.status(201).json(user);
    } catch (err) {
        const erros = err.errors.map((erro) => erro.message)
        return res.status(400).json({ erro: erros });
    }
};

const findAll = async (req, res) => {
    try {
        const users = await userService.findAll();
        return res.status(200).json(users);
    } catch (err) {
        const erros = err.errors.map((erro) => erro.message)
        return res.status(400).json({ erro: erros});
    }
};

const findByEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userService.findByEmail(email);
        return res.status(200).json(user);
    } catch (err) {
        const erros = err.errors.map((erro) => erro.message)
        return res.status(400).json({ erro: erros });
    }
};

const updateByEmail = async (req, res) => {
    try {
        const user = await userService.updateByEmail(req.body);
        return res.status(200).json(user);
    } catch (err) {
        const erros = err.errors.map((erro) => erro.message)
        return res.status(400).json({ erro: erros });
    }
};

const deleteByEmail = async (req, res) => {
    const { email } = req.body;
    try {
        await userService.deleteByEmail(email);
        return res.status(204).end();
    } catch (err) {
        const erros = err.errors.map((erro) => erro.message)
        return res.status(400).json({ erro: erros });
    }
};

module.exports = { create, findAll, findByEmail, updateByEmail, deleteByEmail };