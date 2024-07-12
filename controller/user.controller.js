const { userservice } = require("../service");

let register = async (req, res) => {
    try {
        let body = req.body;

        let users = await userservice.register(body);
        res.status(201).json({
            message: "user register succes !", users
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}
let getAlluser = async (req, res) => {
    try {
        let user = await userservice.getuser();

        res.status(200).json({
            message: "get all success !", user
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}
let deleteuser = async (req, res) => {
    try {
        console.log(req.params);

        let { id } = req.params;

        let user = await userservice.deleteuser(id);

        console.log(user);

        res.status(200).json({
            message: "user delete success", user,
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}
let updatauser = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;
        let remove = await userservice.updatauser(id, body)

        res.status(200).json({
            message: "user updata success !", remove,
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}
let login = async (req, res) => {
    try {

      let { email, password } = req.body;
      let user = await userService.findUser(email);
      console.log(user, "result");
  
      if (!user) {
        throw new Error("user not difind !!");
      }
      if (user.password != password) {
        throw new Error("password invalid !!");
      }
      let token = createToken({ user });
      console.log(token);
  
      res.cookie("token", token);
  
      res.status(200).json({
        message: "login successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };
  
module.exports = { register, getAlluser, deleteuser, updatauser, login }