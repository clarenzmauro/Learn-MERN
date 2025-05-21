restful apis

API - application programming interface

a set of rules that allow one piece of software to interact with another.

in the case of mern, for react to talk with express.

REST - representational state transfer.

an architectural style for designing networked applications particularly web services.

key principles:

1. client-server architecture
    - client is responsible for ui/ux; server is responsible for storing/managing/processing/providing data to the client

2. statelessness
    - makes the API more scalable and reliable because any server instance can handle client request.

3. cacheability
    - significantly improves performance and reduce server load

4. uniform interface
    a. identification of resources (URIs)
        - each resource is uniquely identified by URIs (Uniform Resource Identifier)
    b. manipulation of resources through representations (using HTTP methods)
        - GET: retrieve a representation of a resource
        - POST: create a new resource 
        - PUT: update an existing resource completely
        - DELETE: delete a resource
        - PATCH: partially update an existing resource 
    c. self-descriptive messages
        - requests and responses should use standard media types to describe the format of the data
    d. hypermedia as the engine of application state
        - responses from the server should ideally include links

5. layered system
    - the client typically doesn't know if it's connected directly to the end server

why use REST with MERN?
- simplicity: uses standard HTTP methods 
- scalability: statelessness helps
- flexibility: different clients can consume the same RESTful APIs
- separation of concerns: clearly divides frontend and backend
- wide adoption and tooling: lots of libraries and tools support building and consuming RESTful APIs
 
common status codes:
1. 2xx:
    - 200 OK: standard response for successful HTTP requests (GET success)
    - 201 Created: request fulfilled and resulted in a new resource being created. (POST success)
    - 204 No Content: successfully processed request but is not returning any content (DELETE success)

2. 4xx:
    - 400 Bad Request: server cannot or will not process the request due to something percieved to be a client error 
    - 401 Unauthorized: auth is required and has failed or has not yet been provided.
    - 403 Forbidden: server understood the request but refuses to authorize it.
    - 404 Not Found: server didn't found anything matching the Request-URI
    - 405 Method Not Allow: method specified in the Request-Line is now allowed for the resource identified by the Request-URI

3. 5xx:
    - 500 Internal Server Error: generic error message; given when unexpected condition was encountered