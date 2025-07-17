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
  
 
  const existingCompatibility = {

    "Aries-Aries": {
  overview: "A fiery, action-packed connection between two passionate leaders.",
  strengths: "Shared ambition, adventure, and drive.",
  challenges: "Ego clashes and impulsive reactions.",
  advice: "Take turns leading and learn the art of compromise.",
  compatibilityScore: 70,
  elementHarmony: "Fire (Aries) + Fire (Aries)",
  famousCouples: ["Maya Angelou (Aries) & Guy Johnson (Aries - son)"],
  loveLanguageTips: {
    Aries: "Bold gestures, acts of courage, and spontaneous excitement"
  },
  communicationStyle: "Direct and assertive – conversations can be thrilling or combative.",
  intimacyLevel: "High – strong chemistry and mutual desire keep the spark alive."
},

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
  advice: "Respect each other and learn from your complementary traits.",
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

  "Taurus-Taurus": {
  overview: "A deeply sensual and steady bond between two loyal souls.",
  strengths: "Patience, dependability, and mutual understanding.",
  challenges: "Resistance to change and potential stubbornness.",
  advice: "Keep things fresh and allow room for growth.",
  compatibilityScore: 80,
  elementHarmony: "Earth (Taurus) + Earth (Taurus)",
  famousCouples: ["Cher (Taurus) & Sonny Bono (Taurus)"],
  loveLanguageTips: {
    Taurus: "Physical affection, shared meals, and consistency"
  },
  communicationStyle: "Measured and thoughtful – rarely rushed, but always sincere.",
  intimacyLevel: "High – strong physical connection and trust."
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

  "Gemini-Gemini": {
  overview: "A whirlwind of ideas, conversation, and curiosity.",
  strengths: "Mental stimulation and endless variety.",
  challenges: "Difficulty staying grounded and emotionally consistent.",
  advice: "Establish emotional depth beneath the surface fun.",
  compatibilityScore: 78,
  elementHarmony: "Air (Gemini) + Air (Gemini)",
  famousCouples: ["Kanye West (Gemini) & North West (Gemini - child)"],
  loveLanguageTips: {
    Gemini: "Witty banter, variety, and playful surprises"
  },
  communicationStyle: "Quick, clever, and constantly shifting – boredom is rare.",
  intimacyLevel: "Moderate – thrives on novelty, not routine."
},
  
  "Gemini-Aries": {
  overview: "Dynamic and adventurous, this pairing is full of energy and excitement.",
  strengths: "Mutual enthusiasm and a love for variety keep the relationship lively.",
  challenges: "Both can be impulsive and impatient, leading to clashes.",
  advice: "Practice patience and listen actively to balance excitement with understanding.",
  compatibilityScore: 75,
  elementHarmony: "Air (Gemini) + Fire (Aries)",
  famousCouples: ["Angelina Jolie (Gemini) & Brad Pitt (Aries)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and playful banter",
    Aries: "Physical touch and acts of service"
  },
  communicationStyle: "Fast-paced and direct; both enjoy stimulating conversations.",
  intimacyLevel: "High – driven by passion and curiosity."
},

"Gemini-Taurus": {
  overview: "Earth meets air in this curious and stimulating match.",
  strengths: "Balance between Taurus' stability and Gemini's spontaneity brings freshness and grounding.",
  challenges: "Taurus craves routine and security, while Gemini seeks novelty and change, which can cause friction.",
  advice: "Practice flexibility and compromise to appreciate both stability and variety.",
  compatibilityScore: 58,
  elementHarmony: "Air (Gemini) + Earth (Taurus)",
  famousCouples: ["Adele (Gemini) & Simon Konecki (Taurus)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and playful communication",
    Taurus: "Physical touch and thoughtful gestures"
  },
  communicationStyle: "Taurus is steady and deliberate; Gemini is quick-witted and curious. Patience is key.",
  intimacyLevel: "Moderate – builds with time as trust deepens."
},

"Gemini-Gemini": {
  overview: "A lively, intellectual connection full of fun and endless conversation.",
  strengths: "Shared curiosity and adaptability keep things exciting.",
  challenges: "Both may struggle with inconsistency and commitment.",
  advice: "Focus on grounding your bond with trust and reliability.",
  compatibilityScore: 70,
  elementHarmony: "Air + Air",
  famousCouples: ["Kanye West (Gemini) & Kim Kardashian (Gemini)"],
  loveLanguageTips: {
    Gemini: "Quality time and verbal affirmations"
  },
  communicationStyle: "Highly communicative, often juggling multiple topics at once.",
  intimacyLevel: "Playful and exploratory."
},

"Gemini-Cancer": {
  overview: "Head and heart unite in this complex emotional-intellectual mix.",
  strengths: "Learning and emotional growth through mutual understanding.",
  challenges: "Cancer's emotional depth may overwhelm Gemini’s lighthearted nature.",
  advice: "Communicate openly and respect each other's needs.",
  compatibilityScore: 52,
  elementHarmony: "Air (Gemini) + Water (Cancer)",
  famousCouples: ["Kanye West (Gemini) & Kim Kardashian (Cancer)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and playful teasing",
    Cancer: "Acts of service and physical touch"
  },
  communicationStyle: "Gemini is quick and light; Cancer is intuitive and emotional.",
  intimacyLevel: "Varies – builds with emotional trust."
},

"Gemini-Leo": {
  overview: "Playful and expressive, this duo loves to shine together.",
  strengths: "Creativity and social joy fuel a fun-loving partnership.",
  challenges: "Clashes may arise over attention and ego.",
  advice: "Celebrate each other's successes and share the spotlight.",
  compatibilityScore: 78,
  elementHarmony: "Air (Gemini) + Fire (Leo)",
  famousCouples: ["Johnny Depp (Gemini) & Amber Heard (Leo)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and shared adventures",
    Leo: "Gifts and quality time"
  },
  communicationStyle: "Vibrant and outgoing, full of enthusiasm and flair.",
  intimacyLevel: "High – passionate and warm."
},

"Gemini-Virgo": {
  overview: "Intellectually stimulating but potentially critical pairing.",
  strengths: "Mutual curiosity and complementary strengths.",
  challenges: "Virgo’s critical nature may clash with Gemini’s spontaneity.",
  advice: "Offer patience and kindness, and embrace differences.",
  compatibilityScore: 60,
  elementHarmony: "Air (Gemini) + Earth (Virgo)",
  famousCouples: ["Paul Rudd (Gemini) & Julie Yaeger (Virgo)"],
  loveLanguageTips: {
    Gemini: "Quality time and playful communication",
    Virgo: "Acts of service and thoughtful words"
  },
  communicationStyle: "Gemini is abstract and fast; Virgo is precise and methodical.",
  intimacyLevel: "Moderate – grows with mutual respect."
},

"Gemini-Libra": {
  overview: "Air signs with a natural affinity for harmony and socializing.",
  strengths: "Shared love for communication and intellectual pursuits.",
  challenges: "Indecisiveness and conflict avoidance.",
  advice: "Make decisions together and express honest opinions.",
  compatibilityScore: 82,
  elementHarmony: "Air + Air",
  famousCouples: ["John F. Kennedy Jr. (Gemini) & Carolyn Bessette (Libra)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and spontaneity",
    Libra: "Quality time and physical touch"
  },
  communicationStyle: "Smooth, diplomatic, and engaging.",
  intimacyLevel: "High – emotional and intellectual connection."
},

"Gemini-Scorpio": {
  overview: "Intense and mysterious pairing with contrasting energies.",
  strengths: "Gemini’s adaptability complements Scorpio’s depth.",
  challenges: "Trust and control issues may surface.",
  advice: "Build honesty and respect boundaries.",
  compatibilityScore: 48,
  elementHarmony: "Air (Gemini) + Water (Scorpio)",
  famousCouples: ["Katy Perry (Gemini) & Russell Brand (Scorpio)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and lightheartedness",
    Scorpio: "Physical touch and quality time"
  },
  communicationStyle: "Gemini is light and social; Scorpio is intense and private.",
  intimacyLevel: "Deep and transformative but requires trust."
},

"Gemini-Sagittarius": {
  overview: "Opposites attract in this adventurous and freedom-loving pair.",
  strengths: "Shared love for exploration and learning.",
  challenges: "Restlessness and commitment fears.",
  advice: "Balance independence with connection.",
  compatibilityScore: 85,
  elementHarmony: "Air (Gemini) + Fire (Sagittarius)",
  famousCouples: ["Taylor Swift (Sagittarius) & Joe Alwyn (Gemini)"],
  loveLanguageTips: {
    Gemini: "Quality time and verbal communication",
    Sagittarius: "Acts of service and adventure"
  },
  communicationStyle: "Open, honest, and enthusiastic.",
  intimacyLevel: "High energy and passionate."
},

"Gemini-Capricorn": {
  overview: "Grounded Capricorn meets playful Gemini for a balancing act.",
  strengths: "Pragmatism meets creativity, fostering growth.",
  challenges: "Different pace and priorities can cause friction.",
  advice: "Respect each other’s differences and find common goals.",
  compatibilityScore: 55,
  elementHarmony: "Air (Gemini) + Earth (Capricorn)",
  famousCouples: ["Mary-Kate Olsen (Gemini) & Olivier Sarkozy (Capricorn)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and shared fun",
    Capricorn: "Acts of service and quality time"
  },
  communicationStyle: "Gemini is lively and chatty; Capricorn is reserved and practical.",
  intimacyLevel: "Moderate – trust builds over time."
},

"Gemini-Aquarius": {
  overview: "A meeting of minds with a love for innovation and freedom.",
  strengths: "Shared ideals and adventurous spirits.",
  challenges: "Emotional depth may be avoided.",
  advice: "Open up emotionally and maintain intellectual connection.",
  compatibilityScore: 80,
  elementHarmony: "Air + Air",
  famousCouples: ["Morgan Freeman (Gemini) & Myrna Colley-Lee (Aquarius)"],
  loveLanguageTips: {
    Gemini: "Quality time and verbal wit",
    Aquarius: "Acts of service and shared causes"
  },
  communicationStyle: "Progressive, forward-thinking, and open-minded.",
  intimacyLevel: "Intellectual and emotionally curious."
},

"Gemini-Pisces": {
  overview: "Imaginative and dreamy pairing with complementary qualities.",
  strengths: "Creativity and emotional empathy blend well.",
  challenges: "Different ways of processing emotions can cause misunderstandings.",
  advice: "Practice patience and empathy in communication.",
  compatibilityScore: 50,
  elementHarmony: "Air (Gemini) + Water (Pisces)",
  famousCouples: ["Bob Dylan (Gemini) & Joan Baez (Pisces)"],
  loveLanguageTips: {
    Gemini: "Words of affirmation and lively conversation",
    Pisces: "Physical touch and quality time"
  },
  communicationStyle: "Gemini is rational and quick; Pisces is intuitive and sensitive.",
  intimacyLevel: "Emotional and spiritual connection develops gradually."
},

  "Cancer-Cancer": {
  overview: "Two nurturing souls creating a deeply emotional and intuitive bond.",
  strengths: "Empathy, loyalty, and shared values around family and comfort.",
  challenges: "Emotional sensitivity may lead to miscommunication or mood swings.",
  advice: "Maintain openness and don't retreat at the same time.",
  compatibilityScore: 85,
  elementHarmony: "Water (Cancer) + Water (Cancer)",
  famousCouples: ["Princess Diana (Cancer) & Prince William (Cancer - son)"],
  loveLanguageTips: {
    Cancer: "Affectionate gestures, emotional reassurance, and quality time"
  },
  communicationStyle: "Gentle and heartfelt – silence can speak volumes.",
  intimacyLevel: "Very high – a tender, soulful connection."
},

   "Cancer-Aries": {
  overview: "Water meets fire—emotional depth contrasts bold spontaneity.",
  strengths: "Aries’ enthusiasm brings excitement, Cancer offers emotional support.",
  challenges: "Aries may feel held back; Cancer may feel overwhelmed.",
  advice: "Bridge energy and sensitivity by honoring each other's paces.",
  compatibilityScore: 65,
  elementHarmony: "Water (Cancer) + Fire (Aries)",
  famousCouples: ["Ariana Grande (Cancer) & Pete Davidson (Aries)"],
  loveLanguageTips: {
    Cancer: "Quality time and emotional affirmation",
    Aries: "Action and protective gestures"
  },
  communicationStyle: "Cancer is soothing; Aries is direct—find balance in tone.",
  intimacyLevel: "High – emotional closeness grows over time."
},
"Cancer-Taurus": {
  overview: "A deeply nurturing and stable bond grounded in comfort.",
  strengths: "Shared love of home, loyalty, and quiet devotion.",
  challenges: "Both can become overly protective or resistant to change.",
  advice: "Encourage new experiences together to avoid stagnation.",
  compatibilityScore: 80,
  elementHarmony: "Water (Cancer) + Earth (Taurus)",
  famousCouples: ["Prince William (Cancer) & Kate Middleton (Taurus)"],
  loveLanguageTips: {
    Cancer: "Emotional reassurance and cozy intimacy",
    Taurus: "Physical touch and caring acts"
  },
  communicationStyle: "Gentle and caring—great for emotional support.",
  intimacyLevel: "Very high – built on strong trust and comfort."
},
"Cancer-Gemini": {
  overview: "Emotional vs. intellectual—soft and curious exchange.",
  strengths: "Gemini lifts the mood; Cancer deepens emotion.",
  challenges: "Cancer needs stability, Gemini loves unpredictability.",
  advice: "Gemini should nurture stability; Cancer should lighten up.",
  compatibilityScore: 52,
  elementHarmony: "Water (Cancer) + Air (Gemini)",
  famousCouples: ["Kanye West (Gemini) & Kim Kardashian (Cancer)"],
  loveLanguageTips: {
    Cancer: "Caring words and supportive gestures",
    Gemini: "Fun conversation and mental stimulation"
  },
  communicationStyle: "Cancer is emotional; Gemini is playful—listen with empathy.",
  intimacyLevel: "Moderate – emotional depth builds gradually."
},
"Cancer-Cancer": {
  overview: "A profoundly emotional and nurturing connection.",
  strengths: "Deep empathy, loyalty, and home-focused harmony.",
  challenges: "Risk of emotional overload or mutual moodiness.",
  advice: "Set boundaries and share self-care routines.",
  compatibilityScore: 85,
  elementHarmony: "Water + Water",
  famousCouples: ["Tom Hanks (Cancer) & Rita Wilson (Cancer)"],
  loveLanguageTips: {
    Cancer: "Emotional support and comforting closeness"
  },
  communicationStyle: "Intuitive and sensitive—sometimes too inward.",
  intimacyLevel: "Very high – soulful emotional intimacy."
},
"Cancer-Leo": {
  overview: "Warm-hearted Leo meets protective Cancer for a cozy match.",
  strengths: "Leo brings brightness; Cancer brings care and security.",
  challenges: "Leo’s pride vs. Cancer’s sensitivity can collide.",
  advice: "Let Leo shine; let Cancer nurture in return.",
  compatibilityScore: 70,
  elementHarmony: "Water (Cancer) + Fire (Leo)",
  famousCouples: ["Tom Hanks (Cancer) & Rita Wilson (Leo)"],
  loveLanguageTips: {
    Cancer: "Security and heartfelt attention",
    Leo: "Verbal praise and loyalty"
  },
  communicationStyle: "Leo is expressive; Cancer listens deeply—balance is key.",
  intimacyLevel: "High – affectionate and emotionally secure."
},
"Cancer-Virgo": {
  overview: "Emotion meets practicality in this nurturing match.",
  strengths: "Virgo brings structure; Cancer brings warmth and protection.",
  challenges: "Virgo’s critique vs. Cancer’s feelings can cause upset.",
  advice: "Virgo should be gentle; Cancer should trust practicality.",
  compatibilityScore: 78,
  elementHarmony: "Water (Cancer) + Earth (Virgo)",
  famousCouples: ["Beyoncé (Virgo) & Jay-Z (Cancer)"],
  loveLanguageTips: {
    Cancer: "Acts of care and assurance",
    Virgo: "Helpful gestures and attentive listening"
  },
  communicationStyle: "Clear and caring—great for supportive dialogue.",
  intimacyLevel: "High – sensitive and classically comforting."
},
"Cancer-Libra": {
  overview: "Emotion balanced by grace and harmony.",
  strengths: "Libra brings diplomacy; Cancer brings depth and intuition.",
  challenges: "Libra’s indecision vs. Cancer’s emotional clarity.",
  advice: "Make decisions together and validate each emotion.",
  compatibilityScore: 68,
  elementHarmony: "Water (Cancer) + Air (Libra)",
  famousCouples: ["Serena Williams (Libra) & Alexis Ohanian (Cancer)"],
  loveLanguageTips: {
    Cancer: "Emotional connection and caring rituals",
    Libra: "Quality time and harmonious ambiance"
  },
  communicationStyle: "Balanced and receptive—ideal for gentle talk.",
  intimacyLevel: "Moderate – affectionate with thoughtful design."
},
"Cancer-Scorpio": {
  overview: "One of the most powerful and transformative pairings.",
  strengths: "Deep emotional intensity, loyalty, and mutual understanding.",
  challenges: "Risk of emotional turbulence and control games.",
  advice: "Ensure openness and clear emotional sharing.",
  compatibilityScore: 88,
  elementHarmony: "Water + Water",
  famousCouples: ["Steven Spielberg (Cancer) & Kate Capshaw (Scorpio)"],
  loveLanguageTips: {
    Cancer: "Safety and consistent affection",
    Scorpio: "Emotional truth and physical intensity"
  },
  communicationStyle: "Passionate and intuitive—highly expressive.",
  intimacyLevel: "Very high – profound vulnerability and connection."
},
"Cancer-Sagittarius": {
  overview: "Emotion vs. freedom—cautious vs. adventurous.",
  strengths: "Sagittarius lifts Cancer’s spirits; Cancer softens Sagittarius.",
  challenges: "Freedom-seeking Sagittarius may frustrate emotional Cancer.",
  advice: "Sagittarius should assure security; Cancer should allow exploration.",
  compatibilityScore: 50,
  elementHarmony: "Water (Cancer) + Fire (Sagittarius)",
  famousCouples: ["Justin Bieber (Sagittarius) & Hailey Baldwin (Cancer)"],
  loveLanguageTips: {
    Cancer: "Emotional reassurance and intimate consistency",
    Sagittarius: "Shared adventures and playful humor"
  },
  communicationStyle: "Direct vs. sensitive—balance bluntness with empathy.",
  intimacyLevel: "Moderate – grows when trust is nurtured."
},
"Cancer-Capricorn": {
  overview: "Opposites that deeply complement—emotion meets ambition.",
  strengths: "Cancer offers care; Capricorn offers stability and focus.",
  challenges: "Capricorn’s reserve vs. Cancer’s emotional flow.",
  advice: "Balance work and devotion with emotional check-ins.",
  compatibilityScore: 82,
  elementHarmony: "Water (Cancer) + Earth (Capricorn)",
  famousCouples: ["Bill Gates (Capricorn) & Melinda Gates (Cancer)"],
  loveLanguageTips: {
    Cancer: "Emotional warmth and home comfort",
    Capricorn: "Acts of service and reliable support"
  },
  communicationStyle: "Practical and caring—mix strategy and sentiment.",
  intimacyLevel: "High – dependable and emotionally rich."
},
"Cancer-Aquarius": {
  overview: "Sensitive nurturer meets independent idealist.",
  strengths: "Aquarius adds perspective; Cancer adds emotional depth.",
  challenges: "Aquarius may seem distant to emotional Cancer.",
  advice: "Aquarius should prioritize emotional check-ins; Cancer should allow space.",
  compatibilityScore: 55,
  elementHarmony: "Water (Cancer) + Air (Aquarius)",
  famousCouples: ["Ellen DeGeneres (Aquarius) & Portia de Rossi (Cancer)"],
  loveLanguageTips: {
    Cancer: "Emotional closeness and nurturing acts",
    Aquarius: "Intellectual connection and shared ideals"
  },
  communicationStyle: "Balanced mix of thoughtfulness and thoughtful care.",
  intimacyLevel: "Moderate – emotionally grounding when open."
},
"Cancer-Pisces": {
  overview: "A beautifully empathetic and intuitive water pairing.",
  strengths: "Shared depth of emotion and spiritual alignment.",
  challenges: "May retreat into emotional bubble; risk of co-dependence.",
  advice: "Balance emotional togetherness with healthy boundaries.",
  compatibilityScore: 90,
  elementHarmony: "Water + Water",
  famousCouples: ["Jon Bon Jovi (Cancer) & Dorothea Hurley (Pisces)"],
  loveLanguageTips: {
    Cancer: "Emotional reassurance and caring presence",
    Pisces: "Intuitive understanding and soulful support"
  },
  communicationStyle: "Dreamy, empathetic, and fluid.",
  intimacyLevel: "Very high – deeply bonding and soulful."

    },

    "Leo-Leo": {
  overview: "A glamorous and passionate match full of charisma and creativity.",
  strengths: "Confidence, romance, and shared flair for drama.",
  challenges: "Competition for attention and prideful standoffs.",
  advice: "Celebrate each other's shine without dimming your own.",
  compatibilityScore: 76,
  elementHarmony: "Fire (Leo) + Fire (Leo)",
  famousCouples: ["Jennifer Lopez (Leo) & Ben Affleck (Leo)"],
  loveLanguageTips: {
    Leo: "Praise, loyalty, and grand romantic gestures"
  },
  communicationStyle: "Bold and expressive – with a flair for performance.",
  intimacyLevel: "High – a passionate and theatrical romance."
},


    "Leo-Aries": {
  overview: "Two bold fire signs—their relationship is radiant, confident, and full of passion.",
  strengths: "Mutual enthusiasm, strong leadership, and loyalty fuel a dynamic partnership.",
  challenges: "Egos may clash, and competition for attention can spark friction.",
  advice: "Celebrate each other's wins and share the spotlight to avoid power struggles.",
  compatibilityScore: 88,
  elementHarmony: "Fire + Fire",
  famousCouples: ["Jennifer Lawrence (Leo) & Cooke Maroney (Aries)"],
  loveLanguageTips: {
    Leo: "Grand romantic gestures and verbal praise",
    Aries: "Passionate action and protective support"
  },
  communicationStyle: "Bold, heartfelt, and expressive—rarely shy with their feelings.",
  intimacyLevel: "Very high – fiery passion and deep connection."
},

"Leo-Taurus": {
  overview: "Earth-meets-fire with deep affection and pride.",
  strengths: "Taurus’ steadiness blends with Leo’s warmth for a devoted relationship.",
  challenges: "Both can be stubborn and possessive, leading to conflict.",
  advice: "Balance indulgence with responsibility, and appreciate each other’s rhythms.",
  compatibilityScore: 72,
  elementHarmony: "Fire (Leo) + Earth (Taurus)",
  famousCouples: ["Julia Roberts (Leo) & Daniel Moder (Taurus)"],
  loveLanguageTips: {
    Leo: "Appreciative words, attention, and lavish gifts",
    Taurus: "Physical comfort and consistent devotion"
  },
  communicationStyle: "Expressive and direct, with an emphasis on loyalty.",
  intimacyLevel: "High – passionate and deeply affectionate."
},

"Leo-Gemini": {
  overview: "Playful and expressive—this duo shines in social circles.",
  strengths: "Mutual creativity, social joy, and intellectual fuel.",
  challenges: "Egos and restlessness can clash—avoid attention wars.",
  advice: "Rotate focus and share the limelight graciously.",
  compatibilityScore: 78,
  elementHarmony: "Fire (Leo) + Air (Gemini)",
  famousCouples: ["Johnny Depp (Gemini) & Amber Heard (Leo)"],
  loveLanguageTips: {
    Leo: "Acts of admiration and grand romantic surprises",
    Gemini: "Quality time and witty communication"
  },
  communicationStyle: "Vibrant, flamboyant, and emotionally direct.",
  intimacyLevel: "High – exciting and affectionate."
},

"Leo-Cancer": {
  overview: "Warm-hearted Leo meets sensitive Cancer—a nurturing and bright bond.",
  strengths: "Leo’s confidence matched with Cancer’s caring soul.",
  challenges: "Cancer may feel overshadowed; Leo may misread emotions.",
  advice: "Leo should nurture with sensitivity; Cancer should embrace Leo’s vibrance.",
  compatibilityScore: 70,
  elementHarmony: "Fire (Leo) + Water (Cancer)",
  famousCouples: ["Tom Hanks (Cancer) & Rita Wilson (Leo)"],
  loveLanguageTips: {
    Leo: "Verbal praise and attention",
    Cancer: "Emotional closeness and shared traditions"
  },
  communicationStyle: "Expressive and open—trust strengthens clarity.",
  intimacyLevel: "High – warm with emotional safety."
},

"Leo-Leo": {
  overview: "Two Leos together create a dramatic, loving, and vibrant duo.",
  strengths: "Radiant energy, mutual admiration, and creativity abound.",
  challenges: "Can be overly dramatic—balance needed around attention and pride.",
  advice: "Share the spotlight and celebrate each other consistently.",
  compatibilityScore: 85,
  elementHarmony: "Fire + Fire",
  famousCouples: ["Bill Clinton (Leo) & Hillary Clinton (Leo)"],
  loveLanguageTips: {
    Leo: "Public displays of affection and verbal appreciation"
  },
  communicationStyle: "Bold, dramatic, and emotionally generous.",
  intimacyLevel: "Very high – flamboyant, passionate, and expressive."
},

"Leo-Virgo": {
  overview: "Passion meets precision—balance between vigor and detail.",
  strengths: "Leo brings creativity; Virgo brings thoughtfulness.",
  challenges: "Virgo’s critique may hurt Leo’s pride; Leo’s flair may overwhelm Virgo.",
  advice: "Virgo should praise; Leo should honor Virgo’s careful contributions.",
  compatibilityScore: 65,
  elementHarmony: "Fire (Leo) + Earth (Virgo)",
  famousCouples: ["Justin Bieber (Virgo) & Hailey Bieber (Leo)"],
  loveLanguageTips: {
    Leo: "Acts of love and admiration",
    Virgo: "Helpful gestures and calm reassurance"
  },
  communicationStyle: "Expressive vs. analytical—balance emotion with clarity.",
  intimacyLevel: "Moderate to high – chemistry grows with mutual respect."
},

"Leo-Libra": {
  overview: "Glamorous and harmonious—this duo balances charm and passion.",
  strengths: "Strong romance, social harmony, and shared love of beauty.",
  challenges: "Both may avoid conflict—decisiveness is necessary.",
  advice: "Speak truths with love, and make decisions together.",
  compatibilityScore: 82,
  elementHarmony: "Fire (Leo) + Air (Libra)",
  famousCouples: ["Blake Lively (Leo) & Ryan Reynolds (Libra)"],
  loveLanguageTips: {
    Leo: "Romantic surprises and verbal praise",
    Libra: "Quality time and aesthetic experiences"
  },
  communicationStyle: "Smooth, diplomatic, and charismatic.",
  intimacyLevel: "High – affectionate, stylish, and expressive."
},

"Leo-Scorpio": {
  overview: "Intense and magnetic—a passionate blend of fire and water.",
  strengths: "Loyalty, devotion, and powerful chemistry.",
  challenges: "Power struggles and jealousy may emerge.",
  advice: "Cultivate trust and allow vulnerability to deepen your bond.",
  compatibilityScore: 80,
  elementHarmony: "Fire (Leo) + Water (Scorpio)",
  famousCouples: ["Robert Downey Jr. (Aries) & Susan Downey (Scorpio/Leo?)"],
  loveLanguageTips: {
    Leo: "Attention and dramatic gestures",
    Scorpio: "Emotional depth and physical intimacy"
  },
  communicationStyle: "Fiery and intense—conversations are heartfelt.",
  intimacyLevel: "Very high – sensual, transformative, and loyal."
},

"Leo-Sagittarius": {
  overview: "Fire signs united—adventurous, optimistic, and unstoppable.",
  strengths: "High energy, shared goals, and fearless optimism.",
  challenges: "Restlessness or lack of grounding may arise.",
  advice: "Set shared visions but commit to daily rituals together.",
  compatibilityScore: 90,
  elementHarmony: "Fire + Fire",
  famousCouples: ["Brad Pitt (Sagittarius) & Angelina Jolie (Leo)"],
  loveLanguageTips: {
    Leo: "Grand romance and praise",
    Sagittarius: "Adventure, humor, and freedom"
  },
  communicationStyle: "Bold, optimistic, and spirited—always moving forward.",
  intimacyLevel: "Very high – energized and adventurous."
},

"Leo-Capricorn": {
  overview: "Ambition meets ambition—strong power couple with steady vision.",
  strengths: "Shared goals, leadership, and mutual respect.",
  challenges: "Different tones—Capricorn’s reserve vs. Leo’s showmanship.",
  advice: "Leo should respect structure; Capricorn should allow celebration.",
  compatibilityScore: 75,
  elementHarmony: "Fire (Leo) + Earth (Capricorn)",
  famousCouples: ["Davide Gramicci (Leo) & Others"],
  loveLanguageTips: {
    Leo: "Praise and attention",
    Capricorn: "Consistency and practical support"
  },
  communicationStyle: "Strategic meets expressive—clarify goals and feelings.",
  intimacyLevel: "High – trusting and passionate when aligned."
},

"Leo-Aquarius": {
  overview: "Bold meets innovative—dynamic duo with social vision.",
  strengths: "Friendship, creativity, and a shared love for change.",
  challenges: "Leo’s need for attention vs. Aquarius’s independence.",
  advice: "Celebrate individuality and coordinate public humility.",
  compatibilityScore: 80,
  elementHarmony: "Fire (Leo) + Air (Aquarius)",
  famousCouples: ["Jennifer Aniston (Aquarius) & Brad Pitt (Leo)"],
  loveLanguageTips: {
    Leo: "Public praise and thoughtful gestures",
    Aquarius: "Intellectual connection and shared ideals"
  },
  communicationStyle: "Creative and visionary, but may need emotional depth checks.",
  intimacyLevel: "High – energetic and ideative with emotional tuning."
},

"Leo-Pisces": {
  overview: "Creative and dreamy—romantic yet emotionally profound.",
  strengths: "Leo brings confidence; Pisces brings compassion.",
  challenges: "Pisces may feel overshadowed; Leo might lack sensitivity.",
  advice: "Leo should lead with gentleness; Pisces should articulate needs.",
  compatibilityScore: 68,
  elementHarmony: "Fire (Leo) + Water (Pisces)",
  famousCouples: ["Celine Dion (Leo) & René Angélil (Pisces)"],
  loveLanguageTips: {
    Leo: "Affirmations and grand gestures",
    Pisces: "Emotional connection and imaginative love"
  },
  communicationStyle: "Warm expressive vs. intuitive and poetic.",
  intimacyLevel: "High – loving, emotional, and dreamy."
},

  "Virgo-Virgo": {
  overview: "A thoughtful and organized pairing built on mutual respect and purpose.",
  strengths: "Dedication, intellect, and shared values.",
  challenges: "Perfectionism and overthinking.",
  advice: "Practice self-compassion and celebrate progress over perfection.",
  compatibilityScore: 74,
  elementHarmony: "Earth (Virgo) + Earth (Virgo)",
  famousCouples: ["Beyoncé (Virgo) & Blue Ivy (Virgo - daughter)"],
  loveLanguageTips: {
    Virgo: "Acts of service, careful attention, and meaningful routines"
  },
  communicationStyle: "Clear and analytical – may be overly cautious at times.",
  intimacyLevel: "Moderate – intimacy deepens through trust and subtlety."
},

    "Virgo-Aries": {
  overview: "Practical Virgo meets spontaneous Aries—an intriguing blend of carefulness and action.",
  strengths: "Virgo’s organization complements Aries’ drive.",
  challenges: "Aries’ impulsivity vs. Virgo’s need for order can create friction.",
  advice: "Practice patience and planning to balance action with analysis.",
  compatibilityScore: 60,
  elementHarmony: "Earth (Virgo) + Fire (Aries)",
  famousCouples: ["Serena Williams (Virgo) & Alexis Ohanian (Aries)"],
  loveLanguageTips: {
    Virgo: "Acts of service and thoughtful consistency",
    Aries: "Physical affection and adventurous support"
  },
  communicationStyle: "Virgo is precise; Aries is direct—find middle ground through clarity.",
  intimacyLevel: "Moderate to high – deepens with trust and understanding."
},

"Virgo-Taurus": {
  overview: "Earth signs in perfect harmony—steady, supportive, and grounded.",
  strengths: "Both value routine, loyalty, and practical care.",
  challenges: "May become too rigid or routine-heavy over time.",
  advice: "Introduce variety through shared small adventures.",
  compatibilityScore: 85,
  elementHarmony: "Earth + Earth",
  famousCouples: ["Beyoncé (Virgo) & Jay‑Z (Taurus)"],
  loveLanguageTips: {
    Virgo: "Organized help and stability",
    Taurus: "Physical comfort and reliable affection"
  },
  communicationStyle: "Calm, deliberate, and reliable—excellent for solving problems.",
  intimacyLevel: "High – comfortable, steady, and intimate."
},

"Virgo-Gemini": {
  overview: "Analytical meets curious—a relationship rich in ideas and growth.",
  strengths: "Virgo brings depth; Gemini brings adaptability.",
  challenges: "Virgo's critique may frustrate Gemini’s spontaneity.",
  advice: "Balance detailed planning with spontaneous fun.",
  compatibilityScore: 60,
  elementHarmony: "Earth + Air",
  famousCouples: ["Paul Rudd (Gemini) & Julie Yaeger (Virgo)"],
  loveLanguageTips: {
    Virgo: "Thoughtful acts and consistent reassurance",
    Gemini: "Playful banter and shared learning"
  },
  communicationStyle: "Clear and intelligent—best when attentive and open-minded.",
  intimacyLevel: "Moderate – evolves through mutual appreciation."
},

"Virgo-Cancer": {
  overview: "Nurturing Cancer pairs with practical Virgo for a supportive bond.",
  strengths: "Mutual care, emotional honesty, and steady support.",
  challenges: "Virgo may seem overly critical; Cancer may feel sensitive.",
  advice: "Communicate needs kindly and validate each other’s efforts.",
  compatibilityScore: 78,
  elementHarmony: "Earth + Water",
  famousCouples: ["Beyoncé (Virgo) & Jay‑Z (Cancer)"],
  loveLanguageTips: {
    Virgo: "Helping hands and attentive listening",
    Cancer: "Emotional closeness and nurturing rituals"
  },
  communicationStyle: "Gentle and considerate—perfect for emotional balance.",
  intimacyLevel: "High – deep, caring, and emotionally secure."
},

"Virgo-Leo": {
  overview: "Careful planning meets bold expression—a relationship of growth.",
  strengths: "Leo brings flair; Virgo brings organization.",
  challenges: "Leo’s need for spotlight vs. Virgo’s preference for quiet can clash.",
  advice: "Leo should show appreciation; Virgo should celebrate spontaneity.",
  compatibilityScore: 65,
  elementHarmony: "Earth + Fire",
  famousCouples: ["Justin Bieber (Virgo) & Hailey Bieber (Leo)"],
  loveLanguageTips: {
    Virgo: "Supportive actions and reliability",
    Leo: "Praise and romantic attention"
  },
  communicationStyle: "Balanced between analysis and enthusiasm—respect both styles.",
  intimacyLevel: "Moderate – grows with mutual recognition."
},

"Virgo-Virgo": {
  overview: "Two Virgos together create a harmonious, detail-oriented life.",
  strengths: "Shared values of organization, support, and reliability.",
  challenges: "Tendency to overanalyze or become overly critical.",
  advice: "Focus on compassion and occasional spontaneity.",
  compatibilityScore: 80,
  elementHarmony: "Earth + Earth",
  famousCouples: ["Zendaya (Virgo) & Tom Holland (Virgo) — rumored"],
  loveLanguageTips: {
    Virgo: "Thoughtful actions and unwavering support"
  },
  communicationStyle: "Explicit and clear—sometimes too perfectionistic.",
  intimacyLevel: "High – deep emotional connection with thoughtful care."
},

"Virgo-Libra": {
  overview: "Balance-driven relationship—logic meets harmony.",
  strengths: "Virgo provides structure; Libra brings diplomacy.",
  challenges: "Virgo's critique vs. Libra's indecision can stall decisions.",
  advice: "Encourage thoughtful compromise and make decisions together.",
  compatibilityScore: 70,
  elementHarmony: "Earth + Air",
  famousCouples: ["Alicia Silverstone (Libra) & Christopher Jarecki (Virgo)"],
  loveLanguageTips: {
    Virgo: "Helpful gestures and clear communication",
    Libra: "Quality time and peaceful collaboration"
  },
  communicationStyle: "Gentle, balanced, and considerate.",
  intimacyLevel: "Moderate – affectionate and balanced."
},

"Virgo-Scorpio": {
  overview: "Perceptive Virgo meets intense Scorpio—deep and transformative.",
  strengths: "Both are dedicated, loyal, and emotionally deep.",
  challenges: "Scorpio’s intensity may overwhelm Virgo’s analytical nature.",
  advice: "Use trust-building and open sharing to manage depth.",
  compatibilityScore: 82,
  elementHarmony: "Earth + Water",
  famousCouples: ["Keira Knightley (Virgo) & James Righton (Scorpio)"],
  loveLanguageTips: {
    Virgo: "Quiet support and consistent effort",
    Scorpio: "Emotional candor and physical intimacy"
  },
  communicationStyle: "Insightful and considerate—powerful when honest.",
  intimacyLevel: "Very high – intimate, loyal, and profound."
},

"Virgo-Sagittarius": {
  overview: "Grounded Virgo meets adventurous Sagittarius—growth through contrast.",
  strengths: "Virgo brings order; Sagittarius brings exploration.",
  challenges: "Different life paces can cause impatience.",
  advice: "Respect each other’s pace and share learning experiences.",
  compatibilityScore: 55,
  elementHarmony: "Earth + Fire",
  famousCouples: ["Brad Pitt (Sagittarius) & Angelina Jolie (Virgo) — past"],
  loveLanguageTips: {
    Virgo: "Thoughtful routines and organized care",
    Sagittarius: "Adventures and shared laughter"
  },
  communicationStyle: "Analytical meets free-thinking—value both sides.",
  intimacyLevel: "Moderate – enriches through mutual exploration."
},

"Virgo-Capricorn": {
  overview: "Earth signs united—efficient, reliable, and ambitious.",
  strengths: "Shared work ethic, planning, and mutual respect.",
  challenges: "Risk of working too much and neglecting romance.",
  advice: "Schedule love time alongside goals.",
  compatibilityScore: 88,
  elementHarmony: "Earth + Earth",
  famousCouples: ["Beyoncé (Virgo) & Jay‑Z (Capricorn) — alternate chart views"],
  loveLanguageTips: {
    Virgo: "Practical actions and emotional safety",
    Capricorn: "Dependable support and discipline"
  },
  communicationStyle: "Focused, respectful, and goal-oriented.",
  intimacyLevel: "High – steady, deep, and affectionate."
},

"Virgo-Aquarius": {
  overview: "Analytical meets visionary—smart and creative union.",
  strengths: "Virgo offers structure; Aquarius offers innovation.",
  challenges: "Virgo’s detail orientation may frustrate Aquarius’ big-picture mind.",
  advice: "Combine structure with vision; respect each style.",
  compatibilityScore: 75,
  elementHarmony: "Earth + Air",
  famousCouples: ["Alicia Keys (Aquarius) & Swizz Beatz (Virgo)"],
  loveLanguageTips: {
    Virgo: "Helpful support and clear communication",
    Aquarius: "Intellectual freedom and shared causes"
  },
  communicationStyle: "Logical, thoughtful, and creative.",
  intimacyLevel: "Moderate – grounded by trust and imagination."
},

"Virgo-Pisces": {
  overview: "Dreamy Pisces meets practical Virgo—a beautifully complementary duo.",
  strengths: "Virgo grounds dreams; Pisces inspires compassion.",
  challenges: "Pisces can feel criticized; Virgo may feel overwhelmed emotionally.",
  advice: "Cultivate empathy and celebrate each other's gifts.",
  compatibilityScore: 90,
  elementHarmony: "Earth + Water",
  famousCouples: ["Zendaya (Virgo) & Tom Holland (Pisces) — rumored"],
  loveLanguageTips: {
    Virgo: "Acts of service and stable support",
    Pisces: "Emotional openness and spiritual connection"
  },
  communicationStyle: "Gentle yet insightful—ideal for deeper understanding.",
  intimacyLevel: "Very high – soulful, nurturing, and transformative."

    },

    "Libra-Libra": {
  overview: "A graceful and balanced relationship rooted in harmony and shared ideals.",
  strengths: "Romantic, fair, and socially adept.",
  challenges: "Indecisiveness and avoidance of conflict.",
  advice: "Speak openly about needs – don't just keep the peace.",
  compatibilityScore: 82,
  elementHarmony: "Air (Libra) + Air (Libra)",
  famousCouples: ["Will Smith (Libra) & Jada Pinkett Smith (Libra)"],
  loveLanguageTips: {
    Libra: "Words of affirmation, shared beauty, and romantic gestures"
  },
  communicationStyle: "Tactful and charming – sometimes avoids hard truths.",
  intimacyLevel: "High – sensual and mentally connected."
},
   
    "Libra-Aries": {
  overview: "Balanced lovers—optimism meets courage in an engaging dynamic.",
  strengths: "Aries brings passion; Libra brings harmony, making for a lively duo.",
  challenges: "Aries may rush decisions; Libra may struggle with indecision.",
  advice: "Aries should practice patience; Libra should be proactive.",
  compatibilityScore: 75,
  elementHarmony: "Air (Libra) + Fire (Aries)",
  famousCouples: ["Hugh Hefner (Aries) & Crystal Harris (Libra)"],
  loveLanguageTips: {
    Libra: "Quality time and peaceful cooperation",
    Aries: "Bold action and enthusiastic praise"
  },
  communicationStyle: "Diplomatic and direct—seek compromise to thrive.",
  intimacyLevel: "High – affectionate and enthusiastic."
},

"Libra-Taurus": {
  overview: "Art-loving duo—beauty meets comfort in a sensual union.",
  strengths: "Shared taste for luxury, romance, and harmony.",
  challenges: "Libra seeks variety; Taurus prefers routine.",
  advice: "Combine stability with cultural experiences.",
  compatibilityScore: 70,
  elementHarmony: "Air (Libra) + Earth (Taurus)",
  famousCouples: ["Serena Williams (Libra) & Alexis Ohanian (Taurus)"],
  loveLanguageTips: {
    Libra: "Finessed compliments and aesthetic endeavors",
    Taurus: "Physical touch and heartfelt devotion"
  },
  communicationStyle: "Diplomatic, smooth, and considerate.",
  intimacyLevel: "Moderate – romantic with shared comfort."
},

"Libra-Gemini": {
  overview: "Air signs in harmony—playful, social, and intellectually driven.",
  strengths: "Shared curiosity, communication, and spontaneity.",
  challenges: "Can drift into indecision or superficiality.",
  advice: "Set mutual goals to keep the dynamic moving forward.",
  compatibilityScore: 82,
  elementHarmony: "Air + Air",
  famousCouples: ["John F. Kennedy Jr. (Gemini) & Carolyn Bessette (Libra)"],
  loveLanguageTips: {
    Libra: "Quality time and mutual admiration",
    Gemini: "Witty conversation and shared adventures"
  },
  communicationStyle: "Smooth and engaging—connected through constant dialogue.",
  intimacyLevel: "High – mentally stimulating and affectionate."
},

"Libra-Cancer": {
  overview: "Harmony meets emotion—a gentle and nurturing match.",
  strengths: "Libra brings balance; Cancer brings empathy and security.",
  challenges: "Libra’s social focus vs. Cancer’s privacy needs.",
  advice: "Alternate between socializing and quiet bonding time.",
  compatibilityScore: 68,
  elementHarmony: "Air (Libra) + Water (Cancer)",
  famousCouples: ["Serena Williams (Libra) & Alexis Ohanian (Cancer)"],
  loveLanguageTips: {
    Libra: "Quality time and romantic creativity",
    Cancer: "Emotional closeness and caring routines"
  },
  communicationStyle: "Balanced and receptive—ideal for compassionate dialogue.",
  intimacyLevel: "Moderate – emotionally sweet and supportive."
},

"Libra-Leo": {
  overview: "Glamorous power couple—charisma meets grace in a romantic union.",
  strengths: "Mutual admiration, style, and warmth.",
  challenges: "Both may avoid conflict—can lead to unspoken issues.",
  advice: "Be honest with love and gentleness.",
  compatibilityScore: 82,
  elementHarmony: "Air (Libra) + Fire (Leo)",
  famousCouples: ["Blake Lively (Leo) & Ryan Reynolds (Libra)"],
  loveLanguageTips: {
    Libra: "Quality time and artistic experiences",
    Leo: "Public praise and loyal displays"
  },
  communicationStyle: "Elegant and expressive—anchored in mutual respect.",
  intimacyLevel: "High – affectionate and vibrant."
},

"Libra-Virgo": {
  overview: "Harmony seeks precision—balance blends diplomacy with detail.",
  strengths: "Libra smooths Virgo’s critique; Virgo grounds Libra’s indecision.",
  challenges: "Virgo’s practicality vs. Libra’s social focus.",
  advice: "Merge thoughtful logistics with social structure.",
  compatibilityScore: 70,
  elementHarmony: "Air (Libra) + Earth (Virgo)",
  famousCouples: ["Alicia Silverstone (Libra) & Christopher Jarecki (Virgo)"],
  loveLanguageTips: {
    Libra: "Quality time and shared experiences",
    Virgo: "Helpful gestures and consistent dependability"
  },
  communicationStyle: "Balanced and diplomatic—productive when combining minds.",
  intimacyLevel: "Moderate – affectionate with thoughtful structure."
},

"Libra-Libra": {
  overview: "Double harmony—beautiful, sociable, and idealistically aligned.",
  strengths: "Shared love for connection, fairness, and beauty.",
  challenges: "May overthink issues or avoid making firm decisions.",
  advice: "Set clear priorities while maintaining balance.",
  compatibilityScore: 85,
  elementHarmony: "Air + Air",
  famousCouples: ["Eddie Murphy (Libra) & Nicole Mitchell Murphy (Libra)"],
  loveLanguageTips: {
    Libra: "Collaboration and shared aesthetics"
  },
  communicationStyle: "Soothing, balanced, and thoughtfully reflective.",
  intimacyLevel: "High – loving, cooperative, and supportive."
},

"Libra-Scorpio": {
  overview: "Charm meets intensity—graceful yet deeply passionate.",
  strengths: "Libra brings tact; Scorpio brings emotional depth.",
  challenges: "Scorpio’s intensity vs. Libra’s need for harmony.",
  advice: "Scorpio should soften; Libra should engage deeply.",
  compatibilityScore: 65,
  elementHarmony: "Air (Libra) + Water (Scorpio)",
  famousCouples: ["Serena Williams (Libra) & Alexis Ohanian (Scorpio)"],
  loveLanguageTips: {
    Libra: "Quality time and affectionate words",
    Scorpio: "Emotional truth and sensuality"
  },
  communicationStyle: "Courteous meets intense—seek honest, balanced talks.",
  intimacyLevel: "High – deep, transformative intimacy."
},

"Libra-Sagittarius": {
  overview: "Charming explorers—adventurous, sociable, and optimistic.",
  strengths: "Shared enthusiasm for exploration and growth.",
  challenges: "Sagittarius may be too blunt; Libra too hesitant.",
  advice: "Speak honestly and plan thoughtfully.",
  compatibilityScore: 80,
  elementHarmony: "Air (Libra) + Fire (Sagittarius)",
  famousCouples: ["Katie Holmes (Sagittarius) & Tom Cruise (Libra)"],
  loveLanguageTips: {
    Libra: "Cultural experiences and affection",
    Sagittarius: "Adventure and playful humor"
  },
  communicationStyle: "Openhearted and exploratory—great for big-picture planning.",
  intimacyLevel: "High – spirited and connected."
},

"Libra-Capricorn": {
  overview: "Style meets structure—diplomatic meets pragmatic.",
  strengths: "Libra brings grace; Capricorn brings dependability.",
  challenges: "Capricorn may focus too much on duty; Libra on social balance.",
  advice: "Combine practicality with cordiality in decisions.",
  compatibilityScore: 75,
  elementHarmony: "Air (Libra) + Earth (Capricorn)",
  famousCouples: ["Michelle Obama (Libra) & Barack Obama (Capricorn)"],
  loveLanguageTips: {
    Libra: "Quality time and beautiful moments",
    Capricorn: "Acts of service and consistent reliability"
  },
  communicationStyle: "Balanced, respectful, and goal-oriented.",
  intimacyLevel: "Moderate – affectionate through shared purpose."
},

"Libra-Aquarius": {
  overview: "Intellectual match—visionaries united in harmony.",
  strengths: "Shared ideals, humanitarian focus, and social charm.",
  challenges: "Both may avoid deep emotion in favor of rationality.",
  advice: "Prioritize emotional connection as well as mental rapport.",
  compatibilityScore: 85,
  elementHarmony: "Air + Air",
  famousCouples: ["Ellen DeGeneres (Aquarius) & Portia de Rossi (Libra)"],
  loveLanguageTips: {
    Libra: "Collaborative time and shared adventures",
    Aquarius: "Idea exchanges and personal autonomy"
  },
  communicationStyle: "Forward-thinking and diplomatic—balanced in conversation.",
  intimacyLevel: "High – intellectual and emotionally open."
},

"Libra-Pisces": {
  overview: "Romantic dreamers—balanced by intuition and beauty.",
  strengths: "Shared creativity, sensitivity, and empathy.",
  challenges: "Pisces may retreat; Libra may avoid emotional slog.",
  advice: "Share emotional support while exploring creativity.",
  compatibilityScore: 82,
  elementHarmony: "Air (Libra) + Water (Pisces)",
  famousCouples: ["Céline Dion (Leo/Pisces) & René Angélil (Pisces)"], // example
  loveLanguageTips: {
    Libra: "Quality time and thoughtful harmony",
    Pisces: "Emotional reassurance and gentle physical touch"
  },
  communicationStyle: "Gentle and expressive—ideal for emotional depth.",
  intimacyLevel: "High – dreamy, artistic, and deeply connected."
},

  "Sagittarius-Sagittarius": {
  overview: "An adventurous and freedom-loving duo with unstoppable energy.",
  strengths: "Optimism, humor, and shared love for exploration.",
  challenges: "Restlessness and commitment avoidance.",
  advice: "Stay grounded and honor emotional depth.",
  compatibilityScore: 77,
  elementHarmony: "Fire (Sagittarius) + Fire (Sagittarius)",
  famousCouples: ["Brad Pitt (Sagittarius) & Taylor Swift (Sagittarius - mutual admiration)"],
  loveLanguageTips: {
    Sagittarius: "Adventurous experiences and open conversation"
  },
  communicationStyle: "Honest and humorous – sometimes too blunt.",
  intimacyLevel: "Moderate – thrives on spontaneity and fun."
},

    "Sagittarius-Aries": {
  overview: "High-energy fire duo—passion and spontaneity combined.",
  strengths: "Shared optimism, adventure, and direct communication.",
  challenges: "Both can be impatient and impulsive, risking burnout.",
  advice: "Balance excitement with occasional grounding rituals.",
  compatibilityScore: 85,
  elementHarmony: "Fire + Fire",
  famousCouples: ["Brad Pitt (Sagittarius) & Angelina Jolie (Leo, past)"],
  loveLanguageTips: {
    Sagittarius: "Adventure and humor",
    Aries: "Bold acts and frequent encouragement"
  },
  communicationStyle: "Bold, honest, and fast-paced—great for open rapport.",
  intimacyLevel: "High – passionate and enthusiastic."
},

"Sagittarius-Taurus": {
  overview: "Freedom vs. stability—an intriguing but varied relationship.",
  strengths: "Taurus brings grounding; Sagittarius brings excitement.",
  challenges: "Different paces and priorities can cause friction.",
  advice: "Allow space for adventure while keeping roots strong.",
  compatibilityScore: 60,
  elementHarmony: "Fire + Earth",
  famousCouples: ["Justin Bieber (Sagittarius) & Hailey Baldwin (Taurus)"],
  loveLanguageTips: {
    Sagittarius: "Laughter and experiential acts",
    Taurus: "Physical comfort and reliability"
  },
  communicationStyle: "Sagittarius is adventurous; Taurus is steady—balance is essential.",
  intimacyLevel: "Moderate – grows with trust."
},

"Sagittarius-Gemini": {
  overview: "Opposites attract in witty adventure—vibrant and curious duo.",
  strengths: "Shared love for exploration and mental stimulation.",
  challenges: "Restlessness and commitment fears may surface.",
  advice: "Stay anchored emotionally during adventures.",
  compatibilityScore: 85,
  elementHarmony: "Fire + Air",
  famousCouples: ["Taylor Swift (Sagittarius) & Joe Alwyn (Gemini)"],
  loveLanguageTips: {
    Sagittarius: "Adventure and playful banter",
    Gemini: "Words of affirmation and shared ideas"
  },
  communicationStyle: "Open, dynamic, and playful—always moving forward.",
  intimacyLevel: "High – energetic and loving."
},

"Sagittarius-Cancer": {
  overview: "Explorer meets nurturer—freedom faces emotional caution.",
  strengths: "Cancer’s care softens; Sagittarius’ spontaneity enlivens.",
  challenges: "Cancer’s need for security vs. Sagittarius’ desire for freedom.",
  advice: "Cultivate trust and balance between rootedness and exploration.",
  compatibilityScore: 50,
  elementHarmony: "Fire + Water",
  famousCouples: ["Justin Bieber (Sagittarius) & Hailey Baldwin (Cancer)"],
  loveLanguageTips: {
    Sagittarius: "Adventures and humor",
    Cancer: "Emotional reassurance and bonding time"
  },
  communicationStyle: "Direct vs. sensitive—honesty with empathy works best.",
  intimacyLevel: "Moderate – grows stronger over trust."
},

"Sagittarius-Leo": {
  overview: "Fire signs in harmony—lively, confident, and adventurous.",
  strengths: "Shared energy, optimism, and charismatic fun.",
  challenges: "Impulsivity or ego-driven friction can arise.",
  advice: "Align on shared dreams and celebrate each other openly.",
  compatibilityScore: 90,
  elementHarmony: "Fire + Fire",
  famousCouples: ["Brad Pitt (Sagittarius) & Angelina Jolie (Leo)"],
  loveLanguageTips: {
    Sagittarius: "Fun adventures and shared laughter",
    Leo: "Praise, attention, and grand romance"
  },
  communicationStyle: "Spirited, humorous, and bold.",
  intimacyLevel: "Very high – enthusiastic and passionate."
},

"Sagittarius-Virgo": {
  overview: "Free-spirited meets anchored—a journey of growth.",
  strengths: "Virgo brings planning; Sagittarius brings exploration.",
  challenges: "Different paces can cause impatience or rigidity.",
  advice: "Plan adventures together with structure and spontaneity.",
  compatibilityScore: 55,
  elementHarmony: "Fire + Earth",
  famousCouples: ["Brad Pitt (Sagittarius) & Angelina Jolie (Virgo, past)"],
  loveLanguageTips: {
    Sagittarius: "Humor and shared experiences",
    Virgo: "Acts of service and thoughtful stability"
  },
  communicationStyle: "Sagittarius is big-picture; Virgo is detailed—blended communication helps.",
  intimacyLevel: "Moderate – deepens over shared understanding."
},

"Sagittarius-Libra": {
  overview: "Social explorers—culture, ideas, and camaraderie abound.",
  strengths: "Shared love of learning, diplomacy, and fun.",
  challenges: "Libra is indecisive vs. Sagittarius is blunt.",
  advice: "Make decisions together and speak with kindness.",
  compatibilityScore: 80,
  elementHarmony: "Fire + Air",
  famousCouples: ["Katie Holmes (Sagittarius) & Tom Cruise (Libra)"],
  loveLanguageTips: {
    Sagittarius: "Adventures and playful honesty",
    Libra: "Quality time and cultural connection"
  },
  communicationStyle: "Friendly and collaborative—balanced discussions thrive.",
  intimacyLevel: "High – open-hearted and curious."
},

"Sagittarius-Scorpio": {
  overview: "Intense and adventurous—fire meets depth.",
  strengths: "Passion, loyalty, and transformative energy.",
  challenges: "Scorpio’s intensity vs. Sagittarius’ independence.",
  advice: "Scorpio should embrace freedom; Sagittarius should offer emotional space.",
  compatibilityScore: 65,
  elementHarmony: "Fire + Water",
  famousCouples: ["Robert Downey Jr. (Aries) & Susan Downey (Scorpio–Sagittarius mix)"],
  loveLanguageTips: {
    Sagittarius: "Freedom and shared exploration",
    Scorpio: "Emotional depth and quality time"
  },
  communicationStyle: "Bold meets intense—think, speak, and respond with respect.",
  intimacyLevel: "High – deeply passionate and evolving."
},

"Sagittarius-Sagittarius": {
  overview: "Two wanderers—adventure, freedom, and infinite possibility.",
  strengths: "Shared ambition, optimism, and enthusiasm.",
  challenges: "Lack of grounding or excess restlessness.",
  advice: "Create routines within adventure to maintain balance.",
  compatibilityScore: 85,
  elementHarmony: "Fire + Fire",
  famousCouples: ["Nicki Minaj (Sagittarius) & Kenneth Petty (Sagittarius)"],
  loveLanguageTips: {
    Sagittarius: "Adventure, laughter, and free expression"
  },
  communicationStyle: "Open, spontaneous, and unfiltered.",
  intimacyLevel: "High – adventurous and loving."
},

"Sagittarius-Capricorn": {
  overview: "Dreamer meets realist—a balance of vision and structure.",
  strengths: "Capricorn organises; Sagittarius inspires.",
  challenges: "Different tempos—Sagittarius wants speed, Capricorn plans carefully.",
  advice: "Plan long-term with room for surprise.",
  compatibilityScore: 70,
  elementHarmony: "Fire + Earth",
  famousCouples: ["Davide Gramicci (Sagittarius) & Others"],
  loveLanguageTips: {
    Sagittarius: "Adventure and freedom",
    Capricorn: "Stability and consistent support"
  },
  communicationStyle: "Big picture vs. detail-focused—listen to build clarity.",
  intimacyLevel: "High – balanced by mutual respect."
},

"Sagittarius-Aquarius": {
  overview: "Visionary duo—originality and innovation meet wanderlust.",
  strengths: "Shared ideals, independence, and social freedom.",
  challenges: "Detached emotional expression may make depth difficult.",
  advice: "Prioritise emotional check-ins and shared ideals.",
  compatibilityScore: 82,
  elementHarmony: "Fire + Air",
  famousCouples: ["Brad Pitt (Aquarius) & Jennifer Aniston (Sagittarius)"],
  loveLanguageTips: {
    Sagittarius: "Frequent adventure and witty talk",
    Aquarius: "Idea sharing and individual space"
  },
  communicationStyle: "Enthusiastic and future-focused.",
  intimacyLevel: "High – emotionally curious and innovative."
},

"Sagittarius-Pisces": {
  overview: "Dream meets adventure—emotional freedom and creative exploration.",
  strengths: "Pisces deepens emotion; Sagittarius expands horizons.",
  challenges: "Pisces may feel overwhelmed; Sagittarius may feel held back.",
  advice: "Balance emotional understanding with spontaneity.",
  compatibilityScore: 60,
  elementHarmony: "Fire + Water",
  famousCouples: ["Jon Bon Jovi (Cancer) & Dorothea Hurley (Pisces—Sagittarius mix)"],
  loveLanguageTips: {
    Sagittarius: "Adventure and playful energy",
    Pisces: "Emotional support and spiritual connection"
  },
  communicationStyle: "Playful meets poetic—communicate with warmth.",
  intimacyLevel: "Moderate – soulful when emotionally aligned."

    },

      "Pisces-Pisces": {
  overview: "A dreamy, romantic connection filled with empathy and imagination.",
  strengths: "Compassion, creativity, and deep emotional bonding.",
  challenges: "Escapism and lack of structure.",
  advice: "Stay grounded and support each other’s dreams with action.",
  compatibilityScore: 81,
  elementHarmony: "Water (Pisces) + Water (Pisces)",
  famousCouples: ["Rihanna (Pisces) & Erykah Badu (Pisces - artistic parallels)"],
  loveLanguageTips: {
    Pisces: "Emotional presence, dreamy romance, and heartfelt gestures"
  },
  communicationStyle: "Subtle, poetic, and intuitive – may lack clarity at times.",
  intimacyLevel: "Very high – soulful and romantic connection."
},

    "Aquarius-Aries": {
  overview: "An exciting match of pioneering energy and originality.",
  strengths: "Shared enthusiasm for innovation and adventure.",
  challenges: "Both can be stubborn and independent.",
  advice: "Balance freedom with commitment and respect each other’s space.",
  compatibilityScore: 70,
  elementHarmony: "Air (Aquarius) + Fire (Aries)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Intellectual connection and unique experiences",
    Aries: "Bold gestures and physical affection"
  },
  communicationStyle: "Energetic and direct – love to brainstorm and take risks.",
  intimacyLevel: "High – adventurous and passionate."
},

"Aquarius-Taurus": {
  overview: "A blend of stability and unconventional thinking.",
  strengths: "Taurus provides grounding while Aquarius brings new ideas.",
  challenges: "Taurus may resist change; Aquarius craves freedom.",
  advice: "Find common goals and appreciate differences.",
  compatibilityScore: 60,
  elementHarmony: "Air (Aquarius) + Earth (Taurus)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Freedom and mental stimulation",
    Taurus: "Physical affection and steady routines"
  },
  communicationStyle: "Taurus is practical; Aquarius is idealistic – they balance each other.",
  intimacyLevel: "Moderate – needs effort to build trust."
},

"Aquarius-Gemini": {
  overview: "A vibrant meeting of minds with endless curiosity.",
  strengths: "Excellent communication and shared love of freedom.",
  challenges: "May struggle with emotional depth.",
  advice: "Work on opening up emotionally to deepen connection.",
  compatibilityScore: 85,
  elementHarmony: "Air (Aquarius) + Air (Gemini)",
  famousCouples: ["Oprah Winfrey (Aquarius) & Ellen DeGeneres (Aquarius - friendship)"],
  loveLanguageTips: {
    Aquarius: "Unique ideas and space to be themselves",
    Gemini: "Playful banter and mental stimulation"
  },
  communicationStyle: "Fast-paced and lively – great conversationalists.",
  intimacyLevel: "High – thrives on mental and physical freedom."
},

"Aquarius-Cancer": {
  overview: "An unusual but potentially enriching pairing.",
  strengths: "Cancer provides emotional warmth; Aquarius offers intellectual stimulation.",
  challenges: "Cancer seeks security; Aquarius values independence.",
  advice: "Create space for emotional needs and freedom.",
  compatibilityScore: 55,
  elementHarmony: "Air (Aquarius) + Water (Cancer)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Freedom and inventive gestures",
    Cancer: "Affection and reassurance"
  },
  communicationStyle: "Can be emotionally mismatched, but with effort can grow.",
  intimacyLevel: "Moderate – needs nurturing and trust."
},

"Aquarius-Leo": {
  overview: "A dynamic and electrifying match.",
  strengths: "Shared love for socializing and excitement.",
  challenges: "Leo craves attention; Aquarius values independence.",
  advice: "Balance ego and respect individuality.",
  compatibilityScore: 75,
  elementHarmony: "Air (Aquarius) + Fire (Leo)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Intellectual freedom and quirky surprises",
    Leo: "Praise and grand gestures"
  },
  communicationStyle: "Lively and entertaining – can be both challenging and fun.",
  intimacyLevel: "High – passionate and playful."
},

"Aquarius-Virgo": {
  overview: "A mix of practical care and visionary ideas.",
  strengths: "Virgo’s detail-oriented nature complements Aquarius’ big-picture thinking.",
  challenges: "Virgo can be critical; Aquarius resists constraints.",
  advice: "Appreciate each other’s unique approaches.",
  compatibilityScore: 65,
  elementHarmony: "Air (Aquarius) + Earth (Virgo)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Freedom and intellectual engagement",
    Virgo: "Acts of service and thoughtful care"
  },
  communicationStyle: "Balanced between logic and innovation.",
  intimacyLevel: "Moderate – grows with patience."
},

"Aquarius-Libra": {
  overview: "A harmonious match with shared ideals and social grace.",
  strengths: "Strong mental connection and love for fairness.",
  challenges: "Both can avoid conflict and suppress emotions.",
  advice: "Practice open communication and emotional honesty.",
  compatibilityScore: 80,
  elementHarmony: "Air (Aquarius) + Air (Libra)",
  famousCouples: ["Ellen DeGeneres (Aquarius) & Portia de Rossi (Libra)"],
  loveLanguageTips: {
    Aquarius: "Unique ideas and space to be authentic",
    Libra: "Words of affirmation and shared beauty"
  },
  communicationStyle: "Smooth, diplomatic, and thoughtful.",
  intimacyLevel: "High – intellectually and emotionally connected."
},

"Aquarius-Scorpio": {
  overview: "An unconventional pairing with intense contrasts.",
  strengths: "Innovation balanced with emotional depth.",
  challenges: "Aquarius’ detachment vs Scorpio’s intensity.",
  advice: "Find middle ground between independence and intimacy.",
  compatibilityScore: 58,
  elementHarmony: "Air (Aquarius) + Water (Scorpio)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Freedom and mental stimulation",
    Scorpio: "Loyalty and emotional honesty"
  },
  communicationStyle: "Challenging but stimulating conversations.",
  intimacyLevel: "Moderate – requires effort for emotional bonding."
},

"Aquarius-Sagittarius": {
  overview: "An adventurous and optimistic pairing full of freedom.",
  strengths: "Shared love of exploration and open-mindedness.",
  challenges: "Can be restless and commitment-averse.",
  advice: "Stay grounded and nurture emotional connection.",
  compatibilityScore: 85,
  elementHarmony: "Air (Aquarius) + Fire (Sagittarius)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Intellectual freedom and new experiences",
    Sagittarius: "Adventurous activities and honesty"
  },
  communicationStyle: "Energetic and inspiring – loves to explore ideas.",
  intimacyLevel: "High – thrives on freedom and excitement."
},

"Aquarius-Capricorn": {
  overview: "A pairing of tradition and innovation.",
  strengths: "Capricorn’s stability balances Aquarius’ vision.",
  challenges: "Capricorn may find Aquarius unpredictable; Aquarius may see Capricorn as rigid.",
  advice: "Respect each other’s pace and values.",
  compatibilityScore: 65,
  elementHarmony: "Air (Aquarius) + Earth (Capricorn)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Freedom and intellectual connection",
    Capricorn: "Practical support and loyalty"
  },
  communicationStyle: "Reserved but complementary.",
  intimacyLevel: "Moderate – grows with effort."
},

"Aquarius-Aquarius": {
  overview: "An intellectually stimulating and unconventional match.",
  strengths: "Innovation, independence, and shared ideals.",
  challenges: "Emotional detachment and unpredictability.",
  advice: "Balance logic with emotional presence.",
  compatibilityScore: 75,
  elementHarmony: "Air (Aquarius) + Air (Aquarius)",
  famousCouples: ["Oprah Winfrey (Aquarius) & Ellen DeGeneres (Aquarius - friendship)"],
  loveLanguageTips: {
    Aquarius: "Thoughtful ideas, unique surprises, and freedom to be authentic"
  },
  communicationStyle: "Analytical and forward-thinking – may avoid emotional topics.",
  intimacyLevel: "Moderate – thrives on mental and creative stimulation."
},

"Aquarius-Pisces": {
  overview: "A blend of imagination and intellect.",
  strengths: "Creative and empathetic connection.",
  challenges: "Pisces’ sensitivity vs Aquarius’ detachment.",
  advice: "Practice empathy and open emotional exchange.",
  compatibilityScore: 70,
  elementHarmony: "Air (Aquarius) + Water (Pisces)",
  famousCouples: [],
  loveLanguageTips: {
    Aquarius: "Mental stimulation and freedom",
    Pisces: "Emotional presence and dreamy romance"
  },
  communicationStyle: "Thoughtful and intuitive with potential for growth.",
  intimacyLevel: "Moderate – develops with mutual understanding."
},

      "Scorpio-Aries": {
  overview: "A powerful and intense match driven by passion and willpower.",
  strengths: "Magnetic chemistry and strong loyalty.",
  challenges: "Power struggles and stubbornness.",
  advice: "Balance control with trust and open communication.",
  compatibilityScore: 68,
  elementHarmony: "Water (Scorpio) + Fire (Aries)",
  famousCouples: ["Robert Downey Jr. (Aries) & Susan Downey (Scorpio)"],
  loveLanguageTips: {
    Scorpio: "Deep emotional connection and loyalty",
    Aries: "Physical touch and acts of bravery"
  },
  communicationStyle: "Intense and direct – can lead to dramatic moments or deep understanding.",
  intimacyLevel: "Extremely high – sensual, transformative, and magnetic."
},

"Scorpio-Taurus": {
  overview: "A grounding and passionate union with deep emotional roots.",
  strengths: "Trust, loyalty, and balance of passion with stability.",
  challenges: "Jealousy and stubbornness can test the bond.",
  advice: "Nurture honesty and allow space for independence.",
  compatibilityScore: 85,
  elementHarmony: "Water (Scorpio) + Earth (Taurus)",
  famousCouples: ["Bill Gates (Scorpio) & Melinda Gates (Taurus)"],
  loveLanguageTips: {
    Scorpio: "Emotional intensity and physical touch",
    Taurus: "Physical affection and consistent routines"
  },
  communicationStyle: "Slow and steady, with a focus on emotional depth.",
  intimacyLevel: "Very high – strong physical and emotional connection."
},

"Scorpio-Gemini": {
  overview: "An intriguing mix of intensity and playfulness.",
  strengths: "Mental stimulation and emotional passion.",
  challenges: "Gemini’s need for variety vs Scorpio’s intensity.",
  advice: "Practice patience and respect differing needs.",
  compatibilityScore: 62,
  elementHarmony: "Water (Scorpio) + Air (Gemini)",
  famousCouples: [],
  loveLanguageTips: {
    Scorpio: "Loyalty and deep emotional bonds",
    Gemini: "Fun conversation and spontaneity"
  },
  communicationStyle: "Scorpio seeks depth, Gemini craves variety – communication can be a challenge.",
  intimacyLevel: "Moderate – chemistry builds with effort and understanding."
},

"Scorpio-Cancer": {
  overview: "A deeply emotional and intuitive connection.",
  strengths: "Mutual understanding and support.",
  challenges: "Moodiness and sensitivity may lead to tension.",
  advice: "Keep communication open and provide reassurance.",
  compatibilityScore: 90,
  elementHarmony: "Water (Scorpio) + Water (Cancer)",
  famousCouples: ["Eminem (Scorpio) & Kim Scott (Cancer)"],
  loveLanguageTips: {
    Scorpio: "Emotional depth and loyalty",
    Cancer: "Affection and nurturing"
  },
  communicationStyle: "Subtle and empathetic – feelings are often communicated without words.",
  intimacyLevel: "Very high – soulful and emotionally fulfilling."
},

"Scorpio-Leo": {
  overview: "A passionate and dynamic pairing full of intensity and flair.",
  strengths: "Strong chemistry and mutual admiration.",
  challenges: "Clashes of pride and control issues.",
  advice: "Respect each other's space and strengths.",
  compatibilityScore: 70,
  elementHarmony: "Water (Scorpio) + Fire (Leo)",
  famousCouples: [],
  loveLanguageTips: {
    Scorpio: "Physical intimacy and loyalty",
    Leo: "Admiration and grand romantic gestures"
  },
  communicationStyle: "Bold and intense – can be both thrilling and challenging.",
  intimacyLevel: "High – fiery and magnetic."
},

"Scorpio-Virgo": {
  overview: "A complementary match combining depth with practicality.",
  strengths: "Mutual support and problem-solving.",
  challenges: "Virgo’s critical nature vs Scorpio’s sensitivity.",
  advice: "Embrace imperfections and communicate openly.",
  compatibilityScore: 75,
  elementHarmony: "Water (Scorpio) + Earth (Virgo)",
  famousCouples: [],
  loveLanguageTips: {
    Scorpio: "Emotional depth and loyalty",
    Virgo: "Acts of service and careful attention"
  },
  communicationStyle: "Thoughtful and intense – can form a strong intellectual bond.",
  intimacyLevel: "Moderate to high – connection grows with trust."
},

"Scorpio-Libra": {
  overview: "A balancing act of intensity and harmony.",
  strengths: "Passion paired with diplomacy.",
  challenges: "Libra’s indecision vs Scorpio’s intensity.",
  advice: "Practice patience and open communication.",
  compatibilityScore: 65,
  elementHarmony: "Water (Scorpio) + Air (Libra)",
  famousCouples: [],
  loveLanguageTips: {
    Scorpio: "Deep emotional connection",
    Libra: "Words of affirmation and shared experiences"
  },
  communicationStyle: "Dynamic conversations that need balance to avoid conflict.",
  intimacyLevel: "Moderate – requires effort to harmonize differences."
},

"Scorpio-Scorpio": {
  overview: "An intense and transformative connection between two deep souls.",
  strengths: "Emotional depth, loyalty, and mystery.",
  challenges: "Power struggles and emotional volatility.",
  advice: "Cultivate trust and allow vulnerability to lead.",
  compatibilityScore: 79,
  elementHarmony: "Water (Scorpio) + Water (Scorpio)",
  famousCouples: ["Katy Perry (Scorpio) & Julia Roberts (Scorpio - friendship)"],
  loveLanguageTips: {
    Scorpio: "Loyalty, emotional depth, and physical intimacy"
  },
  communicationStyle: "Penetrating and powerful – can be unspoken but felt deeply.",
  intimacyLevel: "Very high – magnetic and transformative."
},

"Scorpio-Sagittarius": {
  overview: "A passionate yet challenging mix of intensity and freedom.",
  strengths: "Mutual fascination and adventure.",
  challenges: "Scorpio’s depth vs Sagittarius’ need for independence.",
  advice: "Respect boundaries and encourage honesty.",
  compatibilityScore: 60,
  elementHarmony: "Water (Scorpio) + Fire (Sagittarius)",
  famousCouples: [],
  loveLanguageTips: {
    Scorpio: "Emotional loyalty",
    Sagittarius: "Open communication and adventure"
  },
  communicationStyle: "Sometimes clashing but with potential for growth.",
  intimacyLevel: "Moderate – needs balance."
},

"Scorpio-Capricorn": {
  overview: "A strong and determined pairing focused on shared goals.",
  strengths: "Discipline, loyalty, and ambition.",
  challenges: "Work focus can overshadow emotional connection.",
  advice: "Make time for intimacy and emotional openness.",
  compatibilityScore: 85,
  elementHarmony: "Water (Scorpio) + Earth (Capricorn)",
  famousCouples: ["Bill Clinton (Scorpio) & Hillary Clinton (Capricorn)"],
  loveLanguageTips: {
    Scorpio: "Emotional depth and loyalty",
    Capricorn: "Practical support and consistency"
  },
  communicationStyle: "Reserved but powerful – builds slowly but solidly.",
  intimacyLevel: "High – deep and lasting connection."
},

"Scorpio-Aquarius": {
  overview: "An unconventional and intense bond with contrasting energies.",
  strengths: "Innovation and emotional depth.",
  challenges: "Aquarius’ detachment vs Scorpio’s intensity.",
  advice: "Find balance between independence and intimacy.",
  compatibilityScore: 58,
  elementHarmony: "Water (Scorpio) + Air (Aquarius)",
  famousCouples: [],
  loveLanguageTips: {
    Scorpio: "Loyalty and emotional honesty",
    Aquarius: "Freedom and intellectual connection"
  },
  communicationStyle: "Unpredictable but stimulating conversations.",
  intimacyLevel: "Moderate – requires effort to connect emotionally."
},

"Scorpio-Pisces": {
  overview: "A deeply intuitive and spiritual connection.",
  strengths: "Empathy, emotional understanding, and support.",
  challenges: "Both can be overly sensitive or avoid confrontation.",
  advice: "Practice clear communication and honesty.",
  compatibilityScore: 88,
  elementHarmony: "Water (Scorpio) + Water (Pisces)",
  famousCouples: ["Eva Mendes (Pisces) & Ryan Gosling (Scorpio)"],
  loveLanguageTips: {
    Scorpio: "Emotional intensity and loyalty",
    Pisces: "Dreamy romance and emotional presence"
  },
  communicationStyle: "Gentle and empathetic – emotions flow deeply.",
  intimacyLevel: "Very high – soulful and healing."
},

  "Capricorn-Aries": {
  overview: "A challenging but rewarding pairing balancing ambition and action.",
  strengths: "Capricorn’s discipline complements Aries’ enthusiasm.",
  challenges: "Aries’ impulsiveness vs Capricorn’s caution.",
  advice: "Be patient and respect each other’s pace.",
  compatibilityScore: 65,
  elementHarmony: "Earth (Capricorn) + Fire (Aries)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Practical support and reliability",
    Aries: "Bold gestures and spontaneity"
  },
  communicationStyle: "Direct but sometimes cautious.",
  intimacyLevel: "Moderate – grows with mutual respect."
},

"Capricorn-Taurus": {
  overview: "A grounded and stable match with shared values.",
  strengths: "Strong commitment, loyalty, and practicality.",
  challenges: "Both can be stubborn and resistant to change.",
  advice: "Celebrate each other’s strengths and stay flexible.",
  compatibilityScore: 85,
  elementHarmony: "Earth (Capricorn) + Earth (Taurus)",
  famousCouples: ["Michelle Obama (Capricorn) & Barack Obama (Taurus)"],
  loveLanguageTips: {
    Capricorn: "Acts of service and consistency",
    Taurus: "Physical touch and steady routines"
  },
  communicationStyle: "Steady, thoughtful, and supportive.",
  intimacyLevel: "High – deep, lasting connection."
},

"Capricorn-Gemini": {
  overview: "A mix of practicality and curiosity.",
  strengths: "Gemini brings lightness; Capricorn brings structure.",
  challenges: "Gemini’s spontaneity clashes with Capricorn’s routine.",
  advice: "Appreciate differences and communicate openly.",
  compatibilityScore: 55,
  elementHarmony: "Earth (Capricorn) + Air (Gemini)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Reliability and practical help",
    Gemini: "Fun conversation and mental stimulation"
  },
  communicationStyle: "Varied – needs effort to find common ground.",
  intimacyLevel: "Moderate – requires patience."
},

"Capricorn-Cancer": {
  overview: "A nurturing and ambitious duo focused on security.",
  strengths: "Mutual support, loyalty, and emotional depth.",
  challenges: "Capricorn’s restraint vs Cancer’s sensitivity.",
  advice: "Practice emotional openness and trust.",
  compatibilityScore: 80,
  elementHarmony: "Earth (Capricorn) + Water (Cancer)",
  famousCouples: ["Denzel Washington (Capricorn) & Pauletta Washington (Cancer)"],
  loveLanguageTips: {
    Capricorn: "Practical support and dedication",
    Cancer: "Affection and reassurance"
  },
  communicationStyle: "Warm and steady, with deep emotional bonds.",
  intimacyLevel: "High – emotionally fulfilling and secure."
},

"Capricorn-Leo": {
  overview: "A powerful match balancing ambition and charisma.",
  strengths: "Mutual respect and drive for success.",
  challenges: "Leo’s need for attention vs Capricorn’s focus on work.",
  advice: "Make time for fun and appreciation.",
  compatibilityScore: 70,
  elementHarmony: "Earth (Capricorn) + Fire (Leo)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Practical acts and loyalty",
    Leo: "Praise and grand romantic gestures"
  },
  communicationStyle: "Determined and expressive, sometimes competing for control.",
  intimacyLevel: "Moderate to high – grows with balance."
},

"Capricorn-Virgo": {
  overview: "A highly compatible and practical match.",
  strengths: "Shared values, discipline, and attention to detail.",
  challenges: "Can be overly cautious or critical.",
  advice: "Practice patience and open communication.",
  compatibilityScore: 88,
  elementHarmony: "Earth (Capricorn) + Earth (Virgo)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Acts of service and consistency",
    Virgo: "Thoughtful care and reliability"
  },
  communicationStyle: "Pragmatic and supportive.",
  intimacyLevel: "High – steady and deeply connected."
},

"Capricorn-Libra": {
  overview: "A mix of ambition and charm.",
  strengths: "Capricorn’s focus balances Libra’s social grace.",
  challenges: "Libra’s indecision vs Capricorn’s drive.",
  advice: "Support each other’s strengths and compromise.",
  compatibilityScore: 65,
  elementHarmony: "Earth (Capricorn) + Air (Libra)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Practical support and reliability",
    Libra: "Words of affirmation and shared experiences"
  },
  communicationStyle: "Balanced but needs effort to sync.",
  intimacyLevel: "Moderate – requires patience."
},

"Capricorn-Scorpio": {
  overview: "A strong and determined pairing focused on shared goals.",
  strengths: "Discipline, loyalty, and ambition.",
  challenges: "Work focus can overshadow emotional connection.",
  advice: "Make time for intimacy and emotional openness.",
  compatibilityScore: 85,
  elementHarmony: "Earth (Capricorn) + Water (Scorpio)",
  famousCouples: ["Bill Clinton (Scorpio) & Hillary Clinton (Capricorn)"],
  loveLanguageTips: {
    Capricorn: "Practical support and consistency",
    Scorpio: "Emotional depth and loyalty"
  },
  communicationStyle: "Reserved but powerful – builds slowly but solidly.",
  intimacyLevel: "High – deep and lasting connection."
},

"Capricorn-Sagittarius": {
  overview: "A mix of stability and adventure.",
  strengths: "Sagittarius brings excitement; Capricorn offers grounding.",
  challenges: "Sagittarius’ restlessness vs Capricorn’s need for structure.",
  advice: "Balance freedom and responsibility.",
  compatibilityScore: 60,
  elementHarmony: "Earth (Capricorn) + Fire (Sagittarius)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Reliability and practical help",
    Sagittarius: "Adventure and honesty"
  },
  communicationStyle: "Different rhythms require effort to align.",
  intimacyLevel: "Moderate – needs compromise."
},

"Capricorn-Capricorn": {
  overview: "A power couple focused on ambition, loyalty, and long-term success.",
  strengths: "Shared goals, discipline, and mutual respect.",
  challenges: "Workaholism and emotional restraint.",
  advice: "Make time for joy and vulnerability.",
  compatibilityScore: 83,
  elementHarmony: "Earth (Capricorn) + Earth (Capricorn)",
  famousCouples: ["Michelle Obama (Capricorn) & Blue Ivy (Capricorn - family bond)"],
  loveLanguageTips: {
    Capricorn: "Practical support, consistency, and acts of loyalty"
  },
  communicationStyle: "Reserved but direct – action often speaks louder than words.",
  intimacyLevel: "High – deep and lasting connection develops over time."
},

"Capricorn-Aquarius": {
  overview: "A pairing of tradition and innovation.",
  strengths: "Capricorn’s stability balances Aquarius’ vision.",
  challenges: "Capricorn may find Aquarius unpredictable; Aquarius may see Capricorn as rigid.",
  advice: "Respect each other’s pace and values.",
  compatibilityScore: 65,
  elementHarmony: "Earth (Capricorn) + Air (Aquarius)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Practical support and loyalty",
    Aquarius: "Freedom and intellectual connection"
  },
  communicationStyle: "Reserved but complementary.",
  intimacyLevel: "Moderate – grows with effort."
},

"Capricorn-Pisces": {
  overview: "A nurturing and dreamy connection.",
  strengths: "Pisces’ compassion balances Capricorn’s discipline.",
  challenges: "Pisces’ idealism vs Capricorn’s realism.",
  advice: "Support each other’s dreams while staying grounded.",
  compatibilityScore: 75,
  elementHarmony: "Earth (Capricorn) + Water (Pisces)",
  famousCouples: [],
  loveLanguageTips: {
    Capricorn: "Acts of service and reliability",
    Pisces: "Emotional presence and creativity"
  },
  communicationStyle: "Gentle and supportive with room for growth.",
  intimacyLevel: "Moderate to high – deepens with trust."
},


  };
  
  
   
  
  const relationshipTypes = ["heterosexual", "gay", "lesbian", "lgbtq"];
  
  const compatibility = {};
  
  // This loop generates *all* sorted combinations
  for (let i = 0; i < zodiacSigns.length; i++) {
    for (let j = i; j < zodiacSigns.length; j++) {  // <-- changed from i + 1
      const sign1 = zodiacSigns[i];
      const sign2 = zodiacSigns[j];
      const baseKey = `${sign1}-${sign2}`;
  
      compatibility[baseKey] =
        existingCompatibility[baseKey] ||
        `Compatibility information for ${sign1} and ${sign2} is not yet defined.`;
  
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
  