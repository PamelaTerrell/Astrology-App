"use client";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>✨ Guiding you through the stars one sign at a time ✨</p>
        <p>
          © 2025{" "}
          <a
            href="https://pamelajterrell.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            pamelajterrell.com
          </a>
        </p>
        <p>
          <a
            href="https://www.flaticon.com/free-icons/sky"
            title="sky icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sky icons created by Freepik - Flaticon
          </a>
        </p>
      </footer>

      <style jsx>{`
        .footer {
          text-align: center;
          padding: 1rem;
          border-top: 1px solid #6a0dad;
          margin-top: 2rem;
          background-color: transparent;
          text-shadow: 0 0 5px rgba(217, 179, 255, 0.7);
          font-family: 'Georgia', serif;
          letter-spacing: 0.05em;
        }

        .footer p {
          font-size: 0.8rem;
          font-weight: 300;
          color: #d9b3ff;
          margin: 0.25rem 0;
        }

        .footer a {
          color: #b18aff;
          text-decoration: underline;
          font-weight: 300;
        }
      `}</style>
    </>
  );
}
