import express from "express";
import {
  getKeuangan,
  tambahSetoran,
  tambahPengeluaran,
} from "../controllers/KeuanganController.js";
import { dummyAuth, authorizeRoles } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Add debug logging middleware
router.use((req, res, next) => {
  console.log(`[KeuanganRoute] ${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

router.use(dummyAuth);

// Add test endpoint
router.get("/test", (req, res) => {
  res.json({ message: "KeuanganRoute is working" });
});

router.get("/get", getKeuangan);
router.post("/setoran", authorizeRoles("anggota", "bendahara"), tambahSetoran);
router.post("/pengeluaran", authorizeRoles("bendahara"), tambahPengeluaran);

export default router;