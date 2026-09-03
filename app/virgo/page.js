import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Virgo Zodiac Sign",
  description:
    "Explore Virgo personality traits, strengths, challenges, love compatibility, and the thoughtful spirit of the Maiden.",
};

const virgoFacts = [
  {
    label: "Date Range",
    value: "August 23 – September 22",
  },
  {
    label: "Element",
    value: "Earth",
  },
  {
    label: "Modality",
    value: "Mutable",
  },
  {
    label: "Ruling Planet",
    value: "Mercury",
  },
  {
    label: "Symbol",
    value: "The Maiden",
  },
  {
    label: "Polarity",
    value: "Yin",
  },
];

const strengths = [
  "Analytical",
  "Reliable",
  "Practical",
  "Observant",
  "Diligent",
  "Helpful",
];

const growthAreas = [
  "May become overly critical of themselves",
  "Can get stuck in details",
  "May overthink simple decisions",
  "Can struggle to rest when something still feels unfinished",
];

const compatibleSigns = [
  {
    sign: "Taurus",
    href: "/taurus",
    reason: "Stability, practicality, loyalty, and shared appreciation for consistency.",
  },
  {
    sign: "Capricorn",
    href: "/capricorn",
    reason: "Responsibility, ambition, reliability, and a strong sense of purpose.",
  },
  {
    sign: "Cancer",
    href: "/cancer",
    reason: "Care, loyalty, emotional warmth, and practical support.",
  },
  {
    sign: "Scorpio",
    href: "/scorpio",
    reason: "Depth, observation, trust, and a mutual appreciation for sincerity.",
  },
];

export default function VirgoPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/virgo.jpg"
            alt="Virgo zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>August 23 – September 22</p>

          <h1>
            Virgo <span aria-hidden="true">♍</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The quiet craftsperson of the zodiac — observant, practical,
            thoughtful, and always noticing what could work a little better.
          </p>

          <div className={styles.traitLine} aria-label="Virgo key traits">
            <span>Analytical</span>
            <span>Reliable</span>
            <span>Practical</span>
            <span>Observant</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="virgo-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="virgo-at-a-glance">Virgo in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {virgoFacts.map((fact) => (
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
          <h2>The Intelligence of Small Details</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Virgo is associated with analysis,
            discernment, service, organization, and practical intelligence. As
            an Earth sign, Virgo often prefers useful ideas, reliable methods,
            and improvements that can actually be applied.
          </p>

          <p>
            Ruled by Mercury, Virgo is traditionally connected with thought,
            communication, observation, and problem-solving. Unlike Gemini,
            which often uses Mercury&apos;s energy to explore possibilities,
            Virgo tends to direct that mental agility toward refinement,
            organization, and understanding how things work.
          </p>

          <p>
            People associated with Virgo may notice details others overlook.
            They can be especially skilled at spotting inconsistencies,
            anticipating problems, and quietly making systems more efficient.
            Their helpfulness may show up less through grand gestures and more
            through practical acts of care.
          </p>

          <p>
            Mutable Earth gives Virgo adaptability without losing its grounded
            nature. The challenge is learning that improvement has a stopping
            point. Not every flaw needs correcting, and not every outcome has to
            be optimized before it can be appreciated.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Virgo Shines</h2>

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
          <h2>When Discernment Becomes Criticism</h2>

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
          <h2>Virgo in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Virgo often expresses affection through attentiveness, reliability,
            and practical care. Remembering details, helping solve problems, and
            showing up when needed may carry more meaning than dramatic displays
            of romance.
          </p>

          <p>
            Trust often grows through consistency. Virgo may take time to open
            emotionally, but dependable behavior and sincere communication can
            create a strong sense of security.
          </p>

          <p>
            Fellow Earth signs may understand Virgo&apos;s grounded approach,
            while Water signs can bring emotional warmth and depth. The
            healthiest relationships allow Virgo to care deeply without feeling
            responsible for fixing everything.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Virgo</h2>
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
          ♍
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Improve What Matters — Then Let It Be Enough</h2>

          <p>
            Virgo energy reminds us that care often lives in the details. Its
            gift is the ability to observe, refine, organize, and make life work
            better. The deeper lesson is remembering that usefulness and
            perfection are not the same thing.
          </p>
        </div>
      </section>
    </main>
  );
}