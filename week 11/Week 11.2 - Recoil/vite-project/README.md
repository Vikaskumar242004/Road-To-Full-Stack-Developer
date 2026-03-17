for all documentation in this video go to the below link 
    
petal-estimate-4e9.notion.site/Recoil-1247dfd107358016bdb1ea1bb52e4a68


# Context 
     
  in this section we will be learning about recoil. Recoil is one of the many state management libraries in react.


# Introducing Recoil 

  A State management library for react that provides a way to manage global state with fine-grained control.

  Recoil minimizes unnecessary renders by only re-rendring components that depend on changed atoms.

  The performance of a React app is measured by the number of re-renders.
  Each re-render is expensive, and you should aim to minimise it.

  ## Key concepts in recoil

 1. Atoms: Units of state that can be read from and written to from any component.
 2. Selectors: Functions that derive state from atoms or other selectors, allowing for computed state.


# Atoms
   Atoms are units of state that can be read from and written to from any component. When an atom's state changes,all components that subscribe to that atom will re-render.



   <!-- a flow chart to understand how the recoil works -->


                                 App
                                  |
                                  |
                                  |
                               Counter                   counterAtom
                               /  |   \                  /
                              /   |    \                /
                             /    |     \              /   value
                            /     |      \            /
                    Increase   Decrease   CurrentCount


# Selectors
   
     A Selectors represents a piece of derived state. You can think of derived state as the output of passing stata to a pure function that derives a new value from the said state.

     Derived state is a powerful concept because it lets us build dynamic data that depends on other data.


     in simple words : 
        
         React khud mein “selectors” ka concept directly nahi deta,
         lekin Redux (ya kisi bhi state management library jaise Recoil, Zustand, Jotai) ke saath selectors ka use hota hai.

         Selector basically ek function hota hai jo state se specific data extract karta hai — jaise filter karke, calculate karke, ya transform karke.

        So simple words mein:

            Selector ek helper function hai jo state ke andar se data nikalta ya derive karta hai