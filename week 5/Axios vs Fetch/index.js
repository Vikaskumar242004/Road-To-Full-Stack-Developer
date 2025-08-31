// axios vs fetch

//  for fetch 

    // if you send a POST request then 

//   async function main(){
//     const response = await fetch("link",{
//       method : "PUT"
//               });

//     const json = await response.json();
//     console.log(json.todos.length);
//   }

             //  or if you want to get the data 

    // const textdata = await resposne.text();
    // console.log(textdata);

//   main();


//   for axios
 
const axios = require("axios");

// if you send the request in axios then
 
    async function main(){
        const response = await axios.post("link")
        console.log(response.data)
    }
    main();