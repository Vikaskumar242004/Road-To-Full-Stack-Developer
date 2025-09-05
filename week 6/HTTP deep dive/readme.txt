Int this week  :--

Authentication

 context
 auth workflow (Bank example)
 auth workflow
 creating an express app
 creating an Authenticated EP
 Tokens vs JWTs
 JWTs
 Replace token logic with JWT
 JWTs can be decoded by anyone
 assignment : creating an auth middleware




---------------------------------------------

what we'll learn in this folder :-

auth basics
JWT (Json Web Tokens)
Authorization header
Creating your own auth middleware
Locat Storage



------------------------------------------------

Auth workflow (Bank Example)

  when you go to open a bank account in a bank, you 

  1) Go to the bank and give your information.
  2) they give you back a cheque book
  3) Every time you want to send money,you write it in the cheque book and send it over
  to the bank.
  4) That is how the bank identifies you.
  


----------------------------------------------------------------------------------------

                          username/password
signIN page       --------------------------------->      backend server
                  <---------------------------------
                           Tokens



                        GET /courses
                           Tokens
webpage           --------------------------------->      backend server
                  <--------------------------------
                        Courses = []

        
1)The user comes to your website (courses.com)
2)The User sends a request to /signIn with their username and password
3) Ther user gets backs a token
4) In every subsequent request, the user sends the token to identify it self to the backend.

         * Think of the token like a secret that the server has given you.
         You send that secret back to the server in every request so that the
         server knows who you are.

--------------------------------------------------------------------------------------------------

Tokens vs JWTs

There is a problem with using stateful tokens.

*) Stateful
     by stateful here, we mean that wee need to store these tokens inn a variable right now(and eventually
     in a database)

*) Problem
     The problem is that we need to send a request to the database every time the user wants to hit an
     Authenticated endpoint.

*) Solutions
     JWTs

------------------------------------------------------------------------------------------------------------

JWTs
 
  JWTs, or JSON Web Tokens, area compact and self-contained way to represent information between two parties.
  They are commonly used for Authentication and information exchange in web application.

  JWTs are stateless: JWTs contain all the information needed to authenticate a request,so the server doesn't need to store sessionn data.
  All the data is stored in the token itself.


  
                          username/password
signIN page       --------------------------------->      backend server
                  <---------------------------------
                             JWTs



                        GET /courses
                           JWTs
webpage           --------------------------------->      backend server
                  <--------------------------------
                        Courses = []

----------------------------------------------------------------------------------------------------------------------------------------------------