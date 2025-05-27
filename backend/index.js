import express from "express";
import cors from "cors";
import keuanganRoutes from "./routes/KeuanganRoute.js";
import userRoutes from "./routes/UserRoute.js";

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Debug endpoint
app.get("/", (req, res) => {
  res.json({
    message: "API is running",
    endpoints: {
      keuangan: "/api/keuangan/*",
      users: "/api/users/*"
    }
  });
});

// Routes
app.use("/api/keuangan", keuanganRoutes);
app.use("/api/users", userRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString()
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});