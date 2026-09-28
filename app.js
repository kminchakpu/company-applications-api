require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
const passport = require("./config/passport");
const { connectDatabase } = require("./db/connect");
const applicationsRoutes = require("./routes/applicationsRoutes");
const companiesRoutes = require("./routes/companiesRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = [
  "http://localhost:8080",
  "https://company-applications-api.onrender.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// Trust Render's reverse proxy in production.
// This allows Express to correctly recognize HTTPS connections.
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// Configure session authentication.
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Initialize Passport authentication.
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Job Application Tracker API",
  });
});

// API documentation.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Authentication routes.
app.use("/auth", authRoutes);

// Protected API routes.
app.use("/applications", applicationsRoutes);
app.use("/companies", companiesRoutes);

// Connect to MongoDB before starting the server.
connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("");
      console.log("Local:");
      console.log(`API: http://localhost:${PORT}`);
      console.log(`Swagger documentation: http://localhost:${PORT}/api-docs`);
      console.log(`Google login: http://localhost:${PORT}/auth/google`);
      console.log("");
      console.log("Render:");
      console.log("API: https://company-applications-api.onrender.com");
      console.log(
        "Swagger documentation: https://company-applications-api.onrender.com/api-docs"
      );
      console.log(
        "Google login: https://company-applications-api.onrender.com/auth/google"
      );
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });