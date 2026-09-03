import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Pisces Zodiac Sign",
  description:
    "Explore Pisces personality traits, strengths, challenges, love compatibility, and the intuitive spirit of the Fish.",
};

const piscesFacts = [
  {
    label: "Date Range",
    value: "February 19 – March 20",
  },
  {
    label: "Element",
    value: "Water",
  },
  {
    label: "Modality",
    value: "Mutable",
  },
  {
    label: "Ruling Planet",
    value: "Neptune",
  },
  {
    label: "Symbol",
    value: "The Fish",
  },
  {
    label: "Polarity",
    value: "Yin",
  },
];

const strengths = [
  "Compassionate",
  "Intuitive",
  "Creative",
  "Gentle",
  "Emotionally perceptive",
  "Imaginative",
];

const growthAreas = [
  "May absorb the emotions of others",
  "Can retreat into fantasy when reality feels harsh",
  "May struggle with boundaries",
  "Can become overly self-sacrificing",
];

const compatibleSigns = [
  {
    sign: "Cancer",
    href: "/cancer",
    reason: "Emotional understanding, gentleness, and intuitive connection.",
  },
  {
    sign: "Scorpio",
    href: "/scorpio",
    reason: "Depth, loyalty, and a shared comfort with emotional intensity.",
  },
  {
    sign: "Taurus",
    href: "/taurus",
    reason: "Grounding, tenderness, and a calming sense of stability.",
  },
  {
    sign: "Capricorn",
    href: "/capricorn",
    reason: "Structure, reliability, and support for Pisces imagination.",
  },
];

export default function PiscesPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/pisces.jpg"
            alt="Pisces zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>February 19 – March 20</p>

          <h1>
            Pisces <span aria-hidden="true">♓</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The dreamer of the zodiac — intuitive, compassionate, imaginative,
            and deeply attuned to the feelings beneath the surface.
          </p>

          <div className={styles.traitLine} aria-label="Pisces key traits">
            <span>Compassionate</span>
            <span>Intuitive</span>
            <span>Artistic</span>
            <span>Dreamy</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="pisces-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="pisces-at-a-glance">Pisces in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {piscesFacts.map((fact) => (
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
          <h2>The World Beneath the Surface</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Pisces is associated with intuition,
            imagination, compassion, sensitivity, and the unseen currents that
            connect people to one another. As a Water sign, Pisces often
            experiences life through feeling, atmosphere, symbolism, and
            instinct rather than through logic alone.
          </p>

          <p>
            Ruled by Neptune, Pisces is traditionally linked with dreams,
            creativity, spirituality, illusion, and the imagination. This
            influence helps explain the sign&apos;s reputation for artistic
            sensitivity and for noticing beauty, emotion, and meaning that may
            escape more practical eyes.
          </p>

          <p>
            Pisces can be highly receptive to the emotional tone of a room.
            Their empathy may allow them to understand what someone is feeling
            without much explanation, but that same sensitivity can become
            exhausting if they do not distinguish between their own emotions
            and those they absorb from others.
          </p>

          <p>
            As a Mutable sign, Pisces is adaptable and fluid. They may move
            easily between ideas, moods, creative interests, and perspectives.
            Their challenge is learning when openness becomes drift and when
            imagination needs enough structure to become something real.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Pisces Shines</h2>

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
          <h2>When Sensitivity Has No Shore</h2>

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
          <h2>Pisces in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Pisces often seeks emotional and imaginative depth in relationships.
            They may be drawn to bonds that feel soulful, tender, and difficult
            to reduce to simple labels.
          </p>

          <p>
            Affection can be expressed through empathy, creativity, listening,
            and a willingness to meet someone in their emotional world. Pisces
            may love deeply, but healthy boundaries are especially important so
            compassion does not become self-erasure.
          </p>

          <p>
            Fellow Water signs may understand Pisces&apos;s emotional language,
            while Earth signs can offer steadiness and grounding. The healthiest
            relationships give Pisces room to dream while still encouraging a
            strong sense of self.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Pisces</h2>
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
          ♓
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Dream Deeply — But Keep One Foot on the Shore</h2>

          <p>
            Pisces energy reminds us that imagination, empathy, and intuition
            can reveal truths that logic alone may miss. The gift becomes even
            stronger when compassion is paired with boundaries and dreams are
            given enough structure to take shape in the real world.
          </p>
        </div>
      </section>
    </main>
  );
}