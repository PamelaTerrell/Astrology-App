// app/data/zodiacData.js

const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];
  
  // This is your manually defined compatibility data.
  const existingCompatibility = {
    "Aries-Taurus": {
      overview: "A relationship built on contrast and fascination.",
      strengths: "Aries brings energy and Taurus offers stability.",
      challenges: "Impulsiveness vs. caution can create tension.",
      advice: "Practice patience and celebrate your differences."
    },
    "Aries-Gemini": {
      overview: "Dynamic, exciting, and full of adventure.",
      strengths: "Shared curiosity and enthusiasm.",
      challenges: "Aries may be too direct for sensitive Gemini.",
      advice: "Keep communication open and flexible."
    },
    "Aries-Cancer": {
      overview: "Fire meets water in this passionate pairing.",
      strengths: "Strong attraction and emotional growth.",
      challenges: "Different temperaments can clash.",
      advice: "Balance independence with nurturing."
    },
    "Aries-Leo": {
      overview: "Two fire signs with bold energy.",
      strengths: "Confidence and shared ambitions.",
      challenges: "Potential for ego battles.",
      advice: "Support each other's success."
    },
    "Aries-Virgo": {
      overview: "An unlikely but intriguing match.",
      strengths: "Drive and practicality.",
      challenges: "Different approaches to life.",
      advice: "Appreciate complementary strengths."
    },
    "Aries-Libra": {
      overview: "Opposites attract in this dynamic duo.",
      strengths: "Passion and balance.",
      challenges: "Impatience vs. indecision.",
      advice: "Find common ground through respect."
    },
    "Aries-Scorpio": {
      overview: "An intense and transformative connection.",
      strengths: "Shared determination.",
      challenges: "Possessiveness and power struggles.",
      advice: "Be honest and set clear boundaries."
    },
    "Aries-Sagittarius": {
      overview: "A vibrant, adventurous relationship.",
      strengths: "Mutual zest for life.",
      challenges: "Restlessness may interfere with stability.",
      advice: "Embrace exploration together."
    },
    "Aries-Capricorn": {
      overview: "A pairing of ambition and discipline.",
      strengths: "Productive partnership.",
      challenges: "Different pacing and priorities.",
      advice: "Respect each other's goals."
    },
    "Aries-Aquarius": {
      overview: "Innovative and stimulating connection.",
      strengths: "Shared love of progress.",
      challenges: "Emotional distance.",
      advice: "Support individuality."
    },
    "Aries-Pisces": {
      overview: "A relationship of action and intuition.",
      strengths: "Creative inspiration.",
      challenges: "Emotional disconnect.",
      advice: "Practice compassion and patience."
    },
    "Taurus-Gemini": {
      overview: "Earth meets air in this curious match.",
      strengths: "Balance between stability and spontaneity.",
      challenges: "Taurus craves routine, Gemini seeks novelty.",
      advice: "Meet halfway through compromise."
    },
    "Taurus-Cancer": {
      overview: "A nurturing, harmonious connection.",
      strengths: "Shared love of comfort and loyalty.",
      challenges: "Overattachment may stifle growth.",
      advice: "Maintain healthy independence."
    },
    "Taurus-Leo": {
      overview: "Warmth and pride create a magnetic bond.",
      strengths: "Devotion and affection.",
      challenges: "Possessiveness and stubbornness.",
      advice: "Honor each other's need for admiration."
    },
    "Taurus-Virgo": {
      overview: "A grounded, practical relationship.",
      strengths: "Shared values and reliability.",
      challenges: "Overemphasis on routine.",
      advice: "Embrace small adventures."
    },
    "Taurus-Libra": {
      overview: "Beauty and pleasure bind these two.",
      strengths: "Appreciation of art and romance.",
      challenges: "Different social needs.",
      advice: "Balance home life with social activities."
    },
    "Taurus-Scorpio": {
      overview: "Intense and deeply bonded.",
      strengths: "Passion and commitment.",
      challenges: "Power dynamics can be challenging.",
      advice: "Cultivate trust and honesty."
    },
    "Taurus-Sagittarius": {
      overview: "A clash of freedom and stability.",
      strengths: "Potential for growth.",
      challenges: "Different lifestyle preferences.",
      advice: "Allow each other space to grow."
    },
    "Taurus-Capricorn": {
      overview: "A solid, dependable union.",
      strengths: "Shared ambitions and values.",
      challenges: "Work-life balance.",
      advice: "Remember to nurture the relationship."
    },
    "Taurus-Aquarius": {
      overview: "Conventional meets unconventional.",
      strengths: "Unique perspectives.",
      challenges: "Different life philosophies.",
      advice: "Be open to learning from each other."
    },
    "Taurus-Pisces": {
      overview: "Gentle and romantic.",
      strengths: "Deep emotional understanding.",
      challenges: "Avoiding escapism.",
      advice: "Support each other's dreams."
    },
    "Gemini-Cancer": {
      overview: "Head and heart unite.",
      strengths: "Learning and emotional growth.",
      challenges: "Emotional needs vs. intellectual curiosity.",
      advice: "Communicate openly about feelings."
    },
    "Gemini-Leo": {
      overview: "Playful and expressive.",
      strengths: "Creativity and social joy.",
      challenges: "Clashes over attention.",
      advice: "Celebrate each other's successes."
    },
    "Gemini-Virgo": {
      overview: "Intellectually stimulating.",
      strengths: "Mutual curiosity.",
      challenges: "Overthinking and criticism.",
      advice: "Offer patience and kindness."
    },
    "Gemini-Libra": {
      overview: "A lively and charming duo.",
      strengths: "Social connection and ideas.",
      challenges: "Indecision.",
      advice: "Focus on shared values."
    },
    "Gemini-Scorpio": {
      overview: "Mysterious and fascinating.",
      strengths: "Depth and intrigue.",
      challenges: "Trust issues.",
      advice: "Be transparent and patient."
    },
    "Gemini-Sagittarius": {
      overview: "An adventurous, free-spirited match.",
      strengths: "Shared love of discovery.",
      challenges: "Restlessness.",
      advice: "Keep exploring together."
    },
    "Gemini-Capricorn": {
      overview: "A balance of fun and responsibility.",
      strengths: "Different strengths complement each other.",
      challenges: "Different priorities.",
      advice: "Respect each other's paths."
    },
    "Gemini-Aquarius": {
      overview: "Visionary and exciting.",
      strengths: "Innovation and friendship.",
      challenges: "Detachment.",
      advice: "Stay connected emotionally."
    },
    "Gemini-Pisces": {
      overview: "Dreamer meets thinker.",
      strengths: "Creativity and inspiration.",
      challenges: "Practicality may suffer.",
      advice: "Ground your plans."
    },
    "Cancer-Leo": {
      overview: "Warmth and devotion.",
      strengths: "Loyalty and generosity.",
      challenges: "Mood swings and pride.",
      advice: "Show consistent appreciation."
    },
    "Cancer-Virgo": {
      overview: "A gentle, supportive connection.",
      strengths: "Care and practicality.",
      challenges: "Overworrying.",
      advice: "Create a safe space for honesty."
    },
    "Cancer-Libra": {
      overview: "Romantic but delicate.",
      strengths: "Affection and beauty.",
      challenges: "Different emotional needs.",
      advice: "Keep open lines of communication."
    },
    "Cancer-Scorpio": {
      overview: "Deep emotional resonance.",
      strengths: "Intensity and loyalty.",
      challenges: "Possessiveness.",
      advice: "Set healthy boundaries."
    },
    "Cancer-Sagittarius": {
      overview: "Comfort vs. adventure.",
      strengths: "Growth and learning.",
      challenges: "Clashing lifestyles.",
      advice: "Embrace compromise."
    },
    "Cancer-Capricorn": {
      overview: "Opposites balance each other.",
      strengths: "Security and ambition.",
      challenges: "Emotional expression.",
      advice: "Value your differences."
    },
    "Cancer-Aquarius": {
      overview: "Traditional meets modern.",
      strengths: "Unique perspectives.",
      challenges: "Emotional disconnect.",
      advice: "Work to understand each other's needs."
    },
    "Cancer-Pisces": {
      overview: "Tender and empathetic.",
      strengths: "Emotional intuition.",
      challenges: "Over-sensitivity.",
      advice: "Maintain clear communication."
    },
    "Leo-Virgo": {
      overview: "Fire and earth in balance.",
      strengths: "Mutual respect.",
      challenges: "Criticism vs. pride.",
      advice: "Encourage without judgment."
    },
    "Leo-Libra": {
      overview: "Elegant and harmonious.",
      strengths: "Creativity and romance.",
      challenges: "Vanity.",
      advice: "Share the spotlight."
    },
    "Leo-Scorpio": {
      overview: "Powerful and passionate.",
      strengths: "Intensity and devotion.",
      challenges: "Control issues.",
      advice: "Practice mutual respect."
    },
    "Leo-Sagittarius": {
      overview: "Adventurous and bold.",
      strengths: "Optimism and enthusiasm.",
      challenges: "Impatience.",
      advice: "Support each other's goals."
    },
    "Leo-Capricorn": {
      overview: "Ambition unites them.",
      strengths: "Determination.",
      challenges: "Different expressions of love.",
      advice: "Be open to compromise."
    },
    "Leo-Aquarius": {
      overview: "Innovative and dynamic.",
      strengths: "Mutual admiration.",
      challenges: "Stubbornness.",
      advice: "Celebrate individuality."
    },
    "Leo-Pisces": {
      overview: "Warmth meets sensitivity.",
      strengths: "Compassion.",
      challenges: "Emotional mismatch.",
      advice: "Show empathy and understanding."
    },
    "Virgo-Libra": {
      overview: "Graceful and thoughtful.",
      strengths: "Harmony and intellect.",
      challenges: "Over-analysis.",
      advice: "Simplify decision-making."
    },
    "Virgo-Scorpio": {
      overview: "Deep and perceptive.",
      strengths: "Loyalty.",
      challenges: "Intensity.",
      advice: "Allow space to process feelings."
    },
    "Virgo-Sagittarius": {
      overview: "Practicality meets adventure.",
      strengths: "Learning together.",
      challenges: "Different priorities.",
      advice: "Balance work and play."
    },
    "Virgo-Capricorn": {
      overview: "Grounded and dependable.",
      strengths: "Shared goals.",
      challenges: "Work focus over romance.",
      advice: "Make time for connection."
    },
    "Virgo-Aquarius": {
      overview: "Logic and innovation.",
      strengths: "Problem-solving.",
      challenges: "Emotional distance.",
      advice: "Communicate feelings openly."
    },
    "Virgo-Pisces": {
      overview: "Dreams and reality blend.",
      strengths: "Completeness.",
      challenges: "Misunderstandings.",
      advice: "Practice compassion."
    },
    "Libra-Scorpio": {
      overview: "Beauty and depth.",
      strengths: "Intensity.",
      challenges: "Emotional friction.",
      advice: "Balance light and shadow."
    },
    "Libra-Sagittarius": {
      overview: "Light-hearted and free.",
      strengths: "Optimism.",
      challenges: "Inconsistency.",
      advice: "Anchor your plans."
    },
    "Libra-Capricorn": {
      overview: "Charm meets ambition.",
      strengths: "Shared aspirations.",
      challenges: "Emotional reserve.",
      advice: "Foster open dialogue."
    },
    "Libra-Aquarius": {
      overview: "Intellectual connection.",
      strengths: "Creativity and friendship.",
      challenges: "Emotional detachment.",
      advice: "Stay present."
    },
    "Libra-Pisces": {
      overview: "Romantic and artistic.",
      strengths: "Empathy.",
      challenges: "Avoidance.",
      advice: "Stay grounded."
    },
    "Scorpio-Sagittarius": {
      overview: "Passion meets freedom.",
      strengths: "Excitement.",
      challenges: "Control vs. independence.",
      advice: "Respect each other's needs."
    },
    "Scorpio-Capricorn": {
      overview: "Intense and strategic.",
      strengths: "Commitment.",
      challenges: "Emotional barriers.",
      advice: "Share vulnerabilities."
    },
    "Scorpio-Aquarius": {
      overview: "Powerful and intriguing.",
      strengths: "Depth.",
      challenges: "Detachment.",
      advice: "Value trust."
    },
    "Scorpio-Pisces": {
      overview: "Profound emotional connection.",
      strengths: "Empathy.",
      challenges: "Overwhelm.",
      advice: "Set healthy boundaries."
    },
    "Sagittarius-Capricorn": {
      overview: "Adventure vs. ambition.",
      strengths: "Growth.",
      challenges: "Different drives.",
      advice: "Encourage compromise."
    },
    "Sagittarius-Aquarius": {
      overview: "Visionary and inspiring.",
      strengths: "Innovation.",
      challenges: "Restlessness.",
      advice: "Stay connected."
    },
    "Sagittarius-Pisces": {
      overview: "Dreamer meets explorer.",
      strengths: "Creativity.",
      challenges: "Practicality.",
      advice: "Balance ideals and reality."
    },
    "Capricorn-Aquarius": {
      overview: "Tradition meets progress.",
      strengths: "Shared determination.",
      challenges: "Different methods.",
      advice: "Respect differences."
    },
    "Capricorn-Pisces": {
      overview: "Structure and intuition blend.",
      strengths: "Support.",
      challenges: "Emotional disconnect.",
      advice: "Cultivate understanding."
    },
    "Aquarius-Pisces": {
      overview: "Visionary and sensitive.",
      strengths: "Creativity.",
      challenges: "Practicality.",
      advice: "Ground your dreams."
    }
  };
  
  
   
  
  const relationshipTypes = ["heterosexual", "gay", "lesbian", "lgbtq"];
  
  const compatibility = {};
  
  // This loop generates *all* sorted combinations
  for (let i = 0; i < zodiacSigns.length; i++) {
    for (let j = i + 1; j < zodiacSigns.length; j++) {
      const sign1 = zodiacSigns[i];
      const sign2 = zodiacSigns[j];
      const baseKey = `${sign1}-${sign2}`;
  
      // Always create a default pairing description
      compatibility[baseKey] =
        existingCompatibility[baseKey] ||
        `Compatibility information for ${sign1} and ${sign2} is not yet defined.`;
  
      // Create relationship-specific keys if they exist
      for (const rel of relationshipTypes) {
        const relKey = `${baseKey}-${rel}`;
        if (existingCompatibility[relKey]) {
          compatibility[relKey] = existingCompatibility[relKey];
        }
      }
    }
  }
  
  const zodiacData = {
    signs: zodiacSigns,
    compatibility,
  };
  
  export default zodiacData;
  