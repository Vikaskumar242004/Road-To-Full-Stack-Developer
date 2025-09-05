// assignment 1

// can you try creating a middleware called auth that verifies if a user logged in and ends the request early
// if the user isn't logged in? 

const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const JWT_SECRET = "vikas123";

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const BASE_URL = "https://localhost:3000";
function logger(req,res,next){
    console.log(req.method + "request came");
    next();
}

app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})
app.post("/signup", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    });

    // we should check if a user with this username already exists
    res.json({
        message: ("you are signed up")
    })
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let founduser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            founduser = users[i]
        }
    }
    if (!founduser) {
        res.json({
            message: "You entered wrong details"
        })
        return
    } else {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }
})


// using middleware
function auth(req, res, next) {

    const token = req.headers.token;
    const decodeddata = jwt.verify(token, JWT_SECRET);
    if (decodeddata.username) {
        req.username = decodeddata.username;
        next()
    } else {
        res.json({
            message: "you are not logged in"
        })
    }
}

app.post("/me", auth, function (req, res) {
  
        let founduser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === req.username) {
                founduser = users[i]
            }
        }
        res.json({
            usename: founduser.username,
            password: founduser.password
        })
})
// document.querySelector(".submit-signup").addEventListener("click", function(){
//     signup();
// })


// document.querySelector(".submit-signin").addEventListener("click", function(){
//     alert("you signed in successfully");
// })

app.listen(3000);  



