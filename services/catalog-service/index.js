const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Sample catalog data
const catalog = [
  { id: 1, name: 'Wireless Mouse', price: 25.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 89.99 },
  { id: 3, name: 'HD Monitor', price: 199.99 },
  { id: 4, name: 'USB-C Hub', price: 49.99 }
];

// Routes
app.get('/api/catalog', (req, res) => {
  res.json(catalog);
});

app.get('/api/catalog/:id', (req, res) => {
  const item = catalog.find(p => p.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Catalog-service running on port ${PORT}`);
});
