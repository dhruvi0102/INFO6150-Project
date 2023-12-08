const jwt = require("jsonwebtoken");
const admins = require("../models/admins");

const verifyJWT = async (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("Token ", token);
  if (token) {
    jwt.verify(token, "ABCD", async function (err, decoded) {
      if (err) {
        console.log("verify -- ", err);
        return res.status(401).json({ error: true, message: err.message });
      }
      req.decoded = decoded.data;
      console.log(decoded.userId);
      const user = await admins.findById(decoded.userId);
      if (user === null) {
        return res.status(401).json({ error: "User not Authorized" });
      }
      next();
    });
  } else {
    return res.status(401).send("Unauthorized");
  }
};

module.exports = {
  verifyJWT,
};
