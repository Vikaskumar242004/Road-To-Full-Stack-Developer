// function sum(n){
//     let ans = 0;
//    for(let i = 1; i<=n; i++){
//      ans = ans+i;
//       }
//     return ans;
//   }
//   const ans = sum(100);
//   console.log(ans);

// if we want to use files we use fs(file system) first we declare it and then use it 
// const fs = require('fs');  //declare the fs 

// on the lower line we write only readfile function it means it runs asynchroniously
// const contents = fs.readFile('a.txt','utf-8')   // use the fs 
//  const contents = fs.readFileSync('a.txt','utf-8')    
// why we use utf-8 ? ans = if we don't use it so it gives the ASCII values in of the text in output 
// console.log(contents)

// here we are write readfileSync function it means it runs synchroniously
// const contents1 = fs.readFile('b.txt','utf-8')
// const contents1 = fs.readFileSync('b.txt','utf-8')
// console.log(contents1)

// const contents2 = fs.readFile('c.txt','utf-8')
// const contents2 = fs.readFileSync('c.txt','utf-8')
// console.log(contents2)


// how to use asynchronous method


// structure of the readfile function

// function readFile(filepath, encoding, callback){
//      read file                                       
//          callback("Error","sheerrrr")
//          }
// const fs = require("fs")
// function print(err,data){
//    console.log(data)
// }




// functional arguments

// #approach 1 
// function add(a,b){
//   return a+b;
// }

// function subtract(a,b){
//   return a-b;
// }

// function multi(a,b){
//   return a*b;
// }

// function div(a,b){
//   return a%b;
// }

// const ans = multi(3,5)
//   console.log(ans);

//  approach 2

// function add(a,b){
//   return a+b;
// }

// function subtract(a,b){
//   return a-b;
// }

// function multi(a,b){
//   return a*b;
// }

// function div(a,b){
//   return a%b;
// }

// function manyoper(a,b,mop){
//   return mop(a,b)
// }

// console.log(manyoper(3,4,multi))


// Asynchronous code, callbacks



// fs.readFile('a.txt','utf-8',print) //asynchronous
// fs.readFile('b.txt','utf-8',print) //asynchronous
// fs.readFile('c.txt','utf-8',print) //asynchronous

// console.log("Done")

/*  
   Option 1
   Hi
   Welcome to Loupe
   Expensive operation done
   click the button
   
   Option 2
   Hi
   Welcome to Loupe
   click the button
   Expensive operation done
   
   
*/
