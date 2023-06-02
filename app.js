const express = require('express');
const axios = require('axios');

const app = express();

// Define the route to read comments
app.get('/comments', async (req, res) => {
  try {
    // Send a GET request to the first API
    const response = await axios.get('http://localhost:8000/api/comments');

    // Extract the comments from the API response
    const comments = response.data;

    res.json(comments);
  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
