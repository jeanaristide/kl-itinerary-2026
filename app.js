/**
 * Kuala Lumpur Interactive Itinerary & Master Table
 * Tailored for 6-Day Synchronized Visit with Daiki (Oct 29 – Nov 3, 2026)
 * Pure White Minimalist Table-First Architecture with Mobile Adaptive Views
 */

// Master 6-Day Itinerary Data Store Personalized for Daiki
const itineraryData = [
  {
    dayId: "day1",
    dayNum: "Day 1",
    date: "Thu 29 Oct 2026",
    phase: "joint",
    phaseLabel: "Arrival & Reunion with Daiki",
    city: "Kuala Lumpur & KLCC",
    landmarks: "• KLIA Terminal 2<br>• KL Sentral<br>• KLCC Precinct",
    cultureBadge: "🏙️ **Modern Metropolis & Twin Towers** · *Golden Triangle Sunset & Evening Symphony*",
    badgeClass: "badge-modern",
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
    dayTotal: "RM 127.80"
  },
  {
    dayId: "day2",
    dayNum: "Day 2",
    date: "Fri 30 Oct 2026",
    phase: "solo",
    phaseLabel: "Chinatown (Solo AM / Joint PM)",
    city: "Chinatown & Colonial District",
    landmarks: "• Petaling Street<br>• Dataran Merdeka<br>• Bukit Bintang",
    cultureBadge: "🏮 **Old Malaya & Heritage Enclaves** · *Pre-War Shophouses, Guild Temples & River of Life*",
    badgeClass: "badge-heritage",
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
    dayTotal: "RM 85.60"
  },
  {
    dayId: "day3",
    dayNum: "Day 3",
    date: "Sat 31 Oct 2026",
    phase: "joint",
    phaseLabel: "Full-Day Mountain Trip with Daiki",
    city: "Titiwangsa Mountains (Genting)",
    landmarks: "• Awana SkyWay<br>• Chin Swee Caves<br>• Genting Highlands",
    cultureBadge: "🚠 **Highland Scenic Escape** · *Breezy Mountain Gondola & Cloud Mist Pagoda*",
    badgeClass: "badge-highland",
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
    dayTotal: "RM 123.00"
  },
  {
    dayId: "day4",
    dayNum: "Day 4",
    date: "Sun 01 Nov 2026",
    phase: "worship",
    phaseLabel: "Sunday Worship with Daiki",
    city: "Taman U Thant & Robson Heights",
    landmarks: "• Ampang Hilir<br>• Robson Heights<br>• Little India",
    cultureBadge: "✨ **Sacred LDS Sunday Worship** · *Kuala Lumpur Branch Sabbath Service & Six-Tiered Shrine*",
    badgeClass: "badge-temple",
    activities: [
      "Dress in Sunday attire and depart together with Daiki at <span class=\"time-chip\">09:15 AM</span> for the embassy precinct of Ampang Hilir.",
      "Arrive with Daiki at the <u>Kuala Lumpur Meetinghouse</u> (No. 4 Jalan Ampang Tengah, Taman U Thant) by <span class=\"time-chip\">09:45 AM</span> for personal reverent preparation.",
      "Participate with Daiki in the 2-hour Sunday worship block (Sacrament Meeting followed by Sunday School / Priesthood / Relief Society) from <span class=\"time-chip\">10:00 AM</span> to <span class=\"time-chip\">12:00 PM</span>.",
      "Meet local members, international expats, and friends with Daiki for fellowship in the foyer following the conclusion of meetings at <span class=\"time-chip\">12:15 PM</span>.",
      "Travel together with Daiki to a tranquil restaurant in Ampang for a peaceful Sabbath fellowship lunch at <span class=\"time-chip\">01:00 PM</span>.",
      "Take an afternoon ride with Daiki up to the crest of Robson Heights to tour the six-tiered Chinese sanctuary <u>Thean Hou Temple</u> at <span class=\"time-chip\">03:00 PM</span>.",
      "Admire the syncretic blend of Buddhism, Taoism, and Confucianism, walk beneath hundreds of traditional red hanging lanterns, and take in panoramic skyline views of Kuala Lumpur.",
      "Return home with Daiki by <span class=\"time-chip\">05:30 PM</span> for a relaxed, restorative evening together sharing memories and an early quiet dinner."
    ],
    costs: [
      { item: "Grab to Church & Thean Hou", amount: "RM 35.00" },
      { item: "Sunday Fellowship Lunch with Daiki", amount: "RM 35.00" },
      { item: "Thean Hou Temple Entry", amount: "Free" },
      { item: "Quiet Evening Sabbath Meal", amount: "RM 35.00" }
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
    activities: [
      "Step out quietly at <span class=\"time-chip\">07:30 AM</span> while Daiki begins his Monday daytime sleep cycle following his Sunday night shift.",
      "Board the KTM Komuter train at <u>KL Sentral</u> at <span class=\"time-chip\">08:00 AM</span> heading straight to <u>Batu Caves Station</u>.",
      "Arrive at <u>Batu Caves</u> by <span class=\"time-chip\">08:45 AM</span> to beat the tropical midday heat and gaze upon the 140-foot golden statue of Lord Murugan.",
      "Ascend the iconic 272 rainbow-colored limestone steps to explore the grand interior cavern of <u>Temple Cave (Cathedral Cave)</u>.",
      "Descend to the foot of the hill at <span class=\"time-chip\">10:15 AM</span> to enter <u>Ramayana Cave - Suyambu Lingam</u>, marveling at the vibrant epic dioramas and naturally formed stalactite lingam.",
      "Rehydrate with fresh green coconut water and savor a South Indian thali lunch near the temple entrance at <span class=\"time-chip\">11:45 AM</span>.",
      "Take the KTM Komuter back to the city center and browse Malaysian pewter, wood carvings, and batik prints at <u>Central Market (Pasar Seni)</u> from <span class=\"time-chip\">01:30 PM</span>.",
      "Return to the flat by <span class=\"time-chip\">03:30 PM</span> as Daiki wakes up.",
      "Spend the final full evening together with Daiki walking the illuminated pedestrian bridge <u>Saloma Link</u> at <span class=\"time-chip\">06:30 PM</span> for glittering skyline views, followed by a special farewell dinner with Daiki at <span class=\"time-chip\">07:30 PM</span>."
    ],
    costs: [
      { item: "KTM Komuter Return Train", amount: "RM 5.20" },
      { item: "Batu Caves Main Cave Entry", amount: "Free" },
      { item: "Ramayana Cave Admission", amount: "RM 5.00" },
      { item: "Coconut Water & Indian Thali", amount: "RM 20.00" },
      { item: "Monorail / LRT Transit", amount: "RM 4.00" },
      { item: "Farewell Feast with Daiki", amount: "RM 55.00" }
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
    activities: [
      "Greet Daiki as his final shift finishes at <span class=\"time-chip\">07:00 AM</span> and share a heartfelt farewell breakfast together with Daiki from <span class=\"time-chip\">07:30 AM</span> to <span class=\"time-chip\">08:30 AM</span>.",
      "Allow Daiki to sleep peacefully from <span class=\"time-chip\">08:30 AM</span> while you finish packing your bags.",
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
    dayTotal: "RM 125.00"
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderMasterTable("all");
  setupFilterBar();
  setupViewModeSwitcher();
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
      <div>
        <div class="day-badge-pill">${day.dayNum}</div>
        <div class="date-label">${day.date}</div>
      </div>
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

    // Col 3: Action / Activity (Atomic Bullet Points with Daiki)
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
    });
  });
}

/**
 * Setup Mobile View Mode Switcher
 */
function setupViewModeSwitcher() {
  const wrapper = document.getElementById("tableWrapper");
  const stackedBtn = document.getElementById("viewStackedBtn");
  const tableBtn = document.getElementById("viewTableBtn");
  const swipeHint = document.getElementById("mobileSwipeHint");

  if (!wrapper || !stackedBtn || !tableBtn) return;

  // Determine initial mode
  const savedMode = localStorage.getItem("kl_view_mode");
  let currentMode = savedMode;
  if (!currentMode) {
    // Default to stacked on mobile, table on desktop
    currentMode = window.innerWidth <= 768 ? "stacked" : "table";
  }

  applyViewMode(currentMode);

  stackedBtn.addEventListener("click", () => {
    applyViewMode("stacked");
  });

  tableBtn.addEventListener("click", () => {
    applyViewMode("table");
  });

  function applyViewMode(mode) {
    if (mode === "stacked") {
      wrapper.classList.add("stacked-view-mode");
      wrapper.classList.remove("table-view-mode");
      stackedBtn.classList.add("active");
      tableBtn.classList.remove("active");
      if (swipeHint) swipeHint.style.display = "none";
      localStorage.setItem("kl_view_mode", "stacked");
    } else {
      wrapper.classList.remove("stacked-view-mode");
      wrapper.classList.add("table-view-mode");
      tableBtn.classList.add("active");
      stackedBtn.classList.remove("active");
      if (swipeHint) swipeHint.style.display = window.innerWidth <= 768 ? "flex" : "none";
      localStorage.setItem("kl_view_mode", "table");
    }
  }

  // Handle window resize dynamically
  window.addEventListener("resize", () => {
    if (wrapper.classList.contains("table-view-mode") && swipeHint) {
      swipeHint.style.display = window.innerWidth <= 768 ? "flex" : "none";
    }
  });
}
