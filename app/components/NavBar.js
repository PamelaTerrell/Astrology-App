"use client";

import React, { useState } from "react";
import Link from "next/link"; // 

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">🌙 Cosmic Zodiac Astrology</div>

        <button
          aria-label="Toggle menu"
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/compatibility">Compatibility</Link>
          </li>
          
        </ul>
      </nav>

      
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(135deg, #1b1b2f, #16213e);
          padding: 0.75rem 1.5rem;
          color: #eee;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f4c430;
          text-shadow: 1px 1px 3px silver;
          user-select: none;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1.75rem;
          margin: 0;
          padding: 0;
        }

        .nav-links li :global(a) {
          color: #eee;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links li :global(a)::after {
          content: "";
          display: block;
          height: 2px;
          background: #f4c430;
          width: 0;
          transition: width 0.3s ease;
          position: absolute;
          bottom: -5px;
          left: 0;
        }

        .nav-links li :global(a):hover {
          color: #f4c430;
        }

        .nav-links li :global(a):hover::after {
          width: 100%;
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 28px;
          height: 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
        }

        .nav-toggle span {
          width: 100%;
          height: 3px;
          background: #f4c430;
          border-radius: 2px;
          transition: all 0.3s linear;
          position: relative;
        }

        .nav-toggle.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 8px;
          position: absolute;
        }

        .nav-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .nav-toggle.open span:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 8px;
          position: absolute;
        }

        @media (max-width: 768px) {
          .nav-toggle {
            display: flex;
          }

          .nav-links {
            position: fixed;
            right: 0;
            top: 0;
            height: 100vh;
            background: #1b1b2f;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 60%;
            max-width: 280px;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.6);
          }

          .nav-links.nav-active {
            transform: translateX(0);
          }

          .nav-links li {
            margin: 1.5rem 0;
          }

          .nav-links li :global(a) {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
