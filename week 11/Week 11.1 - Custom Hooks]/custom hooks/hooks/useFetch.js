import { useEffect, useState} from "react";


// this is not a simple function it is a hook 
// this code is good but the better way to write it using useFetch which writes on the below of this code 

// export function usePostTitle() {
//     const [post, setpost] = useState({});

//     async function getPosts() {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const json = await response.json();
//         setpost(json);
//     }

//     useEffect(() => {
//         getPosts();
//     }, [])
//     return post.title;
// }


// export function useFetch(url) {
//     const [finaldata, setfinaldata] = useState({});
//       const [ Loading, setLoading ] = useState(true);

//     async function getDetails() {
//         setLoading(true);
//         const response = await fetch(url);
//         const json = await response.json();
//         setfinaldata(json);
//         setLoading(false);
//     }

//     useEffect(() => {
//         getDetails();
//         // in dependency array we write [url] because when we call our backend dynamically it gives me data of every single button but if we don't use
//         // it we cannot get the data of every button (here button is used for example)
//         // if we don't pass the url in array so it calls only component is mount (for ex : only one time call)
//     }, [url])

//     // now we learn usefetch with re-fetching
//     // using usefetch with re-rendring means like we send the request to call the backend after some time automatically
//   useEffect (() =>{
//           setInterval(getDetails, 10 * 1000) 
//   },[])

//     return {
//         finaldata,
//         Loading
//     }
// }



//  now we learn about usePrev

