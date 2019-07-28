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
