const express = require("express");
const router = express.Router();
const companiesController = require("../controllers/companiesController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, (req, res, next) => {
  /*
    #swagger.tags = ['Companies']
    #swagger.summary = 'Get all companies'
    #swagger.description = 'Returns all companies stored in the database. Authentication is required.'
    #swagger.security = [{
      "sessionAuth": []
    }]
    #swagger.responses[200] = {
      description: 'Companies retrieved successfully'
    }
    #swagger.responses[401] = {
      description: 'Authentication required'
    }
    #swagger.responses[500] = {
      description: 'Error retrieving companies'
    }
  */
  return companiesController.getAllCompanies(req, res, next);
});

router.get("/:id", isAuthenticated, (req, res, next) => {
  /*
    #swagger.tags = ['Companies']
    #swagger.summary = 'Get a company by ID'
    #swagger.description = 'Returns one company using its MongoDB ObjectId. Authentication is required.'
    #swagger.security = [{
      "sessionAuth": []
    }]
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Company ID',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: 'Company retrieved successfully'
    }
    #swagger.responses[400] = {
      description: 'Invalid company ID'
    }
    #swagger.responses[401] = {
      description: 'Authentication required'
    }
    #swagger.responses[404] = {
      description: 'Company not found'
    }
    #swagger.responses[500] = {
      description: 'Error retrieving company'
    }
  */
  return companiesController.getCompanyById(req, res, next);
});

router.post("/", isAuthenticated, (req, res, next) => {
  /*
    #swagger.tags = ['Companies']
    #swagger.summary = 'Create a new company'
    #swagger.description = 'Creates a new company in MongoDB. Authentication is required.'
    #swagger.security = [{
      "sessionAuth": []
    }]
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Company"
          }
        }
      }
    }
    #swagger.responses[201] = {
      description: 'Company created successfully'
    }
    #swagger.responses[400] = {
      description: 'Validation failed or required fields are missing'
    }
    #swagger.responses[401] = {
      description: 'Authentication required'
    }
    #swagger.responses[500] = {
      description: 'Error creating company'
    }
  */
  return companiesController.createCompany(req, res, next);
});

router.put("/:id", isAuthenticated, (req, res, next) => {
  /*
    #swagger.tags = ['Companies']
    #swagger.summary = 'Update a company'
    #swagger.description = 'Updates an existing company using its MongoDB ObjectId. Authentication is required.'
    #swagger.security = [{
      "sessionAuth": []
    }]
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Company ID',
      required: true,
      type: 'string'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Company"
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: 'Company updated successfully'
    }
    #swagger.responses[400] = {
      description: 'Invalid ID or validation failed'
    }
    #swagger.responses[401] = {
      description: 'Authentication required'
    }
    #swagger.responses[404] = {
      description: 'Company not found'
    }
    #swagger.responses[500] = {
      description: 'Error updating company'
    }
  */
  return companiesController.updateCompany(req, res, next);
});

router.delete("/:id", isAuthenticated, (req, res, next) => {
  /*
    #swagger.tags = ['Companies']
    #swagger.summary = 'Delete a company'
    #swagger.description = 'Deletes a company using its MongoDB ObjectId. Authentication is required.'
    #swagger.security = [{
      "sessionAuth": []
    }]
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Company ID',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: 'Company deleted successfully'
    }
    #swagger.responses[400] = {
      description: 'Invalid company ID'
    }
    #swagger.responses[401] = {
      description: 'Authentication required'
    }
    #swagger.responses[404] = {
      description: 'Company not found'
    }
    #swagger.responses[500] = {
      description: 'Error deleting company'
    }
  */
  return companiesController.deleteCompany(req, res, next);
});

module.exports = router;