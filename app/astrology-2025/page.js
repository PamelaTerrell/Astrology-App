"use client";

import React from "react";

export default function ZodiacShadows() {
  const shadowTraits = {
    Aries: {
      hook: "The Fire Unchecked",
      text: "Impulsive and hot-headed, Aries may act before thinking, often bulldozing others in their drive to win. Struggles with patience and self-regulation can lead to burnout and fractured relationships. Anger may mask vulnerability or fear of failure.",
      color: "#ff5733",
    },
    Taurus: {
      hook: "The Rooted Shadow",
      text: "Deeply resistant to change, Taurus can become emotionally stagnant, clinging to routines or possessions out of fear. Stubbornness can morph into quiet defiance, while possessiveness may reflect a hidden fear of abandonment or instability.",
      color: "#a67c52",
    },
    Gemini: {
      hook: "The Silver Tongue’s Mask",
      text: "Gemini's wit can become a mask for inner insecurity. Their need for variety may turn into a pattern of emotional inconsistency or deception. The shadow side speaks in half-truths, distracting others—and themselves—from deeper emotional work.",
      color: "#e0c240",
    },
    Cancer: {
      hook: "The Shelled Heart",
      text: "Deeply sensitive, Cancer may retreat into passive-aggression or emotional manipulation when hurt. They can become consumed by nostalgia or wounds from the past, using guilt or caretaking as a way to control others emotionally.",
      color: "#88c0d0",
    },
    Leo: {
      hook: "The Brittle Crown",
      text: "Leo's need to be seen can spiral into arrogance or performative self-worth. When validation isn’t received, pride may become a brittle shield. Beneath the grandeur may lie a deep fear of being ordinary or unseen.",
      color: "#ffb833",
    },
    Virgo: {
      hook: "The Relentless Critic",
      text: "Virgo’s desire for improvement can become a harsh inner critic that shames rather than guides. They may repress emotions in favor of appearing composed, or obsess over details to avoid confronting deeper chaos within.",
      color: "#8fbf88",
    },
    Libra: {
      hook: "The Painted Mask",
      text: "Conflict-avoidant to a fault, Libra may lose themselves in the pursuit of peace. Their charm can become manipulation, and their fairness a mask for indecision. The shadow emerges when they prioritize appearances over authenticity.",
      color: "#c08497",
    },
    Scorpio: {
      hook: "The Stinger Within",
      text: "Scorpio's intensity can turn inward as self-destruction or outward as vindictiveness. Their need for control may breed secrecy, suspicion, or obsession. Emotional depth becomes a weapon when vulnerability feels unsafe.",
      color: "#993355",
    },
    Sagittarius: {
      hook: "The Escapist’s Horizon",
      text: "Restless and pleasure-seeking, Sagittarius may run from intimacy, using philosophy or humor to avoid emotional discomfort. Their freedom-loving nature can mask a refusal to be held accountable or emotionally present.",
      color: "#cc7722",
    },
    Capricorn: {
      hook: "The Iron Wall",
      text: "Driven to achieve, Capricorn may neglect emotional needs in favor of control and status. They can appear cold or calculating, suppressing vulnerability and overidentifying with roles, titles, or societal expectations.",
      color: "#7a7a7a",
    },
    Aquarius: {
      hook: "The Detached Visionary",
      text: "Intellectual and idealistic, Aquarius may detach from emotion to maintain control. Their rebellion can lack direction, and their vision for the future may excuse a lack of empathy in the present. Intimacy often feels like a threat.",
      color: "#66ccff",
    },
    Pisces: {
      hook: "The Drowning Dreamer",
      text: "Dreamy and empathetic, Pisces may lose themselves in others or in fantasy. Their shadow emerges as avoidance, codependency, or emotional martyrdom. Boundaries blur, and pain becomes a form of identity or control.",
      color: "#6699cc",
    },
  };

  return (
    <main className="shadow-cosmic">
      <h1 className="shadow-title">☽ Shadow Side of the Zodiac ☾</h1>

      <p className="shadow-intro">
        <em>
          Enter the realm of shadows. Each sign holds hidden struggles — truths
          often cloaked in light. Exploring them brings awareness, healing, and
          the chance to grow beyond what holds us back.
        </em>
      </p>

      <ul className="shadow-list">
        {Object.entries(shadowTraits).map(([sign, data]) => (
          <li
            key={sign}
            className={`shadow-item ${sign.toLowerCase()}`}
            style={{
              borderLeft: `4px solid ${data.color}`,
              boxShadow: `0 0 12px ${data.color}55`,
            }}
          >
            <h2>
              {sign} – <span className="hook">{data.hook}</span>
            </h2>
            <p>{data.text}</p>
          </li>
        ))}
      </ul>

      <p className="shadow-outro">The stars do not judge. They reveal.</p>

      <style jsx>{`
        .shadow-cosmic {
          background: url("/stars-bg.jpg") no-repeat center center fixed;
          background-size: cover;
          padding: 2rem;
          margin: 0 auto;
          color: #e0e0e0;
          font-family: "Georgia", serif;
        }

        .shadow-title {
          font-family: "Cinzel Decorative", serif;
          font-size: 2.8rem;
          color: transparent;
          background: linear-gradient(120deg, #8888ff, #6c63ff, #222);
          -webkit-background-clip: text;
          background-clip: text;
          text-align: center;
          margin-bottom: 1.5rem;
          letter-spacing: 0.1em;
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
          position: relative;
          background: rgba(10, 10, 20, 0.55);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          padding: 1.2rem;
          margin-bottom: 1.5rem;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .shadow-item::before {
          content: "";
          position: absolute;
          inset: 0;
          background-size: 150px;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.06;
          pointer-events: none;
        }

        /* Constellation backgrounds */
        .shadow-item.aries::before {
          background-image: url("/constellations/aries.svg");
        }
        .shadow-item.taurus::before {
          background-image: url("/constellations/taurus.svg");
        }
        .shadow-item.gemini::before {
          background-image: url("/constellations/gemini.svg");
        }
        .shadow-item.cancer::before {
          background-image: url("/constellations/cancer.svg");
        }
        .shadow-item.leo::before {
          background-image: url("/constellations/leo.svg");
        }
        .shadow-item.virgo::before {
          background-image: url("/constellations/virgo.svg");
        }
        .shadow-item.libra::before {
          background-image: url("/constellations/libra.svg");
        }
        .shadow-item.scorpio::before {
          background-image: url("/constellations/scorpio.svg");
        }
        .shadow-item.sagittarius::before {
          background-image: url("/constellations/sagittarius.svg");
        }
        .shadow-item.capricorn::before {
          background-image: url("/constellations/capricorn.svg");
        }
        .shadow-item.aquarius::before {
          background-image: url("/constellations/aquarius.svg");
        }
        .shadow-item.pisces::before {
          background-image: url("/constellations/pisces.svg");
        }

        .shadow-item:hover {
          transform: scale(1.02);
          box-shadow: 0 0 20px currentColor;
        }

        .shadow-item h2 {
          margin: 0 0 0.4rem;
          font-size: 1.4rem;
          color: #fff;
        }

        .shadow-item .hook {
          font-weight: bold;
          color: inherit;
        }

        .shadow-item p {
          font-size: 1.05rem;
          line-height: 1.5;
          color: #ddd;
        }

        @media (max-width: 600px) {
          .shadow-cosmic {
            padding: 1rem;
          }
          .shadow-item p {
            font-size: 1rem;
          }
        }
      `}</style>
    </main>
  );
}
