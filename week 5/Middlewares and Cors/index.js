//this is the code of previous video so now we learn that how to make better routing and how to 
// add database and middlewares in this and what are middlewares in express

const express = require("express")
const app = express();


app.get("/sum",function(req,res){
      const a = parseInt(req.query.a)
      const b = parseInt(req.query.b)

      res.json({
        ans : a+b
      })
})


app.get("/subtract",function(req,res){
      const a = (req.query.a)
      const b = (req.query.b)

      res.json({
        ans : a-b
      })
})


app.get("/multiply",function(req,res){
      const a = (req.query.a)
      const b = (req.query.b)

      res.json({
        ans : a*b
      })
})


app.get("/divide",function(req,res){
      const a = (req.query.a)
      const b = (req.query.b)

      res.json({
        ans : a/b
      })
})


app.listen(3000);


