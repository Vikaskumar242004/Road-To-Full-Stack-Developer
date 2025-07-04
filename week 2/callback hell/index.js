// setTimeout(function() {
//    console.log("hi")
//    setTimeout(function(){
//     console.log("hello")
//       setTimeout(function(){
//         console.log("hello there")
//       },5000)
//    },3000)
// },1000) 

function setTimeoutPromisified(duration){
  return new Promise(function(resolve){
    setTimeout(resolve,duration)
  })
}


// promise chaining
setTimeoutPromisified(1000).then(function(){
    console.log("hi")
    setTimeoutPromisified(3000).then(function(){
        console.log("hello")
        setTimeoutPromisified(5000).then(function(){
            console.log("hi there") 
        })
    })
})