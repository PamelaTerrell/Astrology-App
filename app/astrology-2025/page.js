"use client";

export default function Highlights2025() {
  return (
    <>
      <main className="highlights-container">
        <h1>✨ Cosmic Highlights for 2025 ✨</h1>

        <section className="intro">
          <p>
            Step into the magic of 2025 — a year of cosmic shifts, radiant energies, and powerful transformations. Whether you’re seeking love, clarity, or growth, the stars are ready to guide you on an unforgettable journey. Are you ready to unlock your destiny?
          </p>
        </section>

        <section className="elements">
          <h2>🌟 Elements of the Zodiac</h2>
          <p><strong>Fire Signs:</strong> Aries, Leo, Sagittarius — passionate, dynamic, and adventurous.</p>
          <p><strong>Earth Signs:</strong> Taurus, Virgo, Capricorn — grounded, practical, and nurturing.</p>
          <p><strong>Air Signs:</strong> Gemini, Libra, Aquarius — intellectual, social, and curious.</p>
          <p><strong>Water Signs:</strong> Cancer, Scorpio, Pisces — intuitive, emotional, and deep.</p>
        </section>

        <section className="planetary-movements">
          <h2>🌌 Key Planetary Movements in 2025</h2>
          <ul>
            <li>
              <strong>Jupiter in Taurus (May 2024 – May 2025):</strong> Jupiter expands growth and abundance; in Taurus, it encourages financial stability and enjoying life's comforts. Earth signs will feel this energy strongly.
            </li>
            <li>
              <strong>Saturn in Pisces (March 2023 – February 2026):</strong> Saturn influence in dreamy Pisces asks all signs to get serious about their spiritual growth and emotional boundaries.
            </li>
            <li>
              <strong>Mercury Retrogrades:</strong> Mercury retrogrades several times in 2025, offering chances to reflect but caution with communication and travel plans.
            </li>
          </ul>
        </section>

        <section className="eclipses">
          <h2>🌒 Eclipses in 2025 and Their Impact</h2>
          <ul>
            <li>
              <strong>Solar Eclipse in Aries (April 8, 2025):</strong> A powerful new beginning energy, especially for Aries and fellow fire signs. Perfect time to launch projects or assert your independence.
            </li>
            <li>
              <strong>Lunar Eclipse in Scorpio (October 18, 2025):</strong> Brings deep emotional insights and transformation, especially for water signs. Time to release old emotional baggage.
            </li>
          </ul>
        </section>

        <section className="call-to-action">
          <p>
            🔮 Dive deeper into your personal chart and discover how 2025 cosmic energies can illuminate your path. Your stars are waiting — will you answer the call?
          </p>
          <a href="/compatibility" className="explore-link">Explore Compatibility & Insights</a>
        </section>
      </main>

      <style jsx>{`
        .highlights-container {
          max-width: 720px;
          margin: 2rem auto;
          padding: 1rem 1.5rem;
          background: radial-gradient(circle at top left, #1b1b2f, #0d0d1a);
          color: #d9b3ff;
          font-family: 'Georgia', serif;
          border-radius: 12px;
          box-shadow: 0 0 25px rgba(217, 179, 255, 0.6);
          text-align: center;
          user-select: none;
        }

        h1 {
          font-size: 2.4rem;
          color: #f4c430;
          text-shadow: 0 0 10px #f4c430;
          margin-bottom: 1rem;
        }

        section {
          margin-bottom: 2rem;
          text-align: left;
        }

        h2 {
          font-size: 1.8rem;
          color: #b18aff;
          margin-bottom: 1rem;
          text-shadow: 0 0 6px #b18aff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        ul {
          padding-left: 1.25rem;
          list-style: none;
        }

        ul li {
          margin-bottom: 1rem;
          position: relative;
          padding-left: 1.8rem;
          line-height: 1.5;
          font-size: 1rem;
          color: #d9b3ff;
        }

        ul li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #f4c430;
          font-size: 1.2rem;
          top: 0;
          line-height: 1;
          text-shadow: 0 0 4px #f4c430;
        }

        p {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #e0cdfb;
          line-height: 1.6;
        }

        .call-to-action {
          background: rgba(180, 138, 255, 0.15);
          border: 1px solid #b18aff;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-align: center;
          margin-top: 2rem;
          box-shadow: 0 0 12px #b18aff;
          font-weight: 600;
          font-size: 1.15rem;
          color: #b18aff;
          user-select: text;
        }

        .explore-link {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1.25rem;
          background: #f4c430;
          color: #1b1b2f;
          border-radius: 25px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 0 10px #f4c430;
          transition: background 0.3s ease;
        }

        .explore-link:hover {
          background: #ddb800;
          box-shadow: 0 0 15px #ddb800;
        }
      `}</style>
    </>
  );
}
