import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Aquarius Zodiac Sign",
  description:
    "Explore Aquarius personality traits, strengths, challenges, love compatibility, and the independent spirit of the Water Bearer.",
};

const aquariusFacts = [
  {
    label: "Date Range",
    value: "January 20 – February 18",
  },
  {
    label: "Element",
    value: "Air",
  },
  {
    label: "Modality",
    value: "Fixed",
  },
  {
    label: "Ruling Planets",
    value: "Uranus & Saturn",
  },
  {
    label: "Symbol",
    value: "The Water Bearer",
  },
  {
    label: "Polarity",
    value: "Yang",
  },
];

const strengths = [
  "Original thinker",
  "Independent",
  "Humanitarian",
  "Inventive",
  "Open-minded",
  "Loyal to causes and ideals",
];

const growthAreas = [
  "Can become emotionally detached",
  "May resist convention simply because it is conventional",
  "Can seem unpredictable or aloof",
  "May intellectualize feelings instead of expressing them",
];

const compatibleSigns = [
  {
    sign: "Gemini",
    href: "/gemini",
    reason: "Curiosity, communication, and mental stimulation.",
  },
  {
    sign: "Libra",
    href: "/libra",
    reason: "Shared appreciation for ideas, people, and independence.",
  },
  {
    sign: "Aries",
    href: "/aries",
    reason: "Energy, momentum, and mutual respect for individuality.",
  },
  {
    sign: "Sagittarius",
    href: "/sagittarius",
    reason: "Adventure, freedom, and a shared appetite for possibility.",
  },
];

export default function AquariusPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/aquarius.jpg"
            alt="Aquarius zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>January 20 – February 18</p>

          <h1>
            Aquarius <span aria-hidden="true">♒</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The visionary of the zodiac — independent, inventive, and often a
            few steps ahead of everyone else.
          </p>

          <div
            className={styles.traitLine}
            aria-label="Aquarius key traits"
          >
            <span>Innovative</span>
            <span>Independent</span>
            <span>Intellectual</span>
            <span>Unconventional</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="aquarius-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="aquarius-at-a-glance">Aquarius in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {aquariusFacts.map((fact) => (
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
          <h2>The Mind of the Water Bearer</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Aquarius is associated with originality,
            independence, and a strong interest in ideas that look beyond the
            present moment. Although its symbol is the Water Bearer, Aquarius is
            an Air sign, linking it more closely with thought, communication,
            perspective, and social awareness than with the emotional qualities
            usually associated with Water signs.
          </p>

          <p>
            Aquarius often has a reputation for thinking differently. People
            associated with this sign may be drawn to unusual interests,
            unconventional solutions, technology, social causes, or anything
            that challenges an established way of doing things. They can be
            highly individualistic while still caring deeply about groups,
            communities, and broader ideals.
          </p>

          <p>
            That combination can create an interesting contradiction. Aquarius
            may care intensely about humanity while sometimes appearing
            emotionally distant in one-on-one situations. Rather than reacting
            immediately from emotion, they may first analyze what they feel,
            search for a pattern, or try to understand the situation from a
            wider perspective.
          </p>

          <p>
            Uranus is commonly associated with innovation, disruption, and
            sudden change, while Saturn brings structure, discipline, and
            responsibility. Together, those influences help explain the classic
            Aquarian mix of rebellion and principle: a desire to challenge the
            rules, but often with a larger purpose in mind.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Aquarius Shines</h2>

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
          <h2>When Independence Goes Too Far</h2>

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
          <h2>Aquarius in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Aquarius often values friendship, intellectual compatibility, and
            freedom inside a relationship. A strong bond may begin with
            conversation, shared interests, or a sense that both people can be
            fully themselves without excessive pressure or possessiveness.
          </p>

          <p>
            They may be less interested in performing romance according to a
            traditional script and more interested in building a relationship
            that feels authentic. Space and independence can matter greatly,
            but so can loyalty once trust is established.
          </p>

          <p>
            Astrology traditionally pairs Aquarius especially well with fellow
            Air signs, who appreciate communication and mental stimulation, and
            with energetic Fire signs, who can match Aquarius&apos;s enthusiasm
            for discovery and change.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Aquarius</h2>
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
          <h2>Think Differently — But Stay Connected</h2>
          <p>
            Aquarius energy is at its best when originality serves something
            larger than novelty alone. Vision becomes most powerful when bold
            ideas remain connected to real people, real relationships, and the
            world those ideas are meant to improve.
          </p>
        </div>
      </section>
    </main>
  );
}