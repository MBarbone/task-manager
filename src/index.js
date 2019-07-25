const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  req.body;
  res.send("testing");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
