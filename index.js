// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js API!');
});

// Sample POST route to handle JSON data
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
