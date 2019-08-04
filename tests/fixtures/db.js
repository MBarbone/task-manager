const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "Mike",
  email: "mike@example.com",
  password: "56what!!",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
  _id: userTwoId,
  name: "Chico",
  email: "chico@example.com",
  password: "coolpass",
  tokens: [
    {
      token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }
  ]
};

const taskOne = {
  _id: new mongoose.Types.ObjectId(),
  description: "Finish tasks tests",
  completed: false,
  author: userOneId
};

const taskTwo = {
  _id: new mongoose.Types.ObjectId(),
  description: "Start Chat app",
  completed: true,
  author: userOneId
};

const taskThree = {
  _id: new mongoose.Types.ObjectId(),
  description: "Finish Node Course",
  completed: true,
  author: userTwoId
};

const setupDB = async () => {
  await User.deleteMany();
  await new User(userOne).save();
  await new User(userTwo).save();
  await Task.deleteMany();
  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};

module.exports = {
  userOneId,
  userOne,
  userTwo,
  userTwoId,
  setupDB,
  taskOne,
  taskTwo,
  taskThree
};
