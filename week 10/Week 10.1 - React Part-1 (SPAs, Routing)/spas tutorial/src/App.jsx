// import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

// function App() {
//   return <div>
//     <BrowserRouter>

//       <Routes>
//         {/* the below route is the parent route which wrap the routes */}
//         <Route path="/" element={<Layout />}>
//           <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//           <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//           <Route path="/" element={<Landing />} />
//           {/* this is the route when user enter wrong route path */}
//           <Route path="*" element={<ErrorPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </div>
// }

// // this is the layout section where we adjust the layout of our page
// function Layout() {
//   return <div style={{ height: "100vh", backgroundColor: "red" }}>
//     <Header />
//     <div style={{ height: "90vh", backgroundColor: "green" }}>
//       <Outlet />
//     </div>
//     Footer
//   </div>
// }

// function Header() {
//   return <div> <Link to="/">Homepage</Link>
//     |
//     <Link to="/neet/online-coaching-class-11">class 11</Link>
//     |
//     <Link to="/neet/online-coaching-class-12">class 12</Link>
//   </div>
// }
// function Landing() {
//   return <div>
//     Homepage
//   </div>
// }

// function Class11Program() {
//   return <div>
//     NEET programs for Class 11th
//   </div>
// }

// function Class12Program() {

//   const navigate = useNavigate();

//   function redirectUser() {
//     navigate("/")
//   }
//   return <div>
//     NEET programs for Class 12th
//     <button onClick={redirectUser}>Go back to Homepage</button>
//   </div>
// }

// function ErrorPage() {
//   return <div>
//     Sorry Page not found
//   </div>
// }
// export default App



// now we understand [ useRef ]

// import { useRef, useState} from 'react'

// function App() {

//   const [currentCount,setcurrentCount] = useState(1);
//   const timer = useRef();

//   function startClock(){
//    let value  =  setInterval(()=>{
//       setcurrentCount(c => c+1);
//     },1000)
//     timer.current = value;
//   }

//   function stopClock(){
//       console.log(timer);
//       clearInterval(timer.current);
//   }

//   return <div>
//     {currentCount}
//     <br />
//     <button onClick={startClock}>chal bhag ke dikha</button>
//     <button onClick={stopClock}>ruk ja</button>
//   </div>
// }

// export default App


// another example of useRef 

import React, { useEffect, useRef, useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default Chat;
