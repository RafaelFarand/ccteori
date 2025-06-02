import express from "express";
import {
  getKeuangan,
  tambahSetoran,
  tambahPengeluaran,
  updateKeuangan,
  getSummary,
} from "../controllers/KeuanganController.js";

const router = express.Router();

// Semua endpoint tanpa verifyToken/authorizeRoles
router.get("/", getKeuangan);
router.get("/summary", getSummary);
router.post("/setoran", tambahSetoran);
router.post("/pengeluaran", tambahPengeluaran);
router.put("/update/:id", updateKeuangan);

export default router;