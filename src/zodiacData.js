const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const existingCompatibility = {
  "Aries-Taurus": "Aries and Taurus have a passionate relationship, but they may struggle with their differences. Aries is impulsive while Taurus is more stable and cautious.",
  "Aries-Gemini": "Aries and Gemini are both lively and love adventure. This pairing can be exciting, though they may need to work on staying grounded at times.",
  "Aries-Cancer": "This pairing is challenging as Aries’ boldness may clash with Cancer’s need for security. However, with effort, they can find balance.",
  "Aries-Leo": "Aries and Leo are a powerful match, both strong-willed and energetic. They can be a dynamic duo if they can share the spotlight.",
  "Aries-Virgo": "Virgo’s practical approach can sometimes frustrate Aries’ spontaneity, but together they can form a well-balanced partnership.",
  "Aries-Libra": "Both signs seek balance, but Aries’ directness may conflict with Libra’s diplomacy. They can create harmony if they communicate openly.",
  "Aries-Scorpio": "This pairing is intense and full of passion. They can form a deep connection, but their stubbornness may cause friction.",
  "Aries-Sagittarius": "Both signs are adventurous, making this a vibrant and exciting partnership. They understand each other's need for freedom.",
  "Aries-Capricorn": "Aries’ impulsive nature may clash with Capricorn’s discipline, but they can complement each other with mutual respect for their differences.",
  "Aries-Aquarius": "Aries and Aquarius are both independent and forward-thinking. They can thrive together if they respect each other’s need for autonomy.",
  "Aries-Pisces": "Aries and Pisces can be a mismatched pair, with Aries’ assertiveness clashing with Pisces’ sensitivity, but they can learn from each other.",
  "Taurus-Gemini": "Taurus and Gemini may struggle due to differing approaches to life. Taurus values stability while Gemini seeks variety, but with effort, they can balance each other.",
  "Taurus-Cancer": "Taurus and Cancer are a great match as both signs value security and emotional connection. They can form a stable, nurturing relationship.",
  "Taurus-Leo": "Taurus and Leo may experience power struggles. However, their shared loyalty can help them build a strong and lasting bond.",
  "Taurus-Virgo": "Both signs are practical and reliable, making them an excellent match. They may find happiness in their shared values and grounded approach.",
  "Taurus-Libra": "Taurus and Libra can be a harmonious pairing, but they may struggle with Taurus’ fixed nature and Libra’s indecisiveness. They can grow with compromise.",
  "Taurus-Scorpio": "Taurus and Scorpio can be a deeply passionate and intense pairing. While their fixed natures may lead to disagreements, they can also build strong emotional bonds.",
  "Taurus-Sagittarius": "Taurus and Sagittarius may find it difficult to connect, with Taurus seeking stability and Sagittarius craving freedom. However, with patience, they can find common ground.",
  "Taurus-Capricorn": "Taurus and Capricorn are both earth signs, making this pairing highly compatible. They share similar values, especially around stability and loyalty.",
  "Taurus-Aquarius": "Taurus and Aquarius may experience tension due to their differences. Taurus is grounded while Aquarius is more eccentric, but they can learn from each other.",
  "Taurus-Pisces": "Taurus and Pisces can form a dreamy, loving relationship. Taurus provides stability while Pisces offers emotional depth, making them a great pair.",
  "Gemini-Cancer": "Gemini and Cancer may struggle to understand each other, as Gemini is more intellectual and Cancer is more emotional. However, they can complement each other well with mutual understanding.",
  "Gemini-Leo": "Gemini and Leo share a love for fun and excitement. They can make an energetic and lively pair, though they should avoid dominating each other.",
  "Gemini-Virgo": "Gemini and Virgo both value intellectual pursuits, but Virgo may find Gemini’s unpredictability frustrating. However, they can create a strong mental connection.",
  "Gemini-Libra": "Gemini and Libra are both air signs, making them naturally compatible. They share a love of communication, ideas, and socializing.",
  "Gemini-Scorpio": "Gemini and Scorpio may experience tension, as Gemini’s lightheartedness can clash with Scorpio’s intensity. However, they can build an intriguing connection.",
  "Gemini-Sagittarius": "Gemini and Sagittarius are both curious and love adventure. This pairing can be fun and exciting, but they may need to work on staying committed to one another.",
  "Gemini-Capricorn": "Gemini and Capricorn may struggle to find common ground due to their different values. Gemini is playful and curious, while Capricorn is focused and serious.",
  "Gemini-Aquarius": "Gemini and Aquarius are both intellectual and innovative. They make an excellent match, sharing a love for ideas and forward-thinking.",
  "Gemini-Pisces": "Gemini and Pisces may face challenges in their relationship as Gemini is more rational and Pisces is emotional. However, they can find balance with patience and mutual respect.",
};

// Auto-generate missing pairs with placeholder text
const compatibility = {};
for (let i = 0; i < zodiacSigns.length; i++) {
  for (let j = i + 1; j < zodiacSigns.length; j++) {
    const sign1 = zodiacSigns[i];
    const sign2 = zodiacSigns[j];
    const key = [sign1, sign2].sort().join('-');

    compatibility[key] = existingCompatibility[key] || `Compatibility information for ${sign1} and ${sign2} is not yet defined. Please update this entry.`;
  }
}

const zodiacData = {
  signs: zodiacSigns,
  compatibility,
};

export default zodiacData;
