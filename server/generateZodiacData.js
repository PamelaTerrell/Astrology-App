const signs = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const compatibility = {};

for (let i = 0; i < signs.length; i++) {
  for (let j = 0; j < signs.length; j++) {
    const sign1 = signs[i];
    const sign2 = signs[j];
    const key = `${sign1}-${sign2}`;

    if (sign1 === sign2) {
      compatibility[key] = `${sign1} and ${sign2} share many traits, which can lead to great understanding — or occasional conflict if they mirror each other too closely.`;
    } else {
      compatibility[key] = `${sign1} and ${sign2} can have a unique relationship dynamic. Their compatibility depends on how well they understand and respect each other's differences and strengths.`;
    }
  }
}

const zodiacData = {
  signs,
  compatibility,
};

const fs = require('fs');
fs.writeFileSync('zodiacData.js', `const zodiacData = ${JSON.stringify(zodiacData, null, 2)};\n\nexport default zodiacData;`);
console.log("✅ zodiacData.js with same-sign pairs has been generated.");
