first of all we want to write a code 
   

   1). we write a code using doctor logic

          

  Question 2). How do I expose my doctor functionality to other people?How can they find me ?

  Ans). By creating an HTTP Server


  Question 3). How do I create an HTTP server?

  Ans). Express



  Status code

  200 -- everything went fine  
  404 -- doctor is not in  the hospital (when route doesn't exist)
  500 -- mid surgery light went away
  411 -- inputs were incorrect, wrong person came to surgery
  403 -- You were not allowed in the hospital (for ex = you cannot change the password of other account)