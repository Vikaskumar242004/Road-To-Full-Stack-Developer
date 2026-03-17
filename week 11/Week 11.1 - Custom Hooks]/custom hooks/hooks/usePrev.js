// import { useEffect,useRef } from "react";

// export const usePrev = (value) =>{
//     const ref = useRef();  // creating a ref object using useRef();


//     // this useEffect runs after every render where value changes.
//      // it updates ref.current with the new value after the render
//         // it means during the next render, ref.current still holds the previous value.
//     useEffect (() => {
//         //   Returning the previous value (stored in ref.current).
//         ref.current = value;
//     },[value])

//     return ref.current;
// }


// now understand it by a real life example 

import { useEffect,useRef } from 'react';

 export const usePrev =(value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}