import React, { useState } from 'react';
import zodiacData from '../data/zodiacData';
import Footer from './Footer';

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

      {/* Sign 1 and Gender Selection */}
      <div className="selection-container">
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
      </div>

      {/* Sign 2 and Gender Selection */}
      <div className="selection-container">
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
      </div>

      {/* Centered Relationship Type Selection */}
      <div className="relationship-type-container">
        <select value={relationshipType} onChange={(e) => setRelationshipType(e.target.value)} style={selectStyle}>
          <option value="">Select Relationship Type</option>
          <option value="heterosexual">Heterosexual</option>
          <option value="gay">Gay (Male-Male)</option>
          <option value="lesbian">Lesbian (Female-Female)</option>
          <option value="lgbtq">LGBTQ+ / Other</option>
        </select>
      </div>

      {/* Check Compatibility Button */}
      <button 
        onClick={handleCheck}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: '20px',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Check Compatibility
      </button>


    

      {/* Compatibility Result */}
      {result && <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>{result}</p>}

      <style jsx>{`
        .selection-container {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 600px;
          margin-bottom: 10px;
        }

        .selection-container select {
          width: 48%;
        }

        /* Centered Relationship Type Container */
        .relationship-type-container {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 15px;
        }

        .relationship-type-container select {
          width: 40%; /* Adjusted to make it narrower */
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .selection-container {
            flex-direction: column;
            align-items: center;
          }

          .selection-container select {
            width: 90%;
            margin-bottom: 10px;
          }

          .relationship-type-container {
            margin-top: 20px;
          }

          .relationship-type-container select {
            width: 70%; /* Adjust width on smaller screens */
          }
        }
      `}</style>

        <Footer />

    </div>
  );
};

export default ZodiacCompatibility;
