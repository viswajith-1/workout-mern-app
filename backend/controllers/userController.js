const User = require('../models/userModel');

const loginUser = async (req, res) => {
    res.json({ message: "Login user controller called" });
}

const signupUser = async (req, res) => {
    res.json({ message: "Signup user controller called" });
}

module.exports = { loginUser, signupUser };