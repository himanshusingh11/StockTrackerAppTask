// reducers/stockReducer.js
const initialState = {
    allStocks: [],
    selectedStock: '',
    chartData: {
      labels: [],
      datasets: [
        {
          label: 'Stock Prices',
          data: [],
          backgroundColor: 'rgba(75,192,192,0.6)',
        },
      ],
    },
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_STOCK_DATA':
        return {
          ...state,
          allStocks: action.payload,
          chartData: {
            labels: action.payload.map((stock) => stock.symbol),
            datasets: [
              {
                label: 'Stock Prices',
                data: action.payload.map((stock) => stock.price),
                backgroundColor: 'rgba(75,192,192,0.6)',
              },
            ],
          },
        };
  
      case 'SET_SELECTED_STOCK':
        return {
          ...state,
          selectedStock: action.payload,
          price: state.allStocks.find((stock) => stock.symbol === action.payload)?.price || '',
        };
  
      default:
        return state;
    }
  };
  
  export default stockReducer;
  