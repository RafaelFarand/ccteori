import User from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
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

// Login sederhana tanpa token
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Username tidak ditemukan" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Password salah" });
    }
    res.json({
      message: "Login berhasil",
      username: user.username,
      role: user.role,
      email: user.email,
      id: user.id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


