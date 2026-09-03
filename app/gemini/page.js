import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Gemini Zodiac Sign",
  description:
    "Explore Gemini personality traits, strengths, challenges, love compatibility, and the curious spirit of the Twins.",
};

const geminiFacts = [
  {
    label: "Date Range",
    value: "May 21 – June 20",
  },
  {
    label: "Element",
    value: "Air",
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
    value: "The Twins",
  },
  {
    label: "Polarity",
    value: "Yang",
  },
];

const strengths = [
  "Curious",
  "Adaptable",
  "Quick-witted",
  "Communicative",
  "Versatile",
  "Socially perceptive",
];

const growthAreas = [
  "May lose interest once novelty fades",
  "Can become mentally scattered",
  "May avoid deeper feelings through distraction",
  "Can appear inconsistent when interests change quickly",
];

const compatibleSigns = [
  {
    sign: "Libra",
    href: "/libra",
    reason: "Conversation, charm, curiosity, and an easy exchange of ideas.",
  },
  {
    sign: "Aquarius",
    href: "/aquarius",
    reason: "Mental stimulation, independence, and a shared love of originality.",
  },
  {
    sign: "Aries",
    href: "/aries",
    reason: "Spontaneity, momentum, humor, and plenty of fresh experiences.",
  },
  {
    sign: "Leo",
    href: "/leo",
    reason: "Playfulness, confidence, creativity, and social energy.",
  },
];

export default function GeminiPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/gemini.jpg"
            alt="Gemini zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>May 21 – June 20</p>

          <h1>
            Gemini <span aria-hidden="true">♊</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The storyteller of the zodiac — curious, adaptable, quick-minded,
            and always ready for the next interesting idea.
          </p>

          <div className={styles.traitLine} aria-label="Gemini key traits">
            <span>Curious</span>
            <span>Witty</span>
            <span>Adaptable</span>
            <span>Expressive</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="gemini-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="gemini-at-a-glance">Gemini in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {geminiFacts.map((fact) => (
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
          <h2>The Mind That Never Stops Moving</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Gemini is associated with curiosity,
            communication, adaptability, and movement. As an Air sign, Gemini
            is often drawn toward ideas, conversation, information, and the
            endless possibilities created when different perspectives meet.
          </p>

          <p>
            Ruled by Mercury, the planet traditionally linked with language,
            learning, messages, and mental agility, Gemini tends to thrive in
            environments where there is something new to discover. Variety can
            feel energizing rather than distracting when it gives the Gemini
            mind room to explore.
          </p>

          <p>
            The Twins symbolize Gemini&apos;s ability to hold more than one
            perspective at once. This does not necessarily mean inconsistency.
            It can instead reflect a talent for seeing multiple sides of a
            question, changing direction when new information appears, and
            refusing to be trapped inside a single identity.
          </p>

          <p>
            Gemini often brings liveliness into a room through conversation,
            humor, questions, and observation. Their challenge is learning when
            stimulation becomes noise and when curiosity needs enough stillness
            to turn into understanding.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Gemini Shines</h2>

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
          <h2>When Curiosity Becomes Restlessness</h2>

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
          <h2>Gemini in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Gemini often connects through conversation first. Humor, curiosity,
            shared interests, and a sense of mental play can create attraction
            long before a relationship becomes emotionally serious.
          </p>

          <p>
            Variety matters. Gemini may enjoy relationships that continue to
            evolve, where both people remain interesting to one another and
            bring new experiences, ideas, and perspectives into the bond.
          </p>

          <p>
            Fellow Air signs often appreciate Gemini&apos;s quick mind, while
            Fire signs can match their enthusiasm and spontaneity. The strongest
            relationships usually give Gemini enough freedom to explore while
            still creating enough trust to remain present when the conversation
            becomes deeper.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Gemini</h2>
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
          <h2>Stay Curious — But Stay Long Enough to Discover Depth</h2>

          <p>
            Gemini energy reminds us that curiosity keeps life alive. Its gift
            is the ability to connect ideas, people, and possibilities. The
            deeper lesson is learning that some of the most interesting things
            are discovered only after the first excitement has passed.
          </p>
        </div>
      </section>
    </main>
  );
}