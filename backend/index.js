const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

// Import Routes
const userRoute = require("./Routes/UserRoute");
const cropRoute = require("./Routes/CropRoute");
const liveRoute = require("./Routes/LiveStockRoute");
const workRoute = require("./Routes/WorkRoute");
const itemRoute = require("./Routes/ItemRoute");

// DB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(`Some Problem Occured: ${err}`);
  });

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/user", userRoute);
app.use("/api/crop", cropRoute);
app.use("/api/live", liveRoute);
app.use("/api/work", workRoute);
app.use("/api/item", itemRoute);

// PORT
const PORT = 8080 || process.env.PORT;

// Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
