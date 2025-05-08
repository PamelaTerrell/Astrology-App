import React from 'react';

const horoscopes = {
  Aries: "Today is a day full of energy and possibilities.",
  Taurus: "Take a step back and enjoy some peace.",
  Gemini: "Communication is your strength today.",
  Cancer: "You may feel more emotional, trust your instincts.",
  Leo: "A great time to show leadership and confidence.",
  Virgo: "Focus on the details, they matter.",
  Libra: "Seek balance and harmony in your relationships.",
  Scorpio: "You have strong intuition today.",
  Sagittarius: "Explore something new!",
  Capricorn: "Hard work will pay off soon.",
  Aquarius: "Innovative ideas will shine today.",
  Pisces: "Let your imagination guide you.",
};

function Horoscope({ zodiac }) {
  const imagePath = `/images/zodiac/${zodiac.toLowerCase()}.png`;

  return (
    <div className="horoscope-box">
      <h2>Your Sign: {zodiac}</h2>
      <img src={imagePath} alt={zodiac} width="100" style={{ marginBottom: '15px' }} />
      <p>{horoscopes[zodiac]}</p>
    </div>
  );
}

export default Horoscope;
