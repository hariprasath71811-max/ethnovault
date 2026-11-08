/* ════════════════════════════════════════════════════════════
   EthnoVault — living archive experience
   All recordings, translations and council actions are simulated.
   ════════════════════════════════════════════════════════════ */
'use strict';

const BASE_ENTRIES = [
  {
    id: 'sami-aurora',
    title: 'Sámi Northern Lights Folklore',
    category: 'Oral Folklore',
    region: 'Arctic Lapland',
    regionKey: 'Arctic Lapland',
    community: 'Sámi',
    place: 'Sápmi, Arctic Lapland',
    status: 'Oral Only',
    statusKey: 'oral',
    excerpt: 'Guovssahas — the “fox fires” — are not weather. They are ancestors moving across the sky, and the old songs teach when to look, and when to lower your eyes.',
    story: [
      'Across Sápmi, the northern lights are called guovssahas, a name that carries the idea of a fox’s tail sweeping sparks across the snow. In many families the lights are spoken of as ancestors, and children are taught a quiet etiquette: do not whistle, do not shout, do not point.',
      'The joik is not a song about a person so much as a way of holding them in sound. This recording was made at home, with the family’s permission, and is shared here in the hope that the etiquette travels with the melody.'
    ],
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Green northern lights above a snow-covered forest',
    language: 'Northern Sámi',
    contributor: 'Áilu Niillas & family',
    recorded: '1978 · remastered 2024',
    duration: 192,
    verified: true,
    rights: 'Shared for listening — no reuse without family permission',
    tags: ['aurora', 'joik', 'ancestors', 'arctic', 'sky'],
    map: { x: 572, y: 92 },
    transcript: {
      original: [
        'Guovssahasat leat áhčáide mii, johtet almmis.',
        'Dat čuvvot min, go mii vázzit duoddaris.',
        'Don ii galggat čuorvut sidjiide — várut ja guldal.'
      ],
      english: [
        'The northern lights are our ancestors, moving across the sky.',
        'They follow us when we walk in the open fell.',
        'You must not shout at them — be careful, and listen.'
      ]
    }
  },
  {
    id: 'ayahuasca-botany',
    title: 'Amazonian Ayahuasca Botany & Ecological Respect',
    category: 'Ethnomedicine',
    region: 'Amazon Basin, Peru',
    regionKey: 'Amazon Basin',
    community: 'Riverside Quechua communities',
    place: 'Ucayali, Amazon Basin',
    status: 'Verified by Council',
    statusKey: 'verified',
    excerpt: 'Ayahuasca is a relationship, not a product. Its preparation is governed by seasonal cycles, plant kinship and the permission of the riverside community that tends it.',
    story: [
      'In the Amazon, the vine and its companion plants are tended as relatives. Harvesting follows the flood cycle; preparation is a collective responsibility; and knowledge of the brew is inseparable from the songs, diet and ecological obligations that surround it.',
      'This record documents botany and ecological respect — never dosage or ceremony instructions. The community retains the right to withhold the parts of this knowledge that should not circulate publicly.'
    ],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sunlight filtering through dense rainforest canopy',
    language: 'Quechua (Amazonian)',
    contributor: 'Sachamama Community Council',
    recorded: '2022 · field notes',
    duration: 218,
    verified: true,
    rights: 'Public ecology notes · ceremony knowledge withheld',
    tags: ['botany', 'rainforest', 'vine', 'ecology', 'medicine'],
    map: { x: 350, y: 350 },
    transcript: {
      original: [
        'Sacha mama, yaku mama, allpa mama, kawsay mama.',
        'Sacha uywa, yaku uywa — manam saqirinchikchu.',
        'Wiñay kawsay, wiñay yachay, allpa mama.'
      ],
      english: [
        'Mother forest, mother water, mother earth, mother life.',
        'The forest and the water are living kin — we do not abandon them.',
        'Ever-living, ever-learning; mother earth.'
      ]
    }
  },
  {
    id: 'toda-embroidery',
    title: 'Toda Tribal Embroidery & Songs',
    category: 'Traditional Crafts',
    region: 'Nilgiris, India',
    regionKey: 'Nilgiris',
    community: 'Toda',
    place: 'Muthanad Mund, Nilgiris',
    status: 'Severely Endangered',
    statusKey: 'endangered',
    excerpt: 'Every Toda embroidery motif is also a song. The pukhoor stitch travels in curves, but the patterns are taught by singing the landscape — hills, buffalo, sacred groves.',
    story: [
      'Toda women work the pukhoor stitch in dense, reversible geometry, wrapping cloth in red and black thread. The patterns are named for the hills, the buffalo and the sacred groves that anchor Toda life in the Nilgiris.',
      'As fewer young women learn the songs that carry the motifs, a women-led collective is recording both thread and voice together — refusing to separate the craft from the language that explains it.'
    ],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Terraced tea gardens in the misty Nilgiri hills',
    language: 'Toda (Dravidian)',
    contributor: 'Toda Women’s Embroidery Collective',
    recorded: '2023 · collective archive',
    duration: 154,
    verified: true,
    rights: 'Community archive · designs not for commercial reproduction',
    tags: ['embroidery', 'textile', 'nilgiris', 'songs', 'craft'],
    map: { x: 716, y: 268 },
    transcript: {
      original: [
        'Poo poo, poo poo, thodua poo, kan poo.',
        'Mannu poo, neer poo, oththu poo, poo.',
        'Korr poo, thodua — poo poo, poo.'
      ],
      english: [
        'Bloom, bloom; the hills bloom, the eye blooms.',
        'Earth blooms, water blooms, together they bloom.',
        'The buffalo path blooms — bloom, bloom.'
      ]
    }
  },
  {
    id: 'hokulea-navigation',
    title: 'Hōkūleʻa Star Navigation Chants',
    category: 'Native Languages',
    region: 'Hawaiʻi, USA',
    regionKey: 'Hawaiʻi',
    community: 'Kānaka Maoli',
    place: 'Oʻahu & Papahānaumokuākea',
    status: 'Verified by Council',
    statusKey: 'verified',
    excerpt: 'The sky is a chart, the canoe is a classroom. Hawaiian wayfinding chants name the stars in sequence, turning a voyage into a story that can be remembered for generations.',
    story: [
      'Hōkūleʻa’s voyages helped return open-ocean wayfinding to the Pacific, guided by navigators who read stars, swells and seabirds rather than instruments. The chants are both navigational sequence and genealogy.',
      'This excerpt was shared for language learners, with the understanding that a chant is not a map you can simply pick up: it belongs to a lineage, a canoe, and a community.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Turquoise Pacific water meeting a pale sand beach',
    language: 'ʻŌlelo Hawaiʻi',
    contributor: 'Papahānaumokuākea wayfinding ʻohana',
    recorded: '2019 · ocean classroom',
    duration: 205,
    verified: true,
    rights: 'Shared for language learning · navigation lineage reserved',
    tags: ['navigation', 'stars', 'voyaging', 'hawaiian', 'ocean'],
    map: { x: 142, y: 258 },
    transcript: {
      original: [
        'Hōkū paʻa, hōkū hele, alakaʻi mai iā mākou.',
        'Ke kai nui, ke kai lani — e holo kākou.',
        'ʻIke i ka hōkū, ʻike i ka moana, ʻike i ka ʻāina.'
      ],
      english: [
        'Fixed star, moving star, guide us.',
        'The great sea, the heavenly sea — let us voyage.',
        'Know the star, know the ocean, know the land.'
      ]
    }
  },
  {
    id: 'ainu-yukar',
    title: 'Ainu Yukar Epic of the Owl',
    category: 'Native Languages',
    region: 'Hokkaido, Japan',
    regionKey: 'Hokkaido',
    community: 'Ainu',
    place: 'Hokkaidō, Japan',
    status: 'Severely Endangered',
    statusKey: 'endangered',
    excerpt: 'Yukar are epics sung from the perspective of kamuy — the owl, the bear, the fox. The owl’s song is a gift of wisdom, carried by a rhythm that mimics wings.',
    story: [
      'In Ainu oral epic, kamuy speak in the first person. The owl’s yukar is a visitor’s song: it describes the world from above, offers counsel, and returns to the sky. Rhythm and repetition are not decoration; they are the architecture of memory.',
      'Few fluent speakers of Ainu remain, and revitalisation work is led by Ainu communities themselves. This public excerpt is shared for learners, with songs and ceremonies outside the excerpt remaining under community care.'
    ],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Quiet Japanese forest shrine beneath tall trees',
    language: 'Ainu (Hokkaidō)',
    contributor: 'Ainu language circle, Sapporo',
    recorded: '2021 · language nest',
    duration: 176,
    verified: true,
    rights: 'Public teaching excerpt · full epic withheld',
    tags: ['epic', 'owl', 'kamuy', 'language', 'hokkaido'],
    map: { x: 888, y: 160 },
    transcript: {
      original: [
        'Ya ya ya, kamuy yukar, cikap kamuy, ya ya.',
        'Enkore ya, enkore ya — kanto or ta.',
        'Ya ya, cikap, ya ya — aynu itak.'
      ],
      english: [
        'Ya ya ya, song of the kamuy, owl kamuy, ya ya.',
        'Give me words, give me words — from the sky above.',
        'Ya ya, owl, ya ya — the Ainu language.'
      ]
    }
  },
  {
    id: 'maori-rongoa',
    title: 'Māori Rongoā Forest Remedies',
    category: 'Ethnomedicine',
    region: 'Aotearoa, New Zealand',
    regionKey: 'Aotearoa',
    community: 'Ngāti Porou',
    place: 'Te Tairāwhiti, Aotearoa',
    status: 'Oral Only',
    statusKey: 'oral',
    excerpt: 'Rongoā is not a pharmacy in the forest. It is a relationship between people, plants, water and atua — governed by tikanga and the permission of the local marae.',
    story: [
      'Rongoā Māori describes healing as a whole-of-life practice: the forest, the river, the whānau and the spiritual world are not separate from health. Harvesting follows season, prayer and permission; a plant is never simply an ingredient.',
      'This record shares the ethics of relationship, not recipes or dosage. The community retains authority over which plant knowledge is taught, to whom, and in what context.'
    ],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Ancient mossy forest with tall trees and soft light',
    language: 'te reo Māori',
    contributor: 'Te Whare Rongoā o Te Tairāwhiti',
    recorded: '2020 · marae interview',
    duration: 143,
    verified: true,
    rights: 'Public ethics excerpt · plant protocols retained',
    tags: ['rongoa', 'forest', 'healing', 'tikanga', 'matauranga'],
    map: { x: 938, y: 442 },
    transcript: {
      original: [
        'E te ngahere, e te whenua, whakarongo mai ki a mātou.',
        'Ka tiaki mātou i a koe, ka tiaki koe i a mātou.',
        'Mauri ora, mauri ora — ki te katoa.'
      ],
      english: [
        'Forest and land, listen to us.',
        'We care for you, and you care for us.',
        'Life force, life force — to all.'
      ]
    }
  },
  {
    id: 'zapotec-weaving',
    title: 'Zapotec Weaving Patterns & Market Songs',
    category: 'Traditional Crafts',
    region: 'Oaxaca, Mexico',
    regionKey: 'Oaxaca',
    community: 'Binnizá (Zapotec)',
    place: 'Teotitlán del Valle, Oaxaca',
    status: 'Verified by Council',
    statusKey: 'verified',
    excerpt: 'In the market, the pattern and the song arrive together. A weaver can name the mountain, the river and the corn field in the rhythm of a backstrap loom.',
    story: [
      'Zapotec weaving is a form of notation. Diamond motifs map the cardinal directions, the milpa and the sacred landscape; the loom’s rhythm carries the names of colours back to the plants and insects that made them.',
      'Weavers in Teotitlán are teaching these songs alongside natural dyeing, so that the pattern cannot be copied without the meaning that holds it. The collective asks visitors to credit the weaver and the village when buying or exhibiting a design.'
    ],
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Warm adobe courtyard with traditional Mexican textiles',
    language: 'Diidxazá (Zapotec)',
    contributor: 'Colectivo de Tejedoras de Teotitlán',
    recorded: '2023 · weaving workshop',
    duration: 187,
    verified: true,
    rights: 'Shared with credit · motifs remain collective knowledge',
    tags: ['weaving', 'textile', 'dyes', 'oaxaca', 'market'],
    map: { x: 232, y: 272 },
    transcript: {
      original: [
        'Bixhaana, bixhaana, gui’chi’ bee, gui’chi’ nisa.',
        'Nabaani xneza, nabaani yoo — guie’ niza.',
        'Bixhaana, bixhaana, guenda dxiiña, guenda nabani.'
      ],
      english: [
        'Weave, weave; the colour of the sky, the colour of water.',
        'The path is alive, the house is alive — the flower of water.',
        'Weave, weave; the work lives, life lives.'
      ]
    }
  },
  {
    id: 'maasai-rain',
    title: 'Maasai Rain-Calling Chants',
    category: 'Oral Folklore',
    region: 'Rift Valley, Kenya',
    regionKey: 'Rift Valley',
    community: 'Maasai',
    place: 'Mara–Loita Plains, Rift Valley',
    status: 'Oral Only',
    statusKey: 'oral',
    excerpt: 'When the long rains are late, the women’s call moves in layers: a low hum, a rising line, then silence. The chant remembers the relationship between cattle, grass and cloud.',
    story: [
      'Rain-calling is woven into pastoral life across Maasai country. The call is performed by women, often at the edge of the homestead, and its structure mirrors the movement from heat to cloud to falling water.',
      'The full ceremony is not recorded. This public excerpt was shared so that young Maasai living in cities can hear a portion of the chant and know it belongs to them. The community decides what remains unrecorded.'
    ],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Acacia trees on golden savannah under a wide sky',
    language: 'Maa',
    contributor: 'Loita women’s song circle',
    recorded: '2018 · public ceremony excerpt',
    duration: 231,
    verified: true,
    rights: 'Public excerpt · ceremonial protocol withheld',
    tags: ['rain', 'cattle', 'pastoral', 'women', 'rift valley'],
    map: { x: 552, y: 300 },
    transcript: {
      original: [
        'Enkai, Enkai, nkai ajo olameyu.',
        'Enkai, Enkai, nkai ajo olchani.',
        'Nkai ajo olameyu — ɛnkaji, ɛnkaji.'
      ],
      english: [
        'Rain, rain, bring the grass home.',
        'Rain, rain, bring the green home.',
        'Bring the grass home — let it fall, let it fall.'
      ]
    }
  },
  {
    id: 'yolngu-songline',
    title: 'Yolŋu Songline of the Saltwater Crocodile',
    category: 'Oral Folklore',
    region: 'Arnhem Land, Australia',
    regionKey: 'Arnhem Land',
    community: 'Yolŋu (Dhalwaŋu)',
    place: 'North-East Arnhem Land, NT',
    status: 'Severely Endangered',
    statusKey: 'endangered',
    excerpt: 'A songline is a map you can sing. The saltwater crocodile’s line records the coast’s fresh springs and dangerous crossings — knowledge that must travel with the right people.',
    story: [
      'Manikay — clan song — connects country, ancestor and law. The crocodile’s songline names waterholes, tides and crossings along the coast; singing it is also a way of keeping the land alive.',
      'Not every verse is public. This excerpt was chosen by Dhalwaŋu elders for a general audience. Other verses remain restricted, and the community asks that the full songline never be separated from the country it describes.'
    ],
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Red desert earth and scrub under a clear outback sky',
    language: 'Dhaŋu',
    contributor: 'Dhalwaŋu elders, Arnhem Land',
    recorded: '2017 · restricted archive excerpt',
    duration: 199,
    verified: true,
    rights: 'Public excerpt · restricted verses held by clan',
    tags: ['songline', 'crocodile', 'country', 'manikay', 'saltwater'],
    map: { x: 852, y: 380 },
    transcript: {
      original: [
        'Wäŋa, gapu, mäna — yolŋu märr ga ŋunhi.',
        'Manikay, manikay — ŋayi dhuwal wäŋa.',
        'Gapu märr, wäŋa märr — ŋunhi yolŋu.'
      ],
      english: [
        'Land, water, spirit — the people are here too.',
        'Song, song — this is that country.',
        'Water belonging, land belonging — that is the people.'
      ]
    }
  },
  {
    id: 'quechua-potato',
    title: 'Quechua Potato Planting Wisdom',
    category: 'Ethnomedicine',
    region: 'Andes, Peru',
    regionKey: 'Andes',
    community: 'Quechua (Puno)',
    place: 'Lake Titicaca highlands, Puno',
    status: 'Verified by Council',
    statusKey: 'verified',
    excerpt: 'The potato is a calendar. Quechua farmers read frost, moon and soil by varieties with names like “bride’s tear” and “llama’s foot”, planting in patterns that protect the whole field.',
    story: [
      'In the high Andes, potato diversity is a form of insurance. Dozens of varieties with different frost and moisture tolerances are planted together, and the names carry observations accumulated over generations.',
      'Ayni — reciprocal labour — keeps the system alive. Seed keepers exchange varieties after harvest, and decisions about planting are made together. This record was shared by a Puno seed collective to document the logic, not to sell it.'
    ],
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Stone terraces and green peaks at Machu Picchu in the Andes',
    language: 'Runasimi (Quechua)',
    contributor: 'Asociación de Guardianes de Papa, Puno',
    recorded: '2022 · seed keeper interview',
    duration: 168,
    verified: true,
    rights: 'Educational use with collective attribution',
    tags: ['potato', 'seeds', 'agriculture', 'ayni', 'andes'],
    map: { x: 330, y: 404 },
    transcript: {
      original: [
        'Allpa mama, papa mama, kawsayta quwayku.',
        'Ayni, ayni — kuska llank’asunchik.',
        'Para, qasa, inti — papa mama, wiñay.'
      ],
      english: [
        'Mother earth, mother potato, give us life.',
        'Reciprocity, reciprocity — we work together.',
        'Rain, frost, sun — mother potato, endure.'
      ]
    }
  }
];

const PENDING_ENTRIES = [
  {
    id: 'totonac-seven-sisters',
    title: 'The Seventh Sister: A Totonac Star Story',
    category: 'Oral Folklore',
    region: 'Papantla, Mexico',
    regionKey: 'Papantla',
    community: 'Tutunakú (Totonac)',
    place: 'Papantla, Veracruz',
    status: 'Pending Council Verification',
    statusKey: 'pending',
    endorsements: 2,
    submittedLabel: 'Submitted 2 days ago',
    excerpt: 'Seven sisters left the village to gather firewood. Only six came home. The seventh became the star that tells the milpa when to rest.',
    story: [
      'A star story remembered by Tutunakú grandmothers in Papantla. The seventh sister’s light marks the turn between planting and rest, and the story is told during the season when work in the milpa slows.',
      'This submission was offered by a granddaughter now living in Mexico City, who wants the story to remain available to her family. Final publication awaits review by the Papantla culture council.'
    ],
    image: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A dense field of stars above a dark horizon',
    language: 'Tutunakú',
    contributor: 'María T., Papantla family archive',
    recorded: 'Awaiting council audio',
    duration: 0,
    verified: false,
    rights: 'Pending consent review',
    tags: ['stars', 'sisters', 'milpa', 'totonac', 'veracruz'],
    map: null,
    transcript: {
      original: ['Transcript pending community review.'],
      english: ['A community-approved translation will be published after verification.']
    }
  },
  {
    id: 'khasi-kachru',
    title: 'Wild Sour Leaf Fermentation (Kachru)',
    category: 'Ethnomedicine',
    region: 'Meghalaya, India',
    regionKey: 'Meghalaya',
    community: 'Khasi',
    place: 'East Khasi Hills, Meghalaya',
    status: 'Pending Council Verification',
    statusKey: 'pending',
    endorsements: 1,
    submittedLabel: 'Submitted 5 days ago',
    excerpt: 'Kachru is a sour, wild-leaf ferment used across Khasi kitchens. The leaf is gathered after the first monsoon rain, when the taste changes from bitter to bright.',
    story: [
      'A kitchen knowledge record: which wild leaves are gathered, how they are cleaned, and how the ferment is shared between households. The contributor emphasises that the knowledge is ordinary, daily, and often overlooked by formal archives.',
      'The local durbar will review the record alongside two elder contributors before publication. Photographs of the gathering sites are deliberately withheld to prevent over-harvesting.'
    ],
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Mist over layered green forest ridges',
    language: 'Khasi',
    contributor: 'Iewduh kitchen collective',
    recorded: 'Awaiting council audio',
    duration: 0,
    verified: false,
    rights: 'Pending consent review',
    tags: ['fermentation', 'wild leaves', 'khasi', 'kitchen', 'monsoon'],
    map: null,
    transcript: {
      original: ['Transcript pending community review.'],
      english: ['A community-approved translation will be published after verification.']
    }
  }
];

const CATEGORY_META = {
  'Oral Folklore': { icon: 'sparkles', short: 'Folklore' },
  'Native Languages': { icon: 'languages', short: 'Language' },
  'Ethnomedicine': { icon: 'leaf', short: 'Ethnobotany' },
  'Traditional Crafts': { icon: 'palette', short: 'Craft' }
};

const CATEGORIES = ['All', 'Oral Folklore', 'Native Languages', 'Ethnomedicine', 'Traditional Crafts'];
const FEATURED_IDS = ['sami-aurora', 'ayahuasca-botany', 'toda-embroidery', 'hokulea-navigation'];
const STORE_KEY = 'ethnovault:records:v1';

/* ── Tiny helpers ───────────────────────────── */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (value = '') => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (value = '') => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const fmtTime = (seconds) => {
  const s = Math.max(0, Math.floor(Number(seconds) || 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const fmtNumber = (n) => new Intl.NumberFormat('en-US').format(n);
const hashString = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};
const seededRandom = (seed) => {
  let s = seed || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
};
const refreshIcons = () => {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  }
};
const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Persistent state ───────────────────────── */
const state = {
  category: 'All',
  query: '',
  region: null,
  sort: 'curated',
  submissions: [],
  seedEndorsements: {},
  approvedSeeds: [],
  audioUploaded: false,
  lastSubmissionId: null,
  player: {
    id: 'sami-aurora',
    playing: false,
    elapsed: 0,
    speed: 1,
    subtitle: 'original'
  }
};

function loadStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return;
    if (Array.isArray(saved.submissions)) {
      state.submissions = saved.submissions
        .filter((entry) => entry && entry.id && entry.title)
        .map((entry) => ({ ...entry, isNew: false }));
    }
    if (saved.seedEndorsements && typeof saved.seedEndorsements === 'object') state.seedEndorsements = saved.seedEndorsements;
    if (Array.isArray(saved.approvedSeeds)) state.approvedSeeds = saved.approvedSeeds;
  } catch (error) { /* storage is optional */ }
}

function saveStore() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      submissions: state.submissions,
      seedEndorsements: state.seedEndorsements,
      approvedSeeds: state.approvedSeeds
    }));
  } catch (error) { /* ignore quota/private mode */ }
}

function seedEntries() {
  return PENDING_ENTRIES.map((entry) => {
    const endorsements = Math.max(0, Math.min(3, state.seedEndorsements[entry.id] ?? entry.endorsements));
    const approved = state.approvedSeeds.includes(entry.id) || endorsements >= 3;
    return {
      ...entry,
      endorsements,
      status: approved ? 'Verified by Council' : 'Pending Council Verification',
      statusKey: approved ? 'verified' : 'pending',
      verified: approved
    };
  });
}

function allEntries() {
  return [...state.submissions, ...BASE_ENTRIES, ...seedEntries()];
}

function entryById(id) {
  return allEntries().find((entry) => entry.id === id);
}

/* ── Filtering & sorting ────────────────────── */
function matchesQuery(entry, query = state.query) {
  if (!query.trim()) return true;
  const haystack = norm([
    entry.title, entry.category, entry.region, entry.community, entry.place,
    entry.excerpt, entry.language, entry.contributor, entry.status,
    ...(entry.tags || []), ...(entry.story || [])
  ].join(' '));
  return query.trim().split(/\s+/).every((word) => haystack.includes(norm(word)));
}

function matchesRegion(entry, region = state.region) {
  return !region || entry.regionKey === region;
}

function visibleEntries() {
  let list = allEntries().filter((entry) => (
    (state.category === 'All' || entry.category === state.category) &&
    matchesRegion(entry) &&
    matchesQuery(entry)
  ));

  if (state.sort === 'az') {
    list = [...list].sort((a, b) => a.title.localeCompare(b.title));
  } else if (state.sort === 'region') {
    list = [...list].sort((a, b) => a.regionKey.localeCompare(b.regionKey) || a.title.localeCompare(b.title));
  } else if (state.sort === 'endangered') {
    const rank = { endangered: 0, oral: 1, pending: 2, verified: 3 };
    list = [...list].sort((a, b) => (rank[a.statusKey] ?? 9) - (rank[b.statusKey] ?? 9));
  }
  return list;
}

/* ── Rendering: category pills ──────────────── */
function renderPills() {
  const host = $('#categoryPills');
  if (!host) return;
  const entries = allEntries();

  host.innerHTML = CATEGORIES.map((category) => {
    const count = entries.filter((entry) => (
      (category === 'All' || entry.category === category) &&
      matchesRegion(entry) &&
      matchesQuery(entry)
    )).length;
    return `
      <button type="button" class="pill ${state.category === category ? 'is-active' : ''}" data-category="${esc(category)}" aria-pressed="${state.category === category}">
        ${category === 'All' ? 'All' : esc(category)}
        <span class="pill-count">${count}</span>
      </button>`;
  }).join('');
}

/* ── Rendering: cards ───────────────────────── */
function miniWaveMarkup(seed, count = 14) {
  const rand = seededRandom(hashString(String(seed)));
  return Array.from({ length: count }, (_, index) => {
    const height = Math.round(22 + rand() * 78);
    return `<span style="height:${height}%;--i:${index}"></span>`;
  }).join('');
}

function cardSeal(entry) {
  if (entry.statusKey === 'pending') {
    return `<div class="card-seal is-pending" title="Awaiting council verification">
      <i data-lucide="clock" class="h-4 w-4"></i><span>Pending<br />review</span>
    </div>`;
  }
  return `<div class="card-seal" title="Verified by elders of the originating community">
    <i data-lucide="badge-check" class="h-4 w-4"></i><span>Elder<br />verified</span>
  </div>`;
}

function mediaMarkup(entry) {
  if (entry.image) {
    return `<img src="${esc(entry.image)}" alt="${esc(entry.imageAlt || entry.title)}" loading="lazy" onerror="this.style.display='none'" />`;
  }
  const icon = CATEGORY_META[entry.category]?.icon || 'sprout';
  return `<div class="card-fallback"><i data-lucide="${icon}" class="h-12 w-12 opacity-50"></i></div>`;
}

function cardHTML(entry) {
  const playable = Number(entry.duration) > 0;
  const statusClass = `status-${entry.statusKey}`;
  const categoryIcon = CATEGORY_META[entry.category]?.icon || 'sprout';
  const statusShort = { verified: 'Verified', oral: 'Oral only', endangered: 'Endangered', pending: 'In review' }[entry.statusKey] || entry.status;
  return `
    <article id="entry-${esc(entry.id)}" class="story-card group reveal ${entry.isNew ? 'is-new' : ''}" data-entry-id="${esc(entry.id)}">
      <div class="card-media">
        ${mediaMarkup(entry)}
        <div class="absolute inset-x-0 top-0 z-[2] flex items-start justify-between gap-2 p-3.5">
          <span class="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold text-forest-950 backdrop-blur">
            <i data-lucide="map-pin" class="h-3 w-3 text-terracotta-600"></i> ${esc(entry.regionKey)}
          </span>
          <span class="status-pill ${statusClass}">
            ${entry.statusKey === 'verified' ? '<i data-lucide="badge-check" class="h-3 w-3"></i>' : entry.statusKey === 'pending' ? '<i data-lucide="clock" class="h-3 w-3"></i>' : '<i data-lucide="alert-triangle" class="h-3 w-3"></i>'}
            ${esc(statusShort)}
          </span>
        </div>
        <div class="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-2 p-3.5">
          <span class="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-cream/85">
            <i data-lucide="${categoryIcon}" class="h-3.5 w-3.5 text-terracotta-300"></i> ${esc(entry.category)}
          </span>
        </div>
        ${cardSeal(entry)}
      </div>
      <div class="card-body">
        <div class="flex items-center justify-between gap-2 text-[10px] text-forest-500 dark:text-cream/35">
          <span class="flex min-w-0 items-center gap-1.5">
            <i data-lucide="users" class="h-3 w-3"></i>
            <span class="truncate">${esc(entry.community)}</span>
          </span>
          <span class="shrink-0 text-right font-medium ${entry.statusKey === 'pending' ? 'text-amber-600 dark:text-amber-400' : ''}">${esc(entry.status)}</span>
        </div>
        <h3 class="mt-2.5 font-display text-[21px] font-medium leading-[1.18] tracking-tight">
          <button type="button" data-story-id="${esc(entry.id)}" class="text-left transition-colors hover:text-terracotta-600 dark:hover:text-terracotta-300">${esc(entry.title)}</button>
        </h3>
        <p class="mt-2 flex items-center gap-1.5 text-[10.5px] text-forest-600 dark:text-cream/45">
          <i data-lucide="map-pin" class="h-3.5 w-3.5 shrink-0 text-terracotta-500/80"></i>
          ${esc(entry.place)} <span class="text-forest-400 dark:text-cream/25">·</span> ${esc(entry.language)}
        </p>
        <p class="mt-3 line-clamp-3 text-[12.5px] leading-relaxed text-forest-700/80 dark:text-cream/50">${esc(entry.excerpt)}</p>
        <div class="mt-auto flex items-center justify-between gap-2 pt-4">
          <button type="button" class="listen-btn" data-play-id="${esc(entry.id)}" data-playing="false" aria-label="${playable ? `Play a preview of ${esc(entry.title)}` : `${esc(entry.title)} is awaiting audio`}" ${playable ? '' : 'disabled'}>
            <span class="listen-icon">
              <i data-lucide="play" class="icon-play ml-px h-3 w-3 fill-current"></i>
              <i data-lucide="pause" class="icon-pause h-3 w-3 fill-current"></i>
            </span>
            <span>${playable ? 'Listen' : 'Audio pending'}</span>
            ${playable ? `<span class="mini-wave ml-0.5" aria-hidden="true">${miniWaveMarkup(entry.id)}</span>` : ''}
            ${playable ? `<span class="ml-0.5 text-[9px] font-medium tabular-nums text-forest-500/80 dark:text-cream/35">${fmtTime(entry.duration)}</span>` : ''}
          </button>
          <button type="button" data-story-id="${esc(entry.id)}" class="story-link">
            Read story <i data-lucide="arrow-up-right" class="h-3.5 w-3.5"></i>
          </button>
        </div>
      </div>
    </article>`;
}

function renderArchive() {
  const grid = $('#archiveGrid');
  if (!grid) return;
  const list = visibleEntries();

  grid.innerHTML = list.map(cardHTML).join('');
  $('#resultCount').textContent = `${list.length} ${list.length === 1 ? 'record' : 'records'}`;

  const empty = $('#emptyState');
  empty.hidden = list.length !== 0;
  grid.hidden = list.length === 0;

  renderActiveFilters();
  renderPills();
  refreshIcons();
  observeReveals();
  updateAudioUI();
}

function renderActiveFilters() {
  const host = $('#activeFilters');
  if (!host) return;
  const chips = [];

  if (state.category !== 'All') {
    chips.push(`${esc(state.category)}<button type="button" data-clear-filter="category" aria-label="Clear category filter"><i data-lucide="x" class="h-3 w-3"></i></button>`);
  }
  if (state.region) {
    chips.push(`${esc(state.region)}<button type="button" data-clear-filter="region" aria-label="Clear region filter"><i data-lucide="x" class="h-3 w-3"></i></button>`);
  }
  if (state.query.trim()) {
    chips.push(`Search: “${esc(state.query.trim())}”<button type="button" data-clear-filter="query" aria-label="Clear search"><i data-lucide="x" class="h-3 w-3"></i></button>`);
  }

  host.innerHTML = chips.length
    ? `<span class="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-500 dark:text-cream/30">Filtering by</span>${chips.map((chip) => `<span class="filter-chip">${chip}</span>`).join('')}<button type="button" data-clear-filter="all" class="text-[10px] font-semibold text-forest-600 underline decoration-forest-300 underline-offset-4 hover:text-terracotta-600 dark:text-cream/45">Clear all</button>`
    : '';
}

/* ── Rendering: map ─────────────────────────── */
function renderMap() {
  const host = $('#mapPins');
  if (!host) return;
  const entries = allEntries().filter((entry) => entry.map && entry.statusKey !== 'pending');
  const regions = new Map();

  entries.forEach((entry) => {
    const current = regions.get(entry.regionKey);
    if (current) {
      current.count += 1;
    } else {
      regions.set(entry.regionKey, { ...entry.map, key: entry.regionKey, count: 1 });
    }
  });

  host.innerHTML = Array.from(regions.values()).map((pin) => {
    const left = (pin.x / 1000) * 100;
    const top = (pin.y / 480) * 100;
    const side = pin.x > 840 ? 'pin--right' : pin.x < 180 ? 'pin--left' : '';
    const active = state.region === pin.key ? 'is-active' : '';
    return `<button type="button" class="map-pin ${side} ${active}" style="left:${left}%;top:${top}%" data-region="${esc(pin.key)}" aria-label="${esc(pin.key)} — ${pin.count} ${pin.count === 1 ? 'record' : 'records'}" aria-pressed="${state.region === pin.key}">
      <span class="pin-ring"></span>
      <span class="pin-dot"></span>
      <span class="pin-label">${esc(pin.key)} <em>${pin.count}</em></span>
    </button>`;
  }).join('');

  const activeChip = $('#mapActiveRegion');
  if (state.region) {
    activeChip.hidden = false;
    activeChip.innerHTML = `Viewing: ${esc(state.region)} <button type="button" data-clear-filter="region" class="ml-0.5 rounded-full p-0.5 hover:bg-terracotta-500/15" aria-label="Clear region"><i data-lucide="x" class="h-3 w-3"></i></button>`;
  } else {
    activeChip.hidden = true;
    activeChip.innerHTML = '';
  }
  refreshIcons();
}

/* ── Scroll reveal ──────────────────────────── */
let revealObserver = null;
function observeReveals() {
  if (prefersReduced()) {
    $$('.reveal').forEach((el) => el.classList.add('in'));
    return;
  }
  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach((el) => el.classList.add('in'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  }
  $$('.reveal:not(.in)').forEach((el) => revealObserver.observe(el));
}

/* ── Animated counters ──────────────────────── */
function animateCounters() {
  const nodes = $$('[data-counter]');
  const run = (node) => {
    const target = Number(node.dataset.counter) || 0;
    if (prefersReduced()) {
      node.textContent = fmtNumber(target);
      return;
    }
    const start = performance.now();
    const duration = 1500;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = fmtNumber(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    nodes.forEach(run);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  nodes.forEach((node) => observer.observe(node));
}

/* ══════════════════════════════════════════════
   AUDIO PLAYER (simulated)
   ══════════════════════════════════════════════ */
let rafId = null;
let lastFrame = 0;

function playerEntry() {
  return entryById(state.player.id) || BASE_ENTRIES[0];
}

function renderPlayerTabs() {
  const host = $('#playerTabs');
  if (!host) return;
  host.innerHTML = FEATURED_IDS.map((id) => {
    const entry = entryById(id);
    if (!entry) return '';
    const active = state.player.id === id;
    return `<button type="button" class="player-tab ${active ? 'is-active' : ''}" data-track-id="${esc(id)}" aria-pressed="${active}">
      <span class="tab-art" style="background-image:url('${esc(entry.image || '')}')"></span>
      <span class="min-w-0 flex-1">
        <span class="block truncate text-[11px] font-medium ${active ? 'text-cream' : 'text-cream/65'}">${esc(entry.title)}</span>
        <span class="mt-0.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.1em] text-cream/30">
          ${esc(entry.language)} <span class="h-0.5 w-0.5 rounded-full bg-cream/30"></span> ${fmtTime(entry.duration)}
        </span>
      </span>
      ${active ? '<span class="mr-1 flex h-4 items-end gap-[2px]"><span class="eq-tab"></span><span class="eq-tab"></span><span class="eq-tab"></span></span>' : ''}
    </button>`;
  }).join('');
  refreshIcons();
}

function renderWaveform(entry) {
  const host = $('#waveBars');
  if (!host) return;
  const rand = seededRandom(hashString(entry.id + '-wave'));
  const count = 76;
  host.innerHTML = Array.from({ length: count }, (_, index) => {
    const envelope = 0.45 + 0.55 * Math.sin((index / count) * Math.PI);
    const height = Math.round((14 + rand() * 86) * envelope);
    return `<span class="wave-bar" style="height:${Math.max(6, height)}%"></span>`;
  }).join('');
}

function renderTranscript() {
  const host = $('#transcriptLines');
  if (!host) return;
  const entry = playerEntry();
  const key = state.player.subtitle;
  const lines = entry.transcript?.[key] || [];
  const language = key === 'original' ? entry.language : 'English translation';

  $('#transcriptLangLabel').textContent = language;
  host.innerHTML = lines.map((line, index) => {
    const at = Math.round((entry.duration * index) / Math.max(1, lines.length));
    const note = key === 'original' ? `${entry.language} · original` : 'English · community translation';
    return `<button type="button" class="transcript-line" data-seek="${at}">
      <span class="t-time">${fmtTime(at)}</span>
      <span class="t-text">${esc(line)}<span class="t-note">${esc(note)}</span></span>
      <span class="ml-auto hidden shrink-0 self-center text-cream/20 sm:block"><i data-lucide="play" class="h-3 w-3"></i></span>
    </button>`;
  }).join('');

  $$('.subtitle-btn').forEach((button) => {
    const isActive = button.dataset.subtitle === key;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  refreshIcons();
  updateTranscriptHighlight();
}

function renderPlayer() {
  const entry = playerEntry();
  $('#playerTitle').textContent = entry.title;
  $('#playerMeta').textContent = `${entry.place} · with ${entry.contributor}`;
  $('#playerLanguage').textContent = entry.language;
  $('#playerCategory').textContent = entry.category;
  $('#timeDuration').textContent = fmtTime(entry.duration);
  $('#timeCurrent').textContent = fmtTime(state.player.elapsed);
  renderPlayerTabs();
  renderWaveform(entry);
  renderTranscript();
  updateAudioUI();
}

function setPlayingUI() {
  const playing = state.player.playing;
  const status = $('#playerStatus');
  if (status) status.textContent = playing ? 'Playing' : (state.player.elapsed >= playerEntry().duration && state.player.elapsed > 0 ? 'Finished' : 'Paused');
  const dot = $('#playerStatusDot');
  if (dot) {
    dot.className = `h-1.5 w-1.5 rounded-full ${playing ? 'animate-pulse bg-terracotta-400' : 'bg-cream/25'}`;
  }
  const main = $('#mainPlay');
  if (main) {
    main.dataset.playing = String(playing);
    main.setAttribute('aria-label', playing ? 'Pause recording' : 'Play recording');
  }
}

function updateAudioUI() {
  const entry = playerEntry();
  const isCurrent = (id) => state.player.id === id;
  $$('[data-play-id]').forEach((button) => {
    const active = isCurrent(button.dataset.playId) && state.player.playing;
    if (active && button.dataset.playing !== 'true') {
      button.dataset.playing = 'true';
      button.setAttribute('aria-label', 'Pause recording');
    } else if (!active && button.dataset.playing !== 'false') {
      button.dataset.playing = 'false';
      button.setAttribute('aria-label', `Play a preview of ${entryById(button.dataset.playId)?.title || 'recording'}`);
    }
  });
  $$('.player-tab').forEach((tab) => {
    const active = isCurrent(tab.dataset.trackId);
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  setPlayingUI();
  updateProgressUI();
}

function updateProgressUI() {
  const entry = playerEntry();
  const duration = Math.max(1, Number(entry.duration) || 1);
  const fraction = Math.min(1, state.player.elapsed / duration);

  const current = $('#timeCurrent');
  if (current) current.textContent = fmtTime(state.player.elapsed);
  const durationEl = $('#timeDuration');
  if (durationEl) durationEl.textContent = fmtTime(entry.duration);

  const playhead = $('#wavePlayhead');
  if (playhead) playhead.style.left = `${fraction * 100}%`;

  const wave = $('#waveform');
  if (wave) wave.setAttribute('aria-valuenow', String(Math.round(fraction * 100)));

  const bars = $$('#waveBars .wave-bar');
  const filled = fraction * bars.length;
  bars.forEach((bar, index) => {
    bar.classList.toggle('is-played', index < filled);
    bar.classList.toggle('is-current', index === Math.floor(filled) && fraction < 1);
  });
  updateTranscriptHighlight(fraction);
  setPlayingUI();
}

function updateTranscriptHighlight(fraction = null) {
  const lines = $$('#transcriptLines .transcript-line');
  if (!lines.length) return;
  const entry = playerEntry();
  const duration = Math.max(1, Number(entry.duration) || 1);
  const progress = fraction ?? Math.min(1, state.player.elapsed / duration);
  const index = Math.min(lines.length - 1, Math.floor(progress * lines.length));
  lines.forEach((line, i) => line.classList.toggle('is-active', i === index));
}

function stopLoop() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  lastFrame = 0;
}

function startLoop() {
  stopLoop();
  state.player.playing = true;
  lastFrame = performance.now();
  const step = (now) => {
    if (!state.player.playing) {
      rafId = null;
      return;
    }
    const entry = playerEntry();
    const duration = Math.max(1, Number(entry.duration) || 1);
    const delta = Math.min(0.3, (now - lastFrame) / 1000) * state.player.speed;
    lastFrame = now;
    state.player.elapsed = Math.min(duration, state.player.elapsed + delta);

    if (state.player.elapsed >= duration) {
      state.player.playing = false;
      stopLoop();
      updateAudioUI();
      showToast('Recording complete', 'The full excerpt has played. Transcripts remain open below.', 'check');
      return;
    }
    updateProgressUI();
    rafId = requestAnimationFrame(step);
  };
  rafId = requestAnimationFrame(step);
  updateAudioUI();
}

function pausePlayback() {
  state.player.playing = false;
  stopLoop();
  updateAudioUI();
}

function playEntry(id, options = {}) {
  const entry = entryById(id);
  if (!entry || !Number(entry.duration)) {
    showToast('Audio not yet cleared', 'This record is awaiting community audio consent.', 'clock');
    return;
  }
  const changed = state.player.id !== id;
  if (changed) {
    state.player.id = id;
    state.player.elapsed = 0;
    renderPlayer();
  } else if (state.player.elapsed >= entry.duration) {
    state.player.elapsed = 0;
  }
  if (options.scroll) {
    $('#player')?.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'start' });
  }
  startLoop();
}

function toggleEntry(id) {
  const entry = entryById(id);
  if (!entry || !Number(entry.duration)) return;
  if (state.player.id === id) {
    if (state.player.playing) {
      pausePlayback();
    } else {
      if (state.player.elapsed >= entry.duration) state.player.elapsed = 0;
      startLoop();
    }
  } else {
    playEntry(id);
  }
}

function toggleMainPlayback() {
  const entry = playerEntry();
  if (!Number(entry.duration)) return;
  if (state.player.playing) {
    pausePlayback();
  } else {
    if (state.player.elapsed >= entry.duration) state.player.elapsed = 0;
    startLoop();
  }
}

function seekTo(seconds) {
  const entry = playerEntry();
  const duration = Math.max(1, Number(entry.duration) || 1);
  state.player.elapsed = Math.max(0, Math.min(duration, seconds));
  if (state.player.elapsed >= duration) {
    state.player.playing = false;
    stopLoop();
  }
  updateAudioUI();
}

function seekFraction(fraction) {
  seekTo(fraction * (Number(playerEntry().duration) || 0));
}

function selectSubtitle(key) {
  if (!['original', 'english'].includes(key)) return;
  state.player.subtitle = key;
  renderTranscript();
}

function downloadTranscript() {
  const entry = playerEntry();
  const original = (entry.transcript?.original || []).join('\n');
  const english = (entry.transcript?.english || []).join('\n');
  const text = [
    `ETHNOVAULT — ${entry.title}`,
    `${entry.place} · ${entry.language}`,
    `With ${entry.contributor}`,
    '',
    `ORIGINAL (${entry.language})`,
    original,
    '',
    'ENGLISH TRANSLATION (community-approved demo)',
    english,
    '',
    `Rights: ${entry.rights}`,
    'This transcript is illustrative demo content. Real records carry community-approved translations and attribution.',
    '',
    `Source: ${window.location.href}`
  ].join('\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${entry.id}-transcript.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 2000);
  showToast('Transcript downloaded', 'A text copy is now on your device.', 'download');
}

/* ══════════════════════════════════════════════
   TOASTS
   ══════════════════════════════════════════════ */
function showToast(title, message, icon = 'check') {
  const region = $('#toastRegion');
  if (!region) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.innerHTML = `
    <span class="toast-icon"><i data-lucide="${esc(icon)}" class="h-4 w-4"></i></span>
    <div class="min-w-0 flex-1">
      <p class="text-xs font-semibold text-cream">${esc(title)}</p>
      <p class="mt-0.5 text-[11px] leading-snug text-cream/50">${esc(message)}</p>
    </div>
    <button type="button" class="toast-close" aria-label="Dismiss notification"><i data-lucide="x" class="h-3.5 w-3.5"></i></button>`;
  region.appendChild(toast);
  refreshIcons();

  const dismiss = () => {
    if (!toast.isConnected) return;
    toast.classList.add('is-leaving');
    setTimeout(() => toast.remove(), 260);
  };
  toast.querySelector('.toast-close').addEventListener('click', dismiss);
  setTimeout(dismiss, 4800);
}

/* ══════════════════════════════════════════════
   MODAL SYSTEM
   ══════════════════════════════════════════════ */
let lastFocused = null;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  lastFocused = document.activeElement;
  if (id === 'submitModal') resetSubmissionForm();
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overflow-hidden');
  const panel = modal.querySelector('.modal-panel');
  if (panel) panel.scrollTop = 0;
  setTimeout(() => {
    const closeButton = modal.querySelector('.modal-close');
    if (closeButton) closeButton.focus({ preventScroll: true });
  }, 80);
}

function closeModal(modal) {
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  if (!$$('.modal:not([hidden])').length) {
    document.body.classList.remove('overflow-hidden');
  }
  if (lastFocused && typeof lastFocused.focus === 'function' && document.contains(lastFocused)) {
    lastFocused.focus({ preventScroll: true });
  }
}

function closeAllModals() {
  $$('.modal:not([hidden])').forEach(closeModal);
}

function trapFocus(event) {
  if (event.key !== 'Tab') return;
  const modal = $('.modal:not([hidden])');
  if (!modal) return;
  const focusables = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', modal)
    .filter((el) => el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

/* ══════════════════════════════════════════════
   STORY MODAL
   ══════════════════════════════════════════════ */
function openStory(id) {
  const entry = entryById(id);
  if (!entry) return;
  const content = $('#storyContent');
  const statusLabel = entry.status === 'Verified by Council' ? 'Verified by Council' : entry.status;
  const playable = Number(entry.duration) > 0;
  const categoryIcon = CATEGORY_META[entry.category]?.icon || 'sprout';
  const firstOriginal = entry.transcript?.original?.[0] || '';
  const firstEnglish = entry.transcript?.english?.[0] || '';

  content.innerHTML = `
    <div class="story-hero">
      ${entry.image ? `<img src="${esc(entry.image)}" alt="${esc(entry.imageAlt || entry.title)}" onerror="this.style.display='none'" />` : `<div class="absolute inset-0 grid place-items-center"><i data-lucide="${categoryIcon}" class="h-16 w-16 text-cream/30"></i></div>`}
      <div class="story-hero-content">
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold text-forest-950">
            <i data-lucide="map-pin" class="h-3 w-3 text-terracotta-600"></i> ${esc(entry.place)}
          </span>
          <span class="status-pill ${`status-${entry.statusKey}`}">${esc(statusLabel)}</span>
          <span class="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-medium text-cream/80 backdrop-blur">
            <i data-lucide="${categoryIcon}" class="h-3 w-3"></i> ${esc(entry.category)}
          </span>
        </div>
        <h2 id="storyTitle" class="mt-3 max-w-2xl font-display text-2xl font-medium leading-tight text-cream sm:text-[2rem]">${esc(entry.title)}</h2>
        <p class="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10.5px] text-cream/55">
          <span class="inline-flex items-center gap-1"><i data-lucide="users" class="h-3 w-3"></i> ${esc(entry.community)}</span>
          <span class="text-cream/25">·</span>
          <span class="inline-flex items-center gap-1"><i data-lucide="languages" class="h-3 w-3"></i> ${esc(entry.language)}</span>
        </p>
      </div>
    </div>
    <div class="p-5 sm:p-8">
      <div class="grid gap-7 lg:grid-cols-[1fr_268px]">
        <div class="min-w-0">
          <div class="space-y-4 text-[13px] leading-relaxed text-forest-800/85 dark:text-cream/60">
            ${(entry.story || [entry.excerpt]).map((paragraph) => `<p>${esc(paragraph)}</p>`).join('')}
          </div>

          ${firstOriginal ? `
          <figure class="mt-6 rounded-2xl border border-forest-900/10 bg-cream/60 p-4 dark:border-white/10 dark:bg-white/[0.03]">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[9px] font-semibold uppercase tracking-[0.16em] text-forest-500 dark:text-cream/35">In the original voice</span>
              <span class="dir-badge"><i data-lucide="audio-lines" class="h-2.5 w-2.5"></i> ${esc(entry.language)}</span>
            </div>
            <blockquote class="story-blockquote mt-3">
              <p>${esc(firstOriginal)}</p>
              <p class="mt-2 font-sans text-[11px] font-normal not-italic leading-relaxed text-forest-600 dark:text-cream/40">“${esc(firstEnglish)}”</p>
            </blockquote>
          </figure>` : ''}

          <div class="mt-5 flex items-start gap-3 rounded-2xl border border-forest-900/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-forest-900/5 text-forest-600 dark:bg-white/5 dark:text-cream/50"><i data-lucide="heart-handshake" class="h-4 w-4"></i></span>
            <div>
              <p class="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-500 dark:text-cream/35">Attribution &amp; rights</p>
              <p class="mt-1 text-[11.5px] leading-relaxed text-forest-700 dark:text-cream/50">Recorded with <strong class="font-semibold text-forest-950 dark:text-cream/80">${esc(entry.contributor)}</strong>. ${esc(entry.rights)}.</p>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-2.5">
            <button type="button" class="btn btn-primary ${playable ? '' : 'cursor-not-allowed opacity-50'}" data-play-modal-id="${esc(entry.id)}" ${playable ? '' : 'disabled'}>
              <i data-lucide="${playable ? 'play' : 'clock'}" class="h-4 w-4 ${playable ? 'fill-current' : ''}"></i>
              ${playable ? 'Listen to the excerpt' : 'Audio awaiting consent'}
            </button>
            <button type="button" class="btn btn-ghost" data-share-story="${esc(entry.id)}">
              <i data-lucide="share-2" class="h-4 w-4"></i> Share record
            </button>
          </div>
        </div>

        <aside class="space-y-4">
          <div class="rounded-2xl border border-forest-900/10 bg-white/55 p-4 dark:border-white/10 dark:bg-white/[0.03]">
            <p class="text-[9px] font-semibold uppercase tracking-[0.16em] text-forest-500 dark:text-cream/35">Record details</p>
            <dl class="mt-3 space-y-3">
              <div class="detail-row"><i data-lucide="map-pin" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta-500"></i><div><dt class="detail-label">Region</dt><dd class="detail-value">${esc(entry.region)}</dd></div></div>
              <div class="detail-row"><i data-lucide="users" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta-500"></i><div><dt class="detail-label">Community</dt><dd class="detail-value">${esc(entry.community)}</dd></div></div>
              <div class="detail-row"><i data-lucide="languages" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta-500"></i><div><dt class="detail-label">Language</dt><dd class="detail-value">${esc(entry.language)}</dd></div></div>
              <div class="detail-row"><i data-lucide="calendar" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta-500"></i><div><dt class="detail-label">Recorded</dt><dd class="detail-value">${esc(entry.recorded || 'Awaiting review')}</dd></div></div>
              <div class="detail-row"><i data-lucide="clock" class="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta-500"></i><div><dt class="detail-label">Duration</dt><dd class="detail-value">${playable ? fmtTime(entry.duration) : 'Audio pending'}</dd></div></div>
            </dl>
          </div>

          <div class="flex flex-col items-center rounded-2xl border border-forest-900/10 bg-cream/60 p-4 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <div class="seal !rotate-0 ${entry.statusKey === 'pending' ? 'opacity-60' : ''}">
              <i data-lucide="${entry.statusKey === 'pending' ? 'clock' : 'badge-check'}" class="h-4 w-4"></i>
              <span>${entry.statusKey === 'pending' ? 'In council<br />review' : 'Elder<br />verified'}</span>
            </div>
            <p class="mt-3 text-[10px] font-semibold text-forest-900 dark:text-cream/75">${entry.statusKey === 'pending' ? 'Awaiting three endorsements' : 'Verified by the originating community'}</p>
            <p class="mt-1 text-[10px] leading-relaxed text-forest-500 dark:text-cream/35">Metadata reviewed by the EthnoVault council and the community of origin.</p>
          </div>

          <div class="rounded-2xl border border-dashed border-forest-900/15 p-3.5 dark:border-white/10">
            <p class="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-forest-500 dark:text-cream/30"><i data-lucide="lock" class="h-3 w-3"></i> Cultural protocol</p>
            <p class="mt-1.5 text-[10px] leading-relaxed text-forest-600 dark:text-cream/40">${entry.statusKey === 'pending' ? 'This record is not yet public. It is visible here as a preview of the verification process.' : 'Listen, learn and cite. Recording, reusing or teaching this material requires the community’s permission.'}</p>
          </div>
        </aside>
      </div>

      <p class="mt-7 border-t border-forest-900/10 pt-4 text-[9.5px] leading-relaxed text-forest-500/70 dark:border-white/10 dark:text-cream/25">
        Demonstration record · audio, transcript and council status are simulated. Names and communities are presented illustratively and with respect.
      </p>
    </div>`;

  openModal('storyModal');
  refreshIcons();
}

function shareStory(id) {
  const url = `${window.location.origin}${window.location.pathname}#entry-${id}`;
  const entry = entryById(id);
  const done = () => showToast('Link copied', `“${entry?.title || 'Record'}” is ready to share.`, 'link');
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(url).then(done).catch(() => showToast('Share this record', url, 'link'));
  } else {
    showToast('Share this record', url, 'link');
  }
}

/* ══════════════════════════════════════════════
   SUBMISSION FORM
   ══════════════════════════════════════════════ */
let uploadTimer = null;

function resetSubmissionForm() {
  const form = $('#submitForm');
  const success = $('#submitSuccess');
  if (!form) return;
  form.reset();
  form.hidden = false;
  success.hidden = true;
  state.audioUploaded = false;
  state.audioDuration = 0;
  if (uploadTimer) clearTimeout(uploadTimer);
  uploadTimer = null;

  const audioFile = $('#audioFile');
  if (audioFile) audioFile.hidden = true;
  const dropLabel = $('#audioDropLabel');
  if (dropLabel) dropLabel.textContent = 'Add a voice recording';
  const dropHint = $('#audioDropHint');
  if (dropHint) dropHint.textContent = 'WAV, MP3 or M4A · up to 50 MB · simulated for this demo';
  const drop = $('#audioDrop');
  if (drop) drop.disabled = false;

  $$('#typeGrid .type-card').forEach((card, index) => card.classList.toggle('is-active', index === 0));
  const count = $('#storyCount');
  if (count) count.textContent = '0 / 1200';
  clearFormErrors();
}

function clearFormErrors() {
  $$('#submitForm .field-error').forEach((el) => {
    el.hidden = true;
    el.textContent = '';
  });
  $$('#submitForm .is-invalid').forEach((el) => el.classList.remove('is-invalid'));
}

function setFieldError(name, message) {
  const error = $(`[data-error-for="${name}"]`);
  if (error) {
    error.textContent = message;
    error.hidden = false;
  }
  const fieldMap = {
    title: '#entryTitle', community: '#entryCommunity', region: '#entryRegion',
    attribution: '#entryAttribution', story: '#entryStory'
  };
  const field = fieldMap[name] ? $(fieldMap[name]) : null;
  if (field) field.classList.add('is-invalid');
}

function simulateUpload() {
  if (state.audioUploaded || uploadTimer) return;
  const drop = $('#audioDrop');
  const label = $('#audioDropLabel');
  const hint = $('#audioDropHint');
  if (!drop || !label) return;
  drop.disabled = true;
  label.textContent = 'Listening to your recording…';
  hint.textContent = 'Checking levels and consent metadata';

  uploadTimer = setTimeout(() => {
    uploadTimer = null;
    state.audioUploaded = true;
    state.audioDuration = 142 + Math.floor(Math.random() * 90);
    drop.disabled = false;
    label.textContent = 'Voice recording attached';
    hint.textContent = 'Ready to travel with your submission';
    const fileBox = $('#audioFile');
    const name = $('#audioFileName');
    const meta = $('#audioMeta');
    const progress = $('#audioProgress');
    if (name) name.textContent = `field-recording-${String(Date.now()).slice(-5)}.wav`;
    if (meta) meta.textContent = fmtTime(state.audioDuration);
    if (fileBox) fileBox.hidden = false;
    if (progress) {
      progress.style.width = '0%';
      requestAnimationFrame(() => { progress.style.width = '100%'; });
    }
    refreshIcons();
    showToast('Audio attached', 'Simulated file ready for council review.', 'file-audio');
  }, 950);
}

function removeAudio() {
  state.audioUploaded = false;
  state.audioDuration = 0;
  const fileBox = $('#audioFile');
  if (fileBox) fileBox.hidden = true;
  const drop = $('#audioDrop');
  if (drop) drop.disabled = false;
  const label = $('#audioDropLabel');
  if (label) label.textContent = 'Add a voice recording';
  const hint = $('#audioDropHint');
  if (hint) hint.textContent = 'WAV, MP3 or M4A · up to 50 MB · simulated for this demo';
}

function validateSubmission(form) {
  clearFormErrors();
  const data = new FormData(form);
  const title = String(data.get('title') || '').trim();
  const community = String(data.get('community') || '').trim();
  const region = String(data.get('region') || '').trim();
  const story = String(data.get('story') || '').trim();
  const attribution = String(data.get('attribution') || '').trim();
  const consent = $('#consentCheck').checked;
  let firstInvalid = null;

  if (title.length < 3) {
    setFieldError('title', 'Give this knowledge a title of at least 3 characters.');
    firstInvalid = firstInvalid || $('#entryTitle');
  }
  if (community.length < 2) {
    setFieldError('community', 'Name the community this knowledge comes from.');
    firstInvalid = firstInvalid || $('#entryCommunity');
  }
  if (!region) {
    setFieldError('region', 'Choose the region connected to this knowledge.');
    firstInvalid = firstInvalid || $('#entryRegion');
  }
  if (attribution.length < 2) {
    setFieldError('attribution', 'Who should be credited? Add a name or collective.');
    firstInvalid = firstInvalid || $('#entryAttribution');
  }
  if (story.length < 40) {
    setFieldError('story', `A little more context, please — ${40 - story.length} characters to go.`);
    firstInvalid = firstInvalid || $('#entryStory');
  }
  if (!consent) {
    setFieldError('consent', 'Consent and cultural attribution must be confirmed before submission.');
    if (!firstInvalid) firstInvalid = $('#consentCheck');
  }

  if (firstInvalid) {
    firstInvalid.focus({ preventScroll: false });
    showToast('A few details are missing', 'Check the highlighted fields and try again.', 'alert-triangle');
    return null;
  }

  const type = String(data.get('knowledgeType') || 'Oral Folklore');
  const regionKey = region.split(',')[0].trim();
  const now = new Date();
  const entry = {
    id: `user-${Date.now()}`,
    title,
    category: type,
    region,
    regionKey,
    community,
    place: `${region} · submitted to the vault`,
    status: 'Pending Council Verification',
    statusKey: 'pending',
    endorsements: 0,
    submittedLabel: 'Submitted just now',
    excerpt: story.length > 170 ? `${story.slice(0, 168).trim()}…` : story,
    story: [story],
    image: null,
    imageAlt: title,
    language: 'Community submission',
    contributor: attribution,
    recorded: now.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    duration: state.audioUploaded ? state.audioDuration : 0,
    verified: false,
    rights: 'Pending consent review',
    tags: [type.toLowerCase(), regionKey.toLowerCase(), community.toLowerCase()],
    map: null,
    isNew: true,
    transcript: {
      original: ['Transcript pending community review.'],
      english: ['A community-approved translation will be published after verification.']
    }
  };

  return entry;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = $('#submitForm');
  const entry = validateSubmission(form);
  if (!entry) return;

  state.submissions.unshift(entry);
  state.lastSubmissionId = entry.id;
  saveStore();
  resetSubmissionForm();

  form.hidden = true;
  $('#submitSuccess').hidden = false;

  state.category = 'All';
  state.query = '';
  state.region = null;
  state.sort = 'curated';
  const searchInput = $('#searchInput');
  if (searchInput) {
    searchInput.value = '';
    toggleClearSearch();
  }
  renderArchive();
  renderMap();
  observeReveals();
  refreshIcons();
  showToast('Submission received', 'The record now shows as pending council verification.', 'badge-check');
}

function viewNewSubmission() {
  closeAllModals();
  state.category = 'All';
  state.query = '';
  state.region = null;
  $('#searchInput').value = '';
  toggleClearSearch();
  renderArchive();
  renderMap();
  const card = document.getElementById(`entry-${state.lastSubmissionId}`);
  if (card) {
    card.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'center' });
    card.classList.add('is-new');
    setTimeout(() => card.classList.remove('is-new'), 2600);
  }
}

/* ══════════════════════════════════════════════
   COMMUNITY VERIFICATION
   ══════════════════════════════════════════════ */
function pendingQueue() {
  return [...state.submissions, ...seedEntries()].filter((entry) => entry.statusKey === 'pending');
}

function renderVerifyList() {
  const host = $('#verifyList');
  if (!host) return;
  const pending = pendingQueue();

  if (!pending.length) {
    host.innerHTML = `
      <div class="rounded-2xl border border-dashed border-forest-900/15 px-5 py-10 text-center dark:border-white/10">
        <span class="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-forest-500/10 text-forest-600 dark:text-forest-200"><i data-lucide="check-check" class="h-5 w-5"></i></span>
        <p class="mt-3 font-display text-lg font-medium">The queue is clear.</p>
        <p class="mx-auto mt-1 max-w-xs text-[11px] leading-relaxed text-forest-500 dark:text-cream/35">Every submitted record currently has a full council quorum. New submissions will appear here.</p>
      </div>`;
    refreshIcons();
    return;
  }

  host.innerHTML = pending.map((entry) => {
    const count = Math.max(0, Math.min(3, Number(entry.endorsements) || 0));
    const dots = [0, 1, 2].map((i) => `<span class="endorse-dot ${i < count ? 'is-filled' : ''}"></span>`).join('');
    return `
      <div class="verify-item">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="flex flex-wrap items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-forest-500 dark:text-cream/30">
              <i data-lucide="${CATEGORY_META[entry.category]?.icon || 'sprout'}" class="h-3 w-3"></i> ${esc(entry.category)}
              <span class="h-0.5 w-0.5 rounded-full bg-forest-400/50"></span> ${esc(entry.submittedLabel || 'Awaiting review')}
            </p>
            <h4 class="mt-1.5 font-display text-[17px] font-medium leading-tight">${esc(entry.title)}</h4>
            <p class="mt-1 text-[10.5px] text-forest-500 dark:text-cream/35">${esc(entry.community)} · ${esc(entry.region)}</p>
          </div>
          <span class="status-pill status-pending"><i data-lucide="clock" class="h-3 w-3"></i> In review</span>
        </div>
        <div class="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-forest-900/8 pt-3 dark:border-white/8">
          <div class="flex items-center gap-2.5">
            <span class="flex items-center gap-1">${dots}</span>
            <span class="text-[10px] font-medium text-forest-600 dark:text-cream/40">${count} of 3 endorsements</span>
          </div>
          <div class="flex items-center gap-3">
            <button type="button" class="text-[10px] font-medium text-forest-500 underline decoration-forest-300 underline-offset-4 hover:text-terracotta-600 dark:text-cream/35" data-flag-id="${esc(entry.id)}">Flag concern</button>
            <button type="button" class="endorse-btn" data-endorse-id="${esc(entry.id)}">
              <i data-lucide="check" class="mr-1 inline h-3 w-3"></i> Endorse
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
  refreshIcons();
}

function endorse(id) {
  const userEntry = state.submissions.find((entry) => entry.id === id);
  if (userEntry) {
    userEntry.endorsements = Math.min(3, (Number(userEntry.endorsements) || 0) + 1);
    if (userEntry.endorsements >= 3) {
      userEntry.status = 'Verified by Council';
      userEntry.statusKey = 'verified';
      userEntry.verified = true;
      userEntry.rights = 'Verified · community attribution secured';
      showToast('Council quorum reached', `“${userEntry.title}” is now verified.`, 'badge-check');
    } else {
      showToast('Endorsement recorded', `${userEntry.endorsements} of 3 council endorsements for “${userEntry.title}”.`, 'shield-check');
    }
    saveStore();
  } else {
    const seed = seedEntries().find((entry) => entry.id === id);
    if (!seed) return;
    const current = state.seedEndorsements[id] ?? seed.endorsements;
    const next = Math.min(3, current + 1);
    state.seedEndorsements[id] = next;
    if (next >= 3 && !state.approvedSeeds.includes(id)) {
      state.approvedSeeds.push(id);
      showToast('Council quorum reached', `“${seed.title}” is now verified and published.`, 'badge-check');
    } else {
      showToast('Endorsement recorded', `${next} of 3 council endorsements for “${seed.title}”.`, 'shield-check');
    }
    saveStore();
  }
  renderVerifyList();
  renderArchive();
  renderMap();
}

function flagConcern(id) {
  const entry = entryById(id);
  showToast('Concern sent to council', `“${entry?.title || 'This record'}” will be reviewed privately. Thank you for protecting the archive.`, 'flag');
}

/* ══════════════════════════════════════════════
   INTERACTIONS
   ══════════════════════════════════════════════ */
function toggleClearSearch() {
  const input = $('#searchInput');
  const clear = $('#clearSearch');
  const kbd = $('.kbd-hint') || $('#searchInput')?.parentElement?.querySelector('kbd');
  const hasValue = Boolean(input && input.value.length);
  if (clear) clear.hidden = !hasValue;
  if (kbd) kbd.hidden = hasValue;
}

function setMenu(open) {
  const menu = $('#mobileMenu');
  const button = $('#menuBtn');
  if (!menu || !button) return;
  menu.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  button.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="h-5 w-5"></i>`;
  refreshIcons();
}

function applyCategory(category, options = {}) {
  state.category = category;
  if (options.clear) {
    state.query = '';
    state.region = null;
    const input = $('#searchInput');
    if (input) input.value = '';
    toggleClearSearch();
  }
  renderArchive();
  renderMap();
  setMenu(false);
  if (options.scroll) {
    $('#archive')?.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'start' });
  }
}

function clearFilters(mode = 'all') {
  if (mode === 'category' || mode === 'all') state.category = 'All';
  if (mode === 'region' || mode === 'all') state.region = null;
  if (mode === 'query' || mode === 'all') {
    state.query = '';
    const input = $('#searchInput');
    if (input) input.value = '';
    toggleClearSearch();
  }
  renderArchive();
  renderMap();
}

function bindEvents() {
  /* Theme */
  $('#themeToggle')?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('ethnovault-theme', isDark ? 'dark' : 'light'); } catch (error) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#0D0C0A' : '#FAF8F5');
  });

  /* Mobile menu */
  $('#menuBtn')?.addEventListener('click', () => {
    const menu = $('#mobileMenu');
    setMenu(menu ? menu.hidden : false);
  });
  $$('#mobileMenu a[href^="#"]').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  /* Search */
  const searchInput = $('#searchInput');
  searchInput?.addEventListener('input', (event) => {
    state.query = event.target.value;
    toggleClearSearch();
    renderArchive();
    renderMap();
  });
  $('#clearSearch')?.addEventListener('click', () => {
    searchInput.value = '';
    state.query = '';
    toggleClearSearch();
    renderArchive();
    renderMap();
    searchInput.focus();
  });

  /* Category pills + sort */
  $('#categoryPills')?.addEventListener('click', (event) => {
    const pill = event.target.closest('[data-category]');
    if (!pill) return;
    state.category = pill.dataset.category;
    renderArchive();
    renderMap();
  });
  $('#sortSelect')?.addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderArchive();
    observeReveals();
  });

  /* Global actions (pills nav, modals, cards, verification) */
  document.addEventListener('click', (event) => {
    const jump = event.target.closest('[data-category-jump]');
    if (jump) {
      applyCategory(jump.dataset.categoryJump, { clear: true, scroll: true });
      return;
    }

    const playId = event.target.closest('[data-play-id]');
    if (playId) {
      toggleEntry(playId.dataset.playId);
      return;
    }

    const storyButton = event.target.closest('[data-story-id]');
    if (storyButton) {
      openStory(storyButton.dataset.storyId);
      return;
    }

    const modalPlay = event.target.closest('[data-play-modal-id]');
    if (modalPlay) {
      const id = modalPlay.dataset.playModalId;
      closeAllModals();
      playEntry(id, { scroll: true });
      return;
    }

    const shareButton = event.target.closest('[data-share-story]');
    if (shareButton) {
      shareStory(shareButton.dataset.shareStory);
      return;
    }

    if (event.target.closest('[data-open-submit]')) {
      setMenu(false);
      openModal('submitModal');
      return;
    }

    if (event.target.closest('[data-open-verify]')) {
      setMenu(false);
      renderVerifyList();
      openModal('verifyModal');
      return;
    }

    const endorseButton = event.target.closest('[data-endorse-id]');
    if (endorseButton && !endorseButton.disabled) {
      endorse(endorseButton.dataset.endorseId);
      return;
    }

    const flagButton = event.target.closest('[data-flag-id]');
    if (flagButton) {
      flagConcern(flagButton.dataset.flagId);
      return;
    }

    const closeButton = event.target.closest('[data-close-modal]');
    if (closeButton) {
      const modal = closeButton.closest('.modal');
      if (modal) closeModal(modal);
      else closeAllModals();
      return;
    }

    const clearFilter = event.target.closest('[data-clear-filter]');
    if (clearFilter) {
      clearFilters(clearFilter.dataset.clearFilter);
      return;
    }

    const mapPin = event.target.closest('[data-region]');
    if (mapPin) {
      const region = mapPin.dataset.region;
      state.region = state.region === region ? null : region;
      renderArchive();
      renderMap();
      if (state.region) {
        $('#archive')?.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'start' });
      }
      return;
    }

    if (event.target.closest('#mapReset')) {
      state.region = null;
      renderArchive();
      renderMap();
      return;
    }

    if (event.target.closest('#emptyReset')) {
      clearFilters('all');
    }
  });

  /* Hero featured play */
  $('[data-hero-play]')?.addEventListener('click', () => {
    playEntry('sami-aurora', { scroll: true });
  });

  /* Player controls */
  $('#mainPlay')?.addEventListener('click', toggleMainPlayback);
  $('#skipBack')?.addEventListener('click', () => seekTo(state.player.elapsed - 10));
  $('#skipForward')?.addEventListener('click', () => seekTo(state.player.elapsed + 10));
  $('#speedBtn')?.addEventListener('click', () => {
    const cycles = [1, 0.75, 1.25, 1.5];
    const current = cycles.indexOf(state.player.speed);
    state.player.speed = cycles[(current + 1) % cycles.length];
    $('#speedBtn').textContent = `${state.player.speed}×`;
    showToast('Playback speed', `Now playing at ${state.player.speed}× speed.`, 'gauge');
  });
  $('#downloadTranscript')?.addEventListener('click', downloadTranscript);

  $('#playerTabs')?.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-track-id]');
    if (!tab) return;
    toggleEntry(tab.dataset.trackId);
  });

  document.addEventListener('click', (event) => {
    const subtitle = event.target.closest('[data-subtitle]');
    if (subtitle) {
      selectSubtitle(subtitle.dataset.subtitle);
      return;
    }
    const seek = event.target.closest('[data-seek]');
    if (seek) {
      seekTo(Number(seek.dataset.seek));
    }
  });

  /* Waveform scrubbing */
  const waveform = $('#waveform');
  if (waveform) {
    let scrubbing = false;
    const seekFromEvent = (event) => {
      const rect = waveform.getBoundingClientRect();
      const fraction = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      seekFraction(fraction);
    };
    waveform.addEventListener('pointerdown', (event) => {
      scrubbing = true;
      waveform.setPointerCapture?.(event.pointerId);
      seekFromEvent(event);
    });
    waveform.addEventListener('pointermove', (event) => {
      if (scrubbing) seekFromEvent(event);
    });
    const stopScrub = () => { scrubbing = false; };
    waveform.addEventListener('pointerup', stopScrub);
    waveform.addEventListener('pointercancel', stopScrub);
    waveform.addEventListener('keydown', (event) => {
      const duration = Number(playerEntry().duration) || 0;
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        seekTo(state.player.elapsed + Math.max(2, duration * 0.02));
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        seekTo(state.player.elapsed - Math.max(2, duration * 0.02));
      } else if (event.key === 'Home') {
        event.preventDefault();
        seekTo(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        seekTo(duration);
      } else if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        toggleMainPlayback();
      }
    });
  }

  /* Submission form */
  const submitForm = $('#submitForm');
  submitForm?.addEventListener('submit', handleSubmit);
  submitForm?.addEventListener('input', (event) => {
    const name = event.target.name;
    if (name) {
      const error = submitForm.querySelector(`[data-error-for="${name}"]`);
      if (error) error.hidden = true;
      event.target.classList.remove('is-invalid');
    }
    if (event.target.id === 'consentCheck') {
      const error = submitForm.querySelector('[data-error-for="consent"]');
      if (error) error.hidden = true;
    }
  });
  $('#entryStory')?.addEventListener('input', (event) => {
    const count = $('#storyCount');
    if (count) count.textContent = `${event.target.value.length} / 1200`;
  });
  $$('#typeGrid input[name="knowledgeType"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      $$('#typeGrid .type-card').forEach((card) => {
        card.classList.toggle('is-active', Boolean(card.querySelector('input:checked')));
      });
    });
  });
  $('#audioDrop')?.addEventListener('click', simulateUpload);
  $('#audioRemove')?.addEventListener('click', (event) => {
    event.stopPropagation();
    removeAudio();
  });
  $('[data-success-view]')?.addEventListener('click', viewNewSubmission);
  $('[data-success-again]')?.addEventListener('click', () => {
    resetSubmissionForm();
    $('#submitForm').hidden = false;
    $('#submitSuccess').hidden = true;
    $('#entryTitle')?.focus();
  });

  /* Keyboard shortcuts + focus trap */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if ($('.modal:not([hidden])')) {
        closeAllModals();
        return;
      }
      if (document.activeElement === $('#searchInput')) {
        if ($('#searchInput').value) {
          $('#searchInput').value = '';
          state.query = '';
          toggleClearSearch();
          renderArchive();
          renderMap();
        } else {
          $('#searchInput').blur();
        }
      }
    }

    trapFocus(event);

    const tag = (document.activeElement?.tagName || '').toLowerCase();
    const typing = ['input', 'textarea', 'select'].includes(tag);
    const shortcut = event.key === '/' || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k');
    if (shortcut && !typing && !$('.modal:not([hidden])')) {
      event.preventDefault();
      $('#searchInput')?.focus();
    }
  });
}

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
function init() {
  loadStore();
  bindEvents();

  renderPills();
  renderArchive();
  renderMap();
  renderPlayer();
  renderVerifyList();
  animateCounters();
  observeReveals();

  const heroWave = $('[data-hero-wave]');
  if (heroWave) heroWave.innerHTML = miniWaveMarkup('sami-hero', 18);

  toggleClearSearch();
  refreshIcons();

  /* Deep link to a shared record */
  if (window.location.hash.startsWith('#entry-')) {
    const id = window.location.hash.replace('#entry-', '');
    window.setTimeout(() => {
      if (entryById(id)) openStory(id);
    }, 250);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
