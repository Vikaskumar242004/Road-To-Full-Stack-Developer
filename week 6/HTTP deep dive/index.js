// Creating an express app

// Lets initialise an express app that we will use to generate an authenticated backend today.

// ▶ Initialise an empty Node.js project
// ▶ Create an index.js file, open the project in visual studio code
// ▶ Add express as a dependency
// ▶ Create two new POST routes, one for signing up and one for signing in
// ▶ Use express.json as a middleware to parse the post request body
// ▶ Create an in memory variable called users where you store the username, password and a token (we will come to where this token is created later).
// ▶ Complete the signup endpoint to store user information in the in memory variable
// ▶ Create a function called generateToken that generates a random string for you
// ▶ Finish the signin endpoint. It should generate a token for the user and put it in the in memory variable for that user

// 💡 This can be improved further by

// Adding zod for input validation

// Making sure the same user can’t sign up twice

// Persisting data so it stays even if the process crashes

// We’ll be covering all of this eventually


const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();

// we use arrays for storing the data because we don't read about databases but after few weeks we learn't about it
const users = [];
const JWT_SECRET = "ilovekhushi";
/*
[          stores username,password and tokens
    (username : "vikas", password : "ilovekhushi", "askuhfiduf")
] */

app.use(express.json());

// should return a random lonng string only 
// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
//         'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
//         'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
//         'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
//         'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4',
//         '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a single functionn here
//         token = token + options[Math.floor(Math.random() * options.length)]
//     }
//     return token;
// }


app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // here we it define only but later we did it using zod
    // if(username.length <5){
    //     res.json({
    //         message : "Sorry your name is too small"
    //     })
    //     return;
    // }
    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })
    console.log(users)
})

            // this is the signIn code but for tokens
 
// app.post("/signIn", function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//   //maps and filters

//   let founduser = null;

//   for(let i = 0; i<users.length; i++){
//     if(users[i].username == username && users[i].password == password){
//         founduser = users[i];
//     }
//   }

//       if (founduser){
//         const token = generateToken();
//         founduser.token = token;
//         res.json({
//             tokens : token
//         })
//       }else{
//         res.status(403).send({
//             message : "Invalid username or password"
//         })
//       }
//       console.log(users)
// })

      //



      /*this code is for JWTs*/
app.post("/signIn", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

  //maps and filters

  let founduser = null;

  for(let i = 0; i<users.length; i++){
    if(users[i].username == username && users[i].password == password){
        founduser = users[i];
    }
  }

      if (founduser){
        const token = jwt.sign({          // changes here 
            username : username
        }, JWT_SECRET);
    
        res.json({
            tokens : token
        })
      }else{
        res.status(403).send({
            message : "Invalid username or password"
        })
      }
      console.log(users)
})


app.post("/me",function(req,res){
    const token = req.headers.token
    const decodedinformation = jwt.verify(token,JWT_SECRET);
    const username = decodedinformation.username
    
    let founduser = null;

    for(let i = 0; i<users.length; i++){
        if(users[i] == token){
            founduser = users[i];
        }
    }
    if (founduser){
        res.json({
            username : founduser.username,
            password : founduser.password
        })
    } else{
        res.json({
            message : "tokens invalid"
        })
    }
})

// # Replace token logic with jwt

// Lets change the token logic that we had to use jwts

// - Add the `jsonwebtoken` library as a dependency -  
//   https://www.npmjs.com/package/jsonwebtoken  

// - Get rid of our `generateToken` function  

// - Create a `JWT_SECRET` variable  

// - Create a jwt for the user instead of generating a token  

// - Notice we put the `username` inside the token. The `jwt` holds your state. You no longer need to store the `token` in the global `users` variable  

// - In the `/me` endpoint, use `jwt.verify` to verify the token  



app.listen(3000);

