"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerContent">
        <p className="footerTagline">
          <span aria-hidden="true">✦</span>
          Guiding you through the cosmos — one celestial sign at a time
          <span aria-hidden="true">✦</span>
        </p>

        <p className="footerCredit">
          © {currentYear} Cosmic Zodiac Astrology
          <span className="footerDivider" aria-hidden="true">
            ·
          </span>
          Enchanted into existence by{" "}
          <a
            href="https://pamelajterrell.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pamela Terrell
          </a>
        </p>

        <p className="brandCredit">
          Part of the{" "}
          <a
            href="https://stabileusa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            StabileUSA.com
          </a>{" "}
          digital brand
        </p>

        <p className="visualCredit">
          Starry visuals by{" "}
          <a
            href="https://pixabay.com/users/alexas_fotos-686414/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=759373"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexa
          </a>
        </p>
      </div>

      <style jsx>{`
        .footer {
          width: 100%;
          margin-top: 5rem;
          padding: 2.5rem 1rem;

          border-top: 1px solid var(--border-soft);

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(155, 141, 227, 0.08),
              transparent 55%
            ),
            rgba(7, 7, 18, 0.55);

          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .footerContent {
          width: min(760px, 100%);
          margin: 0 auto;
          text-align: center;
        }

        .footerTagline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;

          color: var(--accent-gold-bright);
          font-family: var(--font-display), serif;
          font-size: clamp(0.9rem, 2vw, 1rem);
          letter-spacing: 0.04em;
        }

        .footerTagline span {
          color: var(--accent-gold);
          font-size: 0.72rem;
        }

        .footerCredit,
        .brandCredit {
          margin-top: 0.9rem;

          color: var(--text-secondary);
          font-size: 0.84rem;
          line-height: 1.7;
        }

        .brandCredit {
          margin-top: 0.45rem;
          color: var(--text-muted);
        }

        .footerDivider {
          display: inline-block;
          margin: 0 0.4rem;
          color: var(--text-muted);
        }

        .footerCredit a,
        .brandCredit a,
        .visualCredit a {
          color: var(--accent-gold-bright);
          text-decoration: none;
          transition: color 180ms ease;
        }

        .footerCredit a:hover,
        .brandCredit a:hover,
        .visualCredit a:hover {
          color: var(--text-primary);
          text-decoration: underline;
        }

        .visualCredit {
          margin-top: 0.55rem;

          color: var(--text-muted);
          font-size: 0.75rem;
        }

        @media (max-width: 560px) {
          .footer {
            margin-top: 3.5rem;
            padding: 2rem 1rem;
          }

          .footerTagline {
            display: block;
            line-height: 1.7;
          }

          .footerTagline span {
            margin: 0 0.25rem;
          }

          .footerDivider {
            display: none;
          }

          .footerCredit,
          .brandCredit {
            max-width: 340px;
            margin-inline: auto;
          }

          .brandCredit {
            margin-top: 0.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footerCredit a,
          .brandCredit a,
          .visualCredit a {
            transition: none;
          }
        }
      `}</style>
    </footer>
  );
}