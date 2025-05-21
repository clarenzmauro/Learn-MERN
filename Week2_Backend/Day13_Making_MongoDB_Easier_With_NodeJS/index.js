require('dotenv').config();

const express = require('express');
const connectDB = require('./db');
const Product = require('./models/Product');

const app = express();
const PORT = 3000;

connectDB(); // connect to database

app.use(express.json()); 

// CREATE a new product
app.post('/products', async (req, res) => {
    try {
        const newProductData = req.body; // data
        const product = new Product(newProductData); // creates new document instance
        await product.save(); // save to db
        res.status(201).json({message: 'Product created successfully', product});
    } catch (error) {
        console.error('Error creating product:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({message: 'Validation error', errors: error.errors});
        }
        res.status(500).json({message: 'Internal server error'});
    }
});

// READ all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find(); // find all products
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});

// READ a single product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        
        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({message: 'Invalid product ID'});
        }
        res.status(500).json({message: 'Internal server error'});
    }
});

// UPDATE a product by ID
app.put('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updateData = req.body;
        const product = await Product.findByIdAndUpdate(productId, updateData, {new: true});
        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json({message: 'Product updated successfully', product});
    } catch (error) {
        console.error('Error updating product:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({message: 'Invalid product ID'});
        }
        res.status(500).json({message: 'Internal server error'});
    }
});

// DELETE a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json({message: 'Product deleted successfully', product});
    } catch (error) {
        console.error('Error deleting product:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({message: 'Invalid product ID'});
        }
        res.status(500).json({message: 'Internal server error'});
    }
});

app.use((req, res, next) => {
    console.log('-----');
    console.log('Time:', new Date().toLocaleTimeString());
    console.log('Request URL:', req.originalUrl);
    console.log('Request Method:', req.method);
    next(); 
    console.log('--Logger Finished--')
});

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log('Added custom property to request object');
    next();
});

app.get('/', (req, res) => {
    let responseText = 'Welcome to the homepage! <br>';
    responseText += `Requested at: ${new Date(req.requestTime).toLocaleTimeString()}`;
    res.send(responseText);
});

app.get('/about', (req, res) => {
    res.send('a simple express app to learn about routing and middleware');
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Clarenz' },
        { id: 2, name: 'Ally' },
        { id: 3, name: 'Gemini' },
    ];
    res.json(users);
});

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Fetching details for User ID: ${userId}`);
});

app.use((err, req, res, next) => {
    console.error('-- ERROR --');
    console.error(err.stack); 
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});