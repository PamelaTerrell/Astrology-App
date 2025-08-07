"use client";

import React from "react";

export default function ZodiacShadows() {
  const shadowTraits = {
  Aries: "Impulsive and hot-headed, Aries may act before thinking, often bulldozing others in their drive to win. Struggles with patience and self-regulation can lead to burnout and fractured relationships. Anger may mask vulnerability or fear of failure.",
  
  Taurus: "Deeply resistant to change, Taurus can become emotionally stagnant, clinging to routines or possessions out of fear. Stubbornness can morph into quiet defiance, while possessiveness may reflect a hidden fear of abandonment or instability.",
  
  Gemini: "Gemini's wit can become a mask for inner insecurity. Their need for variety may turn into a pattern of emotional inconsistency or deception. The shadow side speaks in half-truths, distracting others—and themselves—from deeper emotional work.",
  
  Cancer: "Deeply sensitive, Cancer may retreat into passive-aggression or emotional manipulation when hurt. They can become consumed by nostalgia or wounds from the past, using guilt or caretaking as a way to control others emotionally.",
  
  Leo: "Leo's need to be seen can spiral into arrogance or performative self-worth. When validation isn’t received, pride may become a brittle shield. Beneath the grandeur may lie a deep fear of being ordinary or unseen.",
  
  Virgo: "Virgo’s desire for improvement can become a harsh inner critic that shames rather than guides. They may repress emotions in favor of appearing composed, or obsess over details to avoid confronting deeper chaos within.",
  
  Libra: "Conflict-avoidant to a fault, Libra may lose themselves in the pursuit of peace. Their charm can become manipulation, and their fairness a mask for indecision. The shadow emerges when they prioritize appearances over authenticity.",
  
  Scorpio: "Scorpio's intensity can turn inward as self-destruction or outward as vindictiveness. Their need for control may breed secrecy, suspicion, or obsession. Emotional depth becomes a weapon when vulnerability feels unsafe.",
  
  Sagittarius: "Restless and pleasure-seeking, Sagittarius may run from intimacy, using philosophy or humor to avoid emotional discomfort. Their freedom-loving nature can mask a refusal to be held accountable or emotionally present.",
  
  Capricorn: "Driven to achieve, Capricorn may neglect emotional needs in favor of control and status. They can appear cold or calculating, suppressing vulnerability and overidentifying with roles, titles, or societal expectations.",
  
  Aquarius: "Intellectual and idealistic, Aquarius may detach from emotion to maintain control. Their rebellion can lack direction, and their vision for the future may excuse a lack of empathy in the present. Intimacy often feels like a threat.",
  
  Pisces: "Dreamy and empathetic, Pisces may lose themselves in others or in fantasy. Their shadow emerges as avoidance, codependency, or emotional martyrdom. Boundaries blur, and pain becomes a form of identity or control."
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
