import { useEffect, useState } from 'react'
import './App.css'
// import { useFetch } from "../hooks/useFetch"
// import { usePrev } from "../hooks/usePrev";
import { useDebounce } from '../hooks/useDebounce';
// custom hooks
// function useCounter() {

//   // defines the state functions here only one time and use it many times 
//   const [count, setcount] = useState(0);

//   function increaseCount() {
//     setcount(count + 1);
//   }

//   //  like we need count and increasecount in app function so we return them
//   return {
//     count,
//     increaseCount, 
//   }
// }



// // after using custom hooks now the component (app function) looks clean 
// // the main motive is like here we use 4 Counters and we define only once the state variable in a custom hook so now we make a Counter function
// // and renders many times in the app function and every single counter has different useState
// function App() {

//   return ( 
//   <div>
//     <Counter />
//     <Counter />
//     <Counter />
//     <Counter />
//   </div>
//   )
// }

// // using the custom hooks (useCounter)
// function Counter() {

//   const { count, increaseCount} = useCounter();

//   return  <div>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </div>

// }

// export default App


// function App() {

//   const [currentPost, setcurrentPost] = useState(1)
//   const { finaldata ,Loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)

//   if (Loading){
//     return <div>
//       Loading...
//     </div>
//   }

//   return (
//     <div>
//       <button onClick={() => setcurrentPost(1)}>post 1</button>
//       <button onClick={() => setcurrentPost(2)}>post 2</button>
//       <button onClick={() => setcurrentPost(3)}>post 3</button>
//       {JSON.stringify(finaldata)}
//     </div>
//   )

// }

// export default App


// function App() {
//   const [state, setstate] = useState(0);
//   const prev = usePrev(state);

//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={() => { setstate((curr) => curr + 1) }}>Click me</button>
//       <p>the previous value was {prev} </p>
//     </>
//   )

// }

// export default App


// now learn it(usePrev) by a real life exampale


// function App() {
//   const [items, setItems] = useState(0);
//   const prevItems = usePrev(items);

//   const addItem = () => {
//     setItems(items + 1);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <p>Current Items: {items}</p>
//       <p>Previous Items: {prevItems ?? 'None yet'}</p>
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// }

// export default App



// useDebounce

// function App() {

//   function senddatatobackend() {
//     fetch("api.amazon.com/search/")
//   }

//   const debouncedFn = useDebounce(senddatatobackend)
//   return (
//     <>
//       <input type="text" onChange={debouncedFn} />
//     </>
//   )
// }

// export default App


// another method 


function App() {

  function senddatatobackend() {
    const [inputval,setinputval] = useState("")
    const debouncedValue = useDebounce(inputval,200)
  
  function change(e){
  setinputval(e.target.value)
  } 

  useEffect(() =>{
    console.log("expensice operation")
  },[debouncedValue])
  return (
    <>
    <input id = "input" type="text" onChange={change} ></input>
    </>
  )
}
}
export default App