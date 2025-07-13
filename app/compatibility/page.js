"use client";

import React, { useState } from "react";
import zodiacData from "../data/zodiacData";
import Footer from "../components/Footer";

const ZodiacCompatibility = () => {
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");
  const [gender1, setGender1] = useState("");
  const [gender2, setGender2] = useState("");
  const [relationshipType, setRelationshipType] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!sign1 || !sign2) {
      setResult("Please select both signs.");
      return;
    }

    const baseKey1 = `${sign1}-${sign2}`;
    const baseKey2 = `${sign2}-${sign1}`;

    const compatibility =
      zodiacData.compatibility[baseKey1] ||
      zodiacData.compatibility[baseKey2] ||
      "Compatibility data not available for this pairing.";

    setResult(compatibility);
  };

  const options = zodiacData.signs.map((sign) => (
    <option key={sign} value={sign}>
      {sign}
    </option>
  ));

  return (
    <>
      <div className="container">
        <h2>✨ Zodiac Compatibility ✨</h2>

        <div className="selectors">
          <div className="person">
            <h3>Person 1</h3>
            <select value={sign1} onChange={(e) => setSign1(e.target.value)}>
              <option value="">Select Sign</option>
              {options}
            </select>
            <select value={gender1} onChange={(e) => setGender1(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div className="person">
            <h3>Person 2</h3>
            <select value={sign2} onChange={(e) => setSign2(e.target.value)}>
              <option value="">Select Sign</option>
              {options}
            </select>
            <select value={gender2} onChange={(e) => setGender2(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="relationship-type">
          <select
            value={relationshipType}
            onChange={(e) => setRelationshipType(e.target.value)}
          >
            <option value="">Select Relationship Type</option>
            <option value="heterosexual">Heterosexual</option>
            <option value="gay">Gay (Male-Male)</option>
            <option value="lesbian">Lesbian (Female-Female)</option>
            <option value="lgbtq">LGBTQ+ / Other</option>
          </select>
        </div>

        <button onClick={handleCheck} disabled={!sign1 || !sign2}>
          Reveal Compatibility
        </button>

        {result && (
          typeof result === "object" ? (
            <div className="result">
              <h3>Overview</h3>
              <p>{result.overview}</p>
              <h3>Strengths</h3>
              <p>{result.strengths}</p>
              <h3>Challenges</h3>
              <p>{result.challenges}</p>
              <h3>Advice</h3>
              <p>{result.advice}</p>
            </div>
          ) : (
            <div className="result">{result}</div>
          )
        )}

        <style jsx>{`
          .container {
            max-width: 700px;
            margin: 3rem auto;
            padding: 2rem;
            background: radial-gradient(circle at center, #1a1a2e, #0f0f1c);
            border-radius: 16px;
            box-shadow: 0 0 30px rgba(150, 150, 255, 0.2);
            color: #ddd;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          }

          h2 {
            text-align: center;
            color: #c0c0ff;
            margin-bottom: 2rem;
            text-shadow: 0 0 6px #99f;
          }

          .selectors {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .person {
            flex: 1 1 260px;
            background: rgba(40, 40, 70, 0.5);
            padding: 1rem;
            border-radius: 12px;
            border: 1px solid #444;
          }

          .person h3 {
            margin-bottom: 0.75rem;
            color: #c0c0ff;
          }

          select {
            width: 100%;
            padding: 0.65rem;
            margin-bottom: 0.75rem;
            border-radius: 6px;
            background: #22223c;
            color: #eee;
            border: 1px solid #555;
          }

          select:focus {
            outline: none;
            border-color: #c0c0ff;
            box-shadow: 0 0 6px #c0c0ff99;
          }

          .relationship-type {
            margin-top: 1.5rem;
          }

          button {
            width: 100%;
            padding: 0.9rem;
            background: #8888ff;
            color: #1a1a2e;
            font-weight: 700;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 1.5rem;
            transition: background 0.3s, box-shadow 0.3s;
          }

          button:disabled {
            background: #555;
            cursor: not-allowed;
          }

          button:not(:disabled):hover {
            background: #aaaaff;
            box-shadow: 0 0 10px rgba(180, 180, 255, 0.6);
          }

          .result {
            margin-top: 2rem;
            padding: 1.5rem;
            background: #2c2c44;
            border-radius: 10px;
            border: 1px solid #555;
            color: #eee;
          }

          .result h3 {
            color: #d0d0ff;
            margin-top: 1rem;
          }

          .result p {
            margin: 0.4rem 0;
          }

          @media (max-width: 600px) {
            .selectors {
              flex-direction: column;
            }
            .person {
              flex: 1 1 100%;
            }
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
};

export default ZodiacCompatibility;
