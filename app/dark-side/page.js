"use client";

import { motion } from "motion/react";

export default function DarkSidePage() {
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
    <main className="shadowPage">
      <motion.header
        className="shadowHeader"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <p className="eyebrow">Shadow traits</p>

        <h1>☽ The Dark Side of the Zodiac ☾</h1>

        <p className="shadowIntro">
          Every sign has strengths, contradictions, and habits that can become
          difficult when pushed too far. Exploring the shadow side is less about
          judgment and more about self-awareness.
        </p>
      </motion.header>

      <section
        className="shadowGrid"
        aria-label="Shadow traits for the twelve zodiac signs"
      >
        {Object.entries(shadowTraits).map(([sign, data], index) => (
          <motion.article
            key={sign}
            className="shadowCard"
            style={{
              "--sign-color": data.color,
            }}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.04, 0.28),
            }}
            whileHover={{ y: -4 }}
          >
            <div className="cardAccent" aria-hidden="true" />

            <p className="signName">{sign}</p>

            <h2>{data.hook}</h2>

            <p className="shadowText">{data.text}</p>
          </motion.article>
        ))}
      </section>

      <motion.p
        className="shadowOutro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        The stars do not judge. They reveal.
      </motion.p>

      <style jsx>{`
        .shadowPage {
          width: min(var(--content-width), calc(100% - 2rem));
          margin: 0 auto;
          padding: clamp(3rem, 7vw, 6rem) 0 2rem;
        }

        .shadowHeader {
          max-width: 760px;
          margin: 0 auto 3.5rem;
          text-align: center;
        }

        .eyebrow {
          margin-bottom: 0.8rem;

          color: var(--accent-gold);
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .shadowHeader h1 {
          color: var(--text-primary);
          font-size: clamp(2.1rem, 6vw, 4rem);

          text-shadow:
            0 0 26px rgba(155, 141, 227, 0.2),
            0 0 50px rgba(80, 55, 130, 0.1);

          text-wrap: balance;
        }

        .shadowIntro {
          margin-top: 1.2rem;

          color: var(--text-secondary);
          font-size: clamp(1rem, 2vw, 1.12rem);
          line-height: 1.75;

          text-wrap: balance;
        }

        .shadowGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.2rem;
        }

        .shadowCard {
          position: relative;
          overflow: hidden;

          padding: clamp(1.35rem, 3vw, 1.8rem);

          border: 1px solid var(--border-soft);
          border-radius: var(--radius-medium);

          background:
            linear-gradient(
              145deg,
              rgba(16, 17, 39, 0.88),
              rgba(9, 10, 25, 0.8)
            );

          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.2),
            0 0 26px color-mix(
              in srgb,
              var(--sign-color) 8%,
              transparent
            );

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          transition:
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .shadowCard:hover {
          border-color: color-mix(
            in srgb,
            var(--sign-color) 40%,
            var(--border-soft)
          );

          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.26),
            0 0 30px color-mix(
              in srgb,
              var(--sign-color) 14%,
              transparent
            );
        }

        .cardAccent {
          position: absolute;
          top: 0;
          left: 0;

          width: 4px;
          height: 100%;

          background: var(--sign-color);

          box-shadow: 0 0 16px var(--sign-color);
        }

        .signName {
          margin: 0;

          color: var(--sign-color);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .shadowCard h2 {
          margin-top: 0.35rem;

          color: var(--text-primary);
          font-size: clamp(1.25rem, 3vw, 1.55rem);
        }

        .shadowText {
          margin-top: 0.9rem;

          color: var(--text-secondary);
          font-size: 0.96rem;
          line-height: 1.72;
        }

        .shadowOutro {
          margin: 4rem auto 0;

          color: var(--accent-gold-bright);
          font-family: var(--font-display), serif;
          font-size: clamp(1.15rem, 3vw, 1.45rem);
          font-style: italic;
          text-align: center;

          letter-spacing: 0.03em;
        }

        @media (max-width: 760px) {
          .shadowGrid {
            grid-template-columns: 1fr;
          }

          .shadowHeader {
            margin-bottom: 2.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shadowCard {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}