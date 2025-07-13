// components/ReturnHomeLink.js
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ReturnHomeLink() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="return-wrapper">
      <div className="icon">🔮</div>
      <Link href="/" className="return-home">
        Return to Home
      </Link>

      <style jsx>{`
        .return-wrapper {
          text-align: center;
          margin: 2.5rem 0 1rem;
          animation: fadeIn 1s ease-in;
        }

        .icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          animation: glow 2s infinite ease-in-out;
        }

        .return-home {
          font-size: 0.95rem;
          color: #ccc; /* silver tone */
          text-decoration: none;
          font-family: "Georgia", serif;
          letter-spacing: 0.02em;
          transition: color 0.3s ease, transform 0.3s ease;
          text-shadow: 0 0 5px #ffffff66;
        }

        .return-home:hover {
          color: #ffffff;
          transform: scale(1.05);
          text-shadow: 0 0 8px #eeeeee;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes glow {
          0% { text-shadow: 0 0 6px #aaa; }
          50% { text-shadow: 0 0 12px #fff, 0 0 20px #d9d9d9; }
          100% { text-shadow: 0 0 6px #aaa; }
        }
      `}</style>
    </div>
  );
}
