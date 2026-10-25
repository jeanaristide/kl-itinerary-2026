import os
import json
import shutil
import subprocess

MAPS_DIR = "/Users/jeana/Projects/kl_itinerary_app/maps"
IMG_DIR = "/Users/jeana/Projects/kl_itinerary_app/img"
BRAIN_DIR = "/Users/jeana/.gemini/antigravity/brain/8ba682dd-9a73-4c28-812e-da8d8c5a1561"
CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

os.makedirs(MAPS_DIR, exist_ok=True)
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(BRAIN_DIR, exist_ok=True)

def create_map_html(day_num, title, short_title, date_str, header_pills, legend_items, center, zoom, pins, polylines, badges=[]):
    legend_rows_html = []
    for item in legend_items:
        itype, iclass, itext = item
        if itype == "pin":
            legend_rows_html.append(f"""
        <div class="legend-row">
          <div class="num-star-circle mini {iclass}">1★</div>
          <span>{itext}</span>
        </div>""")
        elif itype in ("line", "dotted", "rail"):
            arrow_style = ' style="color:#ea580c;"' if itype == "dotted" else ''
            legend_rows_html.append(f"""
        <div class="legend-row">
          <div class="legend-line {iclass}"><span class="legend-arrow"{arrow_style}>▶</span></div>
          <span>{itext}</span>
        </div>""")

    legend_items_str = "\n".join(legend_rows_html)
    pills_str = "\n".join([f'        <div class="meta-pill">{p}</div>' for p in header_pills])

    pins_js = []
    for p in pins:
        c_class = p.get('customClass', '')
        pins_js.append(f'    addChronologicalPin({p["lat"]}, {p["lng"]}, "{p["num"]}", "{p["name"]}", "{p.get("time", "")}", "{c_class}", {p.get("offX", 10)}, {p.get("offY", -25)});')
    pins_str = "\n".join(pins_js)

    poly_js = []
    for idx, poly in enumerate(polylines):
        var_name = f"routeLine{idx}"
        coords_json = json.dumps(poly["coords"])
        if poly.get("casingColor"):
            poly_js.append(f'    L.polyline({coords_json}, {{ color: "{poly["casingColor"]}", weight: {poly["casingWeight"]}, opacity: 0.95 }}).addTo(map);')
        dash = f', dashArray: "{poly["dashArray"]}"' if poly.get("dashArray") else ""
        poly_js.append(f'    var {var_name} = L.polyline({coords_json}, {{ color: "{poly["color"]}", weight: {poly["weight"]}, opacity: {poly.get("opacity", 1.0)}{dash} }}).addTo(map);')
        if poly.get("arrows"):
            arr = poly["arrows"]
            b_color = f'"{arr.get("borderColor", "#ffffff")}"'
            poly_js.append(f'    addDirectionalArrows({var_name}, "{arr["color"]}", {arr.get("size", 9)}, {arr.get("offset", 25)}, {arr.get("repeat", 55)}, {b_color});')
    polylines_str = "\n".join(poly_js)

    badges_js = []
    for b in badges:
        anchor = json.dumps(b.get("iconAnchor", [40, 10]))
        badges_js.append(f"""    var bIcon{len(badges_js)} = L.divIcon({{ className: 'badge-div', html: '{b["html"]}', iconSize: [0, 0], iconAnchor: {anchor} }});
    L.marker([{b["lat"]}, {b["lng"]}], {{ icon: bIcon{len(badges_js)} }}).addTo(map);""")
    badges_str = "\n".join(badges_js)

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Day {day_num} · {title}</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="https://unpkg.com/leaflet-polylinedecorator@1.6.0/dist/leaflet.polylineDecorator.js"></script>
  <style>
    * {{ box-sizing: border-box; }}
    body, html {{ margin:0; padding:0; width:100%; height:100%; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; overflow: hidden; background: #e5e7eb; }}
    #map {{ width: 100%; height: 100%; }}

    .map-card {{
      position: absolute; z-index: 1000;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      user-select: none; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }}

    .card-pill-btn {{
      display: none; align-items: center; gap: 6px;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(203, 213, 225, 0.9);
      padding: 5px 11px; border-radius: 9999px;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05);
      font-size: 11px; font-weight: 700; color: #0f172a;
      cursor: pointer; outline: none; transition: all 0.15s ease;
      white-space: nowrap; line-height: 1;
    }}
    .card-pill-btn:hover {{
      background: #ffffff;
      box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
      transform: translateY(-1px);
    }}
    .card-pill-btn .pill-chevron {{
      font-size: 10px; color: #64748b; font-weight: 800;
    }}

    .card-body {{
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-radius: 12px;
      box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(0, 0, 0, 0.06);
      padding: 10px 13px;
    }}

    .map-card.is-collapsed .card-body {{ display: none !important; }}
    .map-card.is-collapsed .card-pill-btn {{ display: inline-flex !important; }}
    .map-card:not(.is-collapsed) .card-body {{ display: block; }}
    .map-card:not(.is-collapsed) .card-pill-btn {{ display: none; }}

    .card-top-bar {{
      display: flex; align-items: center; justify-content: space-between;
      gap: 8px; margin-bottom: 4px;
    }}
    .card-close-btn {{
      background: #f1f5f9; border: none; color: #64748b;
      width: 20px; height: 20px; border-radius: 5px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.15s; flex-shrink: 0; padding: 0;
    }}
    .card-close-btn:hover {{ background: #e2e8f0; color: #0f172a; }}

    .map-header-card {{
      top: 14px; left: 16px;
      max-width: 305px;
    }}
    .map-header-card h1 {{
      margin: 0; font-size: 13px; font-weight: 800; color: #0f172a;
      display: flex; align-items: center; gap: 6px;
    }}
    .badge-day {{
      background: #0284c7; color: #fff; padding: 2px 7px; border-radius: 5px; font-size: 10.5px; font-weight: 700;
    }}
    .map-header-card .desc {{
      font-size: 10px; color: #475569; font-weight: 500; margin-bottom: 5px;
    }}
    .meta-pills {{ display: flex; flex-direction: column; gap: 3px; }}
    .meta-pill {{
      background: #f8fafc; border: 1px solid #f1f5f9; color: #334155;
      padding: 2.5px 7px; border-radius: 5px; font-size: 9.5px; font-weight: 600;
      line-height: 1.25;
    }}
    .meta-pill strong {{ color: #0f172a; }}

    .map-legend-card {{
      bottom: 14px; right: 16px;
      max-width: 250px; min-width: 210px;
    }}
    .legend-title {{
      font-size: 9.5px; font-weight: 800; color: #0f172a; text-transform: uppercase;
      letter-spacing: 0.5px;
    }}
    .legend-items {{ margin-top: 5px; border-top: 1px solid #f1f5f9; padding-top: 5px; }}
    .legend-row {{
      display: flex; align-items: center; gap: 7px; margin-bottom: 4px;
      font-size: 10px; font-weight: 600; color: #334155; line-height: 1.2;
    }}
    .legend-row:last-child {{ margin-bottom: 0; }}
    .legend-line {{ width: 22px; height: 4.5px; border-radius: 2px; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; }}
    .line-green {{ background: #059669; }}
    .line-blue {{ background: #0284c7; }}
    .line-purple {{ background: #7c3aed; }}
    .line-gold {{ background: #f59e0b; border: 1px solid #1e3a8a; }}
    .line-red {{ background: #dc2626; }}
    .line-dotted-red {{ height: 0px; border-top: 3.5px dotted #ea580c; }}
    .line-dotted-blue {{ height: 0px; border-top: 3.5px dotted #0284c7; }}
    .legend-arrow {{ font-size: 7px; color: #ffffff; line-height: 1; margin-left: 1px; }}

    @media (max-width: 768px) {{
      .map-header-card {{
        top: 10px; left: 10px; max-width: calc(100vw - 20px);
      }}
      .map-legend-card {{
        bottom: 10px; right: 10px; max-width: calc(100vw - 20px); min-width: auto;
      }}
      .card-body {{
        max-width: 300px;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.08);
      }}
      .card-pill-btn {{
        padding: 5px 10px; font-size: 10.5px;
      }}
    }}

    .gmap-star-pin {{
      display: inline-flex; align-items: flex-start; gap: 5px;
      background: #ffffff; border-radius: 9px; padding: 3px 7px 3px 3px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06);
      border: 1.5px solid #cbd5e1;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      max-width: 135px; white-space: normal; line-height: 1.2; pointer-events: auto;
    }}
    .num-star-circle {{
      width: 20px; height: 20px; border-radius: 50%;
      background: #ea580c; color: #ffffff;
      display: flex; align-items: center; justify-content: center;
      font-size: 9px; font-weight: 800;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3); flex-shrink: 0; margin-top: 1px;
    }}
    .num-star-circle.mini {{
      width: 17px; height: 17px; font-size: 8px;
    }}
    .pin-content {{
      display: flex; flex-direction: column; min-width: 0;
    }}
    .pin-title {{
      font-size: 10.5px; font-weight: 800; color: #0f172a; line-height: 1.25;
      word-wrap: break-word;
    }}
    .pin-time {{
      font-size: 9px; font-weight: 600; color: #64748b; margin-top: 1.5px; line-height: 1.2;
    }}

    .gmap-star-pin.pin-rail {{ border-color: #f59e0b; }}
    .gmap-star-pin.pin-rail .num-star-circle {{ background: #f59e0b; color: #000; }}
    .gmap-star-pin.pin-museum {{ border-color: #0284c7; }}
    .gmap-star-pin.pin-museum .num-star-circle {{ background: #0284c7; }}
    .gmap-star-pin.pin-temple {{ border-color: #b45309; }}
    .gmap-star-pin.pin-temple .num-star-circle {{ background: #b45309; }}
    .gmap-star-pin.pin-arrival {{ border-color: #059669; }}
    .gmap-star-pin.pin-arrival .num-star-circle {{ background: #059669; }}
    .gmap-star-pin.pin-hostel {{ border-color: #7c3aed; }}
    .gmap-star-pin.pin-hostel .num-star-circle {{ background: #7c3aed; }}

    .badge-div {{ width: auto !important; height: auto !important; }}
    .transit-badge {{
      display: inline-block;
      background: #0284c7; color: #ffffff; font-size: 9.5px; font-weight: 800;
      padding: 2.5px 7px; border-radius: 10px; border: 1.5px solid #ffffff;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3); white-space: nowrap;
    }}
    .transit-badge.badge-rail {{ background: #f59e0b; color: #1e3a8a; border-color: #1e3a8a; }}
    .transit-badge.badge-bus {{ background: #059669; }}
    .transit-badge.badge-gondola {{ background: #dc2626; }}
  </style>
</head>
<body>
  <div id="map"></div>

  <!-- Header Card (Collapsible) -->
  <div id="headerCard" class="map-card map-header-card">
    <button class="card-pill-btn" onclick="toggleCard('headerCard', true)" aria-label="Expand Overview">
      <span class="badge-day">Day {day_num}</span>
      <span class="pill-text">{short_title}</span>
      <span class="pill-chevron">▾</span>
    </button>
    <div class="card-body">
      <div class="card-top-bar">
        <h1><span class="badge-day">Day {day_num}</span> {short_title}</h1>
        <button class="card-close-btn" onclick="toggleCard('headerCard', false)" title="Minimize" aria-label="Minimize">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
      <div class="desc">{date_str}</div>
      <div class="meta-pills">
{pills_str}
      </div>
    </div>
  </div>

  <!-- Legend Card (Collapsible) -->
  <div id="legendCard" class="map-card map-legend-card">
    <button class="card-pill-btn" onclick="toggleCard('legendCard', true)" aria-label="Expand Legend">
      <span>🧭</span>
      <span class="pill-text">Legend</span>
      <span class="pill-chevron">▴</span>
    </button>
    <div class="card-body">
      <div class="card-top-bar">
        <div class="legend-title">Chronology &amp; Transit Modes</div>
        <button class="card-close-btn" onclick="toggleCard('legendCard', false)" title="Minimize" aria-label="Minimize">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
      <div class="legend-items">
{legend_items_str}
      </div>
    </div>
  </div>

  <script>
    function toggleCard(cardId, forceState) {{
      var card = document.getElementById(cardId);
      if (!card) return;
      var willBeExpanded = (typeof forceState === 'boolean') ? forceState : card.classList.contains('is-collapsed');
      if (willBeExpanded) {{
        card.classList.remove('is-collapsed');
        card.style.zIndex = '1002';
        if (window.innerWidth <= 768) {{
          var otherCardId = cardId === 'headerCard' ? 'legendCard' : 'headerCard';
          var otherCard = document.getElementById(otherCardId);
          if (otherCard) {{
            otherCard.classList.add('is-collapsed');
            otherCard.style.zIndex = '1000';
          }}
        }}
      }} else {{
        card.classList.add('is-collapsed');
        card.style.zIndex = '1000';
      }}
    }}

    (function initCardStates() {{
      var urlParams = new URLSearchParams(window.location.search);
      var isMobile = window.innerWidth <= 768 || urlParams.get('mobile') === 'true';
      var forceCollapsed = urlParams.get('collapsed') === 'true';
      var forceExpanded = urlParams.get('collapsed') === 'false';

      var header = document.getElementById('headerCard');
      var legend = document.getElementById('legendCard');

      if (forceCollapsed || (isMobile && !forceExpanded)) {{
        if (header) header.classList.add('is-collapsed');
        if (legend) legend.classList.add('is-collapsed');
      }} else {{
        if (header) header.classList.remove('is-collapsed');
        if (legend) legend.classList.remove('is-collapsed');
      }}
    }})();

    var map = L.map('map', {{ zoomControl: false }}).setView([{center[0]}, {center[1]}], {zoom});

    L.tileLayer('https://mt{{s}}.google.com/vt/lyrs=m&x={{x}}&y={{y}}&z={{z}}', {{
      subdomains: ['0', '1', '2', '3'],
      maxZoom: 20,
      attribution: 'Google Maps'
    }}).addTo(map);

    function addChronologicalPin(lat, lng, num, name, timeStr, customClass, offX, offY) {{
      var pinColor = '#ea580c';
      if (customClass === 'pin-arrival') pinColor = '#059669';
      else if (customClass === 'pin-hostel') pinColor = '#7c3aed';
      else if (customClass === 'pin-temple') pinColor = '#b45309';
      else if (customClass === 'pin-rail') pinColor = '#f59e0b';
      else if (customClass === 'pin-museum') pinColor = '#0284c7';

      L.circleMarker([lat, lng], {{
        radius: 4.5,
        color: '#ffffff',
        weight: 2,
        fillColor: pinColor,
        fillOpacity: 1.0
      }}).addTo(map);

      var icon = L.divIcon({{
        className: 'custom-pin-wrap',
        html: '<div class="gmap-star-pin ' + (customClass||'') + '" style="transform: translate(' + (offX||0) + 'px, ' + (offY||0) + 'px);">' +
              '<div class="num-star-circle">' + num + '★</div>' +
              '<div class="pin-content">' +
              '<div class="pin-title">' + name + '</div>' +
              (timeStr ? '<div class="pin-time">' + timeStr + '</div>' : '') +
              '</div>' +
              '</div>',
        iconSize: [0, 0], iconAnchor: [0, 0]
      }});
      L.marker([lat, lng], {{ icon: icon }}).addTo(map);
    }}

    function addDirectionalArrows(polyline, color, size, offset, repeat, borderColor) {{
      if (typeof L.polylineDecorator === 'undefined') return;
      L.polylineDecorator(polyline, {{
        patterns: [
          {{
            offset: offset || 25,
            repeat: repeat || 55,
            symbol: L.Symbol.arrowHead({{
              pixelSize: size || 9,
              headAngle: 55,
              polygon: true,
              pathOptions: {{
                stroke: true,
                color: borderColor || '#ffffff',
                weight: 1.5,
                fillColor: color,
                fillOpacity: 1.0
              }}
            }})
          }}
        ]
      }}).addTo(map);
    }}

{polylines_str}

{badges_str}

{pins_str}

    map.on('click', function() {{
      if (window.innerWidth <= 768) {{
        toggleCard('headerCard', false);
        toggleCard('legendCard', false);
      }}
    }});
  </script>
</body>
</html>
"""
    return html_content

print("Script template ready.")



# Days 1-4 Map Configurations
maps_config = [
    # DAY 1
    {
        "filename": "day1_klcc_arrival_map.html",
        "png_name": "day1_klcc_arrival_map.png",
        "day_num": 1,
        "title": "KLIA2 Arrival, Eve Suite Check-In, KLCC & Jalan Alor Night Route",
        "short_title": "KLCC & Jalan Alor Route",
        "date_str": "Thu 29 Oct 2026 · Visits (1★ ➔ 6★)",
        "header_pills": [
            "✈️ <strong>16:55</strong> Arrive KLIA2 (AK585) ➔ KLIA Ekspres to KL Sentral (1★)",
            "🏠 <strong>18:25</strong> Eve Suite Ara Damansara Check-In (2★) &amp; Reunion",
            "🏙️ <strong>19:30</strong> Direct LRT to Twin Towers (3★) &amp; Symphony (4★)",
            "🍢 <strong>20:45</strong> Jalan Alor Night Feast with Daiki (6★)"
        ],
        "legend_items": [
            ("pin", "pin-arrival", "1★ KL Sentral Hub (KLIA Ekspres)"),
            ("pin", "pin-hostel", "2★ Eve Suite Ara Damansara (Host Base)"),
            ("pin", "", "3★-6★ Chronological Landmarks"),
            ("line", "line-blue", "LRT Kelana Jaya Line (▶)"),
            ("dotted", "line-dotted-red", "Walking Promenade &amp; Bridge (▶)")
        ],
        "center": [3.1380, 101.6520],
        "zoom": 12,
        "pins": [
            {"lat": 3.1340, "lng": 101.6865, "num": 1, "name": "KL Sentral (KLIA Ekspres)", "time": "18:08 PM Arrive", "customClass": "pin-arrival", "offX": -145, "offY": -15},
            {"lat": 3.1132, "lng": 101.5916, "num": 2, "name": "Eve Suite Ara Damansara", "time": "18:25 PM Check-In (A-23-08)", "customClass": "pin-hostel", "offX": 14, "offY": -22},
            {"lat": 3.1578, "lng": 101.7120, "num": 3, "name": "Petronas Twin Towers & Suria", "time": "19:30 PM Dusk View", "offX": -145, "offY": -32},
            {"lat": 3.1554, "lng": 101.7145, "num": 4, "name": "KLCC Park & Lake Symphony", "time": "20:00 PM Fountain Show", "offX": 14, "offY": -58},
            {"lat": 3.1488, "lng": 101.7133, "num": 5, "name": "KLCC-Bukit Bintang Walkway", "time": "20:25 PM Covered Walk", "offX": 14, "offY": 10},
            {"lat": 3.1459, "lng": 101.7088, "num": 6, "name": "Jalan Alor Food Street", "time": "20:45 PM Satay Dinner", "offX": -145, "offY": -62}
        ],
        "polylines": [
            {"coords": [[3.1340, 101.6865], [3.1250, 101.6700], [3.1100, 101.6450], [3.1050, 101.6050], [3.1132, 101.5916]], "color": "#059669", "weight": 4.5, "arrows": {"color": "#059669", "size": 9, "offset": 20, "repeat": 45}},
            {"coords": [[3.1132, 101.5916], [3.1050, 101.6050], [3.1100, 101.6450], [3.1250, 101.6700], [3.1340, 101.6865], [3.1420, 101.6960], [3.1490, 101.6965], [3.1578, 101.7120]], "color": "#0284c7", "weight": 5, "casingColor": "#ffffff", "casingWeight": 8, "arrows": {"color": "#0284c7", "size": 9, "offset": 25, "repeat": 50}},
            {"coords": [[3.1578, 101.7120], [3.1554, 101.7145], [3.1488, 101.7133], [3.1459, 101.7088]], "color": "#ea580c", "weight": 4, "dashArray": "6, 8", "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 40}}
        ],
        "badges": [
            {"lat": 3.1220, "lng": 101.6350, "html": '<div class="transit-badge">🚇 Direct Kelana Jaya LRT (Lembah Subang ➔ KLCC)</div>', "iconAnchor": [110, 12]}
        ]
    },
    # DAY 2
    {
        "filename": "day2_chinatown_heritage_map.html",
        "png_name": "day2_chinatown_heritage_map.png",
        "day_num": 2,
        "title": "Chinatown Heritage Shophouses, Temples & Merdeka Square",
        "short_title": "Chinatown & Merdeka Route",
        "date_str": "Fri 30 Oct 2026 · Visits (1★ ➔ 8★)",
        "header_pills": [
            "🚇 <strong>09:30</strong> Direct LRT from Lembah Subang (1★) to Chinatown (2★)",
            "🏮 <strong>10:00</strong> Kwai Chai Hong (2★), Guan Di (3★) &amp; Sri Maha (4★)",
            "🏛️ <strong>14:30</strong> Sultan Abdul Samad (6★) &amp; Merdeka Sq (7★)",
            "🛍️ <strong>18:30</strong> Evening Dinner at Pavilion KL with Daiki (8★)"
        ],
        "legend_items": [
            ("pin", "pin-hostel", "1★ Eve Suite Ara Damansara (Start)"),
            ("pin", "pin-temple", "3★-4★ Historic Chinatown Shrines"),
            ("pin", "", "2★, 5★-8★ Heritage &amp; Shopping Stops"),
            ("line", "line-blue", "LRT Kelana Jaya Direct Line (▶)"),
            ("dotted", "line-dotted-red", "Chinatown &amp; Colonial Walk (▶)")
        ],
        "center": [3.1360, 101.6520],
        "zoom": 12,
        "pins": [
            {"lat": 3.1132, "lng": 101.5916, "num": 1, "name": "Eve Suite Ara Damansara", "time": "09:30 AM LRT Depart", "customClass": "pin-hostel", "offX": 14, "offY": -22},
            {"lat": 3.1417, "lng": 101.6983, "num": 2, "name": "Kwai Chai Hong Murals", "time": "10:00 AM Heritage Lane", "offX": 14, "offY": 18},
            {"lat": 3.1436, "lng": 101.6967, "num": 3, "name": "Guan Di Temple (1888)", "time": "11:00 AM Taoist Shrine", "customClass": "pin-temple", "offX": -148, "offY": -72},
            {"lat": 3.1432, "lng": 101.6964, "num": 4, "name": "Sri Maha Mariamman", "time": "11:45 AM Gopuram Tower", "customClass": "pin-temple", "offX": -148, "offY": -4},
            {"lat": 3.1444, "lng": 101.6978, "num": 5, "name": "Petaling Street Bazaar", "time": "12:30 PM Lunch & Stalls", "offX": 14, "offY": -48},
            {"lat": 3.1488, "lng": 101.6946, "num": 6, "name": "Sultan Abdul Samad Bldg", "time": "14:30 PM Moorish Domes", "offX": 14, "offY": -32},
            {"lat": 3.1485, "lng": 101.6938, "num": 7, "name": "Merdeka Square", "time": "15:15 PM Flagpole Green", "offX": -145, "offY": -25},
            {"lat": 3.1489, "lng": 101.7133, "num": 8, "name": "Pavilion KL (Bukit Bintang)", "time": "18:30 PM Dinner w/ Daiki", "offX": -145, "offY": -20}
        ],
        "polylines": [
            {"coords": [[3.1132, 101.5916], [3.1050, 101.6050], [3.1100, 101.6450], [3.1250, 101.6700], [3.1340, 101.6865], [3.1417, 101.6983]], "color": "#0284c7", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#0284c7", "size": 9, "offset": 25, "repeat": 50}},
            {"coords": [[3.1417, 101.6983], [3.1436, 101.6967], [3.1432, 101.6964], [3.1444, 101.6978], [3.1488, 101.6946], [3.1485, 101.6938]], "color": "#ea580c", "weight": 4, "dashArray": "6, 8", "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 40}},
            {"coords": [[3.1485, 101.6938], [3.1470, 101.7030], [3.1489, 101.7133]], "color": "#0284c7", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#0284c7", "size": 9, "offset": 25, "repeat": 50}}
        ],
        "badges": [
            {"lat": 3.1250, "lng": 101.6400, "html": '<div class="transit-badge">🚇 Direct LRT (KJ25 Lembah Subang ➔ KJ14 Pasar Seni)</div>', "iconAnchor": [115, 12]}
        ]
    },
    # DAY 3
    {
        "filename": "day3_genting_highlands_map.html",
        "png_name": "day3_genting_highlands_map.png",
        "day_num": 3,
        "title": "Genting Highlands Awana SkyWay, Chin Swee Temple & SkyAvenue",
        "short_title": "Genting Highlands Route",
        "date_str": "Sat 31 Oct 2026 · Full-Day w/ Daiki (1★ ➔ 6★)",
        "header_pills": [
            "🚌 <strong>08:30</strong> KL Sentral Express Coach to Awana Hub (1★)",
            "🚠 <strong>10:00</strong> Awana SkyWay Gondola to Chin Swee Station (2★)",
            "🏯 <strong>10:15</strong> 9-Story Pagoda &amp; Cliffside Sanctuary (2★)",
            "🏔️ <strong>12:15</strong> SkyAvenue Peak (3★), Lunch (4★) &amp; SkyWorlds (5★)"
        ],
        "legend_items": [
            ("pin", "pin-arrival", "1★, 6★ Awana Bus &amp; Gondola Hub"),
            ("pin", "pin-temple", "2★ Chin Swee Caves Temple"),
            ("pin", "", "3★-5★ Genting Summit Landmarks"),
            ("line", "line-red", "Awana SkyWay Cable Car (▶)"),
            ("dotted", "line-dotted-red", "Highland Summit Walk (▶)")
        ],
        "center": [3.4135, 101.7860],
        "zoom": 14,
        "pins": [
            {"lat": 3.4024, "lng": 101.7785, "num": 1, "name": "Awana SkyWay Terminal", "time": "09:45 AM Arrive & Board", "customClass": "pin-arrival", "offX": -145, "offY": -20},
            {"lat": 3.4137, "lng": 101.7877, "num": 2, "name": "Chin Swee Caves Temple", "time": "10:15 AM Cliff Pagoda", "customClass": "pin-temple", "offX": 14, "offY": -15},
            {"lat": 3.4240, "lng": 101.7932, "num": 3, "name": "SkyAvenue Summit Station", "time": "12:15 PM 6,000ft Peak", "offX": -145, "offY": -30},
            {"lat": 3.4252, "lng": 101.7948, "num": 4, "name": "Malaysian Food Street", "time": "12:45 PM Lunch w/ Daiki", "offX": 14, "offY": -68},
            {"lat": 3.4228, "lng": 101.7942, "num": 5, "name": "SkyWorlds Outdoor Plaza", "time": "14:30 PM Cool Mist Walk", "offX": 14, "offY": 12},
            {"lat": 3.4020, "lng": 101.7795, "num": 6, "name": "Awana Return Bus Hub", "time": "17:00 PM Bus to KL", "customClass": "pin-arrival", "offX": 14, "offY": 8}
        ],
        "polylines": [
            {"coords": [[3.4024, 101.7785], [3.4137, 101.7877], [3.4240, 101.7932]], "color": "#dc2626", "weight": 5, "casingColor": "#ffffff", "casingWeight": 8, "arrows": {"color": "#dc2626", "size": 9, "offset": 25, "repeat": 45}},
            {"coords": [[3.4240, 101.7932], [3.4252, 101.7948], [3.4228, 101.7942]], "color": "#ea580c", "weight": 4, "dashArray": "5, 7", "arrows": {"color": "#ea580c", "size": 8, "offset": 15, "repeat": 35}},
            {"coords": [[3.4228, 101.7942], [3.4020, 101.7795]], "color": "#0284c7", "weight": 4, "dashArray": "8, 8", "arrows": {"color": "#0284c7", "size": 8, "offset": 30, "repeat": 55}}
        ],
        "badges": [
            {"lat": 3.4085, "lng": 101.7830, "html": '<div class="transit-badge badge-gondola">🚠 Awana SkyWay Gondola</div>', "iconAnchor": [65, 12]}
        ]
    },
    # DAY 4
    {
        "filename": "day4_lds_worship_thean_hou_map.html",
        "png_name": "day4_lds_worship_thean_hou_map.png",
        "day_num": 4,
        "title": "Sunday LDS Sacrament Worship & Thean Hou Six-Tiered Temple",
        "short_title": "LDS Service & Thean Hou",
        "date_str": "Sun 01 Nov 2026 · Full-Day w/ Daiki (1★ ➔ 5★)",
        "header_pills": [
            "⛪ <strong>10:00</strong> LDS Sacrament Service at Taman U Thant (2★)",
            "🍲 <strong>12:30</strong> Sunday Fellowship Lunch in Ampang (3★)",
            "🏮 <strong>14:30</strong> Suggested: Thean Hou Temple Robson Heights (4★)",
            "🏠 <strong>17:30</strong> Return to Eve Suite Ara Damansara (5★)"
        ],
        "legend_items": [
            ("pin", "pin-hostel", "1★, 5★ Eve Suite Ara Damansara (Host Base)"),
            ("pin", "pin-temple", "2★ KL LDS Meetinghouse (Worship)"),
            ("pin", "", "3★-4★ Sunday Dining &amp; Thean Hou"),
            ("line", "line-green", "Morning Grab to Taman U Thant (▶)"),
            ("line", "line-blue", "Afternoon Route to Robson Heights (▶)")
        ],
        "center": [3.1380, 101.6650],
        "zoom": 12,
        "pins": [
            {"lat": 3.1132, "lng": 101.5916, "num": 1, "name": "Eve Suite Ara Damansara", "time": "09:15 AM Depart Together", "customClass": "pin-hostel", "offX": 14, "offY": -22},
            {"lat": 3.1577, "lng": 101.7371, "num": 2, "name": "KL LDS Meetinghouse", "time": "10:00 AM Worship Service", "customClass": "pin-temple", "offX": -140, "offY": -28},
            {"lat": 3.1545, "lng": 101.7285, "num": 3, "name": "Ampang Hilir Dining", "time": "12:30 PM Sunday Lunch", "offX": 14, "offY": 6},
            {"lat": 3.1219, "lng": 101.6873, "num": 4, "name": "Thean Hou Temple (Mazu)", "time": "14:30 PM 6-Tiered Shrine", "customClass": "pin-temple", "offX": -145, "offY": 10},
            {"lat": 3.1132, "lng": 101.5916, "num": 5, "name": "Return to Eve Suite", "time": "17:30 PM Rested Evening", "customClass": "pin-hostel", "offX": 14, "offY": 12}
        ],
        "polylines": [
            {"coords": [[3.1132, 101.5916], [3.1300, 101.6500], [3.1500, 101.7000], [3.1577, 101.7371]], "color": "#059669", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#059669", "size": 9, "offset": 25, "repeat": 50}},
            {"coords": [[3.1577, 101.7371], [3.1545, 101.7285], [3.1350, 101.7100], [3.1219, 101.6873]], "color": "#0284c7", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#0284c7", "size": 9, "offset": 25, "repeat": 50}},
            {"coords": [[3.1219, 101.6873], [3.1150, 101.6400], [3.1132, 101.5916]], "color": "#7c3aed", "weight": 4, "dashArray": "6, 8", "arrows": {"color": "#7c3aed", "size": 8, "offset": 20, "repeat": 40}}
        ],
        "badges": [
            {"lat": 3.1420, "lng": 101.6550, "html": '<div class="transit-badge badge-bus">🚗 Grab Cross-City to Meetinghouse</div>', "iconAnchor": [95, 12]}
        ]
    },
    # DAY 5
    {
        "filename": "day5_batu_caves_central_market_map.html",
        "png_name": "day5_batu_caves_central_market_map.png",
        "day_num": 5,
        "title": "Batu Caves Morning Pilgrimage, Central Market & Saloma Link",
        "short_title": "Batu Caves & Saloma Link",
        "date_str": "Mon 02 Nov 2026 · Full Day w/ Daiki (1★ ➔ 7★)",
        "header_pills": [
            "🚆 <strong>08:30</strong> KTM Komuter from KL Sentral (1★) to Batu Caves (2★)",
            "🕉️ <strong>09:15</strong> Golden Murugan (3★), 272 Steps (4★) &amp; Ramayana (5★)",
            "🛍️ <strong>13:45</strong> Central Market (Pasar Seni) Souvenir Shopping (6★)",
            "🌉 <strong>18:30</strong> Saloma Link Illuminated Bridge &amp; Dinner (7★)"
        ],
        "legend_items": [
            ("pin", "pin-rail", "1★-2★ KTM Komuter Rail Stations"),
            ("pin", "pin-temple", "3★-5★ Batu Caves Sacred Complex"),
            ("pin", "", "6★-7★ Central Market &amp; Saloma Link"),
            ("rail", "line-gold", "KTM Komuter Batu Caves Line (▶)"),
            ("line", "line-blue", "City LRT to Kampung Baru (▶)")
        ],
        "center": [3.1900, 101.6930],
        "zoom": 12,
        "pins": [
            {"lat": 3.1340, "lng": 101.6865, "num": 1, "name": "KL Sentral (KTM Hub)", "time": "08:30 AM Board Train", "customClass": "pin-rail", "offX": -148, "offY": 12},
            {"lat": 3.2374, "lng": 101.6812, "num": 2, "name": "Batu Caves KTM Station", "time": "09:05 AM Arrival", "customClass": "pin-rail", "offX": -148, "offY": -75},
            {"lat": 3.2374, "lng": 101.6839, "num": 3, "name": "Lord Murugan & 272 Steps", "time": "09:15 AM Rainbow Climb", "customClass": "pin-temple", "offX": 14, "offY": -75},
            {"lat": 3.2384, "lng": 101.6843, "num": 4, "name": "Temple Cave (Cathedral)", "time": "09:45 AM Limestone Cavern", "customClass": "pin-temple", "offX": 14, "offY": 10},
            {"lat": 3.2365, "lng": 101.6815, "num": 5, "name": "Ramayana Cave & Lingam", "time": "10:45 AM Epic Dioramas", "customClass": "pin-temple", "offX": -148, "offY": 10},
            {"lat": 3.1455, "lng": 101.6956, "num": 6, "name": "Central Market (Pasar Seni)", "time": "13:45 PM Souvenir Crafts", "offX": -148, "offY": -68},
            {"lat": 3.1594, "lng": 101.7078, "num": 7, "name": "Saloma Link Bridge", "time": "18:30 PM Night Lights", "offX": 14, "offY": -15}
        ],
        "polylines": [
            {"coords": [[3.1340, 101.6865], [3.1488, 101.6946], [3.1800, 101.6860], [3.2374, 101.6812]], "color": "#f59e0b", "weight": 5, "casingColor": "#1e3a8a", "casingWeight": 8, "arrows": {"color": "#1e3a8a", "size": 9, "offset": 30, "repeat": 60}},
            {"coords": [[3.2374, 101.6812], [3.2374, 101.6839], [3.2384, 101.6843], [3.2365, 101.6815]], "color": "#ea580c", "weight": 4, "dashArray": "5, 6", "arrows": {"color": "#ea580c", "size": 8, "offset": 15, "repeat": 30}},
            {"coords": [[3.1455, 101.6956], [3.1594, 101.7078]], "color": "#0284c7", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#0284c7", "size": 9, "offset": 25, "repeat": 45}}
        ],
        "badges": [
            {"lat": 3.1950, "lng": 101.6840, "html": '<div class="transit-badge badge-rail">🚆 KTM Komuter (30 min)</div>', "iconAnchor": [65, 12]}
        ]
    },
    # DAY 6
    {
        "filename": "day6_putrajaya_lakeside_map.html",
        "png_name": "day6_putrajaya_lakeside_map.png",
        "day_num": 6,
        "title": "Putrajaya Rose-Granite Mosque, Lake Promenade & Gardens",
        "short_title": "Putrajaya Lakeside Route",
        "date_str": "Tue 03 Nov 2026 · Solo AM / Joint PM (1★ ➔ 6★)",
        "header_pills": [
            "🚆 <strong>09:30</strong> KLIA Transit / MRT to Putrajaya Sentral (1★)",
            "🕌 <strong>10:15</strong> Putra Mosque Rose-Granite Sanctuary (2★)",
            "🏛️ <strong>11:30</strong> Perdana Putra (3★) &amp; Lake Promenade Lunch (4★)",
            "🌺 <strong>14:00</strong> Botanical Garden (5★) ➔ Bangsar Dinner w/ Daiki (6★)"
        ],
        "legend_items": [
            ("pin", "pin-rail", "1★, 6★ Putrajaya Sentral Transit Hub"),
            ("pin", "pin-temple", "2★ Putra Mosque (Masjid Putra)"),
            ("pin", "", "3★-5★ Lakeside &amp; Botanical Stops"),
            ("line", "line-green", "Putrajaya Shuttle / Grab (▶)"),
            ("dotted", "line-dotted-red", "Scenic Waterfront Walk (▶)")
        ],
        "center": [2.9385, 101.6870],
        "zoom": 14,
        "pins": [
            {"lat": 2.9312, "lng": 101.6712, "num": 1, "name": "Putrajaya Sentral Hub", "time": "10:00 AM Train Arrival", "customClass": "pin-rail", "offX": -145, "offY": -30},
            {"lat": 2.9361, "lng": 101.6894, "num": 2, "name": "Putra Mosque (Pink Dome)", "time": "10:15 AM Lakeside Mosque", "customClass": "pin-temple", "offX": -145, "offY": -72},
            {"lat": 2.9385, "lng": 101.6922, "num": 3, "name": "Perdana Putra Viewpoint", "time": "11:30 AM Grand Domes", "offX": 14, "offY": -58},
            {"lat": 2.9345, "lng": 101.6908, "num": 4, "name": "Putrajaya Waterfront Cafe", "time": "12:45 PM Lakefront Lunch", "offX": 14, "offY": 12},
            {"lat": 2.9510, "lng": 101.6960, "num": 5, "name": "Putrajaya Botanical Garden", "time": "14:00 PM Canopy Walk", "offX": 14, "offY": -18},
            {"lat": 2.9308, "lng": 101.6720, "num": 6, "name": "Return to KL & Bangsar", "time": "16:30 PM Train to Dinner", "customClass": "pin-rail", "offX": 14, "offY": 12}
        ],
        "polylines": [
            {"coords": [[2.9312, 101.6712], [2.9361, 101.6894]], "color": "#059669", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#059669", "size": 9, "offset": 25, "repeat": 45}},
            {"coords": [[2.9361, 101.6894], [2.9385, 101.6922], [2.9345, 101.6908], [2.9510, 101.6960]], "color": "#ea580c", "weight": 4, "dashArray": "6, 8", "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 40}},
            {"coords": [[2.9510, 101.6960], [2.9308, 101.6720]], "color": "#0284c7", "weight": 4, "dashArray": "8, 8", "arrows": {"color": "#0284c7", "size": 8, "offset": 25, "repeat": 50}}
        ],
        "badges": [
            {"lat": 2.9335, "lng": 101.6800, "html": '<div class="transit-badge badge-bus">🚗 5-min Transfer to Dataran Putra</div>', "iconAnchor": [75, 12]}
        ]
    },
    # DAY 7
    {
        "filename": "day7_islamic_arts_botanical_gardens_map.html",
        "png_name": "day7_islamic_arts_botanical_gardens_map.png",
        "day_num": 7,
        "title": "Perdana Botanical Gardens, Islamic Arts Museum & Bukit Bintang",
        "short_title": "Islamic Arts & Bukit Bintang",
        "date_str": "Wed 04 Nov 2026 · Solo AM / Joint PM (1★ ➔ 6★)",
        "header_pills": [
            "🚇 <strong>08:45</strong> LRT Lembah Subang (1★) ➔ Perdana Gardens (2★)",
            "🏺 <strong>11:15</strong> Islamic Arts Museum Malaysia (IAMM) Domes (3★)",
            "🕌 <strong>13:45</strong> National Mosque (Masjid Negara) Architecture (4★)",
            "🛍️ <strong>18:30</strong> Pavilion KL (5★) &amp; Lot 10 Hutong Farewell Feast (6★)"
        ],
        "legend_items": [
            ("pin", "pin-hostel", "1★ Eve Suite Ara Damansara (Morning Start)"),
            ("pin", "pin-museum", "2★-4★ Lake Gardens &amp; IAMM Precinct"),
            ("pin", "", "5★-6★ Bukit Bintang Farewell Night"),
            ("line", "line-blue", "LRT Kelana Jaya Transit (▶)"),
            ("dotted", "line-dotted-red", "Botanical &amp; Museum Walk (▶)")
        ],
        "center": [3.1360, 101.6520],
        "zoom": 12,
        "pins": [
            {"lat": 3.1132, "lng": 101.5916, "num": 1, "name": "Eve Suite Ara Damansara", "time": "08:45 AM LRT Depart", "customClass": "pin-hostel", "offX": 14, "offY": -22},
            {"lat": 3.1432, "lng": 101.6848, "num": 2, "name": "Perdana Botanical Gardens", "time": "09:30 AM Tropical Canopy", "customClass": "pin-museum", "offX": -148, "offY": -68},
            {"lat": 3.1419, "lng": 101.6897, "num": 3, "name": "Islamic Arts Museum (IAMM)", "time": "11:15 AM Turquoise Domes", "customClass": "pin-museum", "offX": -148, "offY": 14},
            {"lat": 3.1418, "lng": 101.6917, "num": 4, "name": "National Mosque (Masjid)", "time": "13:45 PM Pleated Star Roof", "customClass": "pin-museum", "offX": 14, "offY": -72},
            {"lat": 3.1489, "lng": 101.7133, "num": 5, "name": "Pavilion Kuala Lumpur", "time": "18:30 PM Meet Daiki", "offX": -142, "offY": -28},
            {"lat": 3.1465, "lng": 101.7116, "num": 6, "name": "Lot 10 Hutong Heritage", "time": "19:30 PM Farewell Dinner", "offX": 14, "offY": 8}
        ],
        "polylines": [
            {"coords": [[3.1132, 101.5916], [3.1050, 101.6050], [3.1100, 101.6450], [3.1250, 101.6700], [3.1340, 101.6865], [3.1432, 101.6848]], "color": "#0284c7", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#0284c7", "size": 9, "offset": 25, "repeat": 50}},
            {"coords": [[3.1432, 101.6848], [3.1419, 101.6897], [3.1418, 101.6917]], "color": "#ea580c", "weight": 4, "dashArray": "6, 8", "arrows": {"color": "#ea580c", "size": 8, "offset": 20, "repeat": 40}},
            {"coords": [[3.1418, 101.6917], [3.1450, 101.7010], [3.1489, 101.7133], [3.1465, 101.7116]], "color": "#0284c7", "weight": 4.5, "casingColor": "#ffffff", "casingWeight": 7, "arrows": {"color": "#0284c7", "size": 9, "offset": 25, "repeat": 50}}
        ],
        "badges": [
            {"lat": 3.1250, "lng": 101.6350, "html": '<div class="transit-badge">🚇 Direct LRT from Lembah Subang</div>', "iconAnchor": [95, 12]}
        ]
    },
    # DAY 8
    {
        "filename": "day8_kl_sentral_homeward_transit_map.html",
        "png_name": "day8_kl_sentral_homeward_transit_map.png",
        "day_num": 8,
        "title": "Eve Suite Farewell, KL Sentral, KLIA Ekspres & Flight AK584",
        "short_title": "Eve Suite ➔ KLIA2 Departure",
        "date_str": "Thu 05 Nov 2026 · Homeward Transit (1★ ➔ 5★)",
        "header_pills": [
            "🏠 <strong>07:30</strong> Farewell Breakfast &amp; Packing at Eve Suite (1★)",
            "🛍️ <strong>12:30</strong> Nu Sentral Mall Lunch &amp; Last-Minute Treats (2★)",
            "🚄 <strong>14:30</strong> Non-Stop KLIA Ekspres from KL Sentral (3★)",
            "✈️ <strong>18:20</strong> AirAsia AK584 Departs KLIA2 (4★-5★) ➔ 22:25 MNL"
        ],
        "legend_items": [
            ("pin", "pin-hostel", "1★ Eve Suite Ara Damansara (Check-Out)"),
            ("pin", "pin-rail", "2★-3★ Nu Sentral &amp; KL Sentral Hub"),
            ("pin", "pin-arrival", "4★-5★ KLIA Terminal 2 (Flight AK584)"),
            ("rail", "line-purple", "KLIA Ekspres High-Speed Rail (▶)")
        ],
        "center": [2.9280, 101.6400],
        "zoom": 11,
        "pins": [
            {"lat": 3.1132, "lng": 101.5916, "num": 1, "name": "Eve Suite Ara Damansara", "time": "07:30 AM Breakfast & Pack", "customClass": "pin-hostel", "offX": 14, "offY": -22},
            {"lat": 3.1332, "lng": 101.6872, "num": 2, "name": "Nu Sentral Mall", "time": "12:30 PM Lunch & Gifts", "offX": 14, "offY": 12},
            {"lat": 3.1340, "lng": 101.6865, "num": 3, "name": "KL Sentral Ekspres Platform", "time": "14:30 PM Board Express", "customClass": "pin-rail", "offX": -145, "offY": -15},
            {"lat": 2.7433, "lng": 101.6853, "num": 4, "name": "KLIA Terminal 2 (Bag Drop)", "time": "15:00 PM Check-In 20kg", "customClass": "pin-arrival", "offX": -145, "offY": -25},
            {"lat": 2.7410, "lng": 101.6875, "num": 5, "name": "International Gate (AK584)", "time": "18:20 PM Fly to Manila", "customClass": "pin-arrival", "offX": 14, "offY": -15}
        ],
        "polylines": [
            {"coords": [[3.1132, 101.5916], [3.1050, 101.6050], [3.1100, 101.6450], [3.1250, 101.6700], [3.1332, 101.6872], [3.1340, 101.6865]], "color": "#059669", "weight": 4.5, "arrows": {"color": "#059669", "size": 8, "offset": 20, "repeat": 40}},
            {"coords": [[3.1340, 101.6865], [3.0400, 101.7050], [2.9312, 101.6712], [2.8000, 101.6800], [2.7433, 101.6853]], "color": "#7c3aed", "weight": 5.5, "casingColor": "#ffffff", "casingWeight": 8.5, "arrows": {"color": "#7c3aed", "size": 9, "offset": 30, "repeat": 65}}
        ],
        "badges": [
            {"lat": 2.9312, "lng": 101.6712, "html": '<div class="transit-badge" style="background:#7c3aed;">🚄 KLIA Ekspres Non-Stop (28 min)</div>', "iconAnchor": [85, 12]}
        ]
    }
]

for m in maps_config:
    html_out = create_map_html(
        day_num=m["day_num"],
        title=m["title"],
        short_title=m["short_title"],
        date_str=m["date_str"],
        header_pills=m["header_pills"],
        legend_items=m["legend_items"],
        center=m["center"],
        zoom=m["zoom"],
        pins=m["pins"],
        polylines=m["polylines"],
        badges=m.get("badges", [])
    )
    html_path = os.path.join(MAPS_DIR, m["filename"])
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_out)
    print(f"✓ Generated HTML: {html_path}")

    img_path = os.path.join(IMG_DIR, m["png_name"])
    brain_path = os.path.join(BRAIN_DIR, m["png_name"])
    file_url = f"file://{html_path}"
    cmd = [
        CHROME_BIN,
        "--headless=new",
        "--disable-gpu",
        "--window-size=1260,780",
        "--virtual-time-budget=6000",
        f"--screenshot={img_path}",
        file_url
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(img_path) and os.path.getsize(img_path) > 0:
        shutil.copy2(img_path, brain_path)
        print(f"✓ Rendered PNG: {img_path} ({os.path.getsize(img_path)} bytes) & copied to brain")
    else:
        print(f"✗ Failed rendering {m['png_name']}: {res.stderr}")

print("All 8 KL route maps generated and rendered!")
