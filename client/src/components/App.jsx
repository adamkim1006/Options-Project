import React, { useState } from 'react';
import axios from 'axios'
import OptionSearch from './OptionSearch.jsx';
import StockInfo from './StockInfo.jsx'; // Assuming you have a component to display option info

const App = () => {
  const [optionData, setOptionData] = useState(null);

  const handleSearch = async (ticker, expirationDate, optionType, strikePrice) => {
    try {
      console.log('OS in App.jsx', ticker, expirationDate, optionType, strikePrice)
      // Make the API request with the constructed optionSymbol
      const response = await axios.get(`/api/options/${ticker}/${expirationDate}/${optionType}/${strikePrice}`);
      console.log(response.data);
      setOptionData(response.data);
    } catch (error) {
      console.error('Error fetching option data:', error);
      setOptionData(null);
    }
  };

  return (
    <div>
      <h1>Option Search</h1>
      <OptionSearch onSearch={handleSearch} />
      <StockInfo optionData={optionData} />
    </div>
  );
};

export default App;
