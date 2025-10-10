                            
                            
                            // CHILDREN

//    the children prop allows you to pass elements or components as props to other components.

import React, { Component } from 'react';

// here we passes the data thorugh the card 
// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// // here we declare the final box or card for all over the website and it should be changable in size as the data enters in it 
// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <input type="text" />
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };


                                  // LISTS AND KEYS

// when rendering lists, each item should have a unique key prop for react to track changes efficiently.

// key are used to store the unique id of the every post  
// const  App = () =>{
//     return (
//         <div>
//             {[
//                 <Todo key = {1} title = {"go to gym "} done = {false}/>,
//                 <Todo key = {2} title = {"eat food "} done = {false}/>
//             ]}
//         </div>
//     )
// }

// function Todo ({title, done}){
//     return <div>
//         {title} - {done ? "done" : "not done"}
//     </div>
// }

// export default App;


                            //  ININE STYLING

// Inline styling in React allows you to apply CSS styles directly to elements using a javascript object

// const App =() =>{
//     return (
//         <div>
//             <Mycomponent/>
//         </div>
//     )
// }
// function Mycomponent(){
//     return (
//         <div style = {{backgroundColor : 'blue',color : 'white'}}>
//             hello vikas
//         </div>
//     )
// }
// export default App


                    // CLASS BASED VS FUNCTIONAL COMPONENTS

// for more go to the readme.md

// this is the example of class based components
// const App =() =>{
//     return (
//         <div>
//             <ClassCounter />
//         </div>
//     )
// }

// class ClassCounter extends Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

// export default App


                      //  LIFECYCLE EVENTS


                    //   ERROR BOUNDARY

//  error boundaries are react components that catch js errors in their child component tree and display a fallback UI

// error boundaries only exist in class based components

// const App =() =>{
//     return (
//         <div>
//             <Card1/>
//             <Card2/>
//         </div>
//     )
// }
// function Card1(){
//     return <div style = {{backgroundColor : 'gray', color : 'white',borderRadius : 20,margin: 10,padding: 10}}> vikas</div>
    
// }


// function Card2(){
//     return <div style = {{backgroundColor : 'gray', color : 'white',borderRadius : 20,margin: 10,padding: 10}}>robin</div>
    
// }

// // search the complete example yourself 
// export default App

                             
                                //  FRAGEMENT
                        
// In React, a component can return a single parent element, but it can contain multiple children within that single parent 



function App(){
    return (
        // if you don't want extra div or extra parent element so you can use <> </>
        <>
        <div>hi kashvi</div>
        <div>hi kashvi g</div>
        </>
    )
}

export default App;