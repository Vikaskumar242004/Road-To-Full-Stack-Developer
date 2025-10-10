# 5.1 React Deep dive
   
     understanding React from examples


#   Jargon we'll learn today

     jsx, class vs classname, static vs dynamic websites, state, components, re-redering



# Why React ?

  people realised it's harder to do DOM manipulation the conventional way

  there were libraries that came into the picture that made it slightly easy, but still for a very big app it's very hard (jquery)

  Eventually, VueJS/React created a new syntax to do frontends

  under the hood,the react compiler convert your code to HTML/CSS/JS



#  Some react jargon

        To create a react app, you usually need to worry about two things

Creators of frontend frameworks realised that all websites can effectively be divided into two parts : 

     1) State
     2) Components 




#      State/Components/Re-Rendring

   # State :
          an object that represents the current state of the app it requests the dynamic things in your app (thing that change) 
               for eg: the value of the counter 

   # Components : 
          How a DOM element should render,given a state 
          it is a re-usable,dynamic,HTML snippet that changes given the state


 # main defination of react
   
          you usually have to define all your components once 
and then all you have to do is update the state of your app. React takes care of re-rendring your app 

# jsx syntax is cleaner wat to wrote components

   # jsx
      
        jsx stands for js XML. it is a syntax extensionn for js,most commonly used with react. a popular js library foor building user interfaces. JSX allows you to write HTML - like code directly within js. this makes it easier to create and manage the
        user interface in React applications.