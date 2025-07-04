// this is code using doctor logic 
// function calculatesum(n){

//     let ans = 0;
//     for(let i = 1; i<=n; i++){
//         ans = ans +i;
//     }
//     return ans;
// }

// let ans = calculatesum(10);
// console.log(ans)



    // now using express

// const express = require("express")

// function calculatesum(n){

//     let ans = 0;
//     for(let i = 1; i<=n; i++){
//         ans = ans +i;
//     }
//     return ans;
// }

// const app = express();

// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = calculatesum(n);
//     res.send(ans)
// })

// app.listen(3000);


//  create a http server

// const express = require("express")

// const app = express();

// function sum(n){
//     let ans = 0;
//     for(let i = 1; i<=n; i++){
//         ans = ans +i;
//     }
//     return ans;
// }

// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi there you ans is "+ ans);
// })




// app.get("/",function(req,res){
//   throw new error("salfh")
// })


// app.listen(3000);



const express = require("express");
const app = express();
var users = [{
    name : "vikas",
    kidneys : [{
        healthy : false
    }]
}];


app.get("/", function(req,res){
    const vikaskidneys = users[0].kidneys;
    const numberofkidneys = vikaskidneys.length;
    let numberofhealthykidneys = 0;
    for(let i = 0; i<vikaskidneys.length; i++){
        if(vikaskidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys +1;
    }
  }
  const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
  res.json({
    vikaskidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys
  })
})

app.post("/", function(req,res){
    console.log(req.body);
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy : ishealthy
    })
    res.json({
         msg : "done!"
    })
})

app.put("/", function(req,res){
    
})

app.delete("/", function(req,res){
    
})

app.listen(3000);