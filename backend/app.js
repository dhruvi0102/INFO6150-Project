const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const ConnectDB = require("./db");
require("dotenv").config();

const carsRoutes = require("./routes/cars-routes");
const usersRoutes = require("./routes/users-routes");
const orderRoutes = require("./routes/orders-routes");
const emailRoutes = require("./routes/email-routes");
const stripeRoutes = require("./routes/stripe-routes");
const adminRoutes = require("./routes/admin-routes");

const app = express();
ConnectDB();

app.use(bodyParser.json());
app.use(cors("*"));

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/fleet", carsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/emails", emailRoutes);
app.use("/api/stripe", stripeRoutes);
app.use("/api/admins", adminRoutes);

//Connect to DB - MongoDB
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
