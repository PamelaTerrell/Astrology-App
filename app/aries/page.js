import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Aries Zodiac Sign",
  description:
    "Explore Aries personality traits, strengths, challenges, love compatibility, and the bold spirit of the Ram.",
};

const ariesFacts = [
  {
    label: "Date Range",
    value: "March 21 – April 19",
  },
  {
    label: "Element",
    value: "Fire",
  },
  {
    label: "Modality",
    value: "Cardinal",
  },
  {
    label: "Ruling Planet",
    value: "Mars",
  },
  {
    label: "Symbol",
    value: "The Ram",
  },
  {
    label: "Polarity",
    value: "Yang",
  },
];

const strengths = [
  "Courageous",
  "Energetic",
  "Decisive",
  "Passionate",
  "Pioneering",
  "Quick to take initiative",
];

const growthAreas = [
  "Can act before thinking",
  "May become impatient with slower progress",
  "Can turn competition into unnecessary conflict",
  "May struggle to stay engaged once the excitement fades",
];

const compatibleSigns = [
  {
    sign: "Leo",
    href: "/leo",
    reason: "Shared passion, confidence, and enthusiasm for life.",
  },
  {
    sign: "Sagittarius",
    href: "/sagittarius",
    reason: "Adventure, optimism, and plenty of forward momentum.",
  },
  {
    sign: "Gemini",
    href: "/gemini",
    reason: "Curiosity, spontaneity, and energetic conversation.",
  },
  {
    sign: "Aquarius",
    href: "/aquarius",
    reason: "Independence, originality, and mutual respect for freedom.",
  },
];

export default function AriesPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/aries.jpg"
            alt="Aries zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>March 21 – April 19</p>

          <h1>
            Aries <span aria-hidden="true">♈</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The spark that starts the zodiac — bold, energetic, direct, and
            always ready to move first.
          </p>

          <div className={styles.traitLine} aria-label="Aries key traits">
            <span>Courageous</span>
            <span>Energetic</span>
            <span>Passionate</span>
            <span>Pioneering</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="aries-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="aries-at-a-glance">Aries in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {ariesFacts.map((fact) => (
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
          <h2>The Fire That Moves First</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Aries is associated with action,
            initiative, confidence, and the instinct to begin. As the first sign
            of the zodiac, Aries carries an unmistakable sense of momentum.
            Rather than waiting for perfect conditions, Aries energy often
            prefers to learn by doing.
          </p>

          <p>
            Ruled by Mars, Aries is traditionally linked with courage, desire,
            competitiveness, and physical energy. People associated with this
            sign may be quick to make decisions, eager to tackle challenges,
            and comfortable stepping into situations that others might approach
            more cautiously.
          </p>

          <p>
            Aries tends to communicate directly. There is often little interest
            in hiding enthusiasm or pretending not to care. That openness can
            feel refreshing, though the same directness may sometimes become
            impatience when other people need more time to decide or respond.
          </p>

          <p>
            Cardinal Fire gives Aries its reputation as a starter. Beginning
            something new can be exhilarating: a project, relationship,
            adventure, competition, or idea. The challenge is learning that
            persistence can be just as powerful as the first burst of
            excitement.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Aries Shines</h2>

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
          <h2>When Fire Burns Too Fast</h2>

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
          <h2>Aries in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Aries often approaches relationships with enthusiasm, honesty, and
            visible interest. They may enjoy the excitement of discovering
            someone new and tend to appreciate partners who communicate clearly
            rather than relying on guessing games.
          </p>

          <p>
            Independence is important. Aries generally wants closeness without
            feeling constrained, and relationships may thrive when both people
            have room to pursue their own interests while still sharing
            experiences together.
          </p>

          <p>
            Fire signs can match Aries&apos;s passion and appetite for action,
            while Air signs often add ideas, conversation, and variety. The most
            successful connection, however, usually gives Aries both excitement
            and enough stability to keep building once the initial spark settles
            into something deeper.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Aries</h2>
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
          <h2>Be Brave Enough to Begin — and Patient Enough to Continue</h2>

          <p>
            Aries energy reminds us that courage often begins before certainty
            arrives. Its greatest strength is the willingness to move, try,
            risk, and create momentum. The deeper lesson is learning when to
            slow the fire just enough for what began with passion to become
            something lasting.
          </p>
        </div>
      </section>
    </main>
  );
}