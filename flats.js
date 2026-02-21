// Explicit list of plots — edit a plot's `status` directly below.
// Example: change status: "available" -> "sold out" for plot 12
const flats = [
  { id: 1, plotNumber: "PLOT 1", status: "available" },
  { id: 2, plotNumber: "PLOT 2", status: "available" },
  { id: 3, plotNumber: "PLOT 3", status: "available" },
  { id: 4, plotNumber: "PLOT 4", status: "available" },
  { id: 5, plotNumber: "PLOT 5", status: "available" },
  { id: 6, plotNumber: "PLOT 6", status: "available" },
  { id: 7, plotNumber: "PLOT 7", status: "available" },
  { id: 8, plotNumber: "PLOT 8", status: "available" },
  { id: 9, plotNumber: "PLOT 9", status: "available" },
  { id: 10, plotNumber: "PLOT 10", status: "available" },
  { id: 11, plotNumber: "PLOT 11", status: "available" },
  { id: 12, plotNumber: "PLOT 12", status: "available" },
  { id: 13, plotNumber: "PLOT 13", status: "available" },
  { id: 14, plotNumber: "PLOT 14", status: "available" },
  { id: 15, plotNumber: "PLOT 15", status: "available" },
  { id: 16, plotNumber: "PLOT 16", status: "available" },
  { id: 17, plotNumber: "PLOT 17", status: "available" },
  { id: 18, plotNumber: "PLOT 18", status: "available" },
  { id: 19, plotNumber: "PLOT 19", status: "available" },
  { id: 20, plotNumber: "PLOT 20", status: "available" },
  { id: 21, plotNumber: "PLOT 21", status: "available" },
  { id: 22, plotNumber: "PLOT 22", status: "available" },
  { id: 23, plotNumber: "PLOT 23", status: "available" },
  { id: 24, plotNumber: "PLOT 24", status: "available" },
  { id: 25, plotNumber: "PLOT 25", status: "available" },
  { id: 26, plotNumber: "PLOT 26", status: "available" },
  { id: 27, plotNumber: "PLOT 27", status: "available" },
  { id: 28, plotNumber: "PLOT 28", status: "available" },
  { id: 29, plotNumber: "PLOT 29", status: "available" },
  { id: 30, plotNumber: "PLOT 30", status: "available" },
  { id: 31, plotNumber: "PLOT 31", status: "available" },
  { id: 32, plotNumber: "PLOT 32", status: "available" },
  { id: 33, plotNumber: "PLOT 33", status: "available" },
  { id: 34, plotNumber: "PLOT 34", status: "available" },
  { id: 35, plotNumber: "PLOT 35", status: "available" },
  { id: 36, plotNumber: "PLOT 36", status: "available" },
  { id: 37, plotNumber: "PLOT 37", status: "available" },
  { id: 38, plotNumber: "PLOT 38", status: "available" },
  { id: 39, plotNumber: "PLOT 39", status: "available" },
  { id: 40, plotNumber: "PLOT 40", status: "available" },
  { id: 41, plotNumber: "PLOT 41", status: "available" },
  { id: 42, plotNumber: "PLOT 42", status: "available" },
  { id: 43, plotNumber: "PLOT 43", status: "available" },
  { id: 44, plotNumber: "PLOT 44", status: "available" },
  { id: 45, plotNumber: "PLOT 45", status: "available" },
  { id: 46, plotNumber: "PLOT 46", status: "available" },
  { id: 47, plotNumber: "PLOT 47", status: "available" },
  { id: 48, plotNumber: "PLOT 48", status: "available" },
  { id: 49, plotNumber: "PLOT 49", status: "available" },
  { id: 50, plotNumber: "PLOT 50", status: "available" },
  { id: 51, plotNumber: "PLOT 51", status: "available" },
  { id: 52, plotNumber: "PLOT 52", status: "available" },
  { id: 53, plotNumber: "PLOT 53", status: "available" },
  { id: 54, plotNumber: "PLOT 54", status: "available" },
  { id: 55, plotNumber: "PLOT 55", status: "available" },
  { id: 56, plotNumber: "PLOT 56", status: "available" },
  { id: 57, plotNumber: "PLOT 57", status: "available" },
  { id: 58, plotNumber: "PLOT 58", status: "available" },
  { id: 59, plotNumber: "PLOT 59", status: "available" },
  { id: 60, plotNumber: "PLOT 60", status: "available" },
  { id: 61, plotNumber: "PLOT 61", status: "available" },
  { id: 62, plotNumber: "PLOT 62", status: "available" },
  { id: 63, plotNumber: "PLOT 63", status: "available" },
  { id: 64, plotNumber: "PLOT 64", status: "available" },
  { id: 65, plotNumber: "PLOT 65", status: "available" },
  { id: 66, plotNumber: "PLOT 66", status: "available" },
  { id: 67, plotNumber: "PLOT 67", status: "available" },
  { id: 68, plotNumber: "PLOT 68", status: "available" },
  { id: 69, plotNumber: "PLOT 69", status: "available" },
  { id: 70, plotNumber: "PLOT 70", status: "available" },
  { id: 71, plotNumber: "PLOT 71", status: "available" },
  { id: 72, plotNumber: "PLOT 72", status: "available" },
  { id: 73, plotNumber: "PLOT 73", status: "available" },
  { id: 74, plotNumber: "PLOT 74", status: "available" },
  { id: 75, plotNumber: "PLOT 75", status: "available" },
  { id: 76, plotNumber: "PLOT 76", status: "available" },
  { id: 77, plotNumber: "PLOT 77", status: "available" },
  { id: 78, plotNumber: "PLOT 78", status: "available" },
  { id: 79, plotNumber: "PLOT 79", status: "available" },
  { id: 80, plotNumber: "PLOT 80", status: "available" },
  { id: 81, plotNumber: "PLOT 81", status: "available" },
  { id: 82, plotNumber: "PLOT 82", status: "available" },
  { id: 83, plotNumber: "PLOT 83", status: "available" },
  { id: 84, plotNumber: "PLOT 84", status: "available" },
  { id: 85, plotNumber: "PLOT 85", status: "available" },
  { id: 86, plotNumber: "PLOT 86", status: "available" },
  { id: 87, plotNumber: "PLOT 87", status: "available" },
  { id: 88, plotNumber: "PLOT 88", status: "available" },
  { id: 89, plotNumber: "PLOT 89", status: "available" },
  { id: 90, plotNumber: "PLOT 90", status: "available" },
  { id: 91, plotNumber: "PLOT 91", status: "available" },
  { id: 92, plotNumber: "PLOT 92", status: "available" },
  { id: 93, plotNumber: "PLOT 93", status: "available" },
  { id: 94, plotNumber: "PLOT 94", status: "available" },
  { id: 95, plotNumber: "PLOT 95", status: "available" },
  { id: 96, plotNumber: "PLOT 96", status: "available" },
  { id: 97, plotNumber: "PLOT 97", status: "available" },
  { id: 98, plotNumber: "PLOT 98", status: "available" },
  { id: 99, plotNumber: "PLOT 99", status: "available" },
  { id: 100, plotNumber: "PLOT 100", status: "available" },
  { id: 101, plotNumber: "PLOT 101", status: "available" },
  { id: 102, plotNumber: "PLOT 102", status: "available" },
  { id: 103, plotNumber: "PLOT 103", status: "available" },
  { id: 104, plotNumber: "PLOT 104", status: "available" },
  { id: 105, plotNumber: "PLOT 105", status: "available" },
  { id: 106, plotNumber: "PLOT 106", status: "available" },
  { id: 107, plotNumber: "PLOT 107", status: "available" },
  { id: 108, plotNumber: "PLOT 108", status: "available" },
  { id: 109, plotNumber: "PLOT 109", status: "available" },
  { id: 110, plotNumber: "PLOT 110", status: "available" },
  { id: 111, plotNumber: "PLOT 111", status: "available" },
  { id: 112, plotNumber: "PLOT 112", status: "available" },
  { id: 113, plotNumber: "PLOT 113", status: "available" },
  { id: 114, plotNumber: "PLOT 114", status: "available" },
  { id: 115, plotNumber: "PLOT 115", status: "available" },
  { id: 116, plotNumber: "PLOT 116", status: "available" },
  { id: 117, plotNumber: "PLOT 117", status: "available" },
  { id: 118, plotNumber: "PLOT 118", status: "available" },
  { id: 119, plotNumber: "PLOT 119", status: "available" },
  { id: 120, plotNumber: "PLOT 120", status: "available" },
  { id: 121, plotNumber: "PLOT 121", status: "available" },
  { id: 122, plotNumber: "PLOT 122", status: "available" },
  { id: 123, plotNumber: "PLOT 123", status: "available" },
  { id: 124, plotNumber: "PLOT 124", status: "available" },
  { id: 125, plotNumber: "PLOT 125", status: "available" },
  { id: 126, plotNumber: "PLOT 126", status: "available" },
  { id: 127, plotNumber: "PLOT 127", status: "available" },
  { id: 128, plotNumber: "PLOT 128", status: "available" },
  { id: 129, plotNumber: "PLOT 129", status: "available" },
  { id: 130, plotNumber: "PLOT 130", status: "available" },
  { id: 131, plotNumber: "PLOT 131", status: "available" },
  { id: 132, plotNumber: "PLOT 132", status: "available" },
  { id: 133, plotNumber: "PLOT 133", status: "available" },
  { id: 134, plotNumber: "PLOT 134", status: "available" },
  { id: 135, plotNumber: "PLOT 135", status: "available" },
  { id: 136, plotNumber: "PLOT 136", status: "available" },
  { id: 137, plotNumber: "PLOT 137", status: "available" },
  { id: 138, plotNumber: "PLOT 138", status: "available" },
  { id: 139, plotNumber: "PLOT 139", status: "available" },
  { id: 140, plotNumber: "PLOT 140", status: "available" },
  { id: 141, plotNumber: "PLOT 141", status: "available" },
  { id: 142, plotNumber: "PLOT 142", status: "available" },
  { id: 143, plotNumber: "PLOT 143", status: "available" },
  { id: 144, plotNumber: "PLOT 144", status: "available" },
  { id: 145, plotNumber: "PLOT 145", status: "available" },
  { id: 146, plotNumber: "PLOT 146", status: "available" },
  { id: 147, plotNumber: "PLOT 147", status: "available" },
  { id: 148, plotNumber: "PLOT 148", status: "available" },
  { id: 149, plotNumber: "PLOT 149", status: "available" },
  { id: 150, plotNumber: "PLOT 150", status: "available" },
  { id: 151, plotNumber: "PLOT 151", status: "available" },
  { id: 152, plotNumber: "PLOT 152", status: "available" },
  { id: 153, plotNumber: "PLOT 153", status: "available" },
  { id: 154, plotNumber: "PLOT 154", status: "available" },
  { id: 155, plotNumber: "PLOT 155", status: "available" },
  { id: 156, plotNumber: "PLOT 156", status: "available" },
  { id: 157, plotNumber: "PLOT 157", status: "available" },
  { id: 158, plotNumber: "PLOT 158", status: "available" },
  { id: 159, plotNumber: "PLOT 159", status: "available" },
  { id: 160, plotNumber: "PLOT 160", status: "available" },
  { id: 161, plotNumber: "PLOT 161", status: "available" },
  { id: 162, plotNumber: "PLOT 162", status: "Not For Sale" },
  { id: 163, plotNumber: "PLOT 163", status: "Not For Sale" },
  { id: 164, plotNumber: "PLOT 164", status: "available" },
  { id: 165, plotNumber: "PLOT 165", status: "available" },
  { id: 166, plotNumber: "PLOT 166", status: "Hold" },
  { id: 167, plotNumber: "PLOT 167", status: "Hold" },
  { id: 168, plotNumber: "PLOT 168", status: "available" },
  { id: 169, plotNumber: "PLOT 169", status: "available" },
  { id: 170, plotNumber: "PLOT 170", status: "available" },
  { id: 171, plotNumber: "PLOT 171", status: "available" },
  { id: 172, plotNumber: "PLOT 172", status: "available" },
  { id: 173, plotNumber: "PLOT 173", status: "available" },
  { id: 174, plotNumber: "PLOT 174", status: "available" },
  { id: 175, plotNumber: "PLOT 175", status: "sold" },
  { id: 176, plotNumber: "PLOT 176", status: "available" },
  { id: 177, plotNumber: "PLOT 177", status: "available" },
  { id: 178, plotNumber: "PLOT 178", status: "available" },
  { id: 179, plotNumber: "PLOT 179", status: "available" },
  { id: 180, plotNumber: "PLOT 180", status: "available" },
  { id: 181, plotNumber: "PLOT 181", status: "available" },
  { id: 182, plotNumber: "PLOT 182", status: "available" },
  { id: 183, plotNumber: "PLOT 183", status: "available" }
];

const container = document.getElementById("flatsContainer");

function displayFlats(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = '<div style="text-align: center; padding: 60px 20px; color: #7a8fa6; font-size: 18px;">No properties found</div>';
    return;
  }

  list.forEach(flat => {
    const card = document.createElement("div");
    card.className = "card";

    // make a CSS-class-safe status (no spaces, lowercase)
    const statusClass = flat.status.replace(/\s+/g, '-').toLowerCase();

    card.innerHTML = `
      <div class="card-content">
        <div class="card-property">
          <div>
            <div class="property-label">Plot Number</div>
            <div class="property-value">${flat.plotNumber}</div>
          </div>
        </div>
        <span class="badge ${statusClass}">
          ${flat.status.toUpperCase()}
        </span>
      </div>
    `;

    container.appendChild(card);
  });
}

// Update active filter button
function updateActiveFilter(status) {
  // remove existing active state
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

  const norm = (s) => (s || '').toString().toLowerCase().trim();

  // Try to find the button whose onclick contains the status or whose text matches
  const btns = Array.from(document.querySelectorAll('.filter-btn'));
  const target = btns.find(btn => {
    const onclick = btn.getAttribute('onclick') || '';
    if (onclick.indexOf("'" + status + "'") !== -1 || onclick.indexOf('"' + status + '"') !== -1) return true;
    // compare normalized button text (e.g., 'Not For Sale' -> 'not for sale')
    const txt = norm(btn.textContent);
    if (txt.indexOf(norm(status)) !== -1) return true;
    return false;
  });

  if (target) target.classList.add('active');
}

// Update counts shown on each filter button
function updateFilterCounts() {
  const norm = s => (s || '').toString().toLowerCase().trim();
  const counts = {
    all: flats.length,
    available: 0,
    sold: 0, // includes 'sold' and 'sold out'
    'not for sale': 0,
    hold: 0
  };

  flats.forEach(f => {
    const fs = norm(f.status);
    if (fs === 'available') counts.available++;
    if (fs === 'sold' || fs === 'sold out') counts.sold++;
    if (fs === 'not for sale' || fs === 'not-for-sale') counts['not for sale']++;
    if (fs === 'hold') counts.hold++;
  });

  // write counts to DOM if elements exist
  const setText = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.textContent = v;
  };

  setText('count-all', counts.all);
  setText('count-available', counts.available);
  setText('count-sold', counts.sold);
  setText('count-not-for-sale', counts['not for sale']);
  setText('count-hold', counts.hold);
}

function filterFlats(status) {
  const s = (status || '').toString().toLowerCase().trim();

  if (s === "all") {
    displayFlats(flats);
  } else if (s === "sold") {
    // treat both "sold" and "sold out" as sold
    const filtered = flats.filter(f => {
      const fs = (f.status || '').toString().toLowerCase().trim();
      return fs === 'sold' || fs === 'sold out';
    });
    displayFlats(filtered);
  } else {
    const filtered = flats.filter(f => {
      const fs = (f.status || '').toString().toLowerCase().trim();
      return fs === s;
    });
    displayFlats(filtered);
  }

  updateActiveFilter(status);
  // update counts in case statuses were changed dynamically
  updateFilterCounts();
}

// initial load
displayFlats(flats);