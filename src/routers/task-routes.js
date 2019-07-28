const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// Read all Tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {}

  res.status(500).send();
});

// Read Task by ID
router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

// CREATE New Task
router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201);
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Update Task

router.patch("/tasks/:id", async (req, res) => {
  const allowedUpdates = ["description", "completed"];
  const updates = Object.keys(req.body);
  const isValidUpdate = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidUpdate) {
    return res.status(400).send({ error: "Invalid Updates!" });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id);

    updates.forEach(update => (task[update] = req.body[update]));

    await task.save();

    res.send(task);
  } catch (e) {
    res.status(400).send();
  }
});

// Delete Task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
