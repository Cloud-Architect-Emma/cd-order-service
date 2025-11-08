const express = require('express');
const app = express();
const PORT = 3005; // Replace X with correct port

app.get('/shipping_service', (req, res) => {
  res.json({ message: 'Mock response from shippind_service' });
});

app.get('/health', (req, res) => {
  res.send('shipping_service is healthy');
});

app.listen(PORT, () => {
  console.log(`shipping_service running on port ${PORT}`);
});
