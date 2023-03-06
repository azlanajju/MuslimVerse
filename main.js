const prayerTimes = [
    { name: 'Fajr', time: '05:29 AM' },
    { name: 'Dhuhr', time: '12:46 PM' },
    { name: 'Asr', time: '04:07 PM' },
    { name: 'Maghrib', time: '06:44 PM' },
    { name: 'Isha', time: '07:54 PM' }
  ];

  // get current date and time
  const now = new Date();

  // get current prayer time
  let currentPrayer = '';
  for (let i = 0; i < prayerTimes.length; i++) {
    const prayerTime = new Date(`2023-03-07 ${prayerTimes[i].time}`);
    if (now < prayerTime) {
      currentPrayer = i === 0 ? 'Fajr' : prayerTimes[i - 1].name;
      break;
    }
  }

  // get upcoming prayer time
  let upcomingPrayer = '';
  let upcomingTime = '';
  for (let i = 0; i < prayerTimes.length; i++) {
    const prayerTime = new Date(`2023-03-07 ${prayerTimes[i].time}`);
    if (now < prayerTime) {
      upcomingPrayer = prayerTimes[i].name;
      upcomingTime = prayerTimes[i].time;
      break;
    }
  }

  // get Arabic date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-umalqura' };
  const arDate = now.toLocaleDateString('ar-SA', options);

  // update the HTML elements with the prayer times
  document.querySelector('.upcoming-time').textContent = upcomingTime.split(' ')[0];
  document.querySelector('.upcoming-am-pm').textContent = upcomingTime.split(' ')[1];
  document.querySelector('.wakth').textContent = upcomingPrayer;
  document.querySelector('.date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  document.querySelector('.ardate').textContent = arDate;


window.addEventListener('scroll', function() {
    if (window.scrollY > 70) {
      document.querySelector('#about').style.opacity = 0.09;
    }
   // else if(window.scrollY > 100) {
   //   document.querySelector('#about').style.opacity = 0.1;
    //}
    else {
      document.querySelector('#about').style.opacity = 1;
    }
  });

// loader
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});
