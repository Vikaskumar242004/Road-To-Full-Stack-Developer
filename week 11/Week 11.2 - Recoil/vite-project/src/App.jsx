// import { useState } from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <Counter />
//     </>
//   )
// }

// function Counter() {
//   const [count, setcount] = useState(0)

//   return <div>
//     {count}
//     <Increase setcount={setcount}/>
//     <Decrease setcount={setcount}/>
//   </div>
// }

// function Increase({ setcount }) {
//   function increase() {
//     setcount(c => c + 1)
//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>

// }

// function Decrease({ setcount }) {
//   function decrease() {
//     setcount(c => c - 1)
//   }
//   return <div>
//     <button onClick={decrease}>decrease</button>
//   </div>
// }
// export default App


// the problem in the above code is that when we click on any button (increase or decrease both are re-render) but we want to render only
// single button so the method use to avoid this context api or recoil but using context api makes our code complicated so we use recoil



//  now we write the code using recoil

// import { useState,memo,useEffect } from 'react'

// import './App.css'
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil'
// import { counterAtom } from './store/atoms/counter'

// // step 3 : make an atom in counter.js

// function App() {

//   return (
//     // step 1 install the recoil as external library
//     // step 2 wrap the counter in RecoilRoot
//     <RecoilRoot>
//       <Counter />
//       </RecoilRoot>
//   )
// }

// function Counter() {

//   return <div>
// {/* we subscribe the currentcount to that atom so all the component in currentcount is re-render*/}
//     <CurrentCount />
//     <Increase/>
//     <Decrease/>
//   </div>
// }

// // now we wrap the every component in memo so every component renders only one time of click 
// const CurrentCount = memo(function (){
//   // step 4 : here we subscribe to the atom 
//   const count = useRecoilValue(counterAtom)
//   return <div>
//     {count}
//   </div>
// })

// const Increase = memo(function () {

//   // step 5 : initialize the setcount using the subscribed component 
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount(c => c + 1)
//   }
//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>

// })

// const Decrease = memo(function () {

//   const setCount = useSetRecoilState(counterAtom);

//   function decrease() {
//     setCount(c => c - 1)
//   }
//   return <div>
//     <button onClick={decrease}>decrease</button>
//   </div>
// })
// export default App



// here we know about selectors 

import { useState, useEffect, memo } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter'


function App() {

  return <div>
    <RecoilRoot>
    <Buttons />
    <Counter />
    <IsEven />
   </RecoilRoot>
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom)
  function increase() {
    setCount(c => c + 2)
  }
  function decrease() {
    setCount(c => c - 1)
  }
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
     const count = useRecoilValue(counterAtom)

     return <div>
      {count}
     </div>
}

function IsEven() {
    const even = useRecoilValue(evenSelector)
    
    return <div>
      { even ? "Even" : "Odd"}
    </div>
}

export default App;