const express = require("express");
const { taskController } = require("../controller");

const route = express.Router();

route.post("/create", taskController.createTask);
route.get("/getAll", taskController.getAllTasks);
route.delete("/delete/:id", taskController.deleteTask);
route.put("/update/:id", taskController.updateTask);

module.exports = route;