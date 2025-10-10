import { useState, useEffect } from "react";

// conditional rendring 
function App() {
     let [counterVisible, setCounterVisible] = useState(true);
        const [count, setCount] = useState(0);

     // this function is use to randomly call after some time delay
     useEffect(function () {
          setInterval(function () {
               setCounterVisible(c => !c)
          }, 5000);
     }, [])

     return <div>
          hi
          {counterVisible && <Counter></Counter>}
          hello
     </div>
}

// mounting, re-rendring, unmounting 
function Counter() {

     //  hooking into the lifecycel events of react


     // the code is in the useeffect is render only once 
     useEffect(function () {

          console.log("on mount")
          let clock = setInterval(function () {
               console.log("from inside the interval");
               setCount(c => c + 1)
          }, 1000);

          return function () {
               console.log("on unmount")
               clearInterval(clock)
          }
     }, []);   // dependency array, cleanup, fetch inside useEffect


     // no need anymore for this function 

     function increasecounter() {
          setCount(count + 1);
     }
     //    function decreasecounter(){
     //          setCount(count-1);
     // }
     //    function resetcounter(){
     //          setCount(0);
     // }

     return <div>
          <h1 id="text">{count}</h1>
          {/* no need for this button */}
          {/* <button onClick={increasecounter}>Increase Counter</button> */}
          {/* <button onClick={decreasecounter}>decrease Counter</button>
          <button onClick={resetcounter}>Reset Counter</button> */}
     </div>
}
export default App




