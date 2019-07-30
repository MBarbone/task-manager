require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user-routes");
const taskRouter = require("./routers/task-routes");
const hbs = require("hbs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Set up Handlebars
app.set("view engine", "hbs");
const partialsPath = path.join(__dirname, "../views/partials");
hbs.registerPartials(partialsPath);

// Serve Static Directory
app.use(express.static(path.join(__dirname, "../public")));

// login or signup
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
