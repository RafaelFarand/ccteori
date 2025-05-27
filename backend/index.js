import express from "express";
import keuanganRoutes from "./routes/Keuanganroute.js";
import userRoutes from "./routes/UserRoute.js";

const app = express();
app.use(express.json());

app.use("/api/keuangan", keuanganRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});