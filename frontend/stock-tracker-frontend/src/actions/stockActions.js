// actions/stockActions.js
export const setStockData = (stocks) => {
    return {
      type: 'SET_STOCK_DATA',
      payload: stocks,
    };
  };
  
  export const setSelectedStock = (stock) => {
    return {
      type: 'SET_SELECTED_STOCK',
      payload: stock,
    };
  };
  