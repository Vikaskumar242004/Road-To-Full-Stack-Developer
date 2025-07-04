Headers      Preview       Response      Initiator      Timing

->General

   Request URL :  https://www.google.com/  // an address for the server
   Request Method :  GET                   // Request Method
   Status Code : 200 OK                    // status code
   Remote Address : 142.250.193.228.443.   // the real address of the server
   Referrer Policy : origin 


   >Response Headers (30)          // Headers sent from the Request
   >Request Headers (27)           // Headers sent from the server




---------------------------------------------------------------------------------------------------------------


   * Domain Name/IP address

   * Domain names
       the way to reach a server is through its Domain name.


   * IP address
       every domain that you see, actually has an underlying IP that it resolves to. 
       you can check the IP by running the ping command.

       ping google.com

       cms git:(main) ping google.com

 ---------------------------------------------------------------------------------------------------------------  
   

   * Ports
         In networking ports are logical endpoints used by protocols to identify specific processes
         running on a computer or server. They help direct network traffic to the correct application or 
         service on a system.

  
                             VM => 22.11.44.33
                                     
                                 
 22.11.44.33.3000            3000      google.com
                             
      
 22.11.44.33.3001            3001      facebook.com


 22.11.44.33.3002            3002      instagram.com

-----------------------------------------------------------------------------------------------------------------

 * Methods

      HTTP methods are used to sepecify the type of action that the client wants to perform on a resource
      on the server.

      You done NEED to use all the methods, but you always should. you can do everything you want with a 
      GET or POST method, but it is usually advisable to use them right.

   
      * common methods
        1) GET - Retrive data from a server.(get my TODOS)
        2) POST - Submit data to be processed by a server.(Create a TODO)
        3) PUT - Update or create a resource on the server (update my todo)
        4) DELETE - Remove a resource from the server.(Delete my todo)



-----------------------------------------------------------------------------------------------------------------



* Response
   
    the response represents what the server returnss you in response to the Request

    it could be : 
      1) plaintext data - not used as often
      2) HTML - if it is a website 
      3) JSON Data - if you want to fetch some data (user details,list of todos...)

     * JSON 
       
        JSON stands for Javascript Object Notation. It is lightweight, text-based format used for data interchange



---------------------------------------------------------------------------------------------------------------------

* Status Codes

    HTTP status codes are three digit numbers returned by a server to indicate the outcome of a client's
    request. They provide information about the status of the request and the server's response.


    200 series (success)

        * 200 OK : the request was successful, and the server returned the requested resource.

        * 204 No Content : The request was successful, but there is no content to send in the response

    300 series  (Redirection)
     
        * 301 Moved Permanently: the requested resource has been moved to a new URL 
          Permanently. the client should use the new URL provided in the response.

        * 304  Not Modified : the resource has not been modified since the last request. the client can 
          use the cached version.

    400 series (client error)
      
         • 400 Bad Request: The server could not understand the request due to invalid syntax.
         • 401 Unauthorized: The request requires user authentication. The client must provide credentials.
         • 403 Forbidden: The server understood the request but refuses to authorize it.
         • 404 Not Found: The requested resource could not be found on the server.

    500 series (Server Error)
         • 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
         • 502 Bad Gateway: The server received an invalid response from an upstream server while acting as a gateway or proxy.

-------------------------------------------------------------------------------------------------------------------------------------------------


* Body
   
    In HTTP communication, the body (or payload) refers to the part of an HTTP message that conatains
    the actual data being sent to the server.

    it is usually JSON data that is transferred to the server.

    for ex : 
      
            { 
               todo : "go to the gym"
            }


----------------------------------------------------------------------------------------------------------------------------------------------------

* Routes
   
     in the context of HTTP, routes are paths or endpoints that define how incoming requests are handled by a server. Routing is a mechanism
     used to direct incoming HTTP requests to the appropiate handler functions or resources based on the URL path.
     