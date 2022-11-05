const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");
const { OURA_TOKEN } = process.env;

module.exports = apiRouter;
