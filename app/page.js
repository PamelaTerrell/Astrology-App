"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Head from 'next/head';

export default function HomePage() {
  const [birthDate, setBirthDate] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [dailyHoroscope, setDailyHoroscope] = useState("");

  useEffect(() => {
    document.title = "Cosmic Zodiac Astrology";
  }, []);

  const horoscopes = {
    Aries:
      "Today is a great day for new beginnings! Embrace your bold spirit and take charge of exciting opportunities. Your energy will inspire others, so don’t hesitate to lead with confidence.",
    Taurus:
      "Be patient, your hard work will pay off soon. Stay grounded and trust the steady progress you’re making. Taking time to enjoy small pleasures will bring you peace and satisfaction.",
    Gemini:
      "Communication is key today, so speak your mind with clarity and listen with an open heart. Your curiosity can lead to fascinating new connections—be ready to explore fresh ideas.",
    Cancer:
      "Stay grounded today, things will balance out soon. Your emotional wisdom helps you nurture both yourself and those around you. Creating a cozy and safe space will restore your energy.",
    Leo:
      "Your confidence will be your strength today. Shine brightly in social settings and creative pursuits. Your enthusiasm will attract positive attention, so enjoy sharing your unique gifts.",
    Virgo:
      "Look closely at details, you will find a solution. Your analytical mind is sharp—trust your instincts while remembering to take breaks and breathe. Helping others will add to your fulfillment.",
    Libra:
      "Focus on harmony, peace will come your way. Seek balance in your relationships and surroundings. Your natural diplomacy will be a gift to those around you, helping to smooth conflicts.",
    Scorpio:
      "A good day to reflect and dive deep into your thoughts. Embrace transformation and let go of what no longer serves you. Emotional honesty will open the door to meaningful breakthroughs.",
    Sagittarius:
      "Adventure awaits, stay open to new opportunities. Your optimism is contagious—explore with an open heart and mind. Whether through travel or learning, exciting growth is ahead.",
    Capricorn:
      "Hard work pays off, stay focused on your goals. Your discipline will build strong foundations for future success. Take moments to celebrate your progress and recharge your motivation.",
    Aquarius:
      "Your creativity will lead to exciting breakthroughs. Think outside the box and trust your unique perspective. Connecting with like-minded people will spark new ideas and inspiration.",
    Pisces:
      "Trust your intuition, it will guide you well. Your empathy and imagination are your strengths—use them to navigate challenges with grace. Quiet moments of reflection will nurture your spirit.",
  };

  const getZodiacSign = (date) => {
    const [, month, day] = date.split("-").map(Number);
    const signs = [
      { sign: "Capricorn", start: "12-22", end: "12-31" },
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
    ];

    const formatted = `${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const found = signs.find(({ start, end }) => formatted >= start && formatted <= end);
    return found ? found.sign : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sign = getZodiacSign(birthDate);
    setZodiac(sign);
    setDailyHoroscope(horoscopes[sign]);
  };

  return (
    <>
      <main>
        <h1>Cosmic Zodiac Astrology</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="birthdate">Enter your birthdate:</label>
          <br />
          <input
            type="date"
            id="birthdate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
          <button type="submit">Get My Zodiac Sign</button>
        </form>

        {zodiac && <h2>Your Zodiac Sign: {zodiac}</h2>}

        {dailyHoroscope && (
          <div className="horoscope-container" aria-live="polite" role="region">
            <p>{dailyHoroscope}</p>
          </div>
        )}

<p className="click-instruction" aria-live="polite" role="note">
  ✨ Click your zodiac sign below to reveal more details! ✨
</p>


        <div className="zodiac-grid">
          {[
            "aries",
            "taurus",
            "gemini",
            "cancer",
            "leo",
            "virgo",
            "libra",
            "scorpio",
            "sagittarius",
            "capricorn",
            "aquarius",
            "pisces",
          ].map((sign) => (
            <Link key={sign} href={`/${sign}`}>
              <Image src={`/${sign}.jpg`} alt={sign} width={150} height={150} />
            </Link>
          ))}
        </div>

        <style jsx>{`
          main {
            max-width: 700px;
            margin: 2rem auto;
            padding: 1rem;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: #eee;
            background: transparent;
            border-radius: 16px;
            box-shadow: 0 0 20px rgba(100, 100, 255, 0.3);
          }

          h1 {
            text-align: center;
            color: #c0c0ff;
            margin-bottom: 1.5rem;
            text-shadow: 0 0 6px #99f;
          }

          form {
            margin-bottom: 1.5rem;
            text-align: center;
          }

          label {
            font-weight: 600;
          }

          input[type="date"] {
            padding: 0.6rem;
            margin: 0.5rem 0 1rem;
            border-radius: 6px;
            border: 1px solid #555;
            background: #22223c;
            color: #eee;
            width: 100%;
            max-width: 250px;
          }

          button {
            padding: 0.8rem 1.5rem;
            background: #8888ff;
            color: #1a1a2e;
            font-weight: 700;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s, box-shadow 0.3s;
          }

          button:hover:not(:disabled) {
            background: #aaaaff;
            box-shadow: 0 0 10px rgba(180, 180, 255, 0.6);
          }

          button:disabled {
            background: #555;
            cursor: not-allowed;
          }

          h2 {
            text-align: center;
            margin-top: 1rem;
            color: #d0d0ff;
            text-shadow: 0 0 4px #99f;
          }

          .horoscope-container {
            margin: 1rem 20px;
            padding: 1rem 1.5rem;
            /* no background or box-shadow */
            border-radius: 12px; /* optional for subtle rounding */
            font-size: 1.1rem;
            line-height: 1.6;
            color: #eee;
          }

          .click-instruction {
  text-align: center;
  color: #aabbee;
  font-style: italic;
  margin-bottom: 1.2rem;
  user-select: none;
  font-weight: 600;
  animation: pulseGlow 3s ease-in-out infinite;
  text-shadow: 0 0 8px #aabbee88, 0 0 20px #8899ff66;
}

@keyframes pulseGlow {
  0%, 100% {
    text-shadow: 0 0 8px #aabbee88, 0 0 20px #8899ff66;
    color: #aabbee;
  }
  50% {
    text-shadow: 0 0 14px #ddeeffcc, 0 0 32px #aabbffee;
    color: #ddeeff;
  }
}


          @media (max-width: 600px) {
            .horoscope-container {
              margin: 1rem 10px;
              font-size: 1rem;
              padding: 0.8rem 1rem;
            }
          }

          .zodiac-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }
        `}</style>
      </main>
    </>
  );
}
