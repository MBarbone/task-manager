const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user-routes");
const taskRouter = require("./routers/task-routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "qwertysecret", {
    expiresIn: "7 days"
  });

  const data = jwt.verify(token, "qwertysecret");
};

myFunction();

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "red12345!";
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare("red12345!", hashedPassword);

//   console.log(isMatch);
// };

// myFunction();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
