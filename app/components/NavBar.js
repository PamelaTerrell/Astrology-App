"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Compatibility",
      href: "/compatibility",
    },
    {
      label: "Dark Side",
      href: "/dark-side",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="siteHeader">
      <nav className="navigation" aria-label="Main navigation">
        <Link
          href="/"
          className="brandLink"
          onClick={closeMenu}
          aria-label="Cosmic Zodiac Astrology home"
        >
          <span className="brandIcon" aria-hidden="true">
            ☾
          </span>

          <span className="brandName">Cosmic Zodiac Astrology</span>
        </Link>

        <button
          type="button"
          className={`menuButton ${menuOpen ? "menuButtonOpen" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="main-navigation-links"
          className={`navigationLinks ${
            menuOpen ? "navigationLinksOpen" : ""
          }`}
        >
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`navigationLink ${
                    isActive ? "navigationLinkActive" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <style jsx>{`
        .siteHeader {
          position: sticky;
          top: 0;
          z-index: 1000;

          background: rgba(8, 9, 26, 0.84);
          border-bottom: 1px solid var(--border-soft);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .navigation {
          width: min(var(--content-width), calc(100% - 2rem));
          min-height: 72px;
          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .brandLink {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;

          color: var(--accent-gold-bright);
          text-decoration: none;
        }

        .brandIcon {
          font-size: 1.45rem;
          line-height: 1;

          filter: drop-shadow(
            0 0 10px rgba(223, 198, 120, 0.32)
          );
        }

        .brandName {
          font-family: var(--font-display), serif;
          font-size: clamp(0.92rem, 2vw, 1.08rem);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .navigationLinks {
          display: flex;
          align-items: center;
          gap: 1.75rem;

          list-style: none;
        }

        .navigationLink {
          position: relative;

          color: var(--text-secondary);
          font-size: 0.94rem;
          font-weight: 600;
          text-decoration: none;

          transition: color 180ms ease;
        }

        .navigationLink::after {
          content: "";

          position: absolute;
          left: 0;
          bottom: -0.45rem;

          width: 100%;
          height: 1px;

          background: var(--accent-gold);

          transform: scaleX(0);
          transform-origin: center;

          transition: transform 180ms ease;
        }

        .navigationLink:hover,
        .navigationLink:focus-visible,
        .navigationLinkActive {
          color: var(--accent-gold-bright);
        }

        .navigationLink:hover::after,
        .navigationLink:focus-visible::after,
        .navigationLinkActive::after {
          transform: scaleX(1);
        }

        .menuButton {
          display: none;

          position: relative;

          width: 32px;
          height: 26px;

          padding: 0;
          background: transparent;
        }

        .menuButton span {
          position: absolute;
          left: 0;

          width: 100%;
          height: 2px;

          border-radius: 999px;
          background: var(--accent-gold-bright);

          transition:
            top 200ms ease,
            transform 200ms ease,
            opacity 200ms ease;
        }

        .menuButton span:nth-child(1) {
          top: 3px;
        }

        .menuButton span:nth-child(2) {
          top: 12px;
        }

        .menuButton span:nth-child(3) {
          top: 21px;
        }

        .menuButtonOpen span:nth-child(1) {
          top: 12px;
          transform: rotate(45deg);
        }

        .menuButtonOpen span:nth-child(2) {
          opacity: 0;
        }

        .menuButtonOpen span:nth-child(3) {
          top: 12px;
          transform: rotate(-45deg);
        }

        @media (max-width: 760px) {
          .navigation {
            min-height: 66px;
          }

          .brandName {
            font-size: 0.88rem;
          }

          .menuButton {
            display: block;
          }

          .navigationLinks {
            position: fixed;
            top: 66px;
            right: 0;

            width: min(320px, 82vw);
            height: calc(100vh - 66px);

            padding: 3rem 2rem;

            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;

            background: rgba(8, 9, 26, 0.97);
            border-left: 1px solid var(--border-soft);

            transform: translateX(100%);
            visibility: hidden;

            transition:
              transform 220ms ease,
              visibility 220ms ease;
          }

          .navigationLinksOpen {
            transform: translateX(0);
            visibility: visible;
          }

          .navigationLink {
            font-size: 1.1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navigationLink,
          .navigationLink::after,
          .navigationLinks,
          .menuButton span {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}