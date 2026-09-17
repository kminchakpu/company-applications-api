# Job Application Tracker API

A RESTful API for tracking job applications and company information. The project is built with **Node.js**, **Express.js**, and **MongoDB** and provides full CRUD functionality for managing job applications and companies.

The API includes input validation, error handling, Swagger API documentation, and REST Client tests.

## Features

* Create, read, update, and delete job applications
* Create, read, update, and delete company records
* MongoDB database integration
* MongoDB ObjectId validation
* Request data validation
* 400 Bad Request handling
* 404 Not Found handling
* 500 Internal Server Error handling
* RESTful API architecture
* Swagger API documentation
* Swagger Autogen documentation generation
* REST Client endpoint testing
* Environment variable configuration
* CORS support
* Ready for deployment on Render

## Technologies Used

* Node.js
* Express.js
* MongoDB
* MongoDB Atlas
* JavaScript
* Swagger UI Express
* Swagger Autogen
* dotenv
* CORS
* VS Code REST Client
* Render

## Project Structure

```text
job-application-tracker/
│
├── controllers/
│   ├── applicationsController.js
│   └── companiesController.js
│
├── db/
│   └── connect.js
│
├── routes/
│   ├── applicationsRoutes.js
│   └── companiesRoutes.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
├── requests.rest
├── swagger.js
├── swagger-output.json
└── README.md
```

## API Endpoints

### Applications

| Method   | Endpoint            | Description                        |
| -------- | ------------------- | ---------------------------------- |
| `GET`    | `/applications`     | Get all job applications           |
| `GET`    | `/applications/:id` | Get a job application by ID        |
| `POST`   | `/applications`     | Create a new job application       |
| `PUT`    | `/applications/:id` | Update an existing job application |
| `DELETE` | `/applications/:id` | Delete a job application           |

### Companies

| Method   | Endpoint         | Description                |
| -------- | ---------------- | -------------------------- |
| `GET`    | `/companies`     | Get all companies          |
| `GET`    | `/companies/:id` | Get a company by ID        |
| `POST`   | `/companies`     | Create a new company       |
| `PUT`    | `/companies/:id` | Update an existing company |
| `DELETE` | `/companies/:id` | Delete a company           |

## Getting Started

### 1. Clone the Repository

```bash
git clone [YOUR_GITHUB_REPOSITORY_URL](https://github.com/kminchakpu/company-applications-api.git
cd PROJECT_FOLDER
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the appropriate project directory.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8080
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

**Important:** Never commit your `.env` file or MongoDB credentials to GitHub.

Make sure `.env` is included in `.gitignore`:

```gitignore
node_modules/
.env
```

### 4. Start the Application

Depending on the scripts configured in `package.json`, run:

```bash
npm start
```

If a development script using Nodemon is configured, you can use:

```bash
npm run dev
```

The server should start on the configured port.

Example:

```text
Server is running on port 8080
```

## Example Application

A job application record may look similar to this:

```json
{
  "jobTitle": "Frontend Developer",
  "company": "Example Technologies",
  "location": "Lagos, Nigeria",
  "status": "Applied",
  "dateApplied": "2026-09-01",
  "salaryRange": "₦4,000,000 - ₦6,000,000",
  "jobUrl": "https://example.com/jobs/frontend-developer"
}
```

## Example Company

A company record may look similar to this:

```json
{
  "name": "Example Technologies",
  "industry": "Technology",
  "location": "Lagos, Nigeria",
  "website": "https://example.com",
  "contactEmail": "careers@example.com"
}
```

The exact required fields depend on the validation rules implemented in the controllers.

## CRUD Operations

The API supports complete CRUD operations for both resources.

**Create**

```http
POST /applications
POST /companies
```

**Read**

```http
GET /applications
GET /applications/:id

GET /companies
GET /companies/:id
```

**Update**

```http
PUT /applications/:id
PUT /companies/:id
```

**Delete**

```http
DELETE /applications/:id
DELETE /companies/:id
```

## Validation and Error Handling

The API validates incoming data and MongoDB ObjectIds before performing database operations.

Possible responses include:

| Status Code | Meaning                        |
| ----------- | ------------------------------ |
| `200`       | Request completed successfully |
| `201`       | Resource created successfully  |
| `204`       | Resource deleted successfully  |
| `400`       | Invalid request or ObjectId    |
| `404`       | Resource not found             |
| `500`       | Internal server error          |

For example, an invalid MongoDB ObjectId should return a `400 Bad Request` response rather than causing the application to crash.

## API Documentation

Swagger is used to provide interactive API documentation.

After starting the application, open:

```text
http://localhost:8080/api-docs
```

The Swagger interface can be used to view and test the available endpoints.

## Generate Swagger Documentation

This project uses **Swagger Autogen** to generate the Swagger output file.

Run:

```bash
npm run swagger
```

Or, depending on the project configuration:

```bash
node swagger.js
```

This generates:

```text
swagger-output.json
```

The generated file is then served using Swagger UI Express.

## REST Client Testing

A `requests.rest` file is included for testing the API directly from Visual Studio Code.

Install the **REST Client** extension in VS Code and open:

```text
requests.rest
```

The tests can cover:

* GET all applications
* GET application by ID
* POST application
* PUT application
* DELETE application
* GET all companies
* GET company by ID
* POST company
* PUT company
* DELETE company
* Invalid MongoDB ObjectId
* Resource not found
* Missing required fields

Click **Send Request** above a request in VS Code to execute it.

## Deployment

The API can be deployed using Render.

When deploying, configure the required environment variables in the Render dashboard rather than uploading the local `.env` file.

Example environment variable:

```text
MONGODB_URI=your_production_mongodb_connection_string
```

After deployment, the API can be accessed through the Render application URL.

Example:

```text
https://your-application.onrender.com
```

The production Swagger documentation would then normally be available at:

```text
https://your-application.onrender.com/api-docs
```

## Testing the API

You can test the API using:

1. Swagger UI
2. VS Code REST Client
3. Postman or another HTTP client
4. The deployed Render API

For example:

```http
GET http://localhost:8080/applications
```

or:

```http
GET http://localhost:8080/companies
```

## Learning Objectives

This project demonstrates the ability to:

* Build a RESTful API with Node.js and Express.js
* Connect an Express application to MongoDB
* Work with MongoDB collections and ObjectIds
* Implement CRUD operations
* Organize routes and controllers
* Validate incoming request data
* Implement API error handling
* Document REST endpoints with Swagger
* Test API endpoints
* Manage sensitive configuration using environment variables
* Deploy a backend API to a cloud hosting service

## Future Improvements

Possible improvements include:

* User authentication and authorization
* Job application search and filtering
* Pagination
* Application status statistics
* Interview tracking
* Notes and reminders
* Authentication-specific user data
* Automated testing
* Frontend dashboard
* Improved API security

## Author

**Kevin Cross Minchakpu**

Web Development Student

## License

This project was created for educational purposes as part of a web services development course.
