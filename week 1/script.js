// function sum(a,b){
//     return a+b;
// }

// let ans = sum("vikas, singh")


// function canvote(age){
//     if(age>18){
//         return true;
//     } else{
//         return false;
//     }
// }

// let vote = canvote(17)
// console.log(vote)


// let user = ["vikas","kartik","robin","harsh"]


// let totalusers = users.length; give the length of the array 
// for(let i = 0; i<4; i++){
//    console.log(user[i])
// }


// function greet(user){
//     console.log(" Hi " + user.name + " your age is " + user.age)
// }

// let user = {
//     name : "Vikas",
//     age : 20,
//     gender : "male"
// }
// greet(user)


// assignment 
// create a function that takes an array of  objects as input,
// and returns the users whose age >18 and are male or female 

function solve(arr){
    let arr2 = [];
    // filter in js array
    for(let i =0; i<arr.length; i++){
        if(arr[i].gender == "male"||"female" && arr[i].age >18){
            arr2.push(arr[i])
        }
    }
    return arr2;
}

const users = [{
    name : "vikas",
    age : 21,
    gender : "male"
},{
   name : "sonal",
   age : 20,
   gender : "female"
},{
    name : "robin",
    age : 22,
    gender : "male"
}]

const ans = solve(users);
console.log(ans)