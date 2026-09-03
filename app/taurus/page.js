import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Taurus Zodiac Sign",
  description:
    "Explore Taurus personality traits, strengths, challenges, love compatibility, and the grounded spirit of the Bull.",
};

const taurusFacts = [
  {
    label: "Date Range",
    value: "April 20 – May 20",
  },
  {
    label: "Element",
    value: "Earth",
  },
  {
    label: "Modality",
    value: "Fixed",
  },
  {
    label: "Ruling Planet",
    value: "Venus",
  },
  {
    label: "Symbol",
    value: "The Bull",
  },
  {
    label: "Polarity",
    value: "Yin",
  },
];

const strengths = [
  "Reliable",
  "Patient",
  "Practical",
  "Devoted",
  "Steady",
  "Persistent",
];

const growthAreas = [
  "May resist change long after it becomes necessary",
  "Can become overly attached to comfort",
  "May hold onto people or situations too tightly",
  "Can appear stubborn when protecting stability",
];

const compatibleSigns = [
  {
    sign: "Virgo",
    href: "/virgo",
    reason: "Practicality, reliability, loyalty, and shared appreciation for consistency.",
  },
  {
    sign: "Capricorn",
    href: "/capricorn",
    reason: "Stability, long-term thinking, and a shared desire to build something lasting.",
  },
  {
    sign: "Cancer",
    href: "/cancer",
    reason: "Comfort, loyalty, emotional warmth, and a strong sense of home.",
  },
  {
    sign: "Pisces",
    href: "/pisces",
    reason: "Tenderness, imagination, emotional depth, and grounding support.",
  },
];

export default function TaurusPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/taurus.jpg"
            alt="Taurus zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>April 20 – May 20</p>

          <h1>
            Taurus <span aria-hidden="true">♉</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The steady heart of the zodiac — grounded, loyal, patient, and
            deeply connected to comfort, beauty, and what endures.
          </p>

          <div className={styles.traitLine} aria-label="Taurus key traits">
            <span>Reliable</span>
            <span>Patient</span>
            <span>Devoted</span>
            <span>Grounded</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="taurus-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="taurus-at-a-glance">Taurus in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {taurusFacts.map((fact) => (
            <article key={fact.label} className={styles.factCard}>
              <p className={styles.factLabel}>{fact.label}</p>
              <p className={styles.factValue}>{fact.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Personality</p>
          <h2>The Strength of Staying Power</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Taurus is associated with stability,
            patience, sensuality, consistency, and material security. As an
            Earth sign, Taurus tends to value what is tangible, dependable,
            and built to last.
          </p>

          <p>
            Ruled by Venus, Taurus is traditionally connected with beauty,
            pleasure, affection, comfort, and the senses. This influence helps
            explain the sign&apos;s reputation for appreciating good food,
            beautiful surroundings, music, touch, nature, and the small rituals
            that make everyday life feel rich.
          </p>

          <p>
            Taurus rarely feels the need to rush. People associated with this
            sign may prefer to observe, settle into a decision, and move only
            when something feels solid. Once committed, however, their
            persistence can be remarkable.
          </p>

          <p>
            Fixed Earth gives Taurus its famous staying power. That steadiness
            can become one of its greatest strengths, but it can also make
            necessary change feel threatening. Taurus grows when stability is
            treated as a foundation rather than a cage.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Taurus Shines</h2>

          <ul className={styles.qualityList}>
            {strengths.map((strength) => (
              <li key={strength}>
                <span aria-hidden="true">✦</span>
                {strength}
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Growth & balance</p>
          <h2>When Stability Becomes Stagnation</h2>

          <ul className={styles.qualityList}>
            {growthAreas.map((area) => (
              <li key={area}>
                <span aria-hidden="true">☾</span>
                {area}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Love & relationships</p>
          <h2>Taurus in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Taurus often values loyalty, consistency, affection, and emotional
            steadiness in relationships. Trust may build gradually, but once it
            does, commitment can run very deep.
          </p>

          <p>
            Love may be expressed through presence, practical care, physical
            affection, shared routines, and creating a comfortable life
            together. Taurus often appreciates relationships that feel secure
            without becoming dull.
          </p>

          <p>
            Fellow Earth signs may understand Taurus&apos;s need for stability,
            while Water signs can bring emotional depth and softness. The
            strongest relationships usually balance security with enough growth
            to keep the bond alive.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Taurus</h2>
        </div>

        <div className={styles.compatibilityGrid}>
          {compatibleSigns.map((match) => (
            <Link
              key={match.sign}
              href={match.href}
              className={styles.compatibilityCard}
            >
              <span className={styles.matchName}>{match.sign}</span>
              <span className={styles.matchReason}>{match.reason}</span>
              <span className={styles.matchArrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>

        <p className={styles.compatibilityNote}>
          Zodiac compatibility is a playful starting point, not a rulebook.
          Individual personalities and relationships are always more complex
          than Sun signs alone.
        </p>
      </section>

      <section className={styles.cosmicTakeaway}>
        <span className={styles.takeawaySymbol} aria-hidden="true">
          ♉
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Stand Firm — But Leave Room to Grow</h2>

          <p>
            Taurus energy reminds us that patience, loyalty, and stability are
            powerful gifts. The deeper lesson is learning that true security is
            strong enough to evolve. What is rooted does not have to remain
            unchanged.
          </p>
        </div>
      </section>
    </main>
  );
}