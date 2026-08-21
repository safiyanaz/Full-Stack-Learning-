// server.js
const express = require('express');
const path = require('path');
const { inputCleaner, inputValidator } = require('./middleware.js');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET / -> redirect to /form
app.get('/', (req, res) => {
  res.redirect('/form');
});

// GET /form -> serve the static HTML form
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// { index: false } stops express.static from auto-serving index.html
// for GET /, which would otherwise short-circuit the redirect above.
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// POST /submit -> run inputCleaner, then inputValidator, then respond
app.post('/submit', inputCleaner, inputValidator, (req, res) => {
  const { username, comment } = req.body;
  res.send(`Username: ${username}, Comment: ${comment}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;