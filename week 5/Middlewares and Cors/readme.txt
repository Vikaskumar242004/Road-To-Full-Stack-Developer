

Middleware functions are functions that have access to the request object(req), the response(res),and the next middlware function in the
application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

     Middleware functions can perform the following tasks.

      Execute any code.
      Make changes to the request and the response objects.
      End the request-response cycle.
      Call the next middleware function in the stack.

                                                                    HTTP Server


                       /``````````````````````             Middleware
                      /                                 ____________________________________________
                     /                                 |        function,(req,res,next){           |
                    /                                  |                req.name = "harkirat"      |
                   /                                   |                   }                       |
                                                       |                                           |
www.vikaharo.com                                       |                                           |
                                                       |                                           |
                   \                                   |          route function here!             |
                    \                                  |                                           |
                     \                                 |                                           |
                      \                                |                                           |
                       \_______________________        |__________________________________________ |                                         |