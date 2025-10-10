# Go to this link for full documentation
 
    https://petal-estimate-4e9.notion.site/React-Part-1-1177dfd1073580069172fc54e33929c0

    
# Component

 In react, components are the building blocks of the user interface. They allow you to split the UI into independent, reusabel pieces that can be thought of as custom, self-contained HTML elements.


# Conditonal Rendring

you can render different components or elements based on certainn conditions.

    code 
        
          import React, {useState} from 'react';

          const ToggleMessage = () => {
            const [isVisible,setIsVisible] = useState(false);

            return {
                <div>
                 <button onClick = {() => setIsVisible(!isVisible)}>
                    Toggel Message
                    </button>
                    {isVisible && <p> This message is conditonally rendered! </p>}
            }
          }



# useEffect
   
  Before we understand useEffect,let's understand what are side effects.

  side effects
    
      side effects are operations that interact with the outsie or have effects beyond the component's rendering. example include : 
       
        fetching data from an API
        modifying the DOM manually
        subscribing to events (like websocket connections,timers,or browser events)
        starting a clock

    these are called side effects  because they don't just compute output based on the input-they affect things outside the component itself.

    Problem in running side effects in Ract components

       if you try to introduce side effects directly in the rendring logic of a componet (in the return statement or before it),React would run that code every time the component renderss. this can lead to : 
         
            unnecessary or duplicated effects(like multiple API calls0)
            inconsistent behaviour (side effects might happen before rendering finishes).
            performance issues (side effects could block rendering or causee excessive re-rendring)


# How useEffect Manages side effects 



The useeffect hook lets you perform side effects in functional components in a safe, predictable way : 
 
     code : 
        
        useEffect(() =>{
           <!-- code here is the "effect" - this is where side efects happen -->

             fetchData();

             <!-- Optionally,return a cleanup function that when the component unmounts -->

             return () => {
              <!-- Cleanup code , e.g., unsubscribing from an  event or clearing timers. -->
             }
        },[/* dependencies */])

- The first argument to `useEffect` is the effect function, where you put the code that performs the side effect.

- The second argument is the dependencies array, which controls when the effect runs. This array tells React to re-run the effect only when certain values (props or state) change. If you pass an empty array `[]`, the effect will only run **once** after the initial render.

- Optional Cleanup : If your side effect needs cleanup (e.g., unsubscribing from a WebSocket, clearing intervals), `useEffect` allows you to return a function that React will call when the component unmounts or before re-running the effect.






                            
# 

      