// stockController.js
const Stock = require('../models/stockModel');

async function getStocks(req, res) {
  try {
    const stocks = await Stock.find({}).exec();
    res.json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stock data.' });
  }
}

const updateStockPrices = () => {
  setInterval(async () => {
    try {
      const stocks = await Stock.find({}).maxTimeMS(10000).exec();
      stocks.forEach(async (stock) => {
        const newPrice = Math.random() * 1000;
        await Stock.updateOne({ _id: stock._id }, { $set: { price: newPrice } });
      });
    } catch (error) {
      console.error('Error updating stock prices:', error);
    }
  }, 5000);
};

setTimeout(updateStockPrices, 10000);

module.exports = {
  getStocks,
};
