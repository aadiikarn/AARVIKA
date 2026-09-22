const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
let mongoConnection = null;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not configured");
  }

  if (!mongoConnection) {
    mongoConnection = mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => {
        mongoConnection = null;
        console.error("MongoDB connection failed:", error.message);
        throw error;
      });
  }

  await mongoConnection;
};

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AARVIKA API is running",
  });
});

// Ensure database connection before employee routes
app.use("/api/employees", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

// API Routes
app.use("/api/employees", employeeRoutes);

// Error handler
app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message || "Internal server error",
  });
});

// Local development
if (require.main === module) {
  const PORT = process.env.PORT || 5000;

  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(
          `AARVIKA server running on http://localhost:${PORT}`
        );
      });
    })
    .catch((error) => {
      console.error("Server startup failed:", error.message);
      process.exit(1);
    });
}

exports.default = app;