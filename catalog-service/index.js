const express = require('express');
const app = express();
const PORT = 3001;

app.get('/catalog', (req, res) => {
  res.json([
    { id: 1, name: 'Savings Account', rate: '2.5%' },
    { id: 2, name: 'Credit Card', rate: '15.9%' }
  ]);
});

app.get('/health', (req, res) => {
  res.send('Catalog service is healthy');
});

app.listen(PORT, () => {
  console.log(`Catalog service running on port ${PORT}`);
});
