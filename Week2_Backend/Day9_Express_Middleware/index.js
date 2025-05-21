const express = require('express');
const app = express();
const port = 3000;

// simple logger middleware

app.use((req, res, next) => {
    console.log('-----');
    console.log('Time:', new Date().toLocaleTimeString());
    console.log('Request URL:', req.originalUrl);
    console.log('Request Method:', req.method);
    next(); // passes control to the next middleware
    console.log('--Logger Finished--')
});

// middleware that adds a custom property to the request object

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log('Added custom property to request object');
    next();
});

// routes

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

// error handling middleware
// typically defined last

app.use((err, req, res, next) => {
    console.error('-- ERROR --');
    console.error(err.stack); // logs the error stack for debugging
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});