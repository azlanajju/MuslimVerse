// ---------- helpers (year is ignored everywhere) ----------

// Get times for a date by matching month + day only
function getTimesForDate(data, date) {
  const monthName = date.toLocaleString('en-US', { month: 'long' });
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const mmdd = `${mm}-${dd}`; // e.g. "03-05"

  const monthData = data[monthName] || [];

  for (const entry of monthData) {
    const start = entry.startDate.slice(5); // "2024-01-04" -> "01-04"
    const end = entry.endDate.slice(5);
    if (mmdd >= start && mmdd <= end) return entry.times;
  }

  // fallback (e.g. Feb 29 missing in json): use the last range of the month
  return monthData.length ? monthData[monthData.length - 1].times : null;
}

// Turn "05:07 AM" into a Date on the given day
function timeToDate(timeStr, baseDate) {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  let h = Number(match[1]) % 12;
  if (match[3].toUpperCase() === 'PM') h += 12;
  const d = new Date(baseDate);
  d.setHours(h, Number(match[2]), 0, 0);
  return d;
}

// ---------- fetch prayer times ----------
fetch('./json/prayerTimes.json')
  .then(response => response.json())
  .then(data => {
    const now = new Date();

    const todayTimes = getTimesForDate(data, now);
    const prayerNames = Object.keys(todayTimes);

    let upcomingPrayer = '';
    let upcomingTime = '';

    // Find next prayer today
    for (const name of prayerNames) {
      if (now < timeToDate(todayTimes[name], now)) {
        upcomingPrayer = name;
        upcomingTime = todayTimes[name];
        break;
      }
    }

    // After Isha: show tomorrow's Fajr
    if (!upcomingPrayer) {
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowTimes = getTimesForDate(data, tomorrow);
      upcomingPrayer = prayerNames[0]; // Fajr
      upcomingTime = tomorrowTimes[upcomingPrayer];
    }

    // Get Arabic date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-umalqura' };
    const arDate = now.toLocaleDateString('ar-SA', options);

    // Update the HTML elements
    document.querySelector('.upcoming-time').textContent = upcomingTime.split(' ')[0];
    document.querySelector('.upcoming-am-pm').textContent = upcomingTime.split(' ')[1];
    document.querySelector('.wakth').textContent = upcomingPrayer;
    document.querySelector('.date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    document.querySelector('.ardate').textContent = arDate;
  })
  .catch(error => {
    console.error('Error fetching prayer times:', error);
  });

window.addEventListener('scroll', function () {
  if (window.scrollY > 70) {
    document.querySelector('#about').style.opacity = 0.09;
  } else {
    document.querySelector('#about').style.opacity = 1;
  }
});

// Loader
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});
