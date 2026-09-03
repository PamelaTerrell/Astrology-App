"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function GoToDarkSideLink() {
  const pathname = usePathname();

  const hideLink =
    pathname === "/" ||
    pathname === "/dark-side";

  if (hideLink) {
    return null;
  }

  return (
    <div className="darkSidePrompt">
      <span className="darkSideIcon" aria-hidden="true">
        ☾
      </span>

      <Link
        href="/dark-side"
        className="darkSideLink"
      >
        Explore the Dark Side
        <span aria-hidden="true">→</span>
      </Link>

      <style jsx>{`
        .darkSidePrompt {
          width: min(680px, calc(100% - 2rem));
          margin: 3rem auto 1rem;

          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;

          text-align: center;
        }

        .darkSideIcon {
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

        .darkSideLink {
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

        .darkSideLink:hover {
          color: var(--accent-gold-bright);
          border-color: var(--border-accent);
          background: rgba(24, 26, 58, 0.8);
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .darkSideLink {
            transition: none;
          }

          .darkSideLink:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}