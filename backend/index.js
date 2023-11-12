const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const stockController = require('./controllers/stockController');

const app = express();
const port = 5000;


app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', 'https://stock-tracker-app-task.vercel.app/');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
  } else {
    next();
  }
});
// Enable Cross-Origin Resource Sharing (CORS)
// app.use(cors());
app.use(
  cors({
    origin: '*',
    methods:["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials:true
  })
);
// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/stocktracker', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
;
const dbURI = 'mongodb+srv://hshimanshusingh001:LKphI2HH1heZ8ACq@cluster0.ubjiaqm.mongodb.net/stocktracer?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
});
app.get('/api/stocks', stockController.getStocks);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
