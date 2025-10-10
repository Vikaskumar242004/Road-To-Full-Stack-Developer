// the commented code is correct but and you should read for more understanding
// but we break down bothe code into different files 

import { useEffect, useState } from "react";
import { PostComponent } from "./post";


// know the concept of cleanup

function App(){
    return <div>
        <Timer/>
    </div>
}

const Timer = () => {
    const [seconds,setSeconds] = useState(0);

    useEffect(() =>{
        setInterval(() =>{
            setSeconds(prev => prev +1)
        },1000)
    },[]);
    return <div>{seconds} seconds elapsed </div>;
}

export default App
// now we make the todo 

// function App(){
   
//    const [currentTab,setCurrentTab] = useState(1);
//    const [datatab,setdatatab] = useState({});


//    useEffect(function(){
//       fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res =>{
//         const json = await res.json();
//         setdatatab((json));
//       });
//    },[currentTab])

//     return  <div>
//         <button onClick = {() => {
//           setCurrentTab(1)
//         }} style={{color: currentTab == 1 ?  "red" : "black"}}>todo 1</button>
//         <button onClick = {() => {
//           setCurrentTab(2)
//         }} style={{color : currentTab == 2 ? "red" : "black"}}>todo 2</button>
//         <button onClick = {() => {
//           setCurrentTab(3)
//         }} style={{color :currentTab == 3 ? "red" : "black"}}>todo 3</button>
//         <button onClick = {() => {
//           setCurrentTab(4)
//         }} style={{color :currentTab == 4 ? "red" : "black"}}>todo 4</button>
//         <br />
//         {datatab.title}
//       </div>  
      
//   }

// export  default App

//  now we make the increase notification button

// function App(){
//   const [count,setCount] = useState(1);

//   function increaseCount(){
//       setCount(function(currentValue){
//         return currentValue +1;
//       })
//   }
//   useEffect(function(){
//        setInterval(increaseCount,1000)
//   },[])
  
//   return <div>
//     <div style = {{ display : "flex"}}>
//       <div style = {{background : "red",borderRadius : 200,width:10,height: 25,
//         paddingLeft: 10,paddingRight: 8}}>
//         {count}
//          </div>
//     </div>
//       <img style = {{cursor : "pointer"}}src="https://up.yimg.com/ib/th/id/OIP.1AlYjvkPQ-BA-lifDWl4hQHaHa?pid=Api&rs=1&c=1&qlt=95&w=104&h=104"
//       width = {30} alt="bell icon" />
//   </div>
// }

// export default App;

// this is the second and main commented part of adding post to the sites 

// function App() {

//   const [posts, setPosts] = useState([]);

//   // [ <PostComponent/>]

//   const postComponents = posts.map(post => <PostComponent
//     name={post.name}
//     subtitle={post.subtitle}
//     time={post.time}
//     image={post.image}
//     description={post.description}
//   />)
//   function addPost() {
//     setPosts([...posts, {
//       name: "robin",
//       subtitle: "50k follower",
//       timme: "2m ago",
//       image: "vikas.png",
//       description: "know about python"
//     }])
//   }

//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh", }}>
//       <button onClick={addPost}>Add Post</button>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>
//           {postComponents}
//         </div>
//       </div>
//     </div>
//   )
// }


// this is the first commented part for posts but reading purpose 

// import React, { useState } from 'react';

// function App() {
//   // pops
//   return (
//     <div style={{ background: "#dfe6e9", height: "100vh" }}>
//       <ToggleMessage />
//       <ToggleMessage />
//       <ToggleMessage />
//     </div>
//     //   {/* <Greeting name={"codebyvikas"} /> 
//     //    <div style={{ display: "flex", justifyContent: "center" }}>
//     //     <div>
//     //       <div>
//     //         <PostComponent
//     //           name={"vikas"}
//     //           subtitle={" 2000 followers"}
//     //           time={"2m ago"}
//     //           image={"vikas.png"}
//     //           description={"know about the react"}
//     //         />
//     //         <br />
//     //       </div>
//     //       <div>
//     //         <PostComponent
//     //           name={"Robin"}
//     //           subtitle={"Promoted"}
//     //           image={"vikas.png"}
//     //           description={"know about the backend"}
//     //         />
//     //         <br />
//     //       </div>
//     //     </div>
//     //   </div> }
//     // </div> */}
//   )
// }

// // const ToggleMessage = () => {
//   // complicated method 

//   // const [isVisible, setIsVisible] = useState(false);  // defining a new state variable
//   //  when the value of a state variable changes.
//   // the component that uses the state variables re-renders

//   // simple method 

//   const ToggleMessage = () => {
//   let [notificatiionCount, setNotificationCount] = useState(0);

//   function increment(){
//     setNotificationCount(notificatiionCount+1);
//   }

//   return (
//     <div>
//       <button onClick = {increment}>
//         New Notification
//       </button>
//       {notificatiionCount}
//     </div>
//   );
// };

// // const style = {
// //   width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray",
// //   borderWidth: 1, padding: 20
// // }

// // function PostComponent({ name, subtitle, time, image, description }) {
// //   return <div style={style}>
// //     <div style={{ display: "flex" }}>
// //       <img src={image}
// //         style={{
// //           width: 33,
// //           height: 33,
// //           borderRadius: 20
// //         }} />
// //       <div style={{ fontSize: 10, marginLeft: 8 }}>
// //         <b>
// //           {name}
// //         </b>
// //         <div> {subtitle}</div>
// //          {/* conditional rendring */}
// //        { time != undefined ? <div style={{ display: "flex" }}>
// //           <div>{time}</div>
// //           <img src="clock.jpeg"
// //             style={{ width: 10, height: 10 }} />
// //         </div> : null}
// //       </div>
// //     </div>
// //     <div style={{ fontSize: 12 }}> {description} </div>
// //   </div >
// // }

// // const Greeting = ({ name }) => {
// //   return <h1>Hello, {name}!</h1>;
// // };
// export default App



