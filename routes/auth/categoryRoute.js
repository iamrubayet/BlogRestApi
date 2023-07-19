const { createCategory, getCategory } = require('../../controllers/authControllers/categoryController');

const categoryRoute = require("express").Router();

categoryRoute.post("/",createCategory);
categoryRoute.get("/",getCategory);



module.exports = categoryRoute;