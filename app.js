/**
 * Kuala Lumpur Interactive Itinerary & Master Field Guide
 * Tailored for 6-Day Synchronized Visit with Japanese LDS Friend (Oct 29 – Nov 3, 2026)
 * Features: Master Itinerary Table, Leaflet Route Map, Night Shift Synchronization,
 * and 13 Google Maps Starred Landmarks.
 */

// Master 6-Day Itinerary Data Store
const itineraryData = [
  {
    dayId: "day1",
    dayNum: "Day 1",
    date: "Thu 29 Oct 2026",
    phase: "joint",
    phaseLabel: "Arrival & KLCC Reunion",
    city: "Kuala Lumpur & KLCC",
    landmarks: "• KLIA Terminal 2<br>• KL Sentral<br>• KLCC Precinct",
    cultureBadge: "🏙️ **Modern Metropolis & Twin Towers** · *Golden Triangle Sunset & Evening Symphony*",
    badgeClass: "badge-modern",
    locations: [
      { name: "KLIA Terminal 2", coords: [2.7433, 101.6854], category: "Transit Hub" },
      { name: "KL Sentral", coords: [3.1342, 101.6865], category: "Transit Hub" },
      { name: "KLCC Park", coords: [3.1555902, 101.7147872], category: "Park & Nature" },
      { name: "Petronas Twin Towers", coords: [3.1574693, 101.7115639], category: "Modern Landmark" },
      { name: "Jalan Alor Food Street", coords: [3.146121, 101.7092762], category: "Night Food Street" }
    ],
    activities: [
      "Touch down at <u>KLIA Terminal 2</u> aboard AirAsia Flight AK585 at <span class=\"time-chip\">05:15 AM</span> and clear border control.",
      "Board the <u>KLIA Ekspres</u> train at <span class=\"time-chip\">06:30 AM</span> for a 28-minute non-stop transit to <u>KL Sentral</u>.",
      "Arrive at your friend's residence by <span class=\"time-chip\">07:30 AM</span> to greet him right as his overnight tech shift concludes.",
      "Share a warm reunion breakfast of Kaya toast and soft-boiled eggs at a nearby kopitiam from <span class=\"time-chip\">07:45 AM</span> to <span class=\"time-chip\">08:30 AM</span>.",
      "Allow your friend to rest undisturbed from <span class=\"time-chip\">08:30 AM</span> while you unpack, shower, and nap to recover from the red-eye flight.",
      "Reconnect at <span class=\"time-chip\">04:00 PM</span> as he wakes up and take the LRT Kelana Jaya Line directly to <u>Suria KLCC</u>.",
      "Stroll through the landscaped pathways of <u>KLCC Park</u> and photograph the towering steel-and-glass facade of the <u>Petronas Twin Towers</u> during golden hour.",
      "Watch the musical fountain light display at <u>Lake Symphony</u> at <span class=\"time-chip\">08:00 PM</span>.",
      "Walk over to <u>Jalan Alor Food Street</u> at <span class=\"time-chip\">08:45 PM</span> for an alcohol-free street food feast featuring charcoal-grilled chicken satay, roti canai, and fresh coconut water before his 10:00 PM shift."
    ],
    costs: [
      { item: "KLIA Ekspres Transit", amount: "RM 55.00" },
      { item: "Grab to Residence", amount: "RM 15.00" },
      { item: "Kopitiam Breakfast", amount: "RM 12.00" },
      { item: "Midday Rest / Lunch", amount: "RM 15.00" },
      { item: "LRT to KLCC", amount: "RM 2.80" },
      { item: "Dinner at Jalan Alor", amount: "RM 35.00" }
    ],
    dayTotal: "RM 134.80"
  },
  {
    dayId: "day2",
    dayNum: "Day 2",
    date: "Fri 30 Oct 2026",
    phase: "solo",
    phaseLabel: "Chinatown Heritage (Solo AM / Joint PM)",
    city: "Chinatown & Colonial District",
    landmarks: "• Petaling Street<br>• Dataran Merdeka<br>• Bukit Bintang",
    cultureBadge: "🏮 **Old Malaya & Heritage Enclaves** · *Pre-War Shophouses, Guild Temples & River of Life*",
    badgeClass: "badge-heritage",
    locations: [
      { name: "Kwai Chai Hong", coords: [3.1414715, 101.6976131], category: "Heritage Alley" },
      { name: "Guan Di Temple Chinatown Tun H.S Lee", coords: [3.1440375, 101.6967316], category: "Taoist Temple" },
      { name: "Sri Maha Mariamman Temple", coords: [3.1433851, 101.6964976], category: "Hindu Temple" },
      { name: "Petaling Street Market", coords: [3.1443951, 101.6976496], category: "Street Market" },
      { name: "Bangunan Sultan Abdul Samad", coords: [3.1487179, 101.6944582], category: "Colonial Architecture" },
      { name: "Merdeka Square", coords: [3.1490605, 101.6936592], category: "Historic Square" }
    ],
    activities: [
      "Quietly exit the apartment at <span class=\"time-chip\">08:30 AM</span> so your friend can sleep soundly through the morning.",
      "Arrive at <u>Kwai Chai Hong</u> at <span class=\"time-chip\">09:00 AM</span> to photograph the restored 1960s shophouse murals and historic red timber bridge in serene morning light.",
      "Visit the 1888 Taoist temple <u>Guan Di Temple Chinatown Tun H.S Lee</u> at <span class=\"time-chip\">09:45 AM</span> and admire the historic statues of Guan Sheng Di Jun and intricate ceramic roof carvings.",
      "Walk directly across the street at <span class=\"time-chip\">10:15 AM</span> to inspect the 75-foot Raja Gopuram tower of <u>Sri Maha Mariamman Temple</u>, the oldest functioning Hindu temple in Kuala Lumpur.",
      "Browse traditional tea shops, dried fruit stalls, and woven goods along pedestrianized <u>Petaling Street Market</u> from <span class=\"time-chip\">10:45 AM</span>.",
      "Walk across the River of Life pedestrian bridge at <span class=\"time-chip\">11:45 AM</span> to marvel at the 41-meter copper-domed clock tower of <u>Bangunan Sultan Abdul Samad</u>.",
      "Step onto the sweeping manicured lawn of <u>Merdeka Square</u> at <span class=\"time-chip\">12:15 PM</span> where the Malayan flag was first raised in 1957.",
      "Enjoy a lunch of claypot chicken rice and fresh calamansi juice at a sheltered heritage cafe at <span class=\"time-chip\">01:00 PM</span>.",
      "Return to your friend's flat by <span class=\"time-chip\">03:00 PM</span> for afternoon tea as he completes his sleep cycle.",
      "Head out together at <span class=\"time-chip\">04:30 PM</span> to explore the upscale concourses of <u>Pavilion Kuala Lumpur</u> and enjoy dinner together at an authentic Malaysian restaurant by <span class=\"time-chip\">07:30 PM</span> before his final work shift of the week."
    ],
    costs: [
      { item: "RapidKL Subway Transit", amount: "RM 5.60" },
      { item: "Chinatown Snacks & Soy Milk", amount: "RM 12.00" },
      { item: "Heritage Cafe Lunch", amount: "RM 18.00" },
      { item: "Refreshments & Fruit", amount: "RM 10.00" },
      { item: "Evening Shared Dinner", amount: "RM 40.00" }
    ],
    dayTotal: "RM 85.60"
  },
  {
    dayId: "day3",
    dayNum: "Day 3",
    date: "Sat 31 Oct 2026",
    phase: "joint",
    phaseLabel: "Weekend Off-Duty / Full-Day Escape",
    city: "Titiwangsa Mountains (Genting)",
    landmarks: "• Awana SkyWay<br>• Chin Swee Caves<br>• Genting Highlands",
    cultureBadge: "🚠 **Highland Scenic Escape** · *Breezy Mountain Gondola & Cloud Mist Pagoda*",
    badgeClass: "badge-highland",
    locations: [
      { name: "Awana SkyWay Hub", coords: [3.3986, 101.7820], category: "Cable Car Hub" },
      { name: "Chin Swee Caves Temple", coords: [3.4137, 101.7876], category: "Cliffside Temple" },
      { name: "Genting Highlands (SkyAvenue)", coords: [3.423978, 101.7932011], category: "Mountain Resort" }
    ],
    activities: [
      "Enjoy a relaxed morning departure together at <span class=\"time-chip\">08:30 AM</span> with your friend enjoying his first weekend morning completely free of work duties.",
      "Board the express coach from <u>KL Sentral</u> at <span class=\"time-chip\">09:00 AM</span> heading north toward the mountain foothills of Pahang.",
      "Arrive at <u>Awana Transportation Hub</u> at <span class=\"time-chip\">10:00 AM</span> and board the <u>Awana SkyWay</u> cable car for a panoramic ascent through lush 130-million-year-old rainforest canopy.",
      "Disembark at the midway station at <span class=\"time-chip\">10:30 AM</span> to explore the multi-tiered <u>Chin Swee Caves Temple</u> and take in dramatic cliffside vistas of the Titiwangsa mountains.",
      "Re-board the gondola at <span class=\"time-chip\">12:00 PM</span> to reach the peak station at <u>Genting Highlands</u>.",
      "Walk through the breezy mountain air (refreshing 18°C to 22°C) and explore the entertainment avenues and sky gardens inside <u>SkyAvenue</u>.",
      "Share lunch together at an artisan noodle eatery at <span class=\"time-chip\">01:00 PM</span>.",
      "Stroll the mountain promenade and view the outdoor roller coasters and cloud landscapes at <u>Genting SkyWorlds</u> from <span class=\"time-chip\">02:30 PM</span>.",
      "Descend on the return cable car at <span class=\"time-chip\">04:30 PM</span> and catch the return transport back into Kuala Lumpur by <span class=\"time-chip\">06:30 PM</span>.",
      "Savor a celebratory weekend dinner together in the city, enjoying leisurely conversation without any evening shift alarms."
    ],
    costs: [
      { item: "KL Sentral to Awana Bus (Return)", amount: "RM 20.00" },
      { item: "Awana SkyWay Gondola Return", amount: "RM 18.00" },
      { item: "Chin Swee Temple Entry", amount: "Free" },
      { item: "Mountain Lunch & Refreshments", amount: "RM 45.00" },
      { item: "Weekend Joint Dinner", amount: "RM 40.00" }
    ],
    dayTotal: "RM 123.00"
  },
  {
    dayId: "day4",
    dayNum: "Day 4",
    date: "Sun 01 Nov 2026",
    phase: "worship",
    phaseLabel: "LDS Sunday Worship & Fellowship",
    city: "Taman U Thant & Robson Heights",
    landmarks: "• Ampang Hilir<br>• Robson Heights<br>• Little India",
    cultureBadge: "✨ **Sacred LDS Sunday Worship** · *Kuala Lumpur Branch Sabbath Service & Six-Tiered Shrine*",
    badgeClass: "badge-temple",
    locations: [
      { name: "Kuala Lumpur Meetinghouse (LDS Church)", coords: [3.1584, 101.7348], category: "LDS Church Meetinghouse" },
      { name: "Thean Hou Temple", coords: [3.1219525, 101.6876678], category: "Chinese Temple" }
    ],
    activities: [
      "Dress in Sunday attire and depart together at <span class=\"time-chip\">09:15 AM</span> for the embassy precinct of Ampang Hilir.",
      "Arrive at the <u>Kuala Lumpur Meetinghouse</u> (No. 4 Jalan Ampang Tengah, Taman U Thant) by <span class=\"time-chip\">09:45 AM</span> for personal reverent preparation.",
      "Participate in the 2-hour Sunday worship block (Sacrament Meeting followed by Sunday School / Priesthood / Relief Society) from <span class=\"time-chip\">10:00 AM</span> to <span class=\"time-chip\">12:00 PM</span>.",
      "Meet local members, international expats, and friends for fellowship in the foyer following the conclusion of meetings at <span class=\"time-chip\">12:15 PM</span>.",
      "Travel together to a tranquil restaurant in Ampang for a peaceful Sabbath fellowship lunch at <span class=\"time-chip\">01:00 PM</span>.",
      "Take an afternoon ride up to the crest of Robson Heights to tour the six-tiered Chinese sanctuary <u>Thean Hou Temple</u> at <span class=\"time-chip\">03:00 PM</span>.",
      "Admire the syncretic blend of Buddhism, Taoism, and Confucianism, walk beneath hundreds of traditional red hanging lanterns, and take in panoramic skyline views of Kuala Lumpur.",
      "Return home by <span class=\"time-chip\">05:30 PM</span> for a relaxed, restorative evening together sharing memories, photos, and an early homemade or quiet neighborhood dinner."
    ],
    costs: [
      { item: "Grab Transit to Church & Thean Hou", amount: "RM 35.00" },
      { item: "Sunday Fellowship Lunch", amount: "RM 35.00" },
      { item: "Thean Hou Temple Entry", amount: "Free" },
      { item: "Evening Sabbath Meal", amount: "RM 35.00" }
    ],
    dayTotal: "RM 105.00"
  },
  {
    dayId: "day5",
    dayNum: "Day 5",
    date: "Mon 02 Nov 2026",
    phase: "solo",
    phaseLabel: "Batu Caves (Solo AM / Joint PM)",
    city: "Gombak & Modern KL",
    landmarks: "• Batu Caves<br>• Central Market<br>• Saloma Link",
    cultureBadge: "🪔 **Spiritual & Geological Wonder** · *Ancient Limestone Caverns & 272 Rainbow Steps*",
    badgeClass: "badge-cave",
    locations: [
      { name: "Batu Caves", coords: [3.2378844, 101.6840385], category: "Limestone Caves" },
      { name: "Ramayana Cave - Suyambu Lingam", coords: [3.2386421, 101.6816297], category: "Hindu Shrine Cave" },
      { name: "Central Market (Pasar Seni)", coords: [3.1453, 101.6958], category: "Art & Culture" },
      { name: "Saloma Link Bridge", coords: [3.1593, 101.7107], category: "Pedestrian Bridge" }
    ],
    activities: [
      "Step out quietly at <span class=\"time-chip\">07:30 AM</span> while your friend begins his Monday daytime sleep cycle following his Sunday night shift.",
      "Board the KTM Komuter train at <u>KL Sentral</u> at <span class=\"time-chip\">08:00 AM</span> heading straight to <u>Batu Caves Station</u>.",
      "Arrive at <u>Batu Caves</u> by <span class=\"time-chip\">08:45 AM</span> to beat the tropical midday heat and gaze upon the 140-foot golden statue of Lord Murugan.",
      "Ascend the iconic 272 rainbow-colored limestone steps to explore the grand interior cavern of <u>Temple Cave (Cathedral Cave)</u>.",
      "Descend to the foot of the hill at <span class=\"time-chip\">10:15 AM</span> to enter <u>Ramayana Cave - Suyambu Lingam</u>, marveling at the vibrant epic dioramas and the naturally formed stalactite lingam.",
      "Rehydrate with fresh green coconut water and savor a South Indian thali lunch near the temple entrance at <span class=\"time-chip\">11:45 AM</span>.",
      "Take the KTM Komuter back to the city center and browse Malaysian pewter, wood carvings, and batik prints at <u>Central Market (Pasar Seni)</u> from <span class=\"time-chip\">01:30 PM</span>.",
      "Return to the flat by <span class=\"time-chip\">03:30 PM</span> as your friend wakes up.",
      "Spend the final evening together walking the illuminated pedestrian bridge <u>Saloma Link</u> at <span class=\"time-chip\">06:30 PM</span> for evening views of the glittering skyline, followed by a special farewell dinner at <span class=\"time-chip\">07:30 PM</span>."
    ],
    costs: [
      { item: "KTM Komuter Return Train", amount: "RM 5.20" },
      { item: "Batu Caves Main Cave Entry", amount: "Free" },
      { item: "Ramayana Cave Admission", amount: "RM 5.00" },
      { item: "Coconut Water & Indian Thali", amount: "RM 20.00" },
      { item: "Monorail / LRT Transit", amount: "RM 4.00" },
      { item: "Farewell Feast with Friend", amount: "RM 55.00" }
    ],
    dayTotal: "RM 89.20"
  },
  {
    dayId: "day6",
    dayNum: "Day 6",
    date: "Tue 03 Nov 2026",
    phase: "joint",
    phaseLabel: "Farewell & Departure",
    city: "KL City Center & Sepang",
    landmarks: "• KL Sentral<br>• KLIA Terminal 2<br>• Manila (MNL)",
    cultureBadge: "✈️ **Homeward Transit** · *AirAsia Flight AK584 Departure to Manila*",
    badgeClass: "badge-transit",
    locations: [
      { name: "KL Sentral", coords: [3.1342, 101.6865], category: "Transit Hub" },
      { name: "KLIA Terminal 2", coords: [2.7433, 101.6854], category: "International Airport" }
    ],
    activities: [
      "Greet your friend as his final shift finishes at <span class=\"time-chip\">07:00 AM</span> and enjoy a farewell breakfast of freshly made Roti Canai and Teh Tarik (or fruit juice) at <span class=\"time-chip\">07:45 AM</span>.",
      "Allow him to sleep peacefully from <span class=\"time-chip\">08:30 AM</span> while you pack your bags and do any last-minute packing.",
      "Check out quietly at <span class=\"time-chip\">11:30 AM</span>, leaving your luggage with your friend or at <u>KL Sentral</u> luggage storage.",
      "Spend a leisurely afternoon picking up Malaysian souvenirs (such as white coffee packets, Beryl's chocolates, or snacks) at <u>Nu Sentral</u> or Central Market.",
      "Enjoy a relaxed lunch at <span class=\"time-chip\">01:30 PM</span> and relax at a comfortable cafe.",
      "Reconnect with your friend around <span class=\"time-chip\">04:00 PM</span> for final warm goodbyes before he begins his evening routine.",
      "Board the <u>KLIA Ekspres</u> from <u>KL Sentral</u> at <span class=\"time-chip\">04:45 PM</span>, arriving at <u>KLIA Terminal 2</u> at <span class=\"time-chip\">05:15 PM</span>.",
      "Check baggage, clear customs and immigration with ample time, and enjoy a sit-down airport dinner at <u>Gateway@klia2</u> by <span class=\"time-chip\">06:45 PM</span>.",
      "Board AirAsia Flight AK584 at gate boarding time <span class=\"time-chip\">19:45 PM</span> for your confirmed <span class=\"time-chip\">20:25 PM</span> departure back to Manila."
    ],
    costs: [
      { item: "Farewell Kopitiam Breakfast", amount: "RM 15.00" },
      { item: "Lunch & Cafe Refreshments", amount: "RM 25.00" },
      { item: "KLIA Ekspres to KLIA2", amount: "RM 55.00" },
      { item: "Airport Sit-down Dinner", amount: "RM 30.00" }
    ],
    dayTotal: "RM 125.00"
  }
];

// The 13 Saved Places from Google Maps List + LDS Meetinghouse
const placesDossier = [
  {
    name: "Petronas Twin Towers",
    category: "Modern Architecture",
    coords: [3.1574693, 101.7115639],
    img: "images/petronas.jpg",
    desc: "Iconic 88-story twin skyscrapers connected by a double-decker skybridge. Stunning steel-and-glass Islamic geometric facade that dazzles illuminated at night.",
    tips: "Best photographed during golden hour from KLCC Park or across the reflection pools."
  },
  {
    name: "KLCC Park",
    category: "Public Park",
    coords: [3.1555902, 101.7147872],
    img: "images/petronas.jpg",
    desc: "50-acre tropical landscaped sanctuary nestled at the base of the Twin Towers featuring 1,900 indigenous trees, walking paths, and the Lake Symphony fountain.",
    tips: "Musical water and light show fires nightly at 08:00 PM, 09:00 PM, and 10:00 PM."
  },
  {
    name: "Jalan Alor Food Street",
    category: "Night Food Street",
    coords: [3.146121, 101.7092762],
    img: "images/jalan_alor.jpg",
    desc: "Bustling open-air hawker street lined with sizzling woks, satay grills, seafood stalls, and fresh tropical fruit vendors.",
    tips: "Head for halal chicken satay, fresh whole green coconut, and grilled chicken wings."
  },
  {
    name: "Genting Highlands (SkyAvenue)",
    category: "Highland Resort",
    coords: [3.423978, 101.7932011],
    img: "images/rooftop.jpg",
    desc: "Mountain resort perched 1,800 meters high in the Titiwangsa Range. Cool alpine breezes (18°C–22°C), lifestyle dining, sky gardens, and outdoor theme park vistas.",
    tips: "Take the glass-floor Awana SkyWay gondola from the mid-hill terminal."
  },
  {
    name: "Chin Swee Caves Temple",
    category: "Cliffside Temple",
    coords: [3.4137, 101.7876],
    img: "images/rooftop.jpg",
    desc: "Dramatic Taoist sanctuary clinging to the steep forest slope of Genting. Features an iconic 9-story pagoda, colossal Buddha statue, and panoramic mountain lookouts.",
    tips: "Free disembarkation stop on the Awana SkyWay cable car."
  },
  {
    name: "Merdeka Square (Dataran Merdeka)",
    category: "Historic Plaza",
    coords: [3.1490605, 101.6936592],
    img: "images/merdeka_square.jpg",
    desc: "Birthplace of Malaysian independence where the Union Jack was lowered and the Malayan flag raised on August 31, 1957. Surrounded by grand colonial landmarks.",
    tips: "Walk across the River of Life pedestrian bridge for dramatic photos."
  },
  {
    name: "Bangunan Sultan Abdul Samad",
    category: "Colonial Landmark",
    coords: [3.1487179, 101.6944582],
    img: "images/merdeka_square.jpg",
    desc: "Magnificent 1897 Mughal-Moorish architectural masterpiece with copper domes, horseshoe arches, and an imposing 41-meter clock tower.",
    tips: "Gloriously illuminated after dark with warm golden floodlights."
  },
  {
    name: "Thean Hou Temple",
    category: "Chinese Sanctuary",
    coords: [3.1219525, 101.6876678],
    img: "images/thean_hou.jpg",
    desc: "Six-tiered Chinese temple perched on Robson Heights, dedicated to Mazu. Adorned with ornate dragon pillars, red hanging lanterns, and skyline panoramas.",
    tips: "Free admission; respectful attire covering shoulders and knees required."
  },
  {
    name: "Batu Caves",
    category: "Spiritual & Limestone Cave",
    coords: [3.2378844, 101.6840385],
    img: "images/batu_caves.jpg",
    desc: "Towering 400-million-year-old limestone hill guarded by the 140-foot golden Lord Murugan statue. Ascend 272 rainbow steps into the grand Cathedral Cave.",
    tips: "Visit before 09:30 AM to beat midday heat and guard bags from inquisitive monkeys."
  },
  {
    name: "Ramayana Cave - Suyambu Lingam",
    category: "Limestone Diorama Cave",
    coords: [3.2386421, 101.6816297],
    img: "images/batu_caves.jpg",
    desc: "Situated to the left of the main entrance, this cave houses intricate life-sized dioramas illustrating the Ramayana epic and a natural stalactite lingam.",
    tips: "Small entry fee of RM 5.00; much quieter and more tranquil than the main stairs."
  },
  {
    name: "Petaling Street Market",
    category: "Chinatown Market",
    coords: [3.1443951, 101.6976496],
    img: "images/food_feast.jpg",
    desc: "Lively covered pedestrian thoroughfare lined with traditional dried goods, souvenirs, herbal tea carts, soybean milk stalls, and pre-war street food.",
    tips: "Sample iced soy milk, air mata kucing (longan drink), and muah chee."
  },
  {
    name: "Kwai Chai Hong",
    category: "Heritage Street Art",
    coords: [3.1414715, 101.6976131],
    img: "images/kwai_chai_hong.jpg",
    desc: "Charming restored heritage alleyway recreating 1960s Chinatown life with interactive street murals, vintage lampposts, and a historic red wooden bridge.",
    tips: "Come early in the morning for serene, uncrowded photos with optimal soft light."
  },
  {
    name: "Guan Di Temple Chinatown",
    category: "Taoist Temple",
    coords: [3.1440375, 101.6967316],
    img: "images/kwai_chai_hong.jpg",
    desc: "Historic 1888 Taoist shrine honoring Guan Yu, the legendary general of loyalty and righteousness. Houses the famous ancient bronze Guan Dao halberd.",
    tips: "Located along Jalan Tun H.S. Lee directly opposite Sri Maha Mariamman."
  },
  {
    name: "Sri Maha Mariamman Temple",
    category: "South Indian Hindu Temple",
    coords: [3.1433851, 101.6964976],
    img: "images/thean_hou.jpg",
    desc: "Kuala Lumpur's oldest functioning Hindu temple, established in 1873. Features an awe-inspiring 75-foot Raja Gopuram gate tower carved with 228 deities.",
    tips: "Shoes checked at the counter for RM 0.50 before stepping into sanctum."
  },
  {
    name: "Kuala Lumpur Meetinghouse (LDS Church)",
    category: "Faith & Sunday Worship",
    coords: [3.1584, 101.7348],
    img: "images/botanical_gardens.jpg",
    desc: "The Church of Jesus Christ of Latter-day Saints meetinghouse at No. 4 Jalan Ampang Tengah, Taman U Thant. Sunday Sacrament services start at 10:00 AM.",
    tips: "Warm, welcoming international branch; dress in Sunday best."
  }
];

// Map Global Variables
let map = null;
let mapMarkers = [];
let routePolyline = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderMasterTable("all");
  renderPlacesGrid();
  initMap();
  setupFilterBar();
  setupModeToggle();
  setupPrintButton();
});

/**
 * Render Master Itinerary Table
 */
function renderMasterTable(filter) {
  const tbody = document.getElementById("itineraryTableBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  const filteredDays = itineraryData.filter(day => {
    if (filter === "all") return true;
    if (filter === day.dayId) return true;
    if (filter === day.phase) return true;
    return false;
  });

  filteredDays.forEach(day => {
    const tr = document.createElement("tr");
    tr.id = `row-${day.dayId}`;
    tr.setAttribute("data-day", day.dayId);

    // Col 1: Day & Date
    const tdDay = document.createElement("td");
    tdDay.className = "col-day-date";
    tdDay.innerHTML = `
      <div class="day-badge-pill">${day.dayNum}</div>
      <div class="date-label">${day.date}</div>
      <div class="phase-pill ${day.phase}">
        <i class="fa-solid fa-circle-dot" style="font-size: 0.55rem;"></i>
        ${day.phaseLabel}
      </div>
    `;

    // Col 2: Location & Cultural Badges
    const tdLoc = document.createElement("td");
    tdLoc.className = "col-location";
    tdLoc.innerHTML = `
      <div class="loc-title"><strong>${day.city}</strong></div>
      <div class="loc-landmarks">${day.landmarks}</div>
      <div class="table-pin-culture-badge ${day.badgeClass}">${day.cultureBadge}</div>
    `;

    // Col 3: Action / Activity (Atomic Bullet Points)
    const tdAct = document.createElement("td");
    tdAct.className = "col-activity";
    const ul = document.createElement("ul");
    ul.className = "activity-bullets";
    day.activities.forEach(bullet => {
      const li = document.createElement("li");
      li.innerHTML = bullet;
      ul.appendChild(li);
    });
    tdAct.appendChild(ul);

    // Col 4: Cost
    const tdCost = document.createElement("td");
    tdCost.className = "col-cost";
    let costRowsHtml = "";
    day.costs.forEach(c => {
      const isFree = c.amount.toLowerCase().includes("free");
      costRowsHtml += `
        <div class="cost-row">
          <span>${c.item}:</span>
          ${isFree ? `<span class="cost-free">Free</span>` : `<strong>${c.amount}</strong>`}
        </div>
      `;
    });
    tdCost.innerHTML = `
      <div class="cost-item-list">
        ${costRowsHtml}
      </div>
      <div class="cost-daily-total">Total: ${day.dayTotal}</div>
    `;

    tr.appendChild(tdDay);
    tr.appendChild(tdLoc);
    tr.appendChild(tdAct);
    tr.appendChild(tdCost);

    // Row click interaction: pan map
    tr.addEventListener("click", () => {
      highlightDayOnMap(day.dayId);
    });

    tbody.appendChild(tr);
  });
}

/**
 * Filter Bar Setup
 */
function setupFilterBar() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderMasterTable(filter);
      if (filter.startsWith("day")) {
        highlightDayOnMap(filter);
      } else {
        resetMapView();
      }
    });
  });
}

/**
 * Render 13 Google Maps Places Dossier Cards
 */
function renderPlacesGrid() {
  const container = document.getElementById("placesGridContainer");
  if (!container) return;

  container.innerHTML = "";

  placesDossier.forEach((place, idx) => {
    const card = document.createElement("div");
    card.className = "place-card";
    card.innerHTML = `
      <div class="place-media">
        <img src="${place.img}" alt="${place.name}" loading="lazy">
        <span class="place-cat-badge">${place.category}</span>
      </div>
      <div class="place-details">
        <h4 class="place-name">${place.name}</h4>
        <p class="place-desc">${place.desc}</p>
        <div class="place-footer">
          <span><i class="fa-solid fa-lightbulb" style="color: var(--accent-gold);"></i> ${place.tips}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Initialize Leaflet Interactive Map
 */
function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  // Center on Kuala Lumpur
  map = L.map("map", {
    center: [3.145, 101.710],
    zoom: 12,
    zoomControl: true,
    scrollWheelZoom: false
  });

  // Modern CartoDB Positron / Dark Matter basemap
  const isDark = document.body.classList.contains("dark-mode");
  const tileUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  L.tileLayer(tileUrl, {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map);

  // Plot custom markers for each sight
  placesDossier.forEach(place => {
    if (!place.coords) return;

    const iconHtml = `
      <div style="
        background: linear-gradient(135deg, #f59e0b, #ea580c);
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        border: 2px solid #ffffff;
      ">
        <i class="fa-solid fa-location-dot"></i>
      </div>
    `;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: "custom-map-pin",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });

    const marker = L.marker(place.coords, { icon: customIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
        <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 700; color: #0f172a;">${place.name}</h4>
        <span style="font-size: 11px; font-weight: 700; color: #ea580c; text-transform: uppercase;">${place.category}</span>
        <p style="margin: 6px 0 0 0; font-size: 12px; color: #475569; line-height: 1.4;">${place.desc}</p>
      </div>
    `);

    mapMarkers.push({ name: place.name, marker: marker, coords: place.coords });
  });

  // Populate map sidebar stops
  populateMapSidebar();
}

/**
 * Populate Map Sidebar Stop List
 */
function populateMapSidebar() {
  const container = document.getElementById("mapStopsList");
  if (!container) return;

  container.innerHTML = "";
  placesDossier.forEach(place => {
    const item = document.createElement("div");
    item.className = "stop-item";
    item.innerHTML = `
      <div class="stop-item-title">${place.name}</div>
      <div class="stop-item-meta">${place.category}</div>
    `;
    item.addEventListener("click", () => {
      if (map && place.coords) {
        map.flyTo(place.coords, 14, { duration: 1.2 });
        const hit = mapMarkers.find(m => m.name === place.name);
        if (hit) hit.marker.openPopup();
      }
    });
    container.appendChild(item);
  });
}

/**
 * Highlight Day and Draw Route Polyline
 */
function highlightDayOnMap(dayId) {
  if (!map) return;
  const day = itineraryData.find(d => d.dayId === dayId);
  if (!day || !day.locations || day.locations.length === 0) return;

  const latlngs = day.locations.map(loc => loc.coords);

  if (routePolyline) {
    map.removeLayer(routePolyline);
  }

  routePolyline = L.polyline(latlngs, {
    color: "#f59e0b",
    weight: 4,
    opacity: 0.85,
    dashArray: "6, 8"
  }).addTo(map);

  const bounds = L.latLngBounds(latlngs);
  map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
}

/**
 * Reset Map View to default
 */
function resetMapView() {
  if (!map) return;
  if (routePolyline) {
    map.removeLayer(routePolyline);
    routePolyline = null;
  }
  map.flyTo([3.145, 101.710], 12, { duration: 1 });
}

/**
 * Light / Dark Mode Toggle
 */
function setupModeToggle() {
  const btn = document.getElementById("mode-toggle-btn");
  if (!btn) return;

  const savedTheme = localStorage.getItem("kl_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    btn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    if (isDark) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      btn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      localStorage.setItem("kl_theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      localStorage.setItem("kl_theme", "dark");
    }
  });
}

/**
 * Print & Export Button
 */
function setupPrintButton() {
  const btn = document.getElementById("print-itinerary-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.print();
  });
}
