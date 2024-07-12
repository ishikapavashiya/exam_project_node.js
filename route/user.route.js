let express = require("express");
const { usercontroller } = require("../controller");
const validate = require("../middleware/validate")
const {uservalidations} = require("../validations")
const { isLogin} = require("../middleware/auth")

let route = express.Router();

route.post("/register",validate(uservalidations.user),usercontroller.register);
route.get("/get", isLogin ,usercontroller.getAlluser);
route.delete("/delete/:id",usercontroller.deleteuser);
route.put("/updata/:id",validate(uservalidations.user),usercontroller.updatauser)

// login
route .post("/login",validate(uservalidations.user),usercontroller.login);
module.exports = route;