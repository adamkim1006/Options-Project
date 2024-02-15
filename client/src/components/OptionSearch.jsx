import React, { useState } from 'react';

const OptionSearch = ({ onSearch }) => {
  const [ticker, setTicker] = useState('');
  const [expiration, setExpiration] = useState('');
  const [type, setType] = useState('call');
  const [strikePrice, setStrikePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the optionSymbol to the parent component for API request
    console.log('OS in OptionSearch.jsx', ticker, expiration, type[0], strikePrice);
    onSearch(ticker.toUpperCase(), expiration, type[0].toUpperCase(), strikePrice);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ticker Symbol:</label>
        <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)} />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input type="date" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
        {/* Alternatively, use a date picker */}
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="call">Call</option>
          <option value="put">Put</option>
        </select>
      </div>
      <div>
        <label>Strike Price:</label>
        <input type="text" value={strikePrice} onChange={(e) => setStrikePrice(e.target.value)} />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default OptionSearch;
