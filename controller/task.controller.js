const { taskService } = require("../service");

let createTask = async (req, res) => {
    try {
        let body = req.body;

        let task = await taskService.createTask(body);
        res.status(201).json({
            message: "Task created successfully!", 
            task
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

let getAllTasks = async (req, res) => {
    try {
        let tasks = await taskService.getTasks();

        res.status(200).json({
            message: "Tasks retrieved successfully!", 
            tasks
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

let deleteTask = async (req, res) => {
    try {
        let { id } = req.params;

        let task = await taskService.deleteTask(id);

        res.status(200).json({
            message: "Task deleted successfully!", 
            task,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

let updateTask = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;

        let updatedTask = await taskService.updateTask(id, body);

        res.status(200).json({
            message: "Task updated successfully!", 
            updatedTask,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

module.exports = { createTask, getAllTasks, deleteTask, updateTask };
