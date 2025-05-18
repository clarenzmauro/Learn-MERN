const express = require("express");
const app = express();
const port = 3000;

const users = [
    { id: 1, name: "Clarenz" },
    { id: 2, name: "Ally" },
    { id: 3, name: "Gemini" },
];

app.get("/", (req, res) => {
    res.send("This is the homepage");
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    res.status(201).json({ message: "User created successfully" });
});

// example for route parameter
app.get("/users/:userId", (req, res) => {
    const userId = req.params.userId; // takes the value of the userId parameter from the url
    const user = users.find(u => u.id === parseInt(userId)); // finds the user with the id that matches the userId parameter

    if (user) {
        res.json(user); // sends the user object as a json response
    } else {
        res.status(404).send("User not found"); // sends a 404 status code and a message
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// example for query parameter

app.get('/search', (req, res) => {
    const searchTerm = req.query.userquery; // userquery is the name of the query parameter, this is what you use in the url
    const sortBy = req.query.sort; // sort is the name of the query parameter, to stack this and userquery, you can use ?userquery=SEARCH_TERM&sort=SORT_BY

    if (!searchTerm) {
        return res.status(400).json({ error: "Search term is required in url: ?q=SEARCH_TERM" });
    }

    let responseMessage = `Search results for "${searchTerm}"`; // message when only userquery is used

    if (sortBy) {
        responseMessage += ` sorted by ${sortBy}`; // message when both userquery and sort are used
    }

    res.send(responseMessage);
});