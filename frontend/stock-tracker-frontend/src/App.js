// App.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setStockData, setSelectedStock } from './actions/stockActions'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockChart from './components/StockChart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const { allStocks, selectedStock, chartData } = useSelector((state) => state);
  axios.defaults.withCredentials =true;
  useEffect(() => {
    const fetchStockOptions = async () => {
      try {
        const response = await axios.get('https://stock-tracker-backend-nu.vercel.app/api/stocks');
        const stocks = response.data;

        dispatch(setStockData(stocks));

        const selectedStockData = stocks.find((stock) => stock.symbol === selectedStock);
        if (selectedStockData) {
          dispatch(setSelectedStock(selectedStock));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStockOptions();
    const interval = setInterval(() => {
      fetchStockOptions();
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatch, selectedStock]);

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h1 className="text-center">Mini Stock Price Tracker</h1>
                <Form>
                  <Form.Group controlId="stockSelector">
                    <Form.Label>Select a stock:</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => dispatch(setSelectedStock(e.target.value))}
                      value={selectedStock}
                    >
                      <option value="">-- Select Stock --</option>
                      {allStocks.map((stock) => (
                        <option key={stock.symbol} value={stock.symbol}>
                          {stock.symbol}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Form>
                {selectedStock && (
                  <div className="text-center">
                    <h2>Selected Stock: {selectedStock}</h2>
                    <h2>Current Price: ${allStocks.find((stock) => stock.symbol === selectedStock)?.price || ''}</h2>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <StockChart chartData={chartData} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

