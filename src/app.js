// src/app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Order Service is running!');
});

const PORT = 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
