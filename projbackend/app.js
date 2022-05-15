require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//importing my routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentB.js");
//const stripeRoutes = require("./routes/stripepayment");

//db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//using my routes
app.use("/store", authRoutes);
app.use("/store", userRoutes);
app.use("/store", categoryRoutes);
app.use("/store", productRoutes);
app.use("/store", orderRoutes);
app.use("/store", paymentBRoutes);
//app.use("/store", stripeRoutes);

//port
const port = process.env.PORT || 8000;

//strarting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
