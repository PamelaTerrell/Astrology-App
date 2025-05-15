import React, { useState } from 'react';
import zodiacData from '../data/zodiacData';

const ZodiacCompatibility = () => {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (sign1 && sign2) {
      const key = [sign1, sign2].sort().join('-');
      const compatibility = zodiacData.compatibility[key];
      setResult(compatibility || "Compatibility data not available.");
    }
  };

  return (
    <div>
      <h2>Zodiac Compatibility</h2>
      <select value={sign1} onChange={(e) => setSign1(e.target.value)}>
        <option value="">Select First Sign</option>
        {zodiacData.signs.map((sign) => (
          <option key={sign} value={sign}>{sign}</option>
        ))}
      </select>
      <select value={sign2} onChange={(e) => setSign2(e.target.value)}>
        <option value="">Select Second Sign</option>
        {zodiacData.signs.map((sign) => (
          <option key={sign} value={sign}>{sign}</option>
        ))}
      </select>
      <button onClick={handleCheck}>Check Compatibility</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default ZodiacCompatibility;
