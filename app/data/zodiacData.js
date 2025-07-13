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
  advice: "Practice patience and celebrate your differences.",
  compatibilityScore: 72,
  elementHarmony: "Fire (Aries) + Earth (Taurus)",
  famousCouples: ["Robert Pattinson (Taurus) & Kristen Stewart (Aries)"],
  loveLanguageTips: {
    Aries: "Words of affirmation and spontaneous acts of love",
    Taurus: "Physical touch and steady routines"
  },
  communicationStyle: "Aries is fast-paced and blunt; Taurus is deliberate and measured.",
  intimacyLevel: "Moderate – connection deepens through trust and physical affection."
},
    "Aries-Gemini": {
  overview: "Dynamic, exciting, and full of adventure.",
  strengths: "Shared curiosity and enthusiasm.",
  challenges: "Aries may be too direct for sensitive Gemini.",
  advice: "Keep communication open and flexible.",
  compatibilityScore: 84,
  elementHarmony: "Fire (Aries) + Air (Gemini)",
  famousCouples: ["Marilyn Monroe (Gemini) & Arthur Miller (Aries)"],
  loveLanguageTips: {
    Aries: "Bold gestures and vocal admiration",
    Gemini: "Playful banter and shared activities"
  },
  communicationStyle: "Both love to talk – Aries is assertive, Gemini is witty and playful.",
  intimacyLevel: "High – a playful and energetic sexual bond."
},
   "Aries-Cancer": {
  overview: "Fire meets water in this passionate pairing.",
  strengths: "Strong attraction and emotional growth.",
  challenges: "Different temperaments can clash.",
  advice: "Balance independence with nurturing.",
  compatibilityScore: 65,
  elementHarmony: "Fire (Aries) + Water (Cancer)",
  famousCouples: ["Ariana Grande (Cancer) & Pete Davidson (Aries)"],
  loveLanguageTips: {
    Aries: "Acts of courage and excitement",
    Cancer: "Emotional reassurance and cozy moments"
  },
  communicationStyle: "Aries is bold and blunt; Cancer is sensitive and reactive.",
  intimacyLevel: "Moderate – emotional connection must be nurtured to sustain passion."
},
    "Aries-Leo": {
  overview: "Two fire signs with bold energy, creating a passionate and dramatic duo.",
  strengths: "Confidence, ambition, and mutual enthusiasm.",
  challenges: "Potential for ego clashes and competitiveness.",
  advice: "Channel energy into shared goals and practice mutual admiration.",
  compatibilityScore: 88,
  elementHarmony: "Fire (Aries) + Fire (Leo)",
  famousCouples: ["Sarah Jessica Parker (Aries) & Matthew Broderick (Leo)"],
  loveLanguageTips: {
    Aries: "Words of praise and active adventure",
    Leo: "Admiration and grand romantic gestures"
  },
  communicationStyle: "Both signs are outspoken and bold – conversations can be exciting or explosive.",
  intimacyLevel: "Very high – intense physical chemistry and fiery romance."
},
    "Aries-Virgo": {
  overview: "An unlikely but intriguing match between action and analysis.",
  strengths: "Motivated partnership with complementary skills.",
  challenges: "Impulsivity vs. overthinking can cause misunderstandings.",
  advice: "Embrace differences and use them to balance each other.",
  compatibilityScore: 60,
  elementHarmony: "Fire (Aries) + Earth (Virgo)",
  famousCouples: ["Keanu Reeves (Virgo) & Diane Keaton (Aries – rumored past)"],
  loveLanguageTips: {
    Aries: "Direct affection and spontaneity",
    Virgo: "Acts of service and subtle reassurance"
  },
  communicationStyle: "Aries speaks first, thinks later; Virgo analyzes before speaking. Misalignment can cause friction.",
  intimacyLevel: "Moderate – chemistry builds slowly through trust and thoughtful gestures."
},
    "Aries-Libra": {
  overview: "Opposites attract in this bold, romantic pairing. Aries leads with fire while Libra seeks harmony.",
  strengths: "Aries brings passion and decisiveness; Libra offers charm and balance.",
  challenges: "Aries may find Libra indecisive, while Libra may see Aries as aggressive.",
  advice: "Celebrate differences and learn to meet halfway without compromising identity.",
  compatibilityScore: 75,
  elementHarmony: "Fire (Aries) + Air (Libra)",
  famousCouples: ["Hugh Hefner (Aries) & Crystal Harris (Libra)"],
  loveLanguageTips: {
    Aries: "Excitement and physical affection",
    Libra: "Words of affirmation and shared experiences"
  },
  communicationStyle: "Aries is bold and upfront; Libra is diplomatic and persuasive – potential for a dynamic yet respectful dialogue.",
  intimacyLevel: "High – sparks fly, especially when emotional balance is maintained."
},
    "Aries-Scorpio": {
  overview: "This is a powerful and intense match – both signs are passionate, determined, and fiercely loyal.",
  strengths: "Deep emotional connection, shared drive, and magnetic chemistry.",
  challenges: "Power struggles and jealousy may arise due to both signs’ strong personalities.",
  advice: "Cultivate emotional honesty and practice vulnerability to build deep trust.",
  compatibilityScore: 68,
  elementHarmony: "Fire (Aries) + Water (Scorpio)",
  famousCouples: ["Robert Downey Jr. (Aries) & Susan Downey (Scorpio)"],
  loveLanguageTips: {
    Aries: "Physical touch and acts of bravery",
    Scorpio: "Deep emotional connection and loyalty"
  },
  communicationStyle: "Both signs speak with intensity – potential for profound conversations or dramatic conflict.",
  intimacyLevel: "Extremely high – sensual, transformative, and magnetic."
},
    "Aries-Sagittarius": {
  overview: "A fiery duo full of energy, exploration, and enthusiasm. Both are adventurous and live for the moment.",
  strengths: "High energy, shared sense of humor, spontaneous love for life.",
  challenges: "Restlessness and impulsivity may lead to conflict or lack of grounding.",
  advice: "Maintain focus and build emotional depth alongside your adventures.",
  compatibilityScore: 88,
  elementHarmony: "Fire (Aries) + Fire (Sagittarius)",
  famousCouples: ["Jay-Z (Sagittarius) & Mariah Carey (Aries, rumored past)"],
  loveLanguageTips: {
    Aries: "Passionate action and excitement",
    Sagittarius: "Freedom, laughter, and shared adventure"
  },
  communicationStyle: "Fast-paced, honest, and often hilarious. These two rarely hold back.",
  intimacyLevel: "High – fun, physical, and uninhibited."
},
    "Aries-Capricorn": {
  overview: "A high-powered match of ambition and drive, but with different strategies toward success and control.",
  strengths: "Strong leadership, commitment to goals, mutual respect for effort.",
  challenges: "Aries is impulsive, Capricorn is calculated – this can create friction over timing and control.",
  advice: "Respect each other's tempo and learn from your complementary traits.",
  compatibilityScore: 61,
  elementHarmony: "Fire (Aries) + Earth (Capricorn)",
  famousCouples: ["Kristen Stewart (Aries) & St. Vincent (Capricorn)"],
  loveLanguageTips: {
    Aries: "Initiation, thrill, and acts of courage",
    Capricorn: "Consistency, support, and long-term investment"
  },
  communicationStyle: "Aries speaks from passion; Capricorn from strategy – but both can be direct.",
  intimacyLevel: "Moderate to high – requires patience to build trust and rhythm."
},
   "Aries-Aquarius": {
  overview: "A bold and futuristic match, filled with passion, rebellion, and intellectual stimulation.",
  strengths: "Innovative ideas, strong independence, mutual drive to break boundaries.",
  challenges: "Emotional detachment (Aquarius) vs. emotional intensity (Aries). Can clash over leadership.",
  advice: "Give each other room to be authentic while staying emotionally present.",
  compatibilityScore: 80,
  elementHarmony: "Fire (Aries) + Air (Aquarius)",
  famousCouples: ["Ellen Page (Aquarius) & Samantha Thomas (Aries, former couple)"],
  loveLanguageTips: {
    Aries: "Adventurous gestures and fierce loyalty",
    Aquarius: "Intellectual banter, acts of friendship, and freedom to explore"
  },
  communicationStyle: "Quick, quirky, and passionate. Lots of ideas, debates, and fast decision-making.",
  intimacyLevel: "Spontaneous and exciting, but may lack emotional warmth unless nurtured."
},
    "Aries-Pisces": {
  overview: "A relationship of fire and water — dreamer meets doer. Emotion and intuition meet bold action.",
  strengths: "Creative synergy, emotional depth (Pisces) balanced by courage (Aries).",
  challenges: "Pisces may feel overwhelmed by Aries’ intensity; Aries may feel Pisces is too passive or evasive.",
  advice: "Cultivate patience and learn to listen beyond words. Let softness and strength coexist.",
  compatibilityScore: 58,
  elementHarmony: "Fire (Aries) + Water (Pisces)",
  famousCouples: ["Jessica Chastain (Aries) & Gian Luca Passi de Preposulo (Pisces)"],
  loveLanguageTips: {
    Aries: "Bold declarations, quick action, and protection",
    Pisces: "Tender words, spiritual closeness, emotional intimacy"
  },
  communicationStyle: "Aries is blunt; Pisces is poetic. Conflict can arise from misunderstanding each other’s expression.",
  intimacyLevel: "Very high when safe space is created — can be deeply soulful and artistic."
},

    "Taurus-Gemini": {
  overview: "Earth meets air in this curious and stimulating match.",
  strengths: "Balance between Taurus' stability and Gemini's spontaneity brings freshness and grounding.",
  challenges: "Taurus craves routine and security, while Gemini seeks novelty and change, which can cause friction.",
  advice: "Practice flexibility and compromise to appreciate both stability and variety.",
  compatibilityScore: 58,
  elementHarmony: "Earth (Taurus) + Air (Gemini)",
  famousCouples: ["Adele (Gemini) & Simon Konecki (Taurus)"],
  loveLanguageTips: {
    Taurus: "Physical touch and thoughtful gestures",
    Gemini: "Words of affirmation and playful communication"
  },
  communicationStyle: "Taurus is steady and deliberate; Gemini is quick-witted and curious. Patience is key.",
  intimacyLevel: "Moderate – builds with time as trust deepens."
},
"Taurus-Cancer": {
  overview: "A nurturing, harmonious connection grounded in loyalty and care.",
  strengths: "Both value home, comfort, and emotional security, making for a strong bond.",
  challenges: "Tendency toward overattachment may limit personal growth.",
  advice: "Maintain healthy boundaries to foster individual independence within the relationship.",
  compatibilityScore: 80,
  elementHarmony: "Earth (Taurus) + Water (Cancer)",
  famousCouples: ["Prince William (Cancer) & Kate Middleton (Taurus)"],
  loveLanguageTips: {
    Taurus: "Consistent acts of service and physical affection",
    Cancer: "Emotional support and cozy quality time"
  },
  communicationStyle: "Calm and caring; both communicate with warmth and sensitivity.",
  intimacyLevel: "High – deep emotional and physical connection."
},
"Taurus-Leo": {
  overview: "Warmth and pride create a magnetic and passionate bond.",
  strengths: "Devotion, affection, and a shared love for luxury and fun.",
  challenges: "Possessiveness and stubbornness can lead to power struggles.",
  advice: "Honor each other's need for admiration while respecting boundaries.",
  compatibilityScore: 72,
  elementHarmony: "Earth (Taurus) + Fire (Leo)",
  famousCouples: ["Barbra Streisand (Leo) & James Brolin (Taurus)"],
  loveLanguageTips: {
    Taurus: "Physical touch and steady reassurance",
    Leo: "Grand romantic gestures and verbal praise"
  },
  communicationStyle: "Both are expressive but need to manage ego clashes for harmony.",
  intimacyLevel: "High – passionate and loyal."
},
"Taurus-Virgo": {
  overview: "A grounded, practical relationship built on shared values and reliability.",
  strengths: "Mutual dedication, trustworthiness, and a love of routine.",
  challenges: "Can become too routine or rigid without spontaneity.",
  advice: "Embrace small adventures and openness to new experiences.",
  compatibilityScore: 85,
  elementHarmony: "Earth (Taurus) + Earth (Virgo)",
  famousCouples: ["Beyoncé (Virgo) & Jay-Z (Taurus)"],
  loveLanguageTips: {
    Taurus: "Acts of service and affectionate touch",
    Virgo: "Thoughtful help and attentive listening"
  },
  communicationStyle: "Practical, thoughtful, and clear — great for problem-solving together.",
  intimacyLevel: "Moderate to high – builds gradually with trust."
},
"Taurus-Libra": {
  overview: "Beauty and pleasure bind these two with shared love for harmony and indulgence.",
  strengths: "Strong appreciation for art, romance, and social grace.",
  challenges: "Different social needs: Libra is outgoing, Taurus more home-centered.",
  advice: "Balance time spent between social activities and quiet, intimate moments.",
  compatibilityScore: 70,
  elementHarmony: "Earth (Taurus) + Air (Libra)",
  famousCouples: ["Serena Williams (Libra) & Alexis Ohanian (Taurus)"],
  loveLanguageTips: {
    Taurus: "Consistent physical affection and reliability",
    Libra: "Words of affirmation and shared experiences"
  },
  communicationStyle: "Diplomatic and warm, but sometimes Libra’s indecisiveness may test Taurus’ patience.",
  intimacyLevel: "Moderate – harmonious and affectionate."
},
"Taurus-Scorpio": {
  overview: "Intense and deeply bonded, this is a relationship of passion and loyalty.",
  strengths: "Strong emotional connection and mutual commitment.",
  challenges: "Power dynamics and jealousy can create challenges.",
  advice: "Build trust through open communication and honesty.",
  compatibilityScore: 78,
  elementHarmony: "Earth (Taurus) + Water (Scorpio)",
  famousCouples: ["Bill Gates (Taurus) & Melinda Gates (Scorpio)"],
  loveLanguageTips: {
    Taurus: "Physical touch and consistent support",
    Scorpio: "Emotional depth and loyalty"
  },
  communicationStyle: "Both are intense and private; patience is essential to navigate conflicts.",
  intimacyLevel: "Very high – deeply sensual and transformative."
},
"Taurus-Sagittarius": {
  overview: "A clash between Taurus' desire for stability and Sagittarius' love for freedom.",
  strengths: "Potential for personal growth by balancing stability with adventure.",
  challenges: "Different lifestyle preferences can cause tension.",
  advice: "Give each other space and embrace learning from differences.",
  compatibilityScore: 52,
  elementHarmony: "Earth (Taurus) + Fire (Sagittarius)",
  famousCouples: ["Taylor Swift (Sagittarius) & Joe Alwyn (Taurus)"],
  loveLanguageTips: {
    Taurus: "Reliable presence and gentle touch",
    Sagittarius: "Fun, laughter, and shared explorations"
  },
  communicationStyle: "Taurus is grounded and steady; Sagittarius is spontaneous and optimistic.",
  intimacyLevel: "Moderate – requires mutual respect for boundaries."
},
"Taurus-Capricorn": {
  overview: "A solid, dependable union based on shared ambition and values.",
  strengths: "Strong work ethic, loyalty, and practical support.",
  challenges: "Balancing career focus with nurturing the relationship.",
  advice: "Make time to nurture emotional intimacy alongside goals.",
  compatibilityScore: 90,
  elementHarmony: "Earth (Taurus) + Earth (Capricorn)",
  famousCouples: ["Dwayne Johnson (Taurus) & Lauren Hashian (Capricorn)"],
  loveLanguageTips: {
    Taurus: "Consistent affection and reliability",
    Capricorn: "Acts of service and long-term commitment"
  },
  communicationStyle: "Pragmatic and supportive communication style.",
  intimacyLevel: "High – steady and deeply connected."
},
"Taurus-Aquarius": {
  overview: "Conventional Taurus meets unconventional Aquarius, creating a unique dynamic.",
  strengths: "Brings together tradition and innovation with mutual respect.",
  challenges: "Different life philosophies can lead to misunderstandings.",
  advice: "Be open to learning and celebrate differences.",
  compatibilityScore: 55,
  elementHarmony: "Earth (Taurus) + Air (Aquarius)",
  famousCouples: ["Alicia Keys (Aquarius) & Swizz Beatz (Taurus)"],
  loveLanguageTips: {
    Taurus: "Physical reassurance and nurturing",
    Aquarius: "Intellectual connection and personal freedom"
  },
  communicationStyle: "Grounded Taurus balances quirky Aquarius; requires patience.",
  intimacyLevel: "Moderate – needs effort to align emotional rhythms."
},
"Taurus-Pisces": {
  overview: "Gentle and romantic pairing of earth and water.",
  strengths: "Deep emotional understanding and creative synergy.",
  challenges: "Tendency toward escapism and avoidance of conflict.",
  advice: "Support each other's dreams while staying grounded in reality.",
  compatibilityScore: 77,
  elementHarmony: "Earth (Taurus) + Water (Pisces)",
  famousCouples: ["Queen Elizabeth II (Pisces) & Prince Philip (Taurus)"],
  loveLanguageTips: {
    Taurus: "Steady presence and physical affection",
    Pisces: "Emotional intimacy and spiritual closeness"
  },
  communicationStyle: "Soft and empathetic communication; promotes harmony.",
  intimacyLevel: "High – tender and deeply soulful."
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
  