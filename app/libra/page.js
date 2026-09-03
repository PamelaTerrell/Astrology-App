import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Libra Zodiac Sign",
  description:
    "Explore Libra personality traits, strengths, challenges, love compatibility, and the graceful spirit of the Scales.",
};

const libraFacts = [
  {
    label: "Date Range",
    value: "September 23 – October 22",
  },
  {
    label: "Element",
    value: "Air",
  },
  {
    label: "Modality",
    value: "Cardinal",
  },
  {
    label: "Ruling Planet",
    value: "Venus",
  },
  {
    label: "Symbol",
    value: "The Scales",
  },
  {
    label: "Polarity",
    value: "Yang",
  },
];

const strengths = [
  "Diplomatic",
  "Charming",
  "Fair-minded",
  "Socially graceful",
  "Creative",
  "Skilled at seeing multiple perspectives",
];

const growthAreas = [
  "May delay decisions too long",
  "Can avoid conflict at the expense of honesty",
  "May over-prioritize appearances or harmony",
  "Can struggle to choose when every option has merit",
];

const compatibleSigns = [
  {
    sign: "Gemini",
    href: "/gemini",
    reason: "Conversation, curiosity, charm, and a shared appreciation for ideas.",
  },
  {
    sign: "Aquarius",
    href: "/aquarius",
    reason: "Independence, perspective, and strong intellectual connection.",
  },
  {
    sign: "Leo",
    href: "/leo",
    reason: "Warmth, romance, creativity, and mutual appreciation.",
  },
  {
    sign: "Sagittarius",
    href: "/sagittarius",
    reason: "Optimism, adventure, and an easy social rhythm.",
  },
];

export default function LibraPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/libra.jpg"
            alt="Libra zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>September 23 – October 22</p>

          <h1>
            Libra <span aria-hidden="true">♎</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The harmonizer of the zodiac — graceful, thoughtful, social, and
            always searching for the point where beauty and fairness meet.
          </p>

          <div className={styles.traitLine} aria-label="Libra key traits">
            <span>Diplomatic</span>
            <span>Charming</span>
            <span>Balanced</span>
            <span>Idealistic</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="libra-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="libra-at-a-glance">Libra in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {libraFacts.map((fact) => (
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
          <h2>The Art of Balance</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Libra is associated with balance,
            relationships, beauty, fairness, and social awareness. As an Air
            sign, Libra often approaches life through ideas, conversation, and
            the effort to understand more than one point of view.
          </p>

          <p>
            Ruled by Venus, Libra is traditionally connected with attraction,
            harmony, pleasure, art, and aesthetic appreciation. This influence
            helps explain the sign&apos;s reputation for charm and its desire
            to create surroundings and relationships that feel graceful rather
            than chaotic.
          </p>

          <p>
            Libra is symbolized by the Scales, and the image fits its tendency
            to weigh possibilities carefully. People associated with this sign
            may be naturally skilled at seeing both sides of an argument,
            noticing where compromise is possible, and helping others find
            common ground.
          </p>

          <p>
            The challenge is that balance can become hesitation. When every
            perspective seems valid, choosing one direction may feel
            uncomfortable. Libra grows when fairness includes their own voice,
            not only the effort to keep everyone else satisfied.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Libra Shines</h2>

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
          <h2>When Harmony Costs Too Much</h2>

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
          <h2>Libra in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Libra often feels most alive in meaningful connection. Partnership,
            conversation, affection, and shared experiences can carry enormous
            importance, and relationships may become a place where Libra learns
            as much about themselves as they do about another person.
          </p>

          <p>
            Romance often appeals to Libra&apos;s Venusian side. Beauty,
            thoughtfulness, atmosphere, and mutual appreciation can matter
            greatly. They may enjoy relationships that feel both emotionally
            warm and socially graceful.
          </p>

          <p>
            Fellow Air signs often match Libra&apos;s intellectual rhythm, while
            Fire signs can bring confidence, momentum, and excitement. The
            healthiest relationships allow Libra to preserve harmony without
            losing honesty or individuality.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Libra</h2>
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
          ♎
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Balance Includes You, Too</h2>

          <p>
            Libra energy reminds us that harmony is most meaningful when it is
            honest. Peace does not require disappearing into everyone else&apos;s
            preferences. The strongest balance is created when grace, fairness,
            beauty, and self-respect all have a place on the scales.
          </p>
        </div>
      </section>
    </main>
  );
}