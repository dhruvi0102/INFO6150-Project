const express = require("express");
const {
  addAdmins,
  addCars,
  blockUser,
  loginAdmin,
  getAllUsers,
} = require("../controllers/admin-controllers");

const { verifyJWT } = require("../utils/AdminAuth");

const router = express.Router();

router.post("/", addAdmins);
router.post("/add-car", verifyJWT, addCars);
router.post("/block-user", verifyJWT, blockUser);
router.post("/login", loginAdmin);
router.get("/getUsers", verifyJWT, getAllUsers);

module.exports = router;
