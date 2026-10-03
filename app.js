/**
 * Kuala Lumpur & Genting Highlands Trip Itinerary
 * Tailored for Jean Aristide Aquino & Daiki (Oct 29 – Nov 03, 2026)
 * Schengen & Taiwan Trip Architecture with Dual-Month Interactive Calendar & Leaflet Map
 */

// 17 Custom Google Maps List Pins + LDS Meetinghouse & Major Hubs
const visitedLocations = [
  {
    pinId: 1,
    name: "KLCC Park & Lake Symphony",
    nativeName: "Taman KLCC",
    region: "Kuala Lumpur (KLCC)",
    category: "Metropolitan Park & Light Show",
    color: "#0284c7",
    coords: [3.1554, 101.7145],
    day: "Day 1 (29 Oct)",
    desc: "50-acre lush urban sanctuary designed by Roberto Burle Marx featuring Lake Symphony's musical fountain displays and golden-hour views of the Twin Towers.",
    gmapsQuery: "KLCC Park, Kuala Lumpur"
  },
  {
    pinId: 2,
    name: "Petronas Twin Towers",
    nativeName: "Menara Berkembar Petronas",
    region: "Kuala Lumpur (KLCC)",
    category: "Iconic Modern Architecture",
    color: "#0284c7",
    coords: [3.1578, 101.7120],
    day: "Day 1 (29 Oct)",
    desc: "World-renowned 88-story twin skyscrapers (451.9m) clad in faceted stainless steel and glass inspired by Islamic geometric motifs.",
    gmapsQuery: "Petronas Twin Towers, Kuala Lumpur"
  },
  {
    pinId: 3,
    name: "Jalan Alor Food Street",
    nativeName: "Jalan Alor",
    region: "Bukit Bintang",
    category: "Famous Night Street Food",
    color: "#ea580c",
    coords: [3.1459, 101.7088],
    day: "Day 1 (29 Oct)",
    desc: "Vibrant pedestrian dining artery renowned for wok-tossed street foods, charcoal chicken satay, grilled seafood, fresh tropical fruits, and coconut water.",
    gmapsQuery: "Jalan Alor, Bukit Bintang, Kuala Lumpur"
  },
  {
    pinId: 4,
    name: "Kwai Chai Hong",
    nativeName: "鬼仔巷 (Ghost Lane)",
    region: "Chinatown (Lorong Panggung)",
    category: "Heritage Shophouse Murals",
    color: "#f59e0b",
    coords: [3.1417, 101.6983],
    day: "Day 2 (30 Oct)",
    desc: "Atmospheric restored pre-war heritage laneway behind Petaling Street, showcasing interactive 1960s nostalgic Chinatown street-life murals and a historic red wooden bridge.",
    gmapsQuery: "Kwai Chai Hong, Chinatown, Kuala Lumpur"
  },
  {
    pinId: 5,
    name: "Guan Di Temple Chinatown",
    nativeName: "吉隆坡關帝廟",
    region: "Chinatown (Jalan Tun H.S. Lee)",
    category: "Historic Taoist Sanctuary (1888)",
    color: "#ef4444",
    coords: [3.1436, 101.6967],
    day: "Day 2 (30 Oct)",
    desc: "Consecrated in 1888 by the Kwong Siew Association, dedicated to the Taoist God of War & Integrity (Guan Sheng Di Jun), housing a sacred 59kg copper Guan Dao spear.",
    gmapsQuery: "Guan Di Temple, Jalan Tun H S Lee, Kuala Lumpur"
  },
  {
    pinId: 6,
    name: "Sri Maha Mariamman Temple",
    nativeName: "ஸ்ரீ மகாமாரியம்மன் கோவில்",
    region: "Chinatown (Jalan Tun H.S. Lee)",
    category: "Oldest Hindu Temple in KL (1873)",
    color: "#7c3aed",
    coords: [3.1432, 101.6964],
    day: "Day 2 (30 Oct)",
    desc: "Oldest functioning Hindu temple in Kuala Lumpur featuring a 75-foot Raja Gopuram gate tower adorned with 228 South Indian deity sculptures.",
    gmapsQuery: "Sri Maha Mariamman Temple, Jalan Tun H S Lee, Kuala Lumpur"
  },
  {
    pinId: 7,
    name: "Petaling Street Market",
    nativeName: "茨廠街 (Jalan Petaling)",
    region: "Chinatown",
    category: "Historic Commercial Bazaar",
    color: "#f59e0b",
    coords: [3.1444, 101.6978],
    day: "Day 2 (30 Oct)",
    desc: "Historic Chinatown covered pedestrian bazaar under the 'Green Dragon' roof, famed for tea houses, artisan souvenir shops, and heritage snacks.",
    gmapsQuery: "Petaling Street Market, Chinatown, Kuala Lumpur"
  },
  {
    pinId: 8,
    name: "Bangunan Sultan Abdul Samad",
    nativeName: "Bangunan Sultan Abdul Samad",
    region: "Colonial Heritage District",
    category: "Mughal & Moorish Landmark",
    color: "#059669",
    coords: [3.1488, 101.6946],
    day: "Day 2 (30 Oct)",
    desc: "Masterpiece completed in 1897 featuring copper onion domes, red-brick colonnades, and a 41-meter clock tower facing the River of Life.",
    gmapsQuery: "Bangunan Sultan Abdul Samad, Kuala Lumpur"
  },
  {
    pinId: 9,
    name: "Merdeka Square (Dataran Merdeka)",
    nativeName: "Dataran Merdeka",
    region: "City Center",
    category: "National Independence Square",
    color: "#059669",
    coords: [3.1485, 101.6938],
    day: "Day 2 (30 Oct)",
    desc: "Historic green where the Malayan flag was first unfurled at midnight on 31 August 1957, flanked by heritage colonial structures and one of the world's tallest flagpoles (95m).",
    gmapsQuery: "Dataran Merdeka, Kuala Lumpur"
  },
  {
    pinId: 10,
    name: "Chin Swee Caves Temple",
    nativeName: "清水岩廟",
    region: "Genting Highlands (Pahang Ridge)",
    category: "Cliffside Mountain Sanctuary",
    color: "#059669",
    coords: [3.4137, 101.7877],
    day: "Day 3 (31 Oct)",
    desc: "Dramatically perched 4,600 feet above sea level amidst rocky Titiwangsa slopes, featuring the 9-story Pagoda of Ten Thousand Buddhas and sweeping mist vistas.",
    gmapsQuery: "Chin Swee Caves Temple, Genting Highlands"
  },
  {
    pinId: 11,
    name: "Genting Highlands (SkyAvenue & Awana)",
    nativeName: "雲頂高原 (Resorts World Genting)",
    region: "Titiwangsa Range (Pahang)",
    category: "Highland Mountain Escape",
    color: "#0284c7",
    coords: [3.4240, 101.7932],
    day: "Day 3 (31 Oct)",
    desc: "Breezy alpine plateau (18°C–22°C) reachable via the Awana SkyWay glass-floor gondola over ancient rainforest, featuring high-altitude promenade dining and SkyAvenue.",
    gmapsQuery: "SkyAvenue, Resorts World Genting, Pahang"
  },
  {
    pinId: 12,
    name: "Kuala Lumpur Meetinghouse (LDS Church)",
    nativeName: "The Church of Jesus Christ of Latter-day Saints",
    region: "Ampang Hilir (Taman U Thant)",
    category: "Sacred Sunday Worship Service",
    color: "#b45309",
    coords: [3.1577, 101.7371],
    day: "Day 4 (01 Nov)",
    desc: "No. 4 Jalan Ampang Tengah, Taman U Thant. Official meetinghouse for Sunday sacrament services (10:00 AM – 12:00 PM) attended together with friend Daiki.",
    gmapsQuery: "No. 4 Jalan Ampang Tengah, Taman U Thant, Kuala Lumpur"
  },
  {
    pinId: 13,
    name: "Thean Hou Temple",
    nativeName: "樂聖嶺天后宮",
    region: "Robson Heights (Seputeh)",
    category: "Six-Tiered Chinese Shrine",
    color: "#ef4444",
    coords: [3.1219, 101.6873],
    day: "Day 4 (01 Nov)",
    desc: "Grand multi-tiered sanctuary dedicated to Mazu (Goddess of the Sea) perched on Robson Heights, adorned with thousands of glowing red hanging lanterns and skyline panoramas.",
    gmapsQuery: "Thean Hou Temple, Robson Heights, Kuala Lumpur"
  },
  {
    pinId: 14,
    name: "Batu Caves & Temple Cave",
    nativeName: "பத்து மலை (Batu Caves)",
    region: "Gombak (Selangor)",
    category: "Ancient Cavern & 272 Rainbow Steps",
    color: "#ea580c",
    coords: [3.2379, 101.6840],
    day: "Day 5 (02 Nov)",
    desc: "400-million-year-old limestone cavern complex guarded by the 140-foot colossal golden statue of Lord Murugan and 272 vibrant rainbow steps.",
    gmapsQuery: "Batu Caves, Gombak, Selangor"
  },
  {
    pinId: 15,
    name: "Ramayana Cave - Suyambu Lingam",
    nativeName: "Ramayana Cave",
    region: "Batu Caves Foothill",
    category: "Epic Dioramas & Stalactite Lingam",
    color: "#7c3aed",
    coords: [3.2365, 101.6815],
    day: "Day 5 (02 Nov)",
    desc: "Enchanting cavern illuminated by chromatic LED displays illustrating the Ramayana epic, leading to a naturally formed sacred stalactite Shiva Lingam.",
    gmapsQuery: "Ramayana Cave, Batu Caves"
  },
  {
    pinId: 16,
    name: "Saloma Link & Central Market",
    nativeName: "Pintasan Saloma & Pasar Seni",
    region: "KL City Center",
    category: "Illuminated Bridge & Cultural Market",
    color: "#0284c7",
    coords: [3.1594, 101.7078],
    day: "Day 5 (02 Nov)",
    desc: "Stunning 370-meter pedestrian footbridge with kinetic LED canopy resembling Sirih Junjung, alongside the historic 1888 Central Market artisan heritage center.",
    gmapsQuery: "Saloma Link, Kuala Lumpur"
  },
  {
    pinId: 17,
    name: "KLIA Terminal 2 (AirAsia Hub)",
    nativeName: "Lapangan Terbang Antarabangsa Kuala Lumpur 2",
    region: "Sepang (Selangor)",
    category: "International Flight Gateways",
    color: "#64748b",
    coords: [2.7433, 101.6853],
    day: "Days 1 & 6 (29 Oct & 03 Nov)",
    desc: "Arrival on AirAsia AK585 (02:55 AM, 29 Oct) and departure on AirAsia AK584 (18:10 PM, 03 Nov) to Manila (MNL). Connected to KL Sentral via 28-min KLIA Ekspres.",
    gmapsQuery: "KLIA Terminal 2, Sepang"
  }
];

// Chronological Transit Polyline Across Kuala Lumpur & Genting
const chronologicalRouteCoords = [
  [2.7433, 101.6853], // KLIA Terminal 2
  [3.1343, 101.6865], // KL Sentral
  [3.1554, 101.7145], // KLCC Park
  [3.1578, 101.7120], // Petronas Twin Towers
  [3.1459, 101.7088], // Jalan Alor Food Street
  [3.1417, 101.6983], // Kwai Chai Hong
  [3.1436, 101.6967], // Guan Di Temple
  [3.1432, 101.6964], // Sri Maha Mariamman Temple
  [3.1444, 101.6978], // Petaling Street Market
  [3.1488, 101.6946], // Bangunan Sultan Abdul Samad
  [3.1485, 101.6938], // Merdeka Square
  [3.4137, 101.7877], // Chin Swee Caves Temple
  [3.4240, 101.7932], // Genting Highlands Peak
  [3.1577, 101.7371], // Kuala Lumpur LDS Meetinghouse
  [3.1219, 101.6873], // Thean Hou Temple
  [3.2379, 101.6840], // Batu Caves
  [3.2365, 101.6815], // Ramayana Cave
  [3.1452, 101.6957], // Central Market
  [3.1594, 101.7078], // Saloma Link
  [3.1343, 101.6865], // KL Sentral
  [2.7433, 101.6853]  // Return KLIA Terminal 2
];

// Master Trip Calendar Data (Oct 2026 & Nov 2026)
const tripCalendarData = {
  // October 2026
  '2026-10-29': {
    dateKey: '2026-10-29',
    dayNum: 29,
    month: 'oct',
    dayLabel: 'Day 1',
    dayBadge: 'DAY 1',
    country: 'KLCC & Downtown',
    countryClass: 'country-klcc',
    flag: '🏙️',
    city: 'KLCC & Golden Triangle',
    title: 'Arrival & Reunion with Daiki',
    summary: 'AirAsia AK585 arrival (02:55 AM), check-in at Daiki\'s flat, daytime rest, KLCC Park golden hour, Lake Symphony light show & Jalan Alor street feast.',
    coords: [3.1554, 101.7145],
    zoom: 14,
    tableDayId: 'row-day1'
  },
  '2026-10-30': {
    dateKey: '2026-10-30',
    dayNum: 30,
    month: 'oct',
    dayLabel: 'Day 2',
    dayBadge: 'DAY 2',
    country: 'Chinatown & Heritage',
    countryClass: 'country-chinatown',
    flag: '🏮',
    city: 'Chinatown & Merdeka',
    title: 'Heritage Enclaves & Pavilion Dinner',
    summary: 'Solo morning walking tour: Kwai Chai Hong 1960s murals, Guan Di Temple, Sri Maha Mariamman, Petaling Street, Merdeka Square & evening Pavilion reunion with Daiki.',
    coords: [3.1444, 101.6978],
    zoom: 14,
    tableDayId: 'row-day2'
  },
  '2026-10-31': {
    dateKey: '2026-10-31',
    dayNum: 31,
    month: 'oct',
    dayLabel: 'Day 3',
    dayBadge: 'DAY 3',
    country: 'Genting Highlands',
    countryClass: 'country-genting',
    flag: '🚠',
    city: 'Titiwangsa Mountains',
    title: 'Full-Day Mountain Trip with Daiki',
    summary: 'Weekend off-shift excursion with Daiki: Awana SkyWay gondola over ancient rainforest, cliffside Chin Swee Caves Temple, cool 20°C alpine air, and SkyAvenue promenade.',
    coords: [3.4240, 101.7932],
    zoom: 13,
    tableDayId: 'row-day3'
  },

  // November 2026
  '2026-11-01': {
    dateKey: '2026-11-01',
    dayNum: 1,
    month: 'nov',
    dayLabel: 'Day 4',
    dayBadge: 'DAY 4',
    country: 'Sunday LDS Worship',
    countryClass: 'country-worship',
    flag: '🏛️',
    city: 'Taman U Thant & Robson',
    title: 'Sabbath Worship & Suggested Afternoon Option',
    summary: 'Sunday LDS sacrament & classes at Kuala Lumpur Meetinghouse (10:00 AM – 12:00 PM), followed by a flexible afternoon (Suggested: Ampang lunch & Thean Hou Temple; Daiki may have other plans).',
    coords: [3.1577, 101.7371],
    zoom: 14,
    tableDayId: 'row-day4'
  },
  '2026-11-02': {
    dateKey: '2026-11-02',
    dayNum: 2,
    month: 'nov',
    dayLabel: 'Day 5',
    dayBadge: 'DAY 5',
    country: 'Batu Caves & Saloma',
    countryClass: 'country-batucaves',
    flag: '🪔',
    city: 'Batu Caves & City Center',
    title: 'Ancient Caverns & Flexible Exploration',
    summary: 'Daiki is off duty (Monday morning in Malaysia is still Sunday in US). Explore 140-ft Lord Murugan, 272 rainbow steps, Temple & Ramayana Caves, Central Market, Saloma Link & farewell dinner before Daiki\'s 22:00 PM shift.',
    coords: [3.2379, 101.6840],
    zoom: 14,
    tableDayId: 'row-day5'
  },
  '2026-11-03': {
    dateKey: '2026-11-03',
    dayNum: 3,
    month: 'nov',
    dayLabel: 'Day 6',
    dayBadge: 'DAY 6',
    country: 'Transit & Manila Flight',
    countryClass: 'country-transit',
    flag: '✈️',
    city: 'KL Sentral ➔ KLIA2',
    title: 'Farewell Breakfast & Homeward Flight',
    summary: 'Farewell breakfast with Daiki as his first US shift ends at 07:00 AM, Nu Sentral shopping, 28-min KLIA Ekspres to KLIA Terminal 2, boarding AirAsia AK584 (18:10 PM) touching down in Manila at 22:20 PM.',
    coords: [2.7433, 101.6853],
    zoom: 12,
    tableDayId: 'row-day6'
  }
};

// Master 6-Day Itinerary Data Store
const itineraryData = [
  {
    dayId: "day1",
    dayNum: "Day 1",
    date: "Thu, 29 Oct 2026",
    region: "klcc",
    phase: "joint",
    phaseLabel: "Arrival & Reunion with Daiki",
    city: "Kuala Lumpur & KLCC Precinct",
    landmarks: [
      { name: "KLIA Terminal 2 (AirAsia AK585)", pin: "#17" },
      { name: "Daiki's Apartment (Host Base)", pin: "🏠" },
      { name: "Petronas Twin Towers & Suria KLCC", pin: "#2" },
      { name: "KLCC Park & Lake Symphony", pin: "#1" },
      { name: "Jalan Alor Food Street", pin: "#3" }
    ],
    cultureBadge: "🏙️ Modern Metropolis & Golden Triangle Sunset",
    activities: [
      "Depart Manila (MNL) on Wednesday 28 Oct at <span class=\"time-chip\">23:05 PM</span> and touch down at <u>KLIA Terminal 2</u> on Thursday 29 Oct at <span class=\"time-chip\">02:55 AM</span> aboard AirAsia Flight AK585.",
      "Clear early morning customs and take a direct 24-hour Grab / taxi to <u>Daiki's apartment</u>, arriving by <span class=\"time-chip\">04:15 AM</span>.",
      "Quietly greet Daiki during his active overnight US tech shift, take a warm shower, and sleep soundly until late morning.",
      "Allow Daiki to complete his shift at <span class=\"time-chip\">07:00 AM</span> and enter his daytime rest window undisturbed.",
      "Wake up refreshed at <span class=\"time-chip\">11:00 AM</span>, enjoy a light solo lunch nearby, and rest comfortably at the apartment.",
      "Reconnect with Daiki at <span class=\"time-chip\">04:00 PM</span> as Daiki wakes up fully energized, then board the LRT directly to <u>Suria KLCC</u>.",
      "Stroll through the landscaped pathways of <u>KLCC Park</u> with Daiki and photograph the towering steel-and-glass facade of the <u>Petronas Twin Towers</u> during golden hour.",
      "Watch the musical fountain light display at <u>Lake Symphony</u> with Daiki at <span class=\"time-chip\">08:00 PM</span>.",
      "Walk over to <u>Jalan Alor Food Street</u> with Daiki at <span class=\"time-chip\">08:45 PM</span> for an alcohol-free street food feast featuring charcoal-grilled chicken satay, roti canai, and fresh coconut water before Daiki begins his 10:00 PM shift."
    ],
    costs: [
      { item: "Airport Grab to Residence (Late Night)", amount: "RM 75.00" },
      { item: "Midday Solo Lunch", amount: "RM 15.00" },
      { item: "LRT to KLCC", amount: "RM 2.80" },
      { item: "Dinner at Jalan Alor with Daiki", amount: "RM 35.00" }
    ],
    dayTotal: "RM 127.80",
    dayTotalPhp: "₱1,687 PHP"
  },
  {
    dayId: "day2",
    dayNum: "Day 2",
    date: "Fri, 30 Oct 2026",
    region: "chinatown",
    phase: "solo",
    phaseLabel: "Chinatown (Solo AM / Joint PM)",
    city: "Chinatown & Colonial Heritage District",
    landmarks: [
      { name: "Kwai Chai Hong 1960s Murals", pin: "#4" },
      { name: "Guan Di Temple Chinatown (1888)", pin: "#5" },
      { name: "Sri Maha Mariamman Temple (1873)", pin: "#6" },
      { name: "Petaling Street Market Bazaar", pin: "#7" },
      { name: "Bangunan Sultan Abdul Samad & Merdeka", pin: "#8" },
      { name: "Pavilion Kuala Lumpur (Joint PM)", pin: "🛍️" }
    ],
    cultureBadge: "🏮 Old Malaya Heritage, Guild Temples & River of Life",
    activities: [
      "Quietly exit the apartment at <span class=\"time-chip\">08:30 AM</span> so Daiki can sleep soundly through the morning.",
      "Arrive at <u>Kwai Chai Hong</u> at <span class=\"time-chip\">09:00 AM</span> to photograph the restored 1960s shophouse murals and historic red timber bridge in serene morning light.",
      "Visit the 1888 Taoist temple <u>Guan Di Temple Chinatown Tun H.S Lee</u> at <span class=\"time-chip\">09:45 AM</span> and admire the historic statues of Guan Sheng Di Jun and intricate ceramic roof carvings.",
      "Walk directly across the street at <span class=\"time-chip\">10:15 AM</span> to inspect the 75-foot Raja Gopuram tower of <u>Sri Maha Mariamman Temple</u>, the oldest functioning Hindu temple in Kuala Lumpur.",
      "Browse traditional tea shops, dried fruit stalls, and woven goods along pedestrianized <u>Petaling Street Market</u> from <span class=\"time-chip\">10:45 AM</span>.",
      "Walk across the River of Life pedestrian bridge at <span class=\"time-chip\">11:45 AM</span> to marvel at the 41-meter copper-domed clock tower of <u>Bangunan Sultan Abdul Samad</u>.",
      "Step onto the sweeping manicured lawn of <u>Merdeka Square</u> at <span class=\"time-chip\">12:15 PM</span> where the Malayan flag was first raised in 1957.",
      "Enjoy a lunch of claypot chicken rice and fresh calamansi juice at a sheltered heritage cafe at <span class=\"time-chip\">01:00 PM</span>.",
      "Return to Daiki's flat by <span class=\"time-chip\">03:00 PM</span> for afternoon refreshments as Daiki completes his daytime sleep cycle.",
      "Head out together with Daiki at <span class=\"time-chip\">04:30 PM</span> to explore <u>Pavilion Kuala Lumpur</u> and share dinner together by <span class=\"time-chip\">07:30 PM</span> before his final work shift of the week."
    ],
    costs: [
      { item: "RapidKL Subway Transit", amount: "RM 5.60" },
      { item: "Chinatown Snacks & Soy Milk", amount: "RM 12.00" },
      { item: "Heritage Cafe Lunch", amount: "RM 18.00" },
      { item: "Refreshments & Fruit", amount: "RM 10.00" },
      { item: "Evening Shared Dinner with Daiki", amount: "RM 40.00" }
    ],
    dayTotal: "RM 85.60",
    dayTotalPhp: "₱1,130 PHP"
  },
  {
    dayId: "day3",
    dayNum: "Day 3",
    date: "Sat, 31 Oct 2026",
    region: "genting",
    phase: "joint",
    phaseLabel: "Full-Day Mountain Trip with Daiki",
    city: "Titiwangsa Mountains (Genting Highlands)",
    landmarks: [
      { name: "KL Sentral Express Coach Terminal", pin: "🚌" },
      { name: "Awana SkyWay Gondola Cable Car", pin: "🚠" },
      { name: "Chin Swee Caves Temple & Pagoda", pin: "#10" },
      { name: "SkyAvenue & Genting Peak Promenade", pin: "#11" },
      { name: "Genting SkyWorlds Cloud Walk", pin: "🎡" }
    ],
    cultureBadge: "🚠 Highland Scenic Escape · Breezy Mountain Gondola & Cloud Mist Pagoda",
    activities: [
      "Enjoy a relaxed morning departure together with Daiki at <span class=\"time-chip\">08:30 AM</span> with Daiki on his first weekend morning completely free of work duties.",
      "Board the express coach with Daiki from <u>KL Sentral</u> at <span class=\"time-chip\">09:00 AM</span> heading north toward the mountain foothills of Pahang.",
      "Arrive at <u>Awana Transportation Hub</u> at <span class=\"time-chip\">10:00 AM</span> and board the <u>Awana SkyWay</u> cable car with Daiki for a panoramic ascent through lush 130-million-year-old rainforest canopy.",
      "Disembark at the midway station with Daiki at <span class=\"time-chip\">10:30 AM</span> to explore the multi-tiered <u>Chin Swee Caves Temple</u> and take in dramatic cliffside vistas of the Titiwangsa mountains.",
      "Re-board the gondola with Daiki at <span class=\"time-chip\">12:00 PM</span> to reach the peak station at <u>Genting Highlands</u>.",
      "Walk together through the breezy mountain air (refreshing 18°C to 22°C) and explore the entertainment avenues and sky gardens inside <u>SkyAvenue</u>.",
      "Share lunch with Daiki at an artisan noodle eatery at <span class=\"time-chip\">01:00 PM</span>.",
      "Stroll the mountain promenade and view the outdoor roller coasters and cloud landscapes at <u>Genting SkyWorlds</u> from <span class=\"time-chip\">02:30 PM</span>.",
      "Descend on the return cable car with Daiki at <span class=\"time-chip\">04:30 PM</span> and catch the return transport back into Kuala Lumpur by <span class=\"time-chip\">06:30 PM</span>.",
      "Savor a celebratory weekend dinner with Daiki in the city, enjoying leisurely conversation without any evening shift alarms."
    ],
    costs: [
      { item: "KL Sentral to Awana Bus (Return)", amount: "RM 20.00" },
      { item: "Awana SkyWay Gondola Return", amount: "RM 18.00" },
      { item: "Chin Swee Temple Entry", amount: "Free" },
      { item: "Mountain Lunch with Daiki", amount: "RM 45.00" },
      { item: "Weekend Dinner with Daiki", amount: "RM 40.00" }
    ],
    dayTotal: "RM 123.00",
    dayTotalPhp: "₱1,624 PHP"
  },
  {
    dayId: "day4",
    dayNum: "Day 4",
    date: "Sun, 01 Nov 2026",
    region: "worship",
    phase: "worship",
    phaseLabel: "Sunday Worship with Daiki",
    city: "Taman U Thant & Robson Heights",
    landmarks: [
      { name: "Kuala Lumpur Meetinghouse (LDS Church)", pin: "#12" },
      { name: "Ampang Hilir Fellowship Lunch (Suggested)", pin: "🍽️" },
      { name: "Thean Hou Temple (Suggested Option)", pin: "#13" },
      { name: "Evening Fellowship (Daiki's Choice)", pin: "🏮" }
    ],
    cultureBadge: "✨ Sacred LDS Sunday Worship · Kuala Lumpur Branch Sabbath Service & Suggested Afternoon Option",
    activities: [
      "Dress in Sunday attire and depart together with Daiki at <span class=\"time-chip\">09:15 AM</span> for the embassy precinct of Ampang Hilir.",
      "Arrive with Daiki at the <u>Kuala Lumpur Meetinghouse</u> (No. 4 Jalan Ampang Tengah, Taman U Thant) by <span class=\"time-chip\">09:45 AM</span> for personal reverent preparation.",
      "Participate with Daiki in the 2-hour Sunday worship block (Sacrament Meeting followed by Sunday School / Priesthood / Relief Society) from <span class=\"time-chip\">10:00 AM</span> to <span class=\"time-chip\">12:00 PM</span>.",
      "Meet local members, international expats, and friends with Daiki for fellowship in the foyer following the conclusion of meetings at <span class=\"time-chip\">12:15 PM</span>.",
      "<div class=\"suggested-callout\">💡 Below is just a suggestion.</div>",
      "<span class=\"suggested-badge\">Suggested Option</span> Travel together with Daiki to a tranquil restaurant in <u>Ampang</u> for a peaceful Sabbath fellowship lunch at <span class=\"time-chip\">01:00 PM</span>.",
      "<span class=\"suggested-badge\">Suggested Option</span> Take an afternoon ride with Daiki up to the crest of <u>Robson Heights</u> to tour the six-tiered Chinese sanctuary <u>Thean Hou Temple</u> at <span class=\"time-chip\">03:00 PM</span>.",
      "<span class=\"suggested-badge\">Suggested Option</span> Admire the syncretic blend of Buddhism, Taoism, and Confucianism, walk beneath hundreds of traditional red hanging lanterns, and take in panoramic skyline views of <u>Kuala Lumpur</u>.",
      "<span class=\"suggested-badge\">Suggested Option</span> Return home with Daiki by <span class=\"time-chip\">05:30 PM</span> for a relaxed, restorative evening together sharing memories and an early quiet dinner."
    ],
    costs: [
      { item: "Grab to Church & Thean Hou", amount: "RM 35.00" },
      { item: "Sunday Fellowship Lunch (Est)", amount: "RM 35.00" },
      { item: "Thean Hou Temple Entry", amount: "Free" },
      { item: "Quiet Evening Sabbath Meal (Est)", amount: "RM 35.00" }
    ],
    dayTotal: "RM 105.00",
    dayTotalPhp: "₱1,386 PHP"
  },
  {
    dayId: "day5",
    dayNum: "Day 5",
    date: "Mon, 02 Nov 2026",
    region: "batucaves",
    phase: "joint",
    phaseLabel: "Joint & Flexible with Daiki",
    city: "Gombak Limestone Caves & City Center",
    landmarks: [
      { name: "KTM Komuter from KL Sentral", pin: "🚆" },
      { name: "Lord Murugan & 272 Rainbow Steps", pin: "#14" },
      { name: "Ramayana Cave - Suyambu Lingam", pin: "#15" },
      { name: "Central Market (Pasar Seni)", pin: "🎨" },
      { name: "Saloma Link Footbridge", pin: "#16" }
    ],
    cultureBadge: "🪔 Spiritual & Geological Wonder · Ancient Limestone Caverns & Flexible Exploration with Daiki",
    activities: [
      "Enjoy a relaxed Monday morning together with Daiki—since Monday morning in Malaysia is still Sunday evening in the US, Daiki has no overnight work shift and is completely off duty.",
      "Board the KTM Komuter train at <u>KL Sentral</u> at <span class=\"time-chip\">08:30 AM</span> heading straight to <u>Batu Caves Station</u>.",
      "Arrive at <u>Batu Caves</u> by <span class=\"time-chip\">09:15 AM</span> to beat the tropical midday heat and gaze upon the 140-foot golden statue of Lord Murugan.",
      "Ascend the iconic 272 rainbow-colored limestone steps to explore the grand interior cavern of <u>Temple Cave (Cathedral Cave)</u>.",
      "Descend to the foot of the hill at <span class=\"time-chip\">10:45 AM</span> to enter <u>Ramayana Cave - Suyambu Lingam</u>, marveling at the vibrant epic dioramas and naturally formed stalactite lingam.",
      "Rehydrate with fresh green coconut water and savor a South Indian thali lunch together near the temple entrance at <span class=\"time-chip\">12:00 PM</span>.",
      "Take the KTM Komuter back to the city center and browse Malaysian pewter, wood carvings, and batik prints at <u>Central Market (Pasar Seni)</u> from <span class=\"time-chip\">01:45 PM</span> to <span class=\"time-chip\">03:30 PM</span>.",
      "Spend a relaxed late afternoon exploring the city together with Daiki or resting comfortably at the flat before Daiki's work week starts.",
      "Walk the illuminated pedestrian bridge <u>Saloma Link</u> at <span class=\"time-chip\">06:30 PM</span> for glittering skyline views, followed by a special farewell dinner with Daiki at <span class=\"time-chip\">07:30 PM</span> before his first US tech shift begins at <span class=\"time-chip\">22:00 PM</span>."
    ],
    costs: [
      { item: "KTM Komuter Return Train", amount: "RM 5.20" },
      { item: "Batu Caves Main Cave Entry", amount: "Free" },
      { item: "Ramayana Cave Admission", amount: "RM 5.00" },
      { item: "Coconut Water & Indian Thali", amount: "RM 20.00" },
      { item: "Monorail / LRT Transit", amount: "RM 4.00" },
      { item: "Farewell Feast with Daiki", amount: "RM 55.00" }
    ],
    dayTotal: "RM 89.20",
    dayTotalPhp: "₱1,177 PHP"
  },
  {
    dayId: "day6",
    dayNum: "Day 6",
    date: "Tue, 03 Nov 2026",
    region: "transit",
    phase: "joint",
    phaseLabel: "Farewell & Departure",
    city: "KL City Center & Sepang Gateway",
    landmarks: [
      { name: "Farewell Breakfast with Daiki", pin: "☕" },
      { name: "KL Sentral & Nu Sentral Mall", pin: "🛍️" },
      { name: "KLIA Ekspres Non-Stop Train", pin: "🚄" },
      { name: "KLIA Terminal 2 (AirAsia AK584)", pin: "#17" },
      { name: "Manila (MNL) Arrival 22:20 PM", pin: "🇵🇭" }
    ],
    cultureBadge: "✈️ Homeward Transit · AirAsia Flight AK584 Departure to Manila",
    activities: [
      "Greet Daiki as his first overnight US shift finishes at <span class=\"time-chip\">07:00 AM</span> Tuesday morning, and share a heartfelt farewell breakfast together with Daiki from <span class=\"time-chip\">07:30 AM</span> to <span class=\"time-chip\">08:30 AM</span>.",
      "Allow Daiki to sleep peacefully from <span class=\"time-chip\">08:30 AM</span> following his shift, while you finish packing your bags.",
      "Check out quietly at <span class=\"time-chip\">11:30 AM</span>, leaving your luggage with Daiki or taking it to <u>KL Sentral</u>.",
      "Spend a relaxed midday browsing Malaysian souvenirs (Beryl's chocolates, pewter, white coffee) and enjoying lunch at <u>Nu Sentral</u> from <span class=\"time-chip\">12:00 PM</span> to <span class=\"time-chip\">01:45 PM</span>.",
      "Say your final warm goodbyes to Daiki before heading into transit.",
      "Board the <u>KLIA Ekspres</u> from <u>KL Sentral</u> at <span class=\"time-chip\">02:45 PM</span>, arriving at <u>KLIA Terminal 2</u> non-stop by <span class=\"time-chip\">03:15 PM</span>.",
      "Check in bags, clear border control with plenty of cushion time, and enjoy a sit-down pre-flight meal at <u>Gateway@klia2</u> by <span class=\"time-chip\">04:15 PM</span>.",
      "Head to your departure gate for boarding at <span class=\"time-chip\">17:30 PM</span> aboard revised AirAsia Flight AK584 for your confirmed <span class=\"time-chip\">18:10 PM</span> departure, touching down in Manila at <span class=\"time-chip\">22:20 PM</span>."
    ],
    costs: [
      { item: "Farewell Breakfast with Daiki", amount: "RM 15.00" },
      { item: "Lunch & Cafe Refreshments", amount: "RM 25.00" },
      { item: "KLIA Ekspres to KLIA2", amount: "RM 55.00" },
      { item: "Airport Meal at Gateway@klia2", amount: "RM 30.00" }
    ],
    dayTotal: "RM 125.00",
    dayTotalPhp: "₱1,650 PHP"
  }
];

// Leaflet State
let map;
let googleLayers = {};
let currentLayer = 'roadmap';
let starMarkers = [];
let templeMarker = null;
let routeLine = null;
const DEFAULT_CENTER = [3.2000, 101.7300];
const DEFAULT_ZOOM = 11;

// Create Star SVG Icon
function createStarIcon(color, number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
    <filter id="starShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000" flood-opacity="0.35"/>
    </filter>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="${color}" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" filter="url(#starShadow)"/>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: 'sight-star-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -14]
  });
}

// Create Golden Spire Icon for LDS Meetinghouse
function createTempleIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 32 38">
    <defs>
      <filter id="templeGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#78350f" flood-opacity="0.45"/>
      </filter>
    </defs>
    <g filter="url(#templeGlow)">
      <path d="M16 36 C16 36 29 23 29 14.5 C29 6.8 23.2 1 16 1 C8.8 1 3 6.8 3 14.5 C3 23 16 36 16 36 Z" fill="#b45309" stroke="#ffffff" stroke-width="2"/>
      <circle cx="16" cy="4.5" r="1.5" fill="#fef08a"/>
      <path d="M16 5.5 L14 13 L18 13 Z" fill="#fef3c7"/>
      <polygon points="8,13 16,9 24,13" fill="#fef3c7"/>
      <rect x="9" y="13" width="14" height="10" rx="1" fill="#ffffff"/>
      <rect x="11.5" y="15" width="2" height="8" fill="#b45309"/>
      <rect x="15" y="16.5" width="2" height="6.5" fill="#78350f"/>
      <rect x="18.5" y="15" width="2" height="8" fill="#b45309"/>
    </g>
  </svg>`;
  return L.divIcon({
    html: svg,
    className: 'lds-temple-icon',
    iconSize: [32, 38],
    iconAnchor: [16, 36],
    popupAnchor: [0, -34]
  });
}

// Initialize Leaflet Map
function initMap() {
  const mapElem = document.getElementById('leafletMap');
  if (!mapElem || typeof L === 'undefined') return;

  googleLayers = {
    roadmap: L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps',
      maxZoom: 20
    }),
    terrain: L.tileLayer('https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps (Terrain)',
      maxZoom: 20
    }),
    satellite: L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      attribution: '&copy; Google Maps (Satellite)',
      maxZoom: 20
    })
  };

  map = L.map('leafletMap', {
    scrollWheelZoom: true,
    doubleClickZoom: false,
    tap: false,
    zoomControl: true
  }).setView(DEFAULT_CENTER, DEFAULT_ZOOM);

  googleLayers.roadmap.addTo(map);

  // 1. Draw Chronological Polyline
  routeLine = L.polyline(chronologicalRouteCoords, {
    color: '#0284c7',
    weight: 3.5,
    opacity: 0.85,
    dashArray: '8, 8',
    smoothFactor: 1
  }).addTo(map);

  // 2. Add All Visited Sight Star Markers
  visitedLocations.forEach(loc => {
    const isTemple = loc.pinId === 12;
    const marker = L.marker(loc.coords, {
      icon: isTemple ? createTempleIcon() : createStarIcon(loc.color, loc.pinId),
      zIndexOffset: isTemple ? 750 : 600,
      title: loc.name
    }).addTo(map);

    // Hover Tooltip
    marker.bindTooltip(`⭐ ${loc.name} · ${loc.day}`, {
      permanent: false,
      direction: 'top',
      offset: [0, -14],
      className: 'sight-star-tooltip'
    });

    // Rich Popup
    const encodedQuery = encodeURIComponent(loc.gmapsQuery);
    const pinBadgeText = isTemple ? '🏛️ LDS Meetinghouse & Worship' : `PIN #${loc.pinId} · ${loc.region}`;
    const popupHtml = `
      <div class="popup-inner-card">
        <span class="popup-tag-badge" style="background: ${loc.color};">${pinBadgeText}</span>
        <h4 class="popup-pin-title">${loc.name}</h4>
        <div style="font-size: 11px; color: #64748b; font-weight: 700; margin-bottom: 4px;">${loc.nativeName} · ${loc.day}</div>
        <p class="popup-pin-desc">${loc.desc}</p>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodedQuery}" target="_blank" rel="noopener noreferrer" class="popup-gmaps-link">
          ⭐ Live Google Reviews &amp; Photos ↗
        </a>
      </div>
    `;

    marker.bindPopup(popupHtml, {
      className: 'custom-sight-popup',
      maxWidth: 280
    });

    if (isTemple) {
      templeMarker = marker;
    }

    starMarkers.push({
      pinId: loc.pinId,
      name: loc.name,
      coords: loc.coords,
      marker: marker
    });
  });

  // Layer Switchers
  const layerBtns = document.querySelectorAll('.layer-btn[data-layer]');
  layerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLayer = btn.getAttribute('data-layer');
      if (targetLayer === currentLayer) return;

      layerBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      map.removeLayer(googleLayers[currentLayer]);
      googleLayers[targetLayer].addTo(map);
      currentLayer = targetLayer;
    });
  });

  // Temple Toggle Button
  const templeBtn = document.getElementById('templeToggleBtn');
  if (templeBtn && templeMarker) {
    templeBtn.addEventListener('click', () => {
      if (map.hasLayer(templeMarker)) {
        map.removeLayer(templeMarker);
        templeBtn.classList.remove('active');
      } else {
        templeMarker.addTo(map);
        templeBtn.classList.add('active');
        map.flyTo(templeMarker.getLatLng(), 15, { duration: 1.2 });
        templeMarker.openPopup();
      }
    });
  }
}

// Render Master Trip Calendar (October 2026 & November 2026)
function renderTripCalendar() {
  const octGrid = document.getElementById('calGridOct');
  const novGrid = document.getElementById('calGridNov');
  if (!octGrid || !novGrid) return;

  octGrid.innerHTML = '';
  novGrid.innerHTML = '';

  // 1. October 2026: 1 Oct 2026 is Thursday -> 4 leading pad days: 27, 28, 29, 30 Sep
  const octPadPre = [27, 28, 29, 30];
  octPadPre.forEach(num => {
    const pad = document.createElement('div');
    pad.className = 'cal-day-cell pad-day';
    pad.innerHTML = `<div class="cal-day-top"><span class="cal-day-num">${num}</span></div>`;
    octGrid.appendChild(pad);
  });

  // 31 days in October
  for (let d = 1; d <= 31; d++) {
    const dateKey = `2026-10-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    const info = tripCalendarData[dateKey];

    if (info) {
      cell.className = `cal-day-cell ${info.countryClass}`;
      cell.setAttribute('data-date', dateKey);
      cell.setAttribute('data-country', info.country);
      cell.setAttribute('title', `${info.dayLabel}: ${info.city}`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-badge">${info.dayBadge}</span>
        </div>
        <div class="cal-day-body">
          <span class="cal-day-flag">${info.flag}</span>
          <span class="cal-day-city">${info.city}</span>
        </div>
      `;
      cell.addEventListener('click', () => {
        selectCalendarDay(dateKey);
      });
    } else {
      cell.className = 'cal-day-cell non-trip-day';
      cell.setAttribute('title', `${d} Oct 2026`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
        </div>
      `;
    }
    octGrid.appendChild(cell);
  }

  // 2. November 2026: 1 Nov 2026 is Sunday -> 0 leading pad days!
  // 30 days in November
  for (let d = 1; d <= 30; d++) {
    const dateKey = `2026-11-${String(d).padStart(2, '0')}`;
    const cell = document.createElement('div');
    const info = tripCalendarData[dateKey];

    if (info) {
      cell.className = `cal-day-cell ${info.countryClass}`;
      cell.setAttribute('data-date', dateKey);
      cell.setAttribute('data-country', info.country);
      cell.setAttribute('title', `${info.dayLabel}: ${info.city}`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
          <span class="cal-day-badge">${info.dayBadge}</span>
        </div>
        <div class="cal-day-body">
          <span class="cal-day-flag">${info.flag}</span>
          <span class="cal-day-city">${info.city}</span>
        </div>
      `;
      cell.addEventListener('click', () => {
        selectCalendarDay(dateKey);
      });
    } else {
      cell.className = 'cal-day-cell non-trip-day';
      cell.setAttribute('title', `${d} Nov 2026`);
      cell.innerHTML = `
        <div class="cal-day-top">
          <span class="cal-day-num">${d}</span>
        </div>
      `;
    }
    novGrid.appendChild(cell);
  }

  // Trailing pad days for Nov (30 Nov is Mon -> Tue 1 to Sat 5 Dec to complete 5 weeks: 35 cells)
  const novPadPost = [1, 2, 3, 4, 5];
  novPadPost.forEach(num => {
    const pad = document.createElement('div');
    pad.className = 'cal-day-cell pad-day';
    pad.innerHTML = `<div class="cal-day-top"><span class="cal-day-num">${num}</span></div>`;
    novGrid.appendChild(pad);
  });

  // 3. Category Filter Chips
  const legendChips = document.querySelectorAll('#calLegendBar .cal-legend-chip');
  legendChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const country = chip.getAttribute('data-country');
      filterCalendarByCountry(country);
    });
  });

  // 4. Mobile Month Tabs Switcher
  const monthTabs = document.querySelectorAll('#calMonthTabs .cal-month-tab');
  monthTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetMonth = tab.getAttribute('data-month');
      switchCalendarMonth(targetMonth);
    });
  });

  // Select Day 1 by default
  const defaultDate = '2026-10-29';
  selectCalendarDay(defaultDate);
}

// Select a Specific Calendar Day
function selectCalendarDay(dateKey, shouldScrollTable = false) {
  const info = tripCalendarData[dateKey];
  if (!info) return;

  if (info.month) {
    switchCalendarMonth(info.month);
  }

  document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('is-selected'));
  const activeCells = document.querySelectorAll(`.cal-day-cell[data-date="${dateKey}"]`);
  activeCells.forEach(c => c.classList.add('is-selected'));

  updateCalendarDrawer(info);

  if (map && info.coords) {
    map.flyTo(info.coords, info.zoom || 14, { duration: 1.2 });
    const match = starMarkers.find(m => 
      Math.abs(m.coords[0] - info.coords[0]) < 0.05 && 
      Math.abs(m.coords[1] - info.coords[1]) < 0.05
    );
    if (match && match.marker) {
      setTimeout(() => match.marker.openPopup(), 600);
    }
  }

  if (shouldScrollTable && info.tableDayId) {
    scrollToItineraryDay(info.tableDayId);
  }
}

// Update Calendar Drawer Content
function updateCalendarDrawer(info) {
  const drawer = document.getElementById('calSelectedDrawer');
  const drawerContent = document.getElementById('calDrawerContent');
  if (!drawer || !drawerContent || !info) return;

  const dateParts = info.dateKey.split('-');
  const dateFormatted = `${parseInt(dateParts[2], 10)} ${info.month === 'oct' ? 'Oct 2026' : 'Nov 2026'}`;

  drawerContent.innerHTML = `
    <div class="cal-drawer-inner">
      <div class="cal-drawer-info">
        <div class="cal-drawer-title-row">
          <span class="cal-drawer-tag ${info.countryClass}">${info.flag} ${info.dayLabel} · ${info.country}</span>
          <span class="cal-drawer-title">${dateFormatted}: ${info.city}</span>
        </div>
        <div class="cal-drawer-desc">
          <strong>${info.title}:</strong> ${info.summary}
        </div>
      </div>
      <div class="cal-drawer-actions">
        <button type="button" class="cal-action-btn btn-primary" id="calBtnFlyMap">
          <span>🗺️ Focus Map on ${info.city.split('➔')[0].trim()}</span>
        </button>
        ${info.tableDayId ? `
        <button type="button" class="cal-action-btn" id="calBtnScrollTable">
          <span>📋 View Schedule in Table</span>
        </button>` : ''}
      </div>
    </div>
  `;

  drawer.classList.add('active');

  const flyBtn = document.getElementById('calBtnFlyMap');
  if (flyBtn) {
    flyBtn.addEventListener('click', () => {
      if (map && info.coords) {
        map.flyTo(info.coords, info.zoom || 14, { duration: 1.2 });
        const match = starMarkers.find(m => 
          Math.abs(m.coords[0] - info.coords[0]) < 0.05 && 
          Math.abs(m.coords[1] - info.coords[1]) < 0.05
        );
        if (match && match.marker) {
          setTimeout(() => match.marker.openPopup(), 600);
        }
      }
    });
  }

  const scrollBtn = document.getElementById('calBtnScrollTable');
  if (scrollBtn && info.tableDayId) {
    scrollBtn.addEventListener('click', () => {
      scrollToItineraryDay(info.tableDayId);
    });
  }
}

// Switch Mobile Calendar Month
function switchCalendarMonth(month) {
  const tabs = document.querySelectorAll('#calMonthTabs .cal-month-tab');
  tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-month') === month));

  const octCard = document.getElementById('calMonthOct');
  const novCard = document.getElementById('calMonthNov');
  if (octCard && novCard) {
    octCard.classList.toggle('active-tab', month === 'oct');
    novCard.classList.toggle('active-tab', month === 'nov');
  }
}

// Filter Calendar Days by Category / Country
function filterCalendarByCountry(country) {
  const chips = document.querySelectorAll('#calLegendBar .cal-legend-chip');
  chips.forEach(chip => {
    const chipCountry = chip.getAttribute('data-country');
    chip.classList.toggle('active', chipCountry === country);
  });

  const dayCells = document.querySelectorAll('.cal-day-cell[data-country]');
  if (country === 'all') {
    dayCells.forEach(cell => cell.classList.remove('is-dimmed'));
    return;
  }

  dayCells.forEach(cell => {
    const cellCountry = cell.getAttribute('data-country');
    cell.classList.toggle('is-dimmed', cellCountry !== country);
  });
}

// Scroll to Itinerary Day and Flash Highlight
function scrollToItineraryDay(rowId) {
  const row = document.getElementById(rowId);
  if (!row) return;

  row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  row.classList.add('table-row-highlight');
  setTimeout(() => {
    row.classList.remove('table-row-highlight');
  }, 2500);
}

// Render Master Itinerary Table
function renderMasterTable(filter) {
  const tbody = document.getElementById('itineraryTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  const filteredDays = itineraryData.filter(day => {
    if (filter === 'all') return true;
    if (filter === day.dayId) return true;
    if (filter === day.region) return true;
    if (filter === day.phase) return true;
    return false;
  });

  filteredDays.forEach(day => {
    const tr = document.createElement('tr');
    tr.className = 'itinerary-table-row';
    tr.id = `row-${day.dayId}`;
    tr.setAttribute('data-region', day.region);

    // Col 1: Day
    const tdDay = document.createElement('td');
    tdDay.innerHTML = `
      <div class="col-day-wrap">
        <span class="day-badge">${day.dayNum}</span>
        <span class="day-date-str">${day.date}</span>
        <span class="phase-tag tag-${day.phase}">${day.phaseLabel}</span>
      </div>
    `;

    // Col 2: Location
    const tdLoc = document.createElement('td');
    let pinsListHtml = '';
    day.landmarks.forEach(l => {
      pinsListHtml += `
        <li class="loc-pin-item">
          <span class="pin-num-badge">${l.pin}</span>
          <strong>${l.name}</strong>
        </li>
      `;
    });

    tdLoc.innerHTML = `
      <div class="loc-title">${day.city}</div>
      <ul class="loc-pins-list">
        ${pinsListHtml}
      </ul>
      <div class="culture-badge-pill">${day.cultureBadge}</div>
    `;

    // Col 3: Activities
    const tdAct = document.createElement('td');
    const ul = document.createElement('ul');
    ul.className = 'act-bullets-list';
    day.activities.forEach(bullet => {
      const li = document.createElement('li');
      li.className = 'act-bullet-item';
      li.innerHTML = bullet;
      ul.appendChild(li);
    });
    tdAct.appendChild(ul);

    // Col 4: Cost
    const tdCost = document.createElement('td');
    let costRowsHtml = '';
    day.costs.forEach(c => {
      const isFree = c.amount.toLowerCase().includes('free');
      costRowsHtml += `
        <div class="cost-row">
          <span>${c.item}:</span>
          ${isFree ? `<span class="cost-free">Free</span>` : `<strong>${c.amount}</strong>`}
        </div>
      `;
    });

    tdCost.innerHTML = `
      <div class="cost-box">
        ${costRowsHtml}
        <div class="cost-total-line">
          <span class="cost-total-val">${day.dayTotal}</span>
          <span class="cost-total-php">(${day.dayTotalPhp})</span>
        </div>
      </div>
    `;

    tr.appendChild(tdDay);
    tr.appendChild(tdLoc);
    tr.appendChild(tdAct);
    tr.appendChild(tdCost);

    tbody.appendChild(tr);
  });
}

// Setup Filter Tabs
function setupFilterBar() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderMasterTable(filter);
    });
  });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderTripCalendar();
  renderMasterTable('all');
  setupFilterBar();
});
