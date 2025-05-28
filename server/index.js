require('dotenv').config();  // Load environment variables
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware for CORS
app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());  // For parsing application/json

// Route to handle daily horoscope requests without API calls
app.post('/api/daily-horoscope', (req, res) => {
  const { zodiac } = req.body;  // The zodiac sign received from the frontend

  if (!zodiac) {
    return res.status(400).json({ error: 'Zodiac sign is required' });
  }

  // You can now just send a sample horoscope or static data for now.
  const horoscopes = {
    Aries: "Today is a great day for taking risks and stepping outside your comfort zone.",
    Taurus: "A day for focusing on family and taking care of loved ones.",
    Gemini: "Stay curious and open-minded. New opportunities could present themselves.",
    Cancer: "A good day to spend time reflecting on personal goals and growth.",
    Leo: "Your leadership skills will be in high demand today. Take charge!",
    Virgo: "Focus on work and organization today. Clear up any clutter around you.",
    Libra: "Balance is key today, both in personal and professional life.",
    Scorpio: "Trust your intuition today, it will guide you to the right decisions.",
    Sagittarius: "Adventure calls! Try something new and embrace the unknown.",
    Capricorn: "Focus on long-term goals. Hard work today will pay off later.",
    Aquarius: "Today is perfect for deep thinking and problem-solving.",
    Pisces: "Let your creativity flow today. Artistic endeavors will be rewarding.",
  };

  // If zodiac sign is valid, send a horoscope
  if (horoscopes[zodiac]) {
    return res.json({ horoscope: horoscopes[zodiac] });
  }

  // If invalid zodiac sign
  res.status(400).json({ error: 'Invalid zodiac sign' });
});

// Server listening on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
