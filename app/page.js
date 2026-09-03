"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const zodiacSigns = [
  {
    name: "Aries",
    slug: "aries",
    dates: "Mar 21 – Apr 19",
    traits: "Bold · Driven · Independent",
  },
  {
    name: "Taurus",
    slug: "taurus",
    dates: "Apr 20 – May 20",
    traits: "Grounded · Loyal · Patient",
  },
  {
    name: "Gemini",
    slug: "gemini",
    dates: "May 21 – Jun 20",
    traits: "Curious · Social · Adaptable",
  },
  {
    name: "Cancer",
    slug: "cancer",
    dates: "Jun 21 – Jul 22",
    traits: "Intuitive · Caring · Protective",
  },
  {
    name: "Leo",
    slug: "leo",
    dates: "Jul 23 – Aug 22",
    traits: "Confident · Creative · Warmhearted",
  },
  {
    name: "Virgo",
    slug: "virgo",
    dates: "Aug 23 – Sep 22",
    traits: "Thoughtful · Practical · Observant",
  },
  {
    name: "Libra",
    slug: "libra",
    dates: "Sep 23 – Oct 22",
    traits: "Balanced · Charming · Diplomatic",
  },
  {
    name: "Scorpio",
    slug: "scorpio",
    dates: "Oct 23 – Nov 21",
    traits: "Intense · Loyal · Transformative",
  },
  {
    name: "Sagittarius",
    slug: "sagittarius",
    dates: "Nov 22 – Dec 21",
    traits: "Adventurous · Optimistic · Free-Spirited",
  },
  {
    name: "Capricorn",
    slug: "capricorn",
    dates: "Dec 22 – Jan 19",
    traits: "Ambitious · Steady · Disciplined",
  },
  {
    name: "Aquarius",
    slug: "aquarius",
    dates: "Jan 20 – Feb 18",
    traits: "Original · Independent · Visionary",
  },
  {
    name: "Pisces",
    slug: "pisces",
    dates: "Feb 19 – Mar 20",
    traits: "Empathetic · Imaginative · Intuitive",
  },
];

const cosmicMessages = {
  Aries:
    "Today is a great day for new beginnings. Embrace your bold spirit and take charge of exciting opportunities.",
  Taurus:
    "Be patient. Your steady effort is building something worthwhile. Make room for comfort, beauty, and the small pleasures that keep you grounded.",
  Gemini:
    "Communication brings momentum today. Speak clearly, stay curious, and remain open to an unexpected idea or connection.",
  Cancer:
    "Protect your energy while staying open to the people who matter most. Creating a sense of calm around you will help everything feel more manageable.",
  Leo:
    "Your confidence is one of your strengths today. Let yourself be seen, share what you create, and enjoy the warmth you naturally bring into a room.",
  Virgo:
    "The answer may be hiding in the details. Trust your thoughtful nature, but remember that not everything needs to be perfected before you move forward.",
  Libra:
    "Harmony comes from knowing where compromise helps and where your own needs deserve a voice. Choose what creates genuine balance.",
  Scorpio:
    "Something may be ready to change. Trust your ability to look beneath the surface and release what no longer deserves your energy.",
  Sagittarius:
    "Follow your curiosity. A fresh perspective, new conversation, or small adventure could lead somewhere much more interesting than expected.",
  Capricorn:
    "Your persistence is working in your favor. Keep building steadily, but remember to recognize how far you have already come.",
  Aquarius:
    "Your unusual perspective may be exactly what is needed. Give yourself permission to approach the problem differently rather than following the expected path.",
  Pisces:
    "Your intuition is especially useful when the noise quiets down. Give yourself a little space to reflect, imagine, and notice what you already know.",
};

function getZodiacSign(date) {
  if (!date) return "";

  const [, month, day] = date.split("-").map(Number);

  const cutoffSigns = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
  ];

  const cutoffDays = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];

  return day <= cutoffDays[month - 1]
    ? cutoffSigns[month - 1]
    : cutoffSigns[month % 12];
}

export default function HomePage() {
  const [birthDate, setBirthDate] = useState("");
  const [zodiac, setZodiac] = useState("");

  const selectedSign = zodiacSigns.find((sign) => sign.name === zodiac);

  const handleSubmit = (event) => {
    event.preventDefault();
    setZodiac(getZodiacSign(birthDate));
  };

  return (
    <main className="homePage">
      <section className="heroSection">
        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow">Discover your sign</p>

          <h1>Find Your Place in the Zodiac</h1>

          <p className="heroDescription">
            Explore the twelve zodiac signs, discover personality traits and
            compatibility, and uncover a little cosmic insight along the way.
          </p>
        </motion.div>

        <motion.section
          className="signFinder"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          aria-labelledby="sign-finder-heading"
        >
          <div className="signFinderHeading">
            <span className="finderSymbol" aria-hidden="true">
              ✦
            </span>

            <div>
              <h2 id="sign-finder-heading">What’s Your Zodiac Sign?</h2>
              <p>Enter your birth date and reveal your place in the stars.</p>
            </div>
          </div>

          <form className="birthDateForm" onSubmit={handleSubmit}>
            <label htmlFor="birthdate">Birth date</label>

            <div className="formControls">
              <input
                type="date"
                id="birthdate"
                value={birthDate}
                onChange={(event) => setBirthDate(event.target.value)}
                required
              />

              <motion.button
                type="submit"
                className="revealButton"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Reveal My Sign
                <span aria-hidden="true">✦</span>
              </motion.button>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {selectedSign && (
              <motion.div
                key={selectedSign.name}
                className="zodiacResult"
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                aria-live="polite"
              >
                <motion.div
                  className="resultImageWrap"
                  initial={{ rotate: -4, scale: 0.88 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 14,
                  }}
                >
                  <Image
                    src={`/${selectedSign.slug}.jpg`}
                    alt={`${selectedSign.name} zodiac artwork`}
                    width={180}
                    height={180}
                    className="resultImage"
                  />
                </motion.div>

                <div className="resultContent">
                  <p className="resultLabel">Your zodiac sign is</p>

                  <h3>{selectedSign.name}</h3>

                  <p className="resultDates">{selectedSign.dates}</p>

                  <p className="resultTraits">{selectedSign.traits}</p>

                  <div className="cosmicMessage">
                    <span aria-hidden="true">☾</span>
                    <p>{cosmicMessages[selectedSign.name]}</p>
                  </div>

                  <Link
                    href={`/${selectedSign.slug}`}
                    className="exploreSignLink"
                  >
                    Explore {selectedSign.name}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </section>

      <section className="zodiacSection" aria-labelledby="zodiac-heading">
        <motion.div
          className="sectionHeading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Explore the zodiac</p>
          <h2 id="zodiac-heading">Twelve Signs, Twelve Stories</h2>
          <p>
            Choose a sign to explore its personality, strengths, quirks, and
            cosmic character.
          </p>
        </motion.div>

        <div className="zodiacGrid">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={sign.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.045, 0.35),
              }}
            >
              <Link href={`/${sign.slug}`} className="zodiacCard">
                <motion.div
                  className="zodiacImageWrap"
                  whileHover={{ y: -5, scale: 1.025 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={`/${sign.slug}.jpg`}
                    alt={`${sign.name} zodiac sign artwork`}
                    width={180}
                    height={180}
                    className="zodiacImage"
                  />
                </motion.div>

                <h3>{sign.name}</h3>
                <p className="zodiacDates">{sign.dates}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="exploreMoreSection">
        <motion.div
          className="exploreMoreCard"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="exploreIcon" aria-hidden="true">
            ♡
          </span>

          <div>
            <p className="exploreLabel">Relationships</p>
            <h2>Zodiac Compatibility</h2>
            <p>
              See how different signs connect, communicate, and complement one
              another.
            </p>

            <Link href="/compatibility">Explore compatibility →</Link>
          </div>
        </motion.div>

        <motion.div
          className="exploreMoreCard"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="exploreIcon" aria-hidden="true">
            ☾
          </span>

          <div>
            <p className="exploreLabel">Shadow traits</p>
            <h2>The Dark Side</h2>
            <p>
              Every sign has another side. Explore the habits, tendencies, and
              traits that can make each one a little more complicated.
            </p>

            <Link href="/dark-side">Explore the dark side →</Link>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .homePage {
          width: min(var(--content-width), calc(100% - 2rem));
          margin: 0 auto;
          padding: clamp(3rem, 7vw, 6rem) 0 2rem;
        }

        .heroSection {
          width: min(920px, 100%);
          margin: 0 auto;
        }

        .heroContent {
          max-width: 760px;
          margin: 0 auto 2.5rem;
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

        .heroContent h1 {
          color: var(--text-primary);
          text-wrap: balance;
          text-shadow: 0 0 32px rgba(155, 141, 227, 0.22);
        }

        .heroDescription {
          max-width: 680px;
          margin: 1.3rem auto 0;

          color: var(--text-secondary);
          font-size: clamp(1rem, 2vw, 1.15rem);
          text-wrap: balance;
        }

        .signFinder {
          padding: clamp(1.4rem, 4vw, 2.5rem);

          border: 1px solid var(--border-soft);
          border-radius: var(--radius-large);

          background:
            linear-gradient(
              145deg,
              rgba(24, 26, 58, 0.82),
              rgba(13, 15, 39, 0.72)
            );

          box-shadow:
            var(--shadow-soft),
            0 0 42px rgba(155, 141, 227, 0.09);

          backdrop-filter: blur(18px);
        }

        .signFinderHeading {
          display: flex;
          align-items: center;
          gap: 1rem;

          margin-bottom: 1.8rem;
        }

        .finderSymbol {
          display: grid;
          place-items: center;

          width: 46px;
          height: 46px;
          flex: 0 0 46px;

          border: 1px solid var(--border-accent);
          border-radius: 50%;

          color: var(--accent-gold-bright);
          font-size: 1.1rem;

          background: rgba(223, 198, 120, 0.06);
          box-shadow: 0 0 24px rgba(223, 198, 120, 0.08);
        }

        .signFinderHeading h2 {
          color: var(--text-primary);
          font-size: clamp(1.4rem, 3vw, 2rem);
        }

        .signFinderHeading p {
          margin-top: 0.35rem;
          font-size: 0.96rem;
        }

        .birthDateForm label {
          display: block;
          margin-bottom: 0.6rem;

          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .formControls {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 0.8rem;
        }

        .formControls input {
          width: 100%;
          padding: 0.8rem 0.95rem;
        }

        .revealButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;

          min-height: 48px;
          padding: 0.8rem 1.25rem;

          border-radius: var(--radius-small);

          background:
            linear-gradient(
              135deg,
              var(--accent-gold-bright),
              var(--accent-gold)
            );

          color: #211b0d;
          font-weight: 800;
          white-space: nowrap;

          box-shadow: 0 10px 24px rgba(223, 198, 120, 0.15);
        }

        .zodiacResult {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          gap: clamp(1.25rem, 4vw, 2rem);

          margin-top: 2rem;
          padding-top: 2rem;

          border-top: 1px solid var(--border-soft);
        }

        .resultImageWrap {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .resultImage {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 50%;

          border: 1px solid rgba(244, 222, 160, 0.32);

          box-shadow:
            0 0 0 7px rgba(255, 255, 255, 0.018),
            0 0 34px rgba(155, 141, 227, 0.2);
        }

        .resultContent {
          align-self: center;
        }

        .resultLabel,
        .resultDates,
        .resultTraits {
          margin: 0;
        }

        .resultLabel {
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .resultContent h3 {
          margin-top: 0.25rem;

          color: var(--accent-gold-bright);
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .resultDates {
          margin-top: 0.25rem;
          color: var(--text-secondary);
        }

        .resultTraits {
          margin-top: 0.5rem;

          color: var(--accent-blue);
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.025em;
        }

        .cosmicMessage {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 0.8rem;

          margin-top: 1.25rem;
          padding: 1rem 1.1rem;

          border: 1px solid rgba(155, 141, 227, 0.14);
          border-radius: var(--radius-small);

          background: rgba(155, 141, 227, 0.05);
        }

        .cosmicMessage > span {
          color: var(--accent-gold);
        }

        .cosmicMessage p {
          font-size: 0.96rem;
          line-height: 1.65;
        }

        .exploreSignLink {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;

          margin-top: 1.15rem;

          color: var(--accent-gold-bright);
          font-weight: 700;
          text-decoration: none;
        }

        .zodiacSection {
          padding: clamp(5rem, 10vw, 8rem) 0 3rem;
        }

        .sectionHeading {
          max-width: 680px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .sectionHeading h2 {
          color: var(--text-primary);
        }

        .sectionHeading > p:last-child {
          margin-top: 0.9rem;
        }

        .zodiacGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1.4rem, 3vw, 2.25rem);
        }

        .zodiacCard {
          display: block;
          padding: 0.5rem;

          color: inherit;
          text-align: center;
          text-decoration: none;
        }

        .zodiacImageWrap {
          width: min(180px, 100%);
          aspect-ratio: 1;
          margin: 0 auto 1rem;

          border-radius: 50%;

          box-shadow:
            0 0 0 1px rgba(244, 222, 160, 0.15),
            0 10px 28px rgba(0, 0, 0, 0.2);
        }

        .zodiacImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        .zodiacCard h3 {
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .zodiacDates {
          margin-top: 0.3rem;

          color: var(--text-muted);
          font-size: 0.82rem;
        }

        .exploreMoreSection {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;

          padding: 3rem 0 4rem;
        }

        .exploreMoreCard {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 1.15rem;

          padding: clamp(1.5rem, 4vw, 2rem);

          border: 1px solid var(--border-soft);
          border-radius: var(--radius-medium);

          background: rgba(15, 17, 42, 0.7);

          backdrop-filter: blur(14px);
        }

        .exploreIcon {
          display: grid;
          place-items: center;

          width: 44px;
          height: 44px;

          border: 1px solid var(--border-accent);
          border-radius: 50%;

          color: var(--accent-gold-bright);
          font-size: 1.1rem;
        }

        .exploreLabel {
          margin: 0 0 0.35rem;

          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .exploreMoreCard h2 {
          color: var(--text-primary);
          font-size: clamp(1.35rem, 3vw, 1.75rem);
        }

        .exploreMoreCard p:not(.exploreLabel) {
          margin-top: 0.65rem;
          font-size: 0.94rem;
        }

        .exploreMoreCard a {
          display: inline-block;
          margin-top: 1rem;

          color: var(--accent-gold-bright);
          font-weight: 700;
          text-decoration: none;
        }

        .exploreMoreCard a:hover,
        .exploreSignLink:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .zodiacGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .homePage {
            padding-top: 2.75rem;
          }

          .formControls {
            grid-template-columns: 1fr;
          }

          .revealButton {
            width: 100%;
          }

          .zodiacResult {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .resultImageWrap {
            align-items: center;
          }

          .cosmicMessage {
            text-align: left;
          }

          .zodiacGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .exploreMoreSection {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 430px) {
          .signFinderHeading {
            align-items: flex-start;
          }

          .finderSymbol {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
          }

          .zodiacGrid {
            gap: 1rem;
          }

          .zodiacCard {
            padding-inline: 0;
          }
        }
      `}</style>
    </main>
  );
}