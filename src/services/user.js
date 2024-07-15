const { User } = require('../models');
const bcrypt = require('bcrypt');

const create = async (newUser) => {
    const {
        email,
        password,
        name,
    } = newUser;
    const hash = await bcrypt.hash(password, 2)
    const result = await User.create({
        email,
        password: hash,
        name
    });
    return result
};

const findAll = async () => {
    const result = await User.findAll();
    return result;
};

const findById = async (id) => {
    const result = await User.findOne({ where: { id } });
    return result;
};

const findByEmail = async (email) => {
    const result = await User.findOne({ where: { email } });
    return result;
};

const updateByEmail = async (newData) => {
    const { email } = newData;

    const user = await findByEmail(email)

    user.update(newData, {
        where: { email },
    });
    await user.save();
    return user;
};

const deleteByEmail = async (email) => User.destroy({ where: { email } });

module.exports = { create, findAll, findByEmail, updateByEmail, deleteByEmail, findById };
