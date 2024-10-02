// Fetch prayer times from a JSON file
fetch('./json/prayerTimes.json')
  .then(response => response.json())
  .then(data => {
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' }); // Get the current month name
    const currentDateString = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    // Initialize variables
    let prayerTimes = [];
    
    // Extract prayer times for the current month
    if (data[currentMonth]) {
      const monthData = data[currentMonth];

      for (let entry of monthData) {
        if (currentDateString >= entry.startDate && currentDateString <= entry.endDate) {
          prayerTimes = entry.times; // Get the prayer times for the current date
          break;
        }
      }
    }

    // Get current prayer time
    let currentPrayer = '';
    let upcomingPrayer = '';
    let upcomingTime = '';

    const prayerNames = Object.keys(prayerTimes);
    const prayerTimesArray = prayerNames.map(name => new Date(`${now.toDateString()} ${prayerTimes[name]}`));

    for (let i = 0; i < prayerTimesArray.length; i++) {
      if (now < prayerTimesArray[i]) {
        currentPrayer = i === 0 ? prayerNames[0] : prayerNames[i - 1];
        upcomingPrayer = prayerNames[i];
        upcomingTime = prayerTimes[upcomingPrayer];
        break;
      }
    }

    // Get Arabic date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-umalqura' };
    const arDate = now.toLocaleDateString('ar-SA', options);

    // Update the HTML elements with the prayer times
    document.querySelector('.upcoming-time').textContent = upcomingTime.split(' ')[0];
    document.querySelector('.upcoming-am-pm').textContent = upcomingTime.split(' ')[1];
    document.querySelector('.wakth').textContent = upcomingPrayer;
    document.querySelector('.date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    document.querySelector('.ardate').textContent = arDate;

  })
  .catch(error => {
    console.error('Error fetching prayer times:', error);
  });

window.addEventListener('scroll', function() {
    if (window.scrollY > 70) {
      document.querySelector('#about').style.opacity = 0.09;
    } else {
      document.querySelector('#about').style.opacity = 1;
    }
});

// Loader
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});
