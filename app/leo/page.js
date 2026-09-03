import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Leo Zodiac Sign",
  description:
    "Explore Leo personality traits, strengths, challenges, love compatibility, and the radiant spirit of the Lion.",
};

const leoFacts = [
  {
    label: "Date Range",
    value: "July 23 – August 22",
  },
  {
    label: "Element",
    value: "Fire",
  },
  {
    label: "Modality",
    value: "Fixed",
  },
  {
    label: "Ruling Planet",
    value: "The Sun",
  },
  {
    label: "Symbol",
    value: "The Lion",
  },
  {
    label: "Polarity",
    value: "Yang",
  },
];

const strengths = [
  "Confident",
  "Generous",
  "Creative",
  "Warmhearted",
  "Loyal",
  "Naturally charismatic",
];

const growthAreas = [
  "May rely too heavily on recognition",
  "Can become prideful when feeling overlooked",
  "May struggle to admit vulnerability",
  "Can take criticism more personally than expected",
];

const compatibleSigns = [
  {
    sign: "Aries",
    href: "/aries",
    reason: "Passion, confidence, momentum, and mutual admiration.",
  },
  {
    sign: "Sagittarius",
    href: "/sagittarius",
    reason: "Adventure, optimism, humor, and a shared enthusiasm for life.",
  },
  {
    sign: "Gemini",
    href: "/gemini",
    reason: "Playfulness, social energy, curiosity, and lively conversation.",
  },
  {
    sign: "Libra",
    href: "/libra",
    reason: "Charm, creativity, romance, and appreciation for beauty.",
  },
];

export default function LeoPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/leo.jpg"
            alt="Leo zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>July 23 – August 22</p>

          <h1>
            Leo <span aria-hidden="true">♌</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The radiant heart of the zodiac — expressive, loyal, creative, and
            born with a natural instinct to shine.
          </p>

          <div className={styles.traitLine} aria-label="Leo key traits">
            <span>Confident</span>
            <span>Generous</span>
            <span>Creative</span>
            <span>Charismatic</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="leo-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="leo-at-a-glance">Leo in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {leoFacts.map((fact) => (
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
          <h2>The Heart That Wants to Shine</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Leo is associated with creativity,
            confidence, vitality, warmth, and self-expression. As a Fire sign,
            Leo tends to bring visible energy into the world and often feels
            most alive when creating, leading, celebrating, or inspiring others.
          </p>

          <p>
            Ruled by the Sun, Leo is symbolically linked with identity,
            visibility, purpose, and life force. This solar influence helps
            explain Leo&apos;s reputation for radiance. Even quieter Leos may
            carry a strong desire to be recognized for what makes them unique.
          </p>

          <p>
            Leo often has a generous spirit. They may enjoy lifting others up,
            making celebrations memorable, giving freely, or creating an
            atmosphere where people feel welcomed and appreciated. Their
            confidence can be contagious when it comes from genuine
            self-assurance rather than the need to impress.
          </p>

          <p>
            Fixed Fire gives Leo both passion and staying power. Unlike the
            quick ignition of Aries, Leo energy often wants to sustain the flame
            and build something worthy of pride. The challenge is remembering
            that true confidence does not disappear simply because applause
            becomes quiet.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Leo Shines</h2>

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
          <h2>When Pride Outshines the Heart</h2>

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
          <h2>Leo in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Leo often loves openly and wholeheartedly. Affection, loyalty,
            enthusiasm, and visible appreciation can be especially meaningful
            in relationships. They generally want to feel chosen, valued, and
            proud of the connection they are building.
          </p>

          <p>
            Romance may come naturally to Leo energy. Thoughtful gestures,
            memorable experiences, celebration, and playful affection can all
            become ways of expressing love. In return, sincere admiration often
            matters more than empty flattery.
          </p>

          <p>
            Fellow Fire signs may match Leo&apos;s passion and confidence, while
            Air signs can bring conversation, variety, and social energy. The
            strongest relationships usually allow Leo to shine without requiring
            either person to shrink.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Leo</h2>
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
          ☀
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Shine Because You Are Alive — Not Because Someone Is Watching</h2>

          <p>
            Leo energy reminds us that confidence is most powerful when it comes
            from within. The gift is not simply being noticed; it is having the
            courage to create, love, lead, and express yourself fully even when
            no audience is there to applaud.
          </p>
        </div>
      </section>
    </main>
  );
}