import React from 'react';

const StockInfo = ({ optionData }) => {
  return (
    <div>
      {optionData ? (
        <div>
          <h2>{optionData.optionSymbol}</h2>
          <p>Price: {optionData.underlyingPrice}</p>
          <p>Ask: {optionData.ask} x {optionData.askSize}</p>
          <p>Bid: {optionData.bid} x {optionData.bidSize}</p>
          <p>Last: {optionData.last}</p>
          {/* Add more fields as needed */}
          {/* price change in percent and dollars (day, week, month, 3m, yr), price with two decimals, marketCap, company name!*/}
        </div>
      ) : (
        <p>No option data available</p>
      )}
    </div>
  );
};

export default StockInfo;
