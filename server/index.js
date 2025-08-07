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
  Aries: "Today is a great day for taking bold risks and stepping outside your comfort zone. Your natural courage will draw others to you — don't be afraid to lead the charge and inspire those around you. A spark of excitement could ignite something new.",
  
  Taurus: "Focus on grounding yourself through comfort and connection. Spend quality time with loved ones or nurture your space. Practical steps taken today can bring you long-term peace, especially in matters of the heart and home.",
  
  Gemini: "Your curiosity is a superpower today. Expect stimulating conversations, unexpected news, or a chance to explore something you've been wondering about. Stay flexible — your quick wit will help you adapt beautifully.",
  
  Cancer: "This is a powerful day for reflection and emotional clarity. Take time to check in with your inner world. Old wounds may surface, but so will insights that heal. Connect with people who feel like home and honor your need for comfort.",
  
  Leo: "You’re radiating charisma and confidence. Step into the spotlight and use your voice to motivate and uplift others. Recognition or appreciation may come your way — just be sure to lead with both heart and humility.",
  
  Virgo: "Today is ideal for tackling details and organizing chaos — both around you and within. Simplify your routines and tie up loose ends. Helping someone else find clarity may also illuminate your own path.",
  
  Libra: "Seek harmony in all things today. Whether you're resolving a conflict or beautifying your space, your diplomacy and sense of fairness will serve you well. Make space for both giving and receiving in your relationships.",
  
  Scorpio: "Your intuition is razor-sharp today — trust it. You may uncover hidden truths or feel drawn to dig beneath the surface of a situation. Guard your energy, but don’t be afraid to go deep. Vulnerability can be a strength.",
  
  Sagittarius: "Wanderlust may be calling — even a small adventure can bring big inspiration. Feed your spirit with learning, laughter, or something wildly unfamiliar. Embrace spontaneity and let your enthusiasm light the way.",
  
  Capricorn: "Put in the work, and you’ll see results — maybe not today, but definitely down the line. This is a time for building foundations, handling responsibilities, and keeping your eye on the long game. Progress is happening, even if it’s quiet.",
  
  Aquarius: "You’re tapped into brilliant insights today. Use your unique perspective to solve problems or imagine a better way forward. Collaboration with like-minded thinkers could spark innovation — or a breakthrough idea.",
  
  Pisces: "Let your imagination lead today. Whether you're creating art, dreaming big, or simply tuning into your emotions, there's magic in your sensitivity. Don’t underestimate how healing your presence can be to others — and yourself."
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
