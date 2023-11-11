const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const stockController = require('./controllers/stockController');

const app = express();
const port = 5000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/stocktracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
});
app.get('/api/stocks', stockController.getStocks);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
