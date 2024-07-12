const express = require("express");
const { categoryController } = require("../controller");

const router = express.Router();

router.post("/create", categoryController.createCategory);
router.get("/get", categoryController.getAllCategories);
router.delete("/delete/:id", categoryController.deleteCategory);
router.put("/update/:id", categoryController.updateCategory);

module.exports = router;
