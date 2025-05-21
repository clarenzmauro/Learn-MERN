recap:

mongoose installation: npm i mongoose

connection module: db.js
    - imported mongoose
    - defined mongodb atlas (dbURI) connection string
    - created connectDB that uses mongoose.connect(dbURI) to establish connection
    - handles successful connection logging and error catching

invoking connection in index js
    - imported connectDB 
    - called conectDB() at the start 

mongoose model (models/Product.js):
    - defined productSchema
    - compiled schema into a Product model using mongoose.model('Product', productSchema)

data flow:
1. client request (used POSTMAN here) - send an HTTP POST req to localhost:3000/product
2. express recieves request
3. middleware (express.json()) - parsed the JSON data from the req body
4. express routing - express matches the POST method and the /products path to the route handler
5. route handler exection
    - const newProductData = req.body; : parsed JSON data is accessed.
    - const product = new Product(newProductData); : new mongoose Product document is created using the data
    - await product.save(); : tells mongoose to take this document and insert it into the products collection in mongodb
6. mongodb receives instructions, inserts the new document into the products collection
7. response from mongodb - mongodb confirms the successful insertion
8. express sends response - res.status(201).json({ message: 'Product created successfully!', product }); : means product has been created

GET request is similar:
Request -> Express -> Routing -> Handler -> await Product.find() -> Mongoose talks to MongoDB -> MongoDB sends back documents -> Mongoose processes them -> Handler sends JSON response.

importance of async/await
    - db operations are almost always I/O bound and are therefore asynchronous.
    - using async on your route handler functions and await before mongoose operations is essential.