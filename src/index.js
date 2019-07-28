const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user-routes");
const taskRouter = require("./routers/task-routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("5d3e25b118e94003dc229af0");
  // await task.populate("author").execPopulate();
  // console.log(task.author);

  const user = await User.findById("5d3e259a18e94003dc229aee");
  await user.populate("tasks").execPopulate();

  console.log(user.tasks);
};

main();
