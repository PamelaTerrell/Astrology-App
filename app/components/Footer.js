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
        </footer>
  
        <style jsx>{`
          .footer {
            text-align: center;
            padding: 1rem;
            border-top: 1px solid #6a0dad;
            margin-top: 2rem;
            font-size: 0.6rem; /* slightly bigger so it’s still readable */
            font-weight: 300; /* lighter font weight */
            color: #d9b3ff;
            background-color: transparent;
            text-shadow: 0 0 5px rgba(217, 179, 255, 0.7);
            font-family: 'Georgia', serif; /* serif fonts often appear thinner */
            letter-spacing: 0.05em;
            font-style: normal;
          }
          a {
            color: #b18aff;
            text-decoration: underline;
            font-weight: 300; /* keep links light too */
          }
        `}</style>
      </>
    );
  }
  