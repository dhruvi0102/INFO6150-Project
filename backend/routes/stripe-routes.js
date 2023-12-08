const express = require("express");
const postCharge = require("../controllers/stripe-controllers");

const router = express.Router();

router.post("/", postCharge);

module.exports=router