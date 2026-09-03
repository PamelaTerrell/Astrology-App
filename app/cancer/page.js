import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Cancer Zodiac Sign",
  description:
    "Explore Cancer personality traits, strengths, challenges, love compatibility, and the nurturing spirit of the Crab.",
};

const cancerFacts = [
  {
    label: "Date Range",
    value: "June 21 – July 22",
  },
  {
    label: "Element",
    value: "Water",
  },
  {
    label: "Modality",
    value: "Cardinal",
  },
  {
    label: "Ruling Planet",
    value: "The Moon",
  },
  {
    label: "Symbol",
    value: "The Crab",
  },
  {
    label: "Polarity",
    value: "Yin",
  },
];

const strengths = [
  "Deeply intuitive",
  "Protective",
  "Compassionate",
  "Loyal",
  "Emotionally perceptive",
  "Nurturing",
];

const growthAreas = [
  "May retreat when hurt",
  "Can hold onto the past too tightly",
  "May absorb the emotions of others",
  "Can become overly protective or guarded",
];

const compatibleSigns = [
  {
    sign: "Scorpio",
    href: "/scorpio",
    reason: "Emotional depth, loyalty, and strong intuitive understanding.",
  },
  {
    sign: "Pisces",
    href: "/pisces",
    reason: "Compassion, imagination, and a naturally gentle emotional bond.",
  },
  {
    sign: "Taurus",
    href: "/taurus",
    reason: "Security, comfort, and a shared appreciation for home and loyalty.",
  },
  {
    sign: "Virgo",
    href: "/virgo",
    reason: "Care, dependability, and practical support that feels reassuring.",
  },
];

export default function CancerPage() {
  return (
    <main className={styles.signPage}>
      <section className={styles.signHero}>
        <div className={styles.signArtwork}>
          <Image
            src="/cancer.jpg"
            alt="Cancer zodiac artwork"
            width={280}
            height={280}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>June 21 – July 22</p>

          <h1>
            Cancer <span aria-hidden="true">♋</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The heart of the zodiac — intuitive, protective, deeply feeling,
            and drawn to the people and places that feel like home.
          </p>

          <div className={styles.traitLine} aria-label="Cancer key traits">
            <span>Intuitive</span>
            <span>Nurturing</span>
            <span>Protective</span>
            <span>Loyal</span>
          </div>
        </div>
      </section>

      <section
        className={styles.factsSection}
        aria-labelledby="cancer-at-a-glance"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>At a glance</p>
          <h2 id="cancer-at-a-glance">Cancer in the Zodiac</h2>
        </div>

        <div className={styles.factsGrid}>
          {cancerFacts.map((fact) => (
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
          <h2>The Heart Beneath the Shell</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            In traditional astrology, Cancer is associated with sensitivity,
            intuition, memory, protection, and emotional connection. As a Water
            sign, Cancer tends to experience life through feeling first, often
            noticing subtle changes in mood, tone, and atmosphere that others
            may overlook.
          </p>

          <p>
            Cancer is ruled by the Moon, which is traditionally connected with
            cycles, instinct, comfort, and the inner emotional world. This lunar
            association helps explain Cancer&apos;s reputation for being deeply
            responsive to surroundings and especially protective of the people
            they care about.
          </p>

          <p>
            Home often carries special meaning for Cancer energy. That does not
            always mean a literal house; it can be a familiar person, a family
            tradition, a favorite place, or simply the feeling of being safe
            enough to soften. Cancer often thrives when there is a dependable
            emotional base to return to.
          </p>

          <p>
            Like the Crab, Cancer may seem guarded at first. Vulnerability is
            rarely offered carelessly. Once trust is established, however,
            Cancer can be remarkably devoted, warm, and emotionally generous.
            Their challenge is learning that protection does not always require
            retreating behind the shell.
          </p>
        </div>
      </section>

      <section className={styles.dualSection}>
        <article className={styles.qualityCard}>
          <p className={styles.eyebrow}>Natural strengths</p>
          <h2>Where Cancer Shines</h2>

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
          <h2>When the Shell Becomes a Wall</h2>

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
          <h2>Cancer in Connection</h2>
        </div>

        <div className={styles.proseCard}>
          <p>
            Cancer often seeks emotional safety, sincerity, and consistency in
            relationships. Casual connection may be enjoyable, but deeper bonds
            usually matter most when there is trust, tenderness, and a genuine
            sense of being understood.
          </p>

          <p>
            Loyalty tends to run deep. Cancer may remember the small details
            others forget, notice when someone is struggling, and express love
            through care, comfort, and presence. They often value partners who
            do not dismiss emotional nuance as overreaction.
          </p>

          <p>
            Fellow Water signs may understand Cancer&apos;s emotional depth,
            while Earth signs can offer steadiness and reassurance. The best
            relationships give Cancer enough security to relax their defenses
            without asking them to become less sensitive than they naturally
            are.
          </p>
        </div>
      </section>

      <section className={styles.compatibilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Natural connections</p>
          <h2>Signs Often Linked With Cancer</h2>
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
          ☾
        </span>

        <div>
          <p className={styles.eyebrow}>Cosmic takeaway</p>
          <h2>Let Sensitivity Become Strength</h2>

          <p>
            Cancer energy reminds us that tenderness and strength are not
            opposites. The ability to care deeply can become a powerful source
            of wisdom when it is paired with healthy boundaries, trust, and the
            courage to step outside the shell when the moment is right.
          </p>
        </div>
      </section>
    </main>
  );
}