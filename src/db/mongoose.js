require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to Mongoose!");
  })
  .catch(error => {
    console.log("Error Connecting", error);
  });
