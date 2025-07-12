// Horoscope.js
import React, { useEffect, useState } from 'react';

const horoscopes = {
  Aries: {
    description: "Aries is bold and ambitious. They dive headfirst into even the most challenging situations.",
    traits: ["Energetic", "Courageous", "Confident", "Impulsive", "Passionate"]
  },
  Taurus: {
    description: "Taurus is grounded and practical. They enjoy the finer things in life and value stability.",
    traits: ["Reliable", "Patient", "Practical", "Devoted", "Stubborn"]
  },
  Gemini: {
    description: "Geminis are curious and playful. They are social butterflies with many interests.",
    traits: ["Adaptable", "Outgoing", "Intelligent", "Indecisive", "Witty"]
  },
  Cancer: {
    description: "Cancers are deeply intuitive and sentimental. They care deeply about family and home.",
    traits: ["Loyal", "Protective", "Caring", "Moody", "Intuitive"]
  },
  Leo: {
    description: "Leos are natural leaders, dramatic, creative, and confident in everything they do.",
    traits: ["Charismatic", "Proud", "Generous", "Ambitious", "Dramatic"]
  },
  Virgo: {
    description: "Virgos are logical, practical, and systematic. They are perfectionists at heart.",
    traits: ["Analytical", "Reliable", "Hardworking", "Overcritical", "Modest"]
  },
  Libra: {
    description: "Libras value harmony and balance. They are diplomatic and charming.",
    traits: ["Charming", "Diplomatic", "Idealistic", "Indecisive", "Peaceful"]
  },
  Scorpio: {
    description: "Scorpios are passionate and assertive. They are known for their intensity and mystery.",
    traits: ["Intense", "Mysterious", "Loyal", "Resourceful", "Jealous"]
  },
  Sagittarius: {
    description: "Sagittarius is optimistic and freedom-loving. They are adventurous and philosophical.",
    traits: ["Optimistic", "Independent", "Adventurous", "Blunt", "Curious"]
  },
  Capricorn: {
    description: "Capricorns are disciplined and responsible. They are masters of self-control.",
    traits: ["Responsible", "Ambitious", "Disciplined", "Reserved", "Hardworking"]
  },
  Aquarius: {
    description: "Aquarius is independent and progressive. They are deep thinkers and highly intellectual.",
    traits: ["Innovative", "Independent", "Humanitarian", "Unpredictable", "Original"]
  },
  Pisces: {
    description: "Pisces are compassionate and artistic. They have a deep emotional and spiritual connection to life.",
    traits: ["Empathetic", "Creative", "Dreamy", "Overly Sensitive", "Romantic"]
  }
};


function Horoscope({ zodiac }) {
  const [daily, setDaily] = useState('');
  const signData = horoscopes[zodiac];

useEffect(() => {
  if (!zodiac) return;


}, [zodiac]);



  

  if (!signData) return <p>No horoscope data found.</p>;

  return (
    <div className="horoscope">
      <h2>Your Zodiac Sign: {zodiac}</h2>
      <p><strong>Description:</strong> {signData.description}</p>
      <p><strong>Personality Traits:</strong></p>
      <ul>
        {signData.traits.map((trait, index) => (
          <li key={index}>{trait}</li>
        ))}
      </ul>
      <p><strong>Daily Horoscope:</strong> {daily}</p>
    </div>
  );
}

export default Horoscope;