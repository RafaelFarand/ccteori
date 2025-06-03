import express from "express";
import cors from "cors";
import keuanganRoutes from "./routes/KeuanganRoute.js";
import userRoutes from "./routes/UserRoute.js";

const app = express();
const port = 5000;

app.use(cors({
  origin:'http://35.224.221.167',
  credentials: true
}));
app.use(express.json());
app.use("/api/keuangan", keuanganRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});