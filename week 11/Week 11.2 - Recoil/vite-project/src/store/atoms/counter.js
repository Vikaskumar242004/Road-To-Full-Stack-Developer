// import { atom } from "recoil"

// export const counterAtom = atom({
//     default : 0,
//     key : "counter"   // key will be unique for every single atom like for notifications and messages and others 
// })



// here we know about selectors 

import { atom, selector} from 'recoil';

// 1st step : create an Atom
// this is a global state 
export const counterAtom = atom({
      default : 0,
      key : "counter"
})

// step 2 : create a selector 
export const evenSelector = selector({
      key : "isEvenSelector",
      get : function({get}){
        // here it derived the state of the counterAtom like it returns only even numbers 
        const currentCount = get(counterAtom);
        const isEven = (currentCount%2 == 0);
        return isEven;
      }
})