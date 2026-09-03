import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Sagittarius Zodiac Sign",
  description:
    "Explore Sagittarius personality traits, strengths, challenges, love compatibility, and the adventurous spirit of the Archer.",
};

const sagittariusFacts = [
  {
    label: "Date Range",
    value: "November 22 – December 21",
  },
  {
    label: "Element",
    value: "Fire",
  },
  {
    label: "Modality",
    value: "Mutable",
  },
  {
    label: "Ruling Planet",
    value: "Jupiter",
  },
  {
    label: "Symbol",
    value: "The Archer",
  },
  {
    label: "Polarity",
    value: "Yang",
  },
];

const strengths = [
  "Optimistic",
  "Adventurous",
  "Independent",
  "Honest",
  "Philosophical",
  "Enthusiastic",
];

const growthAreas = [
  "May become restless when life feels repetitive",
  "Can be blunt without realizing the impact",
  "May avoid commitment when it feels restrictive",
  "Can chase the next horizon before finishing the current journey",
];

const compatibleSigns = [
  {
    sign: "Aries",
    href: "/aries",
    reason: "Momentum, independence, and a shared appetite for action.",
  },
  {
    sign: "Leo",
    href: "/leo",
    reason: "Warmth, confidence, adventure, and a shared enthusiasm for life.",
  },
  {
    sign: "Libra",
    href: "/libra",
    reason: "Social ease, curiosity, optimism, and a love of new experiences.",
  },
  {
    sign: "Aquarius",
    href: "/aquarius",
    reason: "Freedom, originality, big ideas, and mutual respect for independence.",
  },
];

export default function SagittariusPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/sagittarius.jpg"
            alt="Sagittarius zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>November 22 – December 21</p>

          <h1>
            Sagittarius <span aria-hidden="true">♐</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The explorer of the zodiac — optimistic, independent, philosophical,
            and always looking toward the next horizon.
          </p>

          <div
            className={styles.traitLine}
            aria-label="Sagittarius key traits"
          >
            <span>Adventurous</span>
            <span>Optimistic</span>
            <span>Independent</span>
            <span>Philosophical</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="sagittarius-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="sagittarius-at-a-glance">Sagittarius in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {sagittariusFacts.map((fact) => (
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
          <h2>The Call of the Open Horizon</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Sagittarius is associated with freedom,
            exploration, optimism, truth, and the search for meaning. As a Fire
            sign, Sagittarius tends to move through life with energy and
            enthusiasm, especially when there is something new to discover.
          </p>

          <p>
            Ruled by Jupiter, Sagittarius is traditionally connected with
            expansion, growth, philosophy, travel, and broader perspective.
            This influence helps explain the sign&apos;s reputation for thinking
            big and for being drawn toward experiences that stretch the mind or
            widen the world.
          </p>

          <p>
            Sagittarius often wants to understand what lies beyond the obvious.
            That may mean literal travel, higher learning, cultural exploration,
            spiritual questions, or simply conversations that challenge familiar
            assumptions.
          </p>

          <p>
            Mutable Fire gives Sagittarius flexibility and momentum. They can
            adapt quickly, change course when something more interesting appears,
            and recover from setbacks with remarkable optimism. The challenge is
            learning when freedom means expansion and when it becomes avoidance.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Sagittarius Shines</h2>

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
          <h2>When Freedom Becomes Escape</h2>

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
          <h2>Sagittarius in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Sagittarius often values relationships that feel expansive rather
            than confining. Shared adventures, laughter, learning, and a sense
            of mutual freedom can be especially important.
          </p>

          <p>
            Honesty matters deeply, although Sagittarius may sometimes deliver
            truth more directly than intended. They often appreciate partners
            who can handle candor without turning every disagreement into a
            crisis.
          </p>

          <p>
            Fire signs may match Sagittarius&apos;s enthusiasm and appetite for
            action, while Air signs can bring conversation, ideas, and social
            energy. The strongest relationships usually allow both people to
            grow without treating independence as distance.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Sagittarius</h2>
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
          ♐
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Go Far — But Know What You Are Searching For</h2>

          <p>
            Sagittarius energy reminds us that life becomes richer when we stay
            curious, keep moving, and remain open to new perspectives. The
            deeper lesson is learning that the next horizon means more when we
            understand why we are chasing it.
          </p>
        </div>
      </section>
    </main>
  );
}