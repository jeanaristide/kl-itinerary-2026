import re

HTML_FILE = "/Users/jeana/Projects/kl_itinerary_app/index.html"

with open(HTML_FILE, "r", encoding="utf-8") as f:
    content = f.read()

configs = {
    'row-day1': {
        'url': 'maps/day1_klcc_arrival_map.html',
        'title': 'Day 1 · KLIA2 Arrival, KLCC Twin Towers &amp; Jalan Alor Night Route',
        'key': 'day1',
        'img': 'img/day1_klcc_arrival_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 6★)'
    },
    'row-day2': {
        'url': 'maps/day2_chinatown_heritage_map.html',
        'title': 'Day 2 · Chinatown Heritage Shophouses, Temples &amp; Merdeka Square',
        'key': 'day2',
        'img': 'img/day2_chinatown_heritage_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 8★)'
    },
    'row-day3': {
        'url': 'maps/day3_genting_highlands_map.html',
        'title': 'Day 3 · Genting Highlands Awana SkyWay, Chin Swee Temple &amp; SkyAvenue',
        'key': 'day3',
        'img': 'img/day3_genting_highlands_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 6★)'
    },
    'row-day4': {
        'url': 'maps/day4_lds_worship_thean_hou_map.html',
        'title': 'Day 4 · Sunday LDS Sacrament Worship &amp; Thean Hou Six-Tiered Temple',
        'key': 'day4',
        'img': 'img/day4_lds_worship_thean_hou_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 5★)'
    },
    'row-day5': {
        'url': 'maps/day5_batu_caves_central_market_map.html',
        'title': 'Day 5 · Batu Caves Morning Pilgrimage, Central Market &amp; Saloma Link',
        'key': 'day5',
        'img': 'img/day5_batu_caves_central_market_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 7★)'
    },
    'row-day6': {
        'url': 'maps/day6_putrajaya_lakeside_map.html',
        'title': 'Day 6 · Putrajaya Rose-Granite Mosque, Lake Promenade &amp; Gardens',
        'key': 'day6',
        'img': 'img/day6_putrajaya_lakeside_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 6★)'
    },
    'row-day7': {
        'url': 'maps/day7_islamic_arts_botanical_gardens_map.html',
        'title': 'Day 7 · Perdana Botanical Gardens, Islamic Arts Museum &amp; Bukit Bintang',
        'key': 'day7',
        'img': 'img/day7_islamic_arts_botanical_gardens_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 6★)'
    },
    'row-day8': {
        'url': 'maps/day8_kl_sentral_homeward_transit_map.html',
        'title': 'Day 8 · KL Sentral Farewell, KLIA Ekspres &amp; Flight AK584 to Manila',
        'key': 'day8',
        'img': 'img/day8_kl_sentral_homeward_transit_map.png',
        'badge': '🗺️ Route Map (1★ ➔ 5★)'
    }
}

for row_id, conf in configs.items():
    thumb_html = f"""              <div class="loc-map-thumb-card" onclick="openRouteMapModal('{conf['url']}', '{conf['title']}', '{conf['key']}')" title="Click to open interactive route map">
                <div class="loc-map-thumb-img-wrap">
                  <img src="{conf['img']}" alt="{conf['title']}" loading="lazy" class="loc-map-thumb-img" />
                  <div class="loc-map-thumb-overlay">
                    <span class="loc-map-expand-btn">🔍 Interactive Map</span>
                  </div>
                </div>
                <div class="loc-map-thumb-caption">
                  <span class="loc-map-thumb-badge">{conf['badge']}</span>
                  <span class="loc-map-thumb-sub">Tap to explore ➔</span>
                </div>
              </div>"""

    pattern = rf'(<tr class="itinerary-table-row" id="{row_id}"[\s\S]*?<div class="culture-badge-pill">[\s\S]*?</div>)(\s*</td>)'
    match = re.search(pattern, content)
    if match:
        segment = match.group(1)
        if "loc-map-thumb-card" not in segment:
            replacement = rf'\1\n{thumb_html}\2'
            content = re.sub(pattern, replacement, content, count=1)
            print(f"✓ Injected thumbnail card for {row_id}")
        else:
            print(f"- {row_id} already has thumbnail card")
    else:
        print(f"✗ Could not find match for {row_id}")

modal_html = """  <!-- Interactive Route Map Pop-out Modal -->
  <div id="routeMapModal" class="route-map-modal" aria-hidden="true" role="dialog">
    <div class="route-map-modal-backdrop" onclick="closeRouteMapModal()"></div>
    <div class="route-map-modal-container">
      <div class="route-map-modal-header">
        <div class="route-map-modal-title-box">
          <span class="route-map-modal-icon">🗺️</span>
          <div>
            <h2 id="routeMapModalTitle" class="route-map-modal-title">Itinerary Route Map</h2>
            <div id="routeMapModalSubtitle" class="route-map-modal-subtitle">Interactive Chronological Route Map</div>
          </div>
        </div>
        <div class="route-map-modal-actions">
          <a id="routeMapNewTabBtn" href="#" target="_blank" class="route-map-action-btn" title="Open full map in new browser tab">
            <span>Open in Tab</span> ↗
          </a>
          <button type="button" class="route-map-close-btn" onclick="closeRouteMapModal()" aria-label="Close interactive map">
            ✕
          </button>
        </div>
      </div>
      <div class="route-map-modal-body">
        <iframe id="routeMapIframe" src="" class="route-map-iframe" title="Route Map Viewer" loading="lazy" allowfullscreen></iframe>
      </div>
    </div>
  </div>
"""

if 'id="routeMapModal"' not in content:
    content = content.replace('  <!-- Leaflet JS -->', modal_html + '\n  <!-- Leaflet JS -->')
    print("✓ Injected #routeMapModal into index.html")

content = content.replace('styles.css?v=4.0', 'styles.css?v=5.0').replace('app.js?v=4.0', 'app.js?v=5.0')

with open(HTML_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated index.html successfully!")

