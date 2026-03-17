/* What is useDebounce 
       
     useDebounce is used like we go a site(for ex : amazon.com) then we type
     something on the search bar and the every single word i write in the search bar
     hits to the backend and like if we stop typing and wait for a sec the req will be
     going to the backend and calls the backend so to avoid this problem 
     we use (useDebounce) by using this hook it stores the that value which fill in the 
     search bar and stores it and wait until the user hits the final value and then after hitting the 
     final value it hits to the backend || and the other option is like use time (set random time dealay 
     and when the time is over it hits the backend itself) 
       criteria for waiting random time delay like i typed a value(a) so after typing it
       waits a random time(20 sec) and then 10 sec later i type (b) so it again wait for (20 sec)*/

import { useEffect, useState } from "react";


    
export const useDebounce =(value,delay) => {
    const [debouncedvalue,setdebouncedvalue] = useState(value)

     useEffect(() =>{

        const handler = setTimeout(() =>{
            setdebouncedvalue(value);
        }, delay);

        return () =>{
            clearTimeout(handler);
        }
     },[value,delay])
     
     return debouncedvalue
}


// import { useEffect, useState ,useRef} from "react";

// export function useDebounce(originalfn){
//     const currentClock = useRef();

//     const fn = () =>{
//         clearTimeout(currentClock.current);
//         currentClock.current = setTimeout(originalfn,200);
//     }
//   return fn
// }