import express from "express";
import {
  getKeuangan,
  tambahSetoran,
  tambahPengeluaran,
  updateKeuangan,
} from "../controllers/KeuanganController.js";
import { dummyAuth, authorizeRoles } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.use(dummyAuth);

router.get("/get", getKeuangan);
router.post("/setoran", authorizeRoles("anggota", "bendahara"), tambahSetoran);
router.post("/pengeluaran", authorizeRoles("bendahara"), tambahPengeluaran);
router.put("/update/:id", authorizeRoles("bendahara"), updateKeuangan);

export default router;