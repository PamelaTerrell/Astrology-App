import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Scorpio Zodiac Sign",
  description:
    "Explore Scorpio personality traits, strengths, challenges, love compatibility, and the intense spirit of the Scorpion.",
};

const scorpioFacts = [
  {
    label: "Date Range",
    value: "October 23 – November 21",
  },
  {
    label: "Element",
    value: "Water",
  },
  {
    label: "Modality",
    value: "Fixed",
  },
  {
    label: "Ruling Planets",
    value: "Mars & Pluto",
  },
  {
    label: "Symbol",
    value: "The Scorpion",
  },
  {
    label: "Polarity",
    value: "Yin",
  },
];

const strengths = [
  "Intuitive",
  "Determined",
  "Loyal",
  "Resourceful",
  "Emotionally perceptive",
  "Resilient",
];

const growthAreas = [
  "May become overly guarded",
  "Can hold onto hurt for too long",
  "May struggle to surrender control",
  "Can become suspicious when trust feels uncertain",
];

const compatibleSigns = [
  {
    sign: "Cancer",
    href: "/cancer",
    reason: "Emotional depth, loyalty, intuition, and strong protective instincts.",
  },
  {
    sign: "Pisces",
    href: "/pisces",
    reason: "Sensitivity, emotional understanding, and a willingness to go deep.",
  },
  {
    sign: "Taurus",
    href: "/taurus",
    reason: "Loyalty, sensuality, stability, and a powerful fixed-sign connection.",
  },
  {
    sign: "Virgo",
    href: "/virgo",
    reason: "Trust, reliability, observation, and a shared appreciation for depth.",
  },
];

export default function ScorpioPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/scorpio.jpg"
            alt="Scorpio zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>October 23 – November 21</p>

          <h1>
            Scorpio <span aria-hidden="true">♏</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The alchemist of the zodiac — intense, intuitive, loyal, and drawn
            toward the truths that live beneath the surface.
          </p>

          <div className={styles.traitLine} aria-label="Scorpio key traits">
            <span>Intuitive</span>
            <span>Magnetic</span>
            <span>Determined</span>
            <span>Loyal</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="scorpio-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="scorpio-at-a-glance">Scorpio in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {scorpioFacts.map((fact) => (
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
          <h2>The Power Beneath the Surface</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Scorpio is associated with intensity,
            emotional depth, transformation, loyalty, secrecy, and resilience.
            As a Water sign, Scorpio tends to experience life deeply, but unlike
            more visibly emotional Water signs, it may reveal those feelings
            only when trust has been earned.
          </p>

          <p>
            Scorpio is traditionally associated with Mars and Pluto. Mars brings
            drive, courage, desire, and determination, while Pluto is linked
            with transformation, power, endings, renewal, and what lies beneath
            the obvious surface.
          </p>

          <p>
            People associated with Scorpio may have a strong instinct for what
            is unspoken. They can be remarkably perceptive about motives,
            emotional undercurrents, and shifts in trust. That sensitivity can
            make them excellent observers, but it can also make uncertainty
            difficult to ignore.
          </p>

          <p>
            Fixed Water gives Scorpio persistence. Once emotionally invested,
            they may remain committed long after others would have moved on.
            Their challenge is learning that strength is not only the ability to
            hold on — it is also knowing when transformation requires release.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Scorpio Shines</h2>

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
          <h2>When Protection Becomes Control</h2>

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
          <h2>Scorpio in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Scorpio often values emotional honesty, loyalty, and depth more than
            casual connection. Relationships may feel especially meaningful
            when there is trust strong enough for both people to be vulnerable
            without fear of betrayal.
          </p>

          <p>
            Affection may be intense but private. Scorpio does not always need
            the relationship displayed publicly to feel deeply committed.
            Consistency, honesty, and emotional presence can matter more than
            appearances.
          </p>

          <p>
            Fellow Water signs may understand Scorpio&apos;s emotional depth,
            while Earth signs can bring steadiness and reassurance. The
            healthiest relationships allow Scorpio to feel secure without
            needing to monitor, test, or control the bond.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Scorpio</h2>
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
          ♏
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Depth Is Powerful — But Trust Requires Openness</h2>

          <p>
            Scorpio energy reminds us that transformation often begins where
            comfort ends. Its strength lies in the courage to face what others
            may avoid. The deeper lesson is learning that vulnerability can be
            a form of power, not a surrender of it.
          </p>
        </div>
      </section>
    </main>
  );
}