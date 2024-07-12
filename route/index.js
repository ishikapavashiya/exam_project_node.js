let express = require("express");
let route = express.Router();

let userroute = require("./user.route")
let taskroute = require("./task.route")
let categoryroute = require("./category.route")
const {isLoing} = require("../middleware/auth")

route.use("/user", userroute);
route.use("/task", taskroute);
route.use("/category", categoryroute);


module.exports = route;