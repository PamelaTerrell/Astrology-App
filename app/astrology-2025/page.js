"use client";

import React from "react";

export default function ZodiacShadows() {
  const shadowTraits = {
    Aries: "Impulsive, easily angered, struggles with patience and self-control. Can bulldoze others in pursuit of goals.",
    Taurus: "Stubborn, overly materialistic, resists change even when it's necessary. Can become possessive or emotionally stagnant.",
    Gemini: "Two-faced, scattered energy, commitment issues. Often hides insecurity behind wit and charm.",
    Cancer: "Moody, overly sensitive, emotionally manipulative. Tends to dwell in the past and retreat into self-pity.",
    Leo: "Arrogant, attention-seeking, prideful to the point of delusion. Needs external validation to feel worthy.",
    Virgo: "Hypercritical, anxious, perfectionistic to a fault. Often represses emotions under the guise of 'logic.'",
    Libra: "Indecisive, avoids conflict to a dangerous degree. Can be superficial and passive-aggressive.",
    Scorpio: "Jealous, secretive, obsessed with control. Tends to hold grudges and lash out when feeling vulnerable.",
    Sagittarius: "Overindulgent, reckless, insensitive. Uses freedom as an excuse to avoid accountability.",
    Capricorn: "Workaholic, emotionally distant, overly focused on status. May neglect relationships and inner needs.",
    Aquarius: "Detached, cold, rebellious without cause. Struggles with intimacy and may idealize intellect over emotion.",
    Pisces: "Escapist, overly trusting, martyr complex. Can be emotionally addictive or dependent.",
  };

  return (
    <main className="shadow-cosmic">
      <h1 className="shadow-title">☽ Shadow Side of the Zodiac ☾</h1>

      <p className="shadow-intro">
        <em>Enter the realm of shadows. Each sign holds hidden struggles — truths often cloaked in light.</em>
      </p>

      <ul className="shadow-list">
        {Object.entries(shadowTraits).map(([sign, description]) => (
          <li key={sign} className="shadow-item">
            <h2>{sign}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>

      <p className="shadow-outro">The stars do not judge. They reveal.</p>

      <style jsx>{`
        /* You should import this font globally instead */
        /* @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap'); */

        .shadow-cosmic {
          background: url('/stars-bg.jpg') no-repeat center center fixed;
          background-size: cover;
          padding: 2rem;
          margin: 0 auto;
          color: #e0e0e0;
          font-family: "Georgia", serif;
          text-shadow: 0 0 6px #000;
        }

        .shadow-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: 2.8rem;
          color: transparent;
          background: linear-gradient(120deg, #8888ff, #6c63ff, #222222);
          -webkit-background-clip: text;
          background-clip: text;
          text-align: center;
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
          text-shadow: 0 0 6px rgba(108, 99, 255, 0.4);
          animation: flicker 4s infinite alternate;
        }

        @keyframes flicker {
          0% {
            text-shadow: 0 0 6px rgba(108, 99, 255, 0.4);
          }
          100% {
            text-shadow: 0 0 12px rgba(108, 99, 255, 0.8);
          }
        }

        .shadow-intro,
        .shadow-outro {
          font-size: 1.1rem;
          text-align: center;
          margin: 1rem auto 2rem;
          max-width: 700px;
          color: #ccc;
        }

        .shadow-list {
          list-style: none;
          padding: 0;
        }

        .shadow-item {
          background: rgba(10, 10, 20, 0.75);
          border-left: 4px solid #6c63ff;
          margin-bottom: 1.5rem;
          padding: 1rem;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(108, 99, 255, 0.4);
          transition: transform 0.3s ease;
        }

        .shadow-item:hover {
          transform: scale(1.02);
          box-shadow: 0 0 16px rgba(108, 99, 255, 0.7);
        }

        .shadow-item h2 {
          margin: 0 0 0.5rem;
          font-size: 1.4rem;
          color: #ffffff;
        }

        .shadow-item p {
          margin: 0;
          font-size: 1rem;
          color: #bbbbbb;
        }

        @media (max-width: 600px) {
          .shadow-cosmic {
            padding: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
