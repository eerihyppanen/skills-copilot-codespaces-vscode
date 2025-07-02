// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for skills
app.get('/skills', (req, res) => {
    res.send('List of skills');
});

// Route for members
app.get('/members', (req, res) => {
    res.send('List of members');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});