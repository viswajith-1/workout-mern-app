const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const createToken = (_id) => {
      return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
    };
    const token = createToken(user._id);
    const user = await User.signup(email, token);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
