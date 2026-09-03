import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Capricorn Zodiac Sign",
  description:
    "Explore Capricorn personality traits, strengths, challenges, love compatibility, and the determined spirit of the Sea-Goat.",
};

const capricornFacts = [
  {
    label: "Date Range",
    value: "December 22 – January 19",
  },
  {
    label: "Element",
    value: "Earth",
  },
  {
    label: "Modality",
    value: "Cardinal",
  },
  {
    label: "Ruling Planet",
    value: "Saturn",
  },
  {
    label: "Symbol",
    value: "The Sea-Goat",
  },
  {
    label: "Polarity",
    value: "Yin",
  },
];

const strengths = [
  "Disciplined",
  "Ambitious",
  "Dependable",
  "Patient",
  "Strategic",
  "Resilient",
];

const growthAreas = [
  "May become overly focused on achievement",
  "Can be hard on themselves",
  "May struggle to show vulnerability",
  "Can become overly cautious or rigid",
];

const compatibleSigns = [
  {
    sign: "Taurus",
    href: "/taurus",
    reason: "Shared stability, loyalty, and appreciation for lasting results.",
  },
  {
    sign: "Virgo",
    href: "/virgo",
    reason: "Practicality, reliability, and a mutual respect for effort.",
  },
  {
    sign: "Cancer",
    href: "/cancer",
    reason: "Emotional warmth and grounding that can balance Capricorn’s reserve.",
  },
  {
    sign: "Scorpio",
    href: "/scorpio",
    reason: "Depth, loyalty, and a shared appreciation for commitment.",
  },
];

export default function CapricornPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/capricorn.jpg"
            alt="Capricorn zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>December 22 – January 19</p>

          <h1>
            Capricorn <span aria-hidden="true">♑</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The builder of the zodiac — disciplined, patient, strategic, and
            committed to creating something that lasts.
          </p>

          <div className={styles.traitLine} aria-label="Capricorn key traits">
            <span>Ambitious</span>
            <span>Disciplined</span>
            <span>Practical</span>
            <span>Resilient</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="capricorn-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="capricorn-at-a-glance">Capricorn in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {capricornFacts.map((fact) => (
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
          <h2>The Quiet Power of Persistence</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Capricorn is associated with ambition,
            responsibility, patience, and long-term thinking. As an Earth sign,
            Capricorn tends to value what can be built, measured, maintained,
            and relied upon over time.
          </p>

          <p>
            Ruled by Saturn, Capricorn is often linked with discipline,
            structure, boundaries, and maturity. This influence gives the sign
            its reputation for taking commitments seriously and approaching
            goals with a realistic understanding that meaningful progress often
            takes time.
          </p>

          <p>
            Capricorn energy is not usually interested in rushing simply for the
            sake of movement. It prefers steady progress. People associated with
            this sign may be especially skilled at planning, prioritizing, and
            working through challenges that would discourage someone with less
            patience.
          </p>

          <p>
            Beneath the composed exterior, Capricorn can be much warmer and more
            sentimental than first impressions suggest. Trust often develops
            gradually, but loyalty can be deep once someone has earned a place
            in their inner circle.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Capricorn Shines</h2>

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
          <h2>When Responsibility Becomes Weight</h2>

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
          <h2>Capricorn in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Capricorn often approaches relationships with the same seriousness
            they bring to other important areas of life. They may not rush into
            emotional commitment, but when trust is established, they can be
            remarkably consistent and dependable.
          </p>

          <p>
            Love may be expressed through reliability, practical support, and
            keeping promises rather than constant displays of emotion. Capricorn
            often values a partner who understands that devotion can be quiet
            without being shallow.
          </p>

          <p>
            Earth signs may appreciate Capricorn&apos;s grounded approach, while
            Water signs can add emotional depth and softness. Relationships tend
            to work best when Capricorn feels respected without having to carry
            every responsibility alone.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Capricorn</h2>
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
          ✦
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Build Slowly. Build Well. Build What Lasts.</h2>

          <p>
            Capricorn energy reminds us that lasting success is rarely created
            in one dramatic moment. Its strength lies in patience, discipline,
            and the willingness to keep climbing long after the excitement of
            beginning has faded.
          </p>
        </div>
      </section>
    </main>
  );
}