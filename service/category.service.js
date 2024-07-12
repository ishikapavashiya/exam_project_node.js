const { Category } = require("../model");

let createCategory = (body) => {
    console.log("body", body);
    return Category.create(body);
}

let getCategories = () => {
    return Category.find();
}

let deleteCategory = (id) => {
    return Category.findByIdAndDelete(id);
}

let updateCategory = (body, id) => {
    return Category.findByIdAndUpdate(id, body, { new: true });
}

module.exports = { createCategory, getCategories, deleteCategory, updateCategory };
