// const date = new Date();
// console.log(date)

// const map = new Map()

// map.set('name', 'vikas')
// map.set('age', 20)
// console.log(map.get('name'))

// promise class gives u a promise, that i will return u something in the future


/* we can use both {callback or promise} based approach as we need */

// defining a promsise is hard
// using a promise is easy


//    PROMISIFIED VERSION                                   CALLBACK VERSION

//  setTimeoutPromisified(3000).then(callback);               setTimeout(callback,3000);


// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve => setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//     console.log("after 3 second it will be pass")
// }

// setTimeoutPromisified(3000).then(callback)





// function waitfor3s(resolve){
//     setTimeout(resolve,3000)
// }

// this is the promise class
// and it says that a function which is passed in the promise class it's first argument
// is called into the .then()
// function setTimeoutPromisified(){
//     return new Promise(waitfor3s)
// }

// function main(){
//     console.log("wait for 3 second")
// }

// setTimeoutPromisified().then(main) 



// function random(resolve){     // resolve is also a function
//     setTimeout(resolve,3000);
// }

// // supposed to rerurn u something eventually
// let p = new Promise(random)

// // using the eventual value returned by the promise 
// function  callback(){
//     console.log("promis is done")
// }

// p.then(callback)



// some questions 
// promisfied version of fs.readfile

// const fs = require("fs")

// function readthefile(sendthefinalvaluehere){
//   fs.readFile("a.txt","utf-8",function(err,data){
//     sendthefinalvaluehere(data)
//   })
// }
// function readthefile(filename){
//       // read the file and return its value
//       return new Promise(readthefile);
// }
// const p = readfile("a.txt")

// function callback(contents){
//     console.log(contents)
// }
//  p.then(callback)

