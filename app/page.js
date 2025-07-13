"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

export default function HomePage() {
  const [birthDate, setBirthDate] = useState("");
  const [zodiac, setZodiac] = useState("");
  const [dailyHoroscope, setDailyHoroscope] = useState("");

  useEffect(() => {
    document.title = "Cosmic Zodiac Astrology";
  }, []);

  const horoscopes = {
    Aries: "Today is a great day for new beginnings!",
    Taurus: "Be patient, your hard work will pay off soon.",
    Gemini: "Communication is key today, so speak your mind.",
    Cancer: "Stay grounded today, things will balance out soon.",
    Leo: "Your confidence will be your strength today.",
    Virgo: "Look closely at details, you will find a solution.",
    Libra: "Focus on harmony, peace will come your way.",
    Scorpio: "A good day to reflect and dive deep into your thoughts.",
    Sagittarius: "Adventure awaits, stay open to new opportunities.",
    Capricorn: "Hard work pays off, stay focused on your goals.",
    Aquarius: "Your creativity will lead to exciting breakthroughs.",
    Pisces: "Trust your intuition, it will guide you well.",
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
              <Image
                src={`/${sign}.jpg`}
                alt={sign}
                width={150}
                height={150}
              />
            </Link>
          ))}
        </div>
        <style jsx>{`
  .zodiac-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px; /* Add a gap between items */
  }
  .zodiac-link {
    margin: 6px; /* margin around each image/link */
    display: inline-block; /* to respect margin */
  }
`}</style>
      </main>
      
    </>
  );
}
