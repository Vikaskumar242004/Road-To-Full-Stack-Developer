/* In easy way to understand that what the middlewares is 
 for ex :- 
           if we go to a park with a ticket and there is a security guard is there and he cheks the ticket of every person 
           and if any person doesn't have ticket he kicked him out so that security guard is the known as middleware.
           
           
           
           
           Using Middlewares 
               Express is a routing and middleware web framework that has minimal functionality of its own: an express application is essentially a 
               series of middleware function calls.

               Middleware functions are functions that have access to the request object(req), the response(res),and the next middlware function in the
               application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

               Middleware functions can perform the following tasks.

               Execute any code.
               Make changes to the request and the response objects.
               End the request-response cycle.
               Call the next middleware function in the stack.
           
            
           */

// this is the basic way to check the conditions yes or not 

const express = require('express');
const app = express();


//  function that rerturns a boolean if the age greater than 14

function isoldenough(age){
    if(age >=14){
        return true;
    }else{
        return false;
    }
}
app.get("/ride1",function(req,res){
   if (isoldenough(req.query.age)){
         res.json({
        msg: "you have successfully ridden the ride 1"
     })
   } else{
         res.status(411).json({
        msg : "you have not ridden the ride 1"
     })
   }
})

app.listen(3000);




// this is the  method of middlewares


const express = require('express');
const app = express();

function isoldenoughmiddleware(req,res,next){
    const age = req.query.age
    if(age >=14){
        next();                                       // here we are declare the middleware
    }else{
        res.json({
            msg: "You are under the age of 14"
        })
    }
}

// app.use(isoldenoughmiddleware);   a way of using middlewares in all the routes and doesn't define in anywhere only define app.use(middleware)
                                    // and it works only for the below codes of it.


app.get("/ride1",isoldenoughmiddleware,function(req,res){

         res.json({
        msg: "you have successfully ridden the ride 1"
         })
   })

app.listen(3000);




// assignment 1 

//  you  have been given an express server which has a few endpoints.
// your task is to create a global middleware (app.use) which will maintain
// a count of the number of requests made to the server in the global 
// requestcount variable 

                                   //code

const express = require('express')
const app = express();
let requestcount = 0;


app.use(function(req,res,next){
    requestcount = requestcount +1;
    next();
})

app.get('/user',function(req,res){
    res.status(200).json({name :'vikas'});
});

app.get('/requestcount',function(req,res){
    res.status(200).json({requestcount});
});

app.listen(3000);




// assignment 2

//  you have been given a express server which has a few endpoints.
// your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// user will be sending in their user id in the header as 'user-id'.
// you have been given a noofreqforuser object to start off with which
// clears everyy= one second. 


                           //   code

const express = require('express')
const app = express();

let noofreqforuser = {};
setInterval(() => {
    noofreqforuser = {};
}, 1000);


app.use(function (req, res, next) {

    const userid = req.headers["user-id"];
    if (noofreqforuser[userid]) {
        noofreqforuser[userid] = noofreqforuser[userid] +1;
        if (noofreqforuser["user-id"] > 5) {
            res.status(404).send("chal nikal")
        } else {
            next();
        }
    } else{
        noofreqforuser[userid] = 1;
        next();
    }

})



// assignment 3 


//  you have been given a express server which has a few endpoints.
// your task is to 
//    1. ensure that if there is ever an excepion, the end user sees a status code of 404
//    2. Maintain the errorcount variable whose value should go up every time there is an exception in any endpoint

