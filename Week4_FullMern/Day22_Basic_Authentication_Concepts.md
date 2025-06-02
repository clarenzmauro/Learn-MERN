what is auth or authentication?

auth is the process of verifying who the user is

authentication vs authorization
AuthN deals with verifying identity while AuthZ deals with verifying permission

common auth strategies

1. session-based auth
    - server creates a session and stores a session id in the browser's cookies

2. token-based auth
    - JWT or JSON Web Token are a popular standard for creating access token.
        - how it generally works:
            - user registration
                1. user provides credential
                2. server validates data
                3. server stores password by hashing it using bcrypt
                4. server stores the record
            - user login
                1. user provides credential
                2. server finds the user by username/email
                3. server hashes the provided password and compares it to the stored hash
                4. if they match, credentials are valid
                5. the server generates a JWT. this contains the information about the user and the server signature as well as expiration time

3. client stores token
    - react recieves token and stores it securely, typically in:
        - localStorage or sessionStorage: easy to access with js but vulnerable to xss
        - http-only cookies: more secure against xss but require more setup

4. client sends token with requests
    - any subsequent request to a protected API endpoint. the client includes the JWT in the Authorization header, usually as a "Bearer Token"

5. server verifies token
    - express recieves the request
    - middleware function on protected routes extract the token from the authZ header 
    - middleware verifies the token sign and check if it's expired
    - if the token is valid, the middleware can extract user credentials from the token and attach it to the req object. the req is then passed to the actual route handler
    - if token is invalid, the server responds with an error

6. logout
    - with JWTs, logout is tricky since tokens are stateless
    - client-side: simply delete the token from storage
    - server-side: maintain a blacklist of revoked tokens

    