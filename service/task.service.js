const { Task } = require('../models');

let createTask = (body) => {
    
    console.log("body", body);

    return Task.create(body);
};

let getTasks = () => {
    return Task.find();
};

let deleteTask = (id) => {
    return Task.findByIdAndDelete(id);
};

let updateTask = (body, id) => {
    return Task.findByIdAndUpdate(id, body);
};

module.exports = { createTask, getTasks, deleteTask, updateTask };
