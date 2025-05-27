import express from "express";
import {
  getAllUsers,
  createUser,
} from "../controllers/UserController.js";
import { dummyAuth, authorizeRoles } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.use(dummyAuth);

router.get("/", authorizeRoles("bendahara"), getAllUsers);
router.post("/", authorizeRoles("bendahara"), createUser);

export default router;