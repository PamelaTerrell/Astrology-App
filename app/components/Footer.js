"use client";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>✨ Guiding you through the cosmos — one celestial sign at a time ✨</p>
        <p>
          © 2025 Cosmic Zodiac Astrology | Enchanted into existence by{" "}
          <a
            href="https://pamelajterrell.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pamela Terrell
          </a>
        </p>
        <p>
          Starry visuals by{" "}
          <a
            href="https://pixabay.com/users/alexas_fotos-686414/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=759373"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexa
          </a>{" "}
          via{" "}
          <a
            href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=759373"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pixabay
          </a>
          . Astrology icon magic by{" "}
          <a
            href="https://www.flaticon.com/authors/monkik"
            title="monkik"
            target="_blank"
            rel="noopener noreferrer"
          >
            monkik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/free-icons/astrology"
            title="astrology icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flaticon
          </a>
          .
        </p>
      </footer>

      <style jsx>{`
        .footer {
          text-align: center;
          padding: 1.5rem;
          margin-top: 3rem;
          background: radial-gradient(circle, rgba(106,13,173,0.2) 0%, transparent 100%);
          border-top: 1px solid #b18aff;
          font-family: 'Georgia', serif;
          letter-spacing: 0.07em;
          text-shadow: 0 0 8px rgba(217, 179, 255, 0.8);
          animation: shimmer 10s infinite alternate;
        }

        .footer p {
          font-size: 0.95rem;
          font-weight: 300;
          color: #e0c3fc;
          margin: 0.35rem 0;
        }

        .footer a {
          color: #dcb9ff;
          text-decoration: underline;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .footer a:hover {
          color: #ffffff;
        }

        @keyframes shimmer {
          0% {
            text-shadow: 0 0 5px rgba(217, 179, 255, 0.6);
          }
          100% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.9);
          }
        }
      `}</style>
    </>
  );
}
