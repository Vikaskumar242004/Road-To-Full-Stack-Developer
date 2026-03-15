// Rolling up the state, unoptimal re-renders

// import { useState } from "react"



// function App() {

//    return <div>
//       <LightBulb />
//    </div>
// }

// function LightBulb() {
//    const [bulbon, setbulbon] = useState(true);

//    return <div>
//       <BulbState bulbon={bulbon} />
//       <ToggleBulbstate setbulbon={setbulbon} />
//    </div>
// }

// function BulbState({ bulbon }) {
//    return <div>
//       {bulbon ? "bulb on" : "bulb off"}
//    </div>
// }


// function ToggleBulbstate({ setbulbon }) {

//    function toogle() {
//       setbulbon(currentState => !currentState)  // this line says that if it is true make it false and if false make it true
//    }
//    return <div>
//       <button onClick={toogle}>Toogle the Bulb</button>
//    </div>
// }

// export default App


//  Prop drilling  or CONTEXT API
// import { useState, createContext, useContext } from "react"

// // here we declare the context
// const BulbContext = createContext();


// export function BulbProvider({ children }) {

//     const [bulbon, setbulbon] = useState(true);

//     {/* BulbContext.Provider is a provider which allow to access al the context of parent to all the childerns
//         here we wrap the parent in provider */}
//     {/* and in the value you have to pass that context that you have to passed the childrens */ }
//    return <BulbContext.Provider value={{
//         bulbon: bulbon,
//         setbulbon: setbulbon
//     }}>
//         {children}
//     </BulbContext.Provider>
// }

// function App() {

//     return <div>
//           <BulbProvider>
//             <Light />
//           </BulbProvider>
//     </div>
// }

// function Light() {

//     return <div>
//         <Lightbulb />
//         <Lightswitch />
//     </div>
// }

// function Lightbulb() {
//     const { bulbon } = useContext(BulbContext);
//     return <div>
//         {bulbon ? "bulb on" : "bulb off"}
//     </div>
// }


// function Lightswitch() {
//     const { bulbon, setbulbon } = useContext(BulbContext)
//     function toogle() {
//         setbulbon(currentState => !currentState)  // this line says that if it is true make it false and if false make it true
//     }
//     return <div>
//         <button onClick={toogle}>Toogle the Bulb</button>
//     </div>
// }

// export default App


//              Introducing  Recoil 


import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;