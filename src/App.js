import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ZodiacCompatibility from './components/ZodiacCompatibility.jsx'; 
import NavBar from './components/NavBar.jsx'; 
import Dedication from './components/Dedication.js';

// Images
import ariesImage from './assets/images/aries.jpg';
import taurusImage from './assets/images/taurus.jpg';
import geminiImage from './assets/images/gemini.jpg';
import cancerImage from './assets/images/cancer.jpg';
import leoImage from './assets/images/leo.jpg';
import virgoImage from './assets/images/virgo.jpg';
import libraImage from './assets/images/libra.jpg';
import scorpioImage from './assets/images/scorpio.jpg';
import sagittariusImage from './assets/images/sagittarius.jpg';
import capricornImage from './assets/images/capricorn.jpg';
import aquariusImage from './assets/images/aquarius.jpg';
import piscesImage from './assets/images/pisces.jpg';

// Zodiac Pages
import Aries from './pages/Aries';
import Taurus from './pages/Taurus';
import Gemini from './pages/Gemini';
import Cancer from './pages/Cancer';
import Leo from './pages/Leo';
import Virgo from './pages/Virgo';
import Libra from './pages/Libra';
import Scorpio from './pages/Scorpio';
import Sagittarius from './pages/Sagittarius';
import Capricorn from './pages/Capricorn';
import Aquarius from './pages/Aquarius';
import Pisces from './pages/Pisces';

function Home() {
  const [birthDate, setBirthDate] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [dailyHoroscope, setDailyHoroscope] = useState('');

  const horoscopes = {
    Aries: "Today is a great day for new beginnings!",
    Taurus: "Be patient, your hard work will pay off soon.",
    Gemini: "Communication is key today, so speak your mind.",
    Cancer: "Stay grounded today, things will balance out soon.",
    Leo: "Your confidence will be your strength today.",
    Virgo: "Look closely at details, you'll find a solution.",
    Libra: "Focus on harmony, peace will come your way.",
    Scorpio: "A good day to reflect and dive deep into your thoughts.",
    Sagittarius: "Adventure awaits, stay open to new opportunities.",
    Capricorn: "Hard work pays off, stay focused on your goals.",
    Aquarius: "Your creativity will lead to exciting breakthroughs.",
    Pisces: "Trust your intuition, it will guide you well."
  };

  const getZodiacSign = (date) => {
    const [, month, day] = date.split('-').map(Number);
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
    setDailyHoroscope(horoscopes[sign]);
  };

  return (
    <div>
      <h1>Cosmic Zodiac Astrology</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your birthdate:</label><br />
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <button type="submit">Get My Zodiac Sign</button>
      </form>
      {zodiac && <h2>Your Zodiac Sign: {zodiac}</h2>}
      {dailyHoroscope && <p>Your Horoscope: {dailyHoroscope}</p>}


      {/* Zodiac Image Grid */}
      <div className="zodiac-grid">
        <Link to="/aries"><img src={ariesImage} alt="Aries" className="zodiac-image" /></Link>
        <Link to="/taurus"><img src={taurusImage} alt="Taurus" className="zodiac-image" /></Link>
        <Link to="/gemini"><img src={geminiImage} alt="Gemini" className="zodiac-image" /></Link>
        <Link to="/cancer"><img src={cancerImage} alt="Cancer" className="zodiac-image" /></Link>
        <Link to="/leo"><img src={leoImage} alt="Leo" className="zodiac-image" /></Link>
        <Link to="/virgo"><img src={virgoImage} alt="Virgo" className="zodiac-image" /></Link>
        <Link to="/libra"><img src={libraImage} alt="Libra" className="zodiac-image" /></Link>
        <Link to="/scorpio"><img src={scorpioImage} alt="Scorpio" className="zodiac-image" /></Link>
        <Link to="/sagittarius"><img src={sagittariusImage} alt="Sagittarius" className="zodiac-image" /></Link>
        <Link to="/capricorn"><img src={capricornImage} alt="Capricorn" className="zodiac-image" /></Link>
        <Link to="/aquarius"><img src={aquariusImage} alt="Aquarius" className="zodiac-image" /></Link>
        <Link to="/pisces"><img src={piscesImage} alt="Pisces" className="zodiac-image" /></Link>
      </div>

      <Dedication />

    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compatibility" element={<ZodiacCompatibility />} />
          <Route path="/aries" element={<Aries />} />
          <Route path="/taurus" element={<Taurus />} />
          <Route path="/gemini" element={<Gemini />} />
          <Route path="/cancer" element={<Cancer />} />
          <Route path="/leo" element={<Leo />} />
          <Route path="/virgo" element={<Virgo />} />
          <Route path="/libra" element={<Libra />} />
          <Route path="/scorpio" element={<Scorpio />} />
          <Route path="/sagittarius" element={<Sagittarius />} />
          <Route path="/capricorn" element={<Capricorn />} />
          <Route path="/aquarius" element={<Aquarius />} />
          <Route path="/pisces" element={<Pisces />} />
        </Routes>
      </div>
    </Router>

  
  ); 

  

}

export default App;
