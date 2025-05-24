import React, { useState } from 'react';
import zodiacData from '../data/zodiacData';

const ZodiacCompatibility = () => {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [gender1, setGender1] = useState('');
  const [gender2, setGender2] = useState('');
  const [relationshipType, setRelationshipType] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!sign1 || !sign2 || !gender1 || !gender2 || !relationshipType) {
      setResult("Please select both signs, genders, and relationship type.");
      return;
    }

    const key1 = `${sign1}-${sign2}-${relationshipType}`;
    const key2 = `${sign2}-${sign1}-${relationshipType}`;
    
    // Try specific pairing, fallback to general
    const compatibility = zodiacData.compatibility[key1] || zodiacData.compatibility[key2] || zodiacData.compatibility[`${sign1}-${sign2}`] || zodiacData.compatibility[`${sign2}-${sign1}`];

    setResult(compatibility || "Compatibility data not available for this pairing.");
  };

  const options = zodiacData.signs.map((sign) => (
    <option key={sign} value={sign}>{sign}</option>
  ));

  const selectStyle = {
    margin: '10px',
    padding: '5px',
    fontSize: '16px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h2>Zodiac Compatibility</h2>

      <select value={sign1} onChange={(e) => setSign1(e.target.value)} style={selectStyle}>
        <option value="">Select First Sign</option>
        {options}
      </select>

      <select value={gender1} onChange={(e) => setGender1(e.target.value)} style={selectStyle}>
        <option value="">Select First Person's Gender</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
        <option value="non-binary">Non-binary</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>

      <select value={sign2} onChange={(e) => setSign2(e.target.value)} style={selectStyle}>
        <option value="">Select Second Sign</option>
        {options}
      </select>

      <select value={gender2} onChange={(e) => setGender2(e.target.value)} style={selectStyle}>
        <option value="">Select Second Person's Gender</option>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
        <option value="non-binary">Non-binary</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>

      <select value={relationshipType} onChange={(e) => setRelationshipType(e.target.value)} style={selectStyle}>
        <option value="">Select Relationship Type</option>
        <option value="heterosexual">Heterosexual</option>
        <option value="gay">Gay (Male-Male)</option>
        <option value="lesbian">Lesbian (Female-Female)</option>
        <option value="lgbtq">LGBTQ+ / Other</option>
      </select>

      <button 
        onClick={handleCheck}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Check Compatibility
      </button>

      {result && <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>{result}</p>}
    </div>
  );
};

export default ZodiacCompatibility;
