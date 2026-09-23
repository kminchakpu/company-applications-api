const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const doc = {
  info: {
    title: "Job Application Tracker API",
    version: "2.0.0",
    description:
      "REST API for managing job applications and companies. Authentication is provided through Google OAuth 2.0 using Passport. Application and company endpoints require an authenticated session.",
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Local development server",
    },
    {
      url: "https://company-applications-api.onrender.com",
      description: "Render production server",
    },
  ],
  tags: [
    {
      name: "Authentication",
      description: "Google OAuth authentication endpoints",
    },
    {
      name: "Applications",
      description: "Protected job application management endpoints",
    },
    {
      name: "Companies",
      description: "Protected company management endpoints",
    },
  ],
  components: {
    securitySchemes: {
      sessionAuth: {
        type: "apiKey",
        in: "cookie",
        name: "connect.sid",
        description:
          "Session cookie created after successful Google OAuth authentication.",
      },
    },
    schemas: {
      Application: {
        jobTitle: "Backend Developer",
        companyName: "Tech Solutions Ltd",
        location: "Lagos, Nigeria",
        applicationDate: "2026-09-14",
        status: "Applied",
        jobType: "Full-time",
        salaryRange: "₦900,000 - ₦1,300,000 monthly",
        jobUrl: "https://example.com/jobs/backend-developer",
        notes: "Application submitted successfully.",
      },
      Company: {
        name: "Tech Solutions Ltd",
        industry: "Information Technology",
        website: "https://example.com",
        location: "Lagos, Nigeria",
        contactEmail: "careers@example.com",
      },
    },
  },
};
const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"];
swaggerAutogen(outputFile, endpointsFiles, doc);