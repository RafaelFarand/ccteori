import express from "express";
import keuanganRoutes from "./routes/Keuanganroute.js";
import userRoutes from "./routes/UserRoute.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/keuangan", keuanganRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});