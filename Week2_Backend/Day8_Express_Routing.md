Routing is simply how an application determines how to respond to a client request to a particular endpoint.

it is defined by a URI (path) and a specific HTTP request method like GET or POST.

the typical structure of a route in express is: app.METHOD(PATH, HANDLER_FUNCTION);

methods are: get(), post(), put(), delete(), patch()

path is the string that defines the URL path on the server with / as the root.

handler_function is the function that gets executed when express matches an incoming request to this specific method and path.

req (request) - object containing information about the incoming HTTP request
res (response) - object you use to send back the HTTP response to the client

-

route parameters help you get specific information

you can have multiple parameters. an example is:
app.get('/books/:bookId/chapter/:chapterNum', (req, res) => { ... });
wherein :bookId and :chapterNum are parameters you can pass.

-

query parameters

query parameters are like route parameters but optional.

tyoically used for optional parameters like sorting, filtering, or search terms.

often appears after a ? in the URL



