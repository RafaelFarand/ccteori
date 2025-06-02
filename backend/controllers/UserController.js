import User from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password", "refresh_token"] } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await User.create({ username, email, password, role });
    res.status(201).json({ message: "User berhasil dibuat", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


