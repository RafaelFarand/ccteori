import express from "express";
import {
  getAllUsers,
  createUser,
  loginUser, // tambahkan loginUser
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/add-user", createUser);
router.post("/login", loginUser); // tambahkan endpoint login
router.get("/user", getAllUsers); // hapus authorizeRoles

export default router;