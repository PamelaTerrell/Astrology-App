import React, { useState } from 'react';
import './App.css';
import Horoscope from './components/Horoscope';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [zodiac, setZodiac] = useState('');

  const getZodiacSign = (date) => {
    const [year, month, day] = date.split('-').map(Number);

    const signs = [
      { sign: "Capricorn", start: "01-01", end: "01-19" },
      { sign: "Aquarius", start: "01-20", end: "02-18" },
      { sign: "Pisces", start: "02-19", end: "03-20" },
      { sign: "Aries", start: "03-21", end: "04-19" },
      { sign: "Taurus", start: "04-20", end: "05-20" },
      { sign: "Gemini", start: "05-21", end: "06-20" },
      { sign: "Cancer", start: "06-21", end: "07-22" },
      { sign: "Leo", start: "07-23", end: "08-22" },
      { sign: "Virgo", start: "08-23", end: "09-22" },
      { sign: "Libra", start: "09-23", end: "10-22" },
      { sign: "Scorpio", start: "10-23", end: "11-21" },
      { sign: "Sagittarius", start: "11-22", end: "12-21" },
      { sign: "Capricorn", start: "12-22", end: "12-31" },
    ];

    const formatted = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    const found = signs.find(({ start, end }) => formatted >= start && formatted <= end);
    return found ? found.sign : '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sign = getZodiacSign(birthDate);
    setZodiac(sign);
  };

  return (
    <div className="App">
      <h1>Astrology App</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your birthdate:</label><br/>
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
        <button type="submit">Get My Zodiac Sign</button>
      </form>
      {zodiac && <Horoscope zodiac={zodiac} />}
    </div>
  );
}

export default App;
