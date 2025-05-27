import express from "express";
import keuanganRoutes from "./routes/Keuanganroute.js";
import userRoutes from "./routes/UserRoute.js";

const app = express();
app.use(express.json());

app.use("/api/keuangan", keuanganRoutes);
app.use("/api/users", userRoutes);

const server = app.listen(5000, '0.0.0.0', () => {
  const addr = server.address();
  console.log(`Server running on http://0.0.0.0:${addr.port}`);
  console.log(`Server details:`, {
    port: addr.port,
    address: addr.address,
    family: addr.family
  });
});