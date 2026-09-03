"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function GoToCompatibilityLink() {
  const pathname = usePathname();

  const hideLink =
    pathname === "/" ||
    pathname === "/compatibility";

  if (hideLink) {
    return null;
  }

  return (
    <div className="compatibilityPrompt">
      <span className="compatibilityIcon" aria-hidden="true">
        ♡
      </span>

      <Link
        href="/compatibility"
        className="compatibilityLink"
      >
        Explore Zodiac Compatibility
        <span aria-hidden="true">→</span>
      </Link>

      <style jsx>{`
        .compatibilityPrompt {
          width: min(680px, calc(100% - 2rem));
          margin: 3rem auto 1rem;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;

          text-align: center;
        }

        .compatibilityIcon {
          display: grid;
          place-items: center;

          width: 42px;
          height: 42px;

          border: 1px solid var(--border-accent);
          border-radius: 50%;

          color: var(--accent-gold-bright);
          font-size: 1.15rem;

          background: rgba(223, 198, 120, 0.05);
        }

        .compatibilityLink {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;

          padding: 0.7rem 1.1rem;

          border: 1px solid var(--border-soft);
          border-radius: var(--radius-small);

          background: rgba(15, 17, 42, 0.62);

          color: var(--text-secondary);
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          transition:
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .compatibilityLink:hover {
          color: var(--accent-gold-bright);
          border-color: var(--border-accent);
          background: rgba(24, 26, 58, 0.8);
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .compatibilityLink {
            transition: none;
          }

          .compatibilityLink:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}