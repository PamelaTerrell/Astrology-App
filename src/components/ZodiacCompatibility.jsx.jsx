import React, { useState } from 'react';
import zodiacData from '../data/zodiacData';  // Ensure you're importing the data correctly

const ZodiacCompatibility = () => {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!sign1 || !sign2) {
      setResult("Please select both zodiac signs.");
      return;
    }

    const key1 = `${sign1}-${sign2}`;
    const key2 = `${sign2}-${sign1}`;

    const compatibility = zodiacData.compatibility[key1] || zodiacData.compatibility[key2];
    setResult(compatibility || "Compatibility data not available.");
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const selectStyle = {
    margin: '10px',
    padding: '5px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const pStyle = {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2>Zodiac Compatibility</h2>
      <select value={sign1} onChange={(e) => setSign1(e.target.value)} style={selectStyle}>
        <option value="">Select First Sign</option>
        {zodiacData.signs.map((sign) => (
          <option key={sign} value={sign}>{sign}</option>
        ))}
      </select>
      <select value={sign2} onChange={(e) => setSign2(e.target.value)} style={selectStyle}>
        <option value="">Select Second Sign</option>
        {zodiacData.signs.map((sign) => (
          <option key={sign} value={sign}>{sign}</option>
        ))}
      </select>
      <button onClick={handleCheck} style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
        Check Compatibility
      </button>
      {result && <p style={pStyle}>{result}</p>}
    </div>
  );
};

export default ZodiacCompatibility;
