"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ReturnHomeLink() {
  const pathname = usePathname();

  // Hide the link if we're already on the homepage
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
          color: #f5f5f5;
          text-decoration: none;
          font-family: "Georgia", serif;
          letter-spacing: 0.02em;
          padding: 0.6rem 1.1rem;
          border-radius: 6px;
          background-color: rgba(0, 0, 0, 0.35);
          text-shadow: 0 0 8px #00000088;
          transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }

        .return-home:hover {
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.15);
          transform: scale(1.05);
          text-shadow: 0 0 10px #ffffffaa;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes glow {
          0% {
            text-shadow: 0 0 6px #aaa;
          }
          50% {
            text-shadow: 0 0 12px #fff, 0 0 20px #d9d9d9;
          }
          100% {
            text-shadow: 0 0 6px #aaa;
          }
        }
      `}</style>
    </div>
  );
}
