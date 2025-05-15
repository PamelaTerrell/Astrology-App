require('dotenv').config();  // Load environment variables
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Configure CORS to only allow requests from your React app
app.use(cors({
  origin: 'http://localhost:3000',  // Allow only your frontend app
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());  // For parsing application/json

// Route to fetch the daily horoscope
app.post('/api/daily-horoscope', async (req, res) => {
  const { zodiac } = req.body; // The zodiac sign received from the frontend

  try {
    // Make the API request to FreeAstrologyAPI for the daily horoscope
    const response = await axios.get(
      `https://json.freeastrologyapi.com/v1/horoscope/daily/${zodiac}`, {
        headers: {
          'Authorization': `Bearer ${process.env.ASTROLOGY_API_KEY}` // Send the API key
        }
      });

    console.log('API Response:', response.data);  // Debugging log

    // Send the horoscope data back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching daily horoscope:', error.message);
    // Send a more detailed error message
    res.status(500).json({ error: `Failed to fetch daily horoscope: ${error.message}` });
  }
});

// Server listening on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
