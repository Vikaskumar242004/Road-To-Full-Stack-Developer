for all documentation :
                        http://petal-estimate-4e9.notion.site/18-useRef-11d7dfd107358014b36be6d95238c03d

for best routing in react we use the external library

for web applications

     npm install react-router-dom

  and for mobile application
   
      npm install react-router-native

 and for desktop
  
     npm install react-router-desktop



# there are two ways for routing of SPAS

  1. Link
  2. navigate

  # Link
     
      initialize in between the browserrouter 
       
         for ex 
                   
                   <BrowserRouter>
                     <Link to = "/">Homepage</Link> |
                     <Link to = "/neet/online-coaching-class-11">class 11</Link> |
                     <Link to = "/neet/online-coaching-class-11">class 12</Link> 
                   </BrowserRouter>


# What is useRef
     
 in React, useRef is a hook that provides a way to create a reference to a value or a DOM
            element that persides across renders but does not trigger a re-render when the value changes.
            
               
# key characteristics of useRef
 1. Persistent across Renders : the value stored in useRef persists between component re-renders.This means the value of a ref does not reset when the component re-renders,unlike regular variables.

 2. No Re-Renders on Change : Changing the value of a ref (ref.current) does not cause a component to re-render. This is different from state (useState), which triggers a re-render when updated.*/