import express from "express";
import {
  getAllUsers,
  createUser,
} from "../controllers/UserController.js";
import { dummyAuth, authorizeRoles } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.use(dummyAuth);

router.get("/user", authorizeRoles("bendahara"), getAllUsers);
router.post("/add-user", createUser);

export default router;