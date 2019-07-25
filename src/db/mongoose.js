const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to Mongoose!");
  })
  .catch(error => {
    console.log("Error Connecting", error);
  });

const Task = mongoose.model("Task", {
  title: {
    type: String
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});
