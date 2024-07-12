const { categoryService } = require("../service");

let createCategory = async (req, res) => {
    try {
        let body = req.body;

        let category = await categoryService.createCategory(body);
        res.status(201).json({
            message: "Category created successfully!", 
            category
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
let getAllCategories = async (req, res) => {
    try {
        let categories = await categoryService.getCategories();

        res.status(200).json({
            message: "Categories retrieved successfully!", 
            categories
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
let deleteCategory = async (req, res) => {
    try {
        let { id } = req.params;

        let category = await categoryService.deleteCategory(id);

        res.status(200).json({
            message: "Category deleted successfully!", 
            category,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
let updateCategory = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;

        let updatedCategory = await categoryService.updateCategory(id, body);

        res.status(200).json({
            message: "Category updated successfully!", 
            updatedCategory,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
module.exports = { createCategory, getAllCategories, deleteCategory, updateCategory };
