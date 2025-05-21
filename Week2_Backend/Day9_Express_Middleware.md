express middleware is simply the helper functions that process requests.

middleware functions are functions that have access to the request object, the response object, and the next function.

the middleware can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function in the stack using next().

the next() function

when this function is called, Express moves to the next middleware function.

calling next('route') will skip the middlewares in the stack and go directly to the route handlers.

calling next('err') with an error object will skip the middlewares in the stack and go straight to the error-handling middleware.

application-level middleware - bound to an instance of app using app.use() or app.METHOD()

router-level middleware - works like application-level but bound to an instance of express.Router()

error-handling middleware - special middleware with four arguments: (err, req, res, next) 

built-in middleware - examples are: express.json, express.urlencoded(), and express.static()

third-party middleware - installed via npm, example is cors 