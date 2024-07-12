require("dotenv").config();
let http = require("http");
let express = require("express");
let dbconnect = require("./DB/dbconnect")
let route = require("./route");
const{isLogin} = require("./middleware/auth")
let app = express();

// cookie
app.use(cookieParser());

dbconnect();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/v1",route)

app.get("/", (req, res) => {
    res.render("index");
  });
  
app.set("view engine", "ejs");
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server stread ${process.env.PORT}`);
})