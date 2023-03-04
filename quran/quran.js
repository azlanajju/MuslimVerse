const surahs = [
    { name: '1. الفَاتِحَة', link: './surahs/01fathiha.html', aya: 7 ,tags: ['alfatiha', 'fatiha','fathiha']},
    { name: '2. البَقَرَة', link: './surahs/02baqarah.html', aya: 286 ,tags: ['albaqarah', 'baqarah','baqara']},
    { name: '3. آل عِمرَان', link: '/quran/al-mulk.html', aya: 200 ,tags: ['alimraan', 'imraan','imran']},
    { name: '4. النِّسَاء', link: '/quran/al-mulk.html', aya: 176 ,tags: ['alnnisaa', 'annisa','nisa']},
    { name: '5. المَائدة', link: '/quran/al-mulk.html', aya: 120 ,tags: ['almaaida', 'maaida','maidah']},
    { name: '6. الأنعَام', link: '/quran/al-mulk.html', aya: 165 ,tags: ['alanaam', 'anaam','alanam','anam']},
    { name: '7. الأعرَاف', link: '/quran/al-mulk.html', aya: 206 ,tags: ['alaraaf', 'alaraf','araaf','araf']},
    { name: '8. الأنفَال', link: '/quran/al-mulk.html', aya: 75 ,tags: ['alanfaal', 'alanfal','anfaal','anfal']},
    { name: '9. التوبَة', link: '/quran/al-mulk.html', aya: 129 ,tags: ['attawba', 'altaubah','taubah','tawba']},
    { name: '10. يُونس', link: '/quran/al-mulk.html', aya: 109 ,tags: ['yunus']},
    { name: '11. هُود', link: '/quran/al-mulk.html', aya: 123 ,tags: ['hud']},
    { name: '12. يُوسُف', link: '/quran/al-mulk.html', aya: 111 ,tags: ['yusuf']},
    { name: '13. الرَّعْد', link: '/quran/al-mulk.html', aya: 43 ,tags: ['arrad','arraad','raad']},
    { name: '14. إبراهِيم', link: '/quran/al-mulk.html', aya: 52 ,tags: ['ibrahim']},
    { name: '15. الحِجْر', link: '/quran/al-mulk.html', aya: 99 ,tags: ['alhijr', 'hijr','alhejr','hejr']},
    { name: '16. النَّحْل', link: '/quran/al-mulk.html', aya: 128 ,tags: ['annahl', 'nahl','nal']},
    { name: '17. الإسْرَاء', link: '/quran/al-mulk.html', aya: 111 ,tags: ['alisraa', 'alisra','israa','isra']},
    { name: '18. الكهْف', link: '/quran/al-mulk.html', aya: 110 ,tags: ['alkahf', 'kahf']},
    { name: '19. مَريَم', link: '/quran/al-mulk.html', aya: 98 ,tags: ['maryam']},
    { name: '20. طه', link: '/quran/al-mulk.html', aya: 135 ,tags: ['taahaa', 'taha']},
    { name: '21. الأنبيَاء', link: '/quran/al-mulk.html', aya: 112 ,tags: ['alanbiyaa', 'anbiyaa','anbiya']},
    { name: '22. الحَج', link: '/quran/al-mulk.html', aya: 78 ,tags: ['alhajj', 'hajj']},
    { name: '23. المُؤمنون', link: '/quran/al-mulk.html', aya: 118 ,tags: ['almuminoon','almuminun','muminoon','muminun']},
    { name: '24. النُّور', link: '/quran/al-mulk.html', aya: 64 ,tags: ['annoor', 'noor','nur','annur']},
    { name: '25. الفُرْقان', link: '/quran/al-mulk.html', aya: 77 ,tags: ['alfurqaan', 'alfurqan','furqaan','furqan']},
    { name: '26. الشُّعَرَاء', link: '/quran/al-mulk.html', aya: 227 ,tags: ['ashshuara', 'shuara','shuaraa']},
    { name: '27. النَّمْل', link: '/quran/al-mulk.html', aya: 93 ,tags: ['annaml', 'naml']},
    { name: '28. القَصَص', link: '/quran/al-mulk.html', aya: 88 ,tags: ['alqasas', 'qasas']},
    { name: '29. العَنكبوت', link: '/quran/al-mulk.html', aya: 69 ,tags: ['alankaboot', 'alankabut','ankaboot','ankabut']},
    { name: '30. الرُّوم', link: '/quran/al-mulk.html', aya: 60 ,tags: ['arroom', 'arrum','room','rum']},
    { name: '31. لقمَان', link: '/quran/al-mulk.html', aya: 34 ,tags: ['luqman']},
    { name: '32. السَّجدَة', link: '/quran/al-mulk.html', aya: 30 ,tags: ['assajda', 'sajda']},
    { name: '33. الأحزَاب', link: '/quran/al-mulk.html', aya: 73 },
    { name: '34. سَبَأ', link: '/quran/al-mulk.html', aya: 54 },
    { name: '35. فَاطِر', link: '/quran/al-mulk.html', aya: 45 },
    { name: '36. يس', link: '/quran/yaseen.html', aya: 83 },
    { name: '37. الصَّافات', link: '/quran/al-mulk.html', aya: 182 },
    { name: '38. ص', link: '/quran/al-mulk.html', aya: 88 },
    { name: '39. الزُّمَر', link: '/quran/al-mulk.html', aya: 75 },
    { name: '40. غَافِر', link: '/quran/al-mulk.html', aya: 85 },
    { name: '41. فُصِّلَتْ', link: '/quran/al-mulk.html', aya: 54 },
    { name: '42. الشُّورَى', link: '/quran/al-mulk.html', aya: 53 },
    { name: '43. الزُّخْرُف', link: '/quran/al-mulk.html', aya: 89 },
    { name: '44. الدُّخان', link: '/quran/al-mulk.html', aya: 59 },
    { name: '45. الجاثِية', link: '/quran/al-mulk.html', aya: 37 },
    { name: '46. الأحقاف', link: '/quran/al-mulk.html', aya: 35 },
    { name: '47. مُحَمّد', link: '/quran/al-mulk.html', aya: 38 },
    { name: '48. الفَتْح', link: '/quran/al-mulk.html', aya: 29 },
    { name: '49. الحُجُرات', link: '/quran/al-mulk.html', aya: 18 },
    { name: '50. ق', link: '/quran/al-mulk.html', aya: 45 },
    { name: '51. الذَّاريَات', link: '/quran/al-mulk.html', aya: 60 },
    { name: '52. الطُّور', link: '/quran/al-mulk.html', aya: 49 },
    { name: '53. النَّجْم', link: '/quran/al-mulk.html', aya: 62 },
    { name: '54. القَمَر', link: '/quran/al-mulk.html', aya: 55 },
    { name: '55. الرَّحمن', link: '/quran/al-mulk.html', aya: 78 },
    { name: '56. الواقِعَة', link: '/quran/al-mulk.html', aya: 96 },
    { name: '57. الحَديد', link: '/quran/al-mulk.html', aya: 29 },
    { name: '58. المُجادَلة', link: '/quran/al-mulk.html', aya: 22 },
    { name: '59. الحَشْر', link: '/quran/al-mulk.html', aya: 24 },
    { name: '60. المُمتَحَنة', link: '/quran/al-mulk.html', aya: 13 },
    { name: '61. الصَّف', link: '/quran/al-mulk.html', aya: 14 },
    { name: '62. الجُّمُعة', link: '/quran/al-mulk.html', aya: 11 },
    { name: '63. المُنافِقُون', link: '/quran/al-mulk.html', aya: 11 },
    { name: '64. التَّغابُن', link: '/quran/al-mulk.html', aya: 18 },
    { name: '65. الطَّلاق', link: '/quran/al-mulk.html', aya: 12 },
    { name: '66. التَّحْريم', link: '/quran/al-mulk.html', aya: 12 },
    { name: '67. المُلْك', link: '/quran/al-mulk.html', aya: 30 },
    { name: '68. القَلـََم', link: '/quran/al-mulk.html', aya: 52 },
    { name: '69. الحَاقّـَة', link: '/quran/al-mulk.html', aya: 52 },
    { name: '70. المَعارِج', link: '/quran/yaseen.html', aya: 44 },
    { name: '71. نُوح', link: '/quran/ar-rahman.html', aya: 28 },
    { name: '72. الجِنّ', link: '/quran/al-mulk.html', aya: 28 },
    { name: '73. المُزَّمّـِل', link: '/quran/al-mulk.html', aya: 20 },
    { name: '74. المُدَّثــِّر', link: '/quran/al-mulk.html', aya: 56 },
    { name: '75. القِيامَة', link: '/quran/al-mulk.html', aya: 40 },
    { name: '76. الإنسان', link: '/quran/al-mulk.html', aya: 31 },
    { name: '77. المُرسَلات', link: '/quran/al-mulk.html', aya: 50 },
    { name: '78. النـَّبأ', link: '/quran/al-mulk.html', aya: 40 },
    { name: '79. النـّازِعات', link: '/quran/al-mulk.html', aya: 46 },
    { name: '80. عَبَس', link: '/quran/al-mulk.html', aya: 42 },
    { name: '81. التـَّكْوير', link: '/quran/al-mulk.html', aya: 29 },
    { name: '82. الإنفِطار', link: '/quran/al-mulk.html', aya: 19 },
    { name: '83. المُطـَفِّفين', link: '/quran/al-mulk.html', aya: 36 },
    { name: '84. الإنشِقاق', link: '/quran/al-mulk.html', aya: 25 },
    { name: '85. البُروج', link: '/quran/al-mulk.html', aya: 22 },
    { name: '86. الطّارق', link: '/quran/al-mulk.html', aya: 17 },
    { name: '87. الأعلی', link: '/quran/al-mulk.html', aya: 19 },
    { name: '88. الغاشِيَة', link: '/quran/al-mulk.html', aya: 26 },
    { name: '89. الفَجْر', link: '/quran/al-mulk.html', aya: 30 },
    { name: '90. البَـلـَد', link: '/quran/al-mulk.html', aya: 20 },
    { name: '91. الشــَّمْس', link: '/quran/al-mulk.html', aya: 15 },
    { name: '92. اللـَّيل', link: '/quran/al-mulk.html', aya: 21 },
    { name: '93. الضُّحی', link: '/quran/al-mulk.html', aya: 11 },
    { name: '94. الشَّرْح', link: '/quran/al-mulk.html', aya: 8 },
    { name: '95. التـِّين', link: '/quran/al-mulk.html', aya: 8 },
    { name: '96. العَلـَق', link: '/quran/al-mulk.html', aya: 19 },
    { name: '97. القـَدر', link: '/quran/al-mulk.html', aya: 5 },
    { name: '98. البَيِّنَة', link: '/quran/al-mulk.html', aya: 8 },
    { name: '99. الزلزَلة', link: '/quran/al-mulk.html', aya: 8 },
    { name: '100. العَادِيات', link: '/quran/al-mulk.html', aya: 11 },
    { name: '101. القارِعَة', link: '/quran/al-mulk.html', aya: 11 },
    { name: '102. التَكاثـُر', link: '/quran/al-mulk.html', aya: 8 },
    { name: '103. العَصْر', link: '/quran/al-mulk.html', aya: 3 },
    { name: '104. الهُمَزَة', link: '/quran/al-mulk.html', aya: 9 },
    { name: '105. الفِيل', link: '/quran/yaseen.html', aya: 5 },
    { name: '106. قـُرَيْش', link: '/quran/al-mulk.html', aya: 4 },
    { name: '107. المَاعُون', link: '/quran/al-mulk.html', aya: 7 },
    { name: '108. الكَوْثَر', link: '/quran/al-mulk.html', aya: 3 },
    { name: '109. الكَافِرُون', link: '/quran/al-mulk.html', aya: 6 },
    { name: '110. النـَّصر', link: '/quran/al-mulk.html', aya: 3 },
    { name: '111. المَسَد', link: '/quran/al-mulk.html', aya: 5 },
    { name: '112. الإخْلَاص', link: '/quran/al-mulk.html', aya: 4 },
    { name: '113. الفَلَق', link: '/quran/al-mulk.html', aya: 5 },
    { name: '114. النَّاس', link: '/quran/al-mulk.html', aya: 6 },
];

function filterSurahs(searchText) {
    return surahs.filter(surah => {
      const lowerCaseSearchText = searchText.toLowerCase();
      const lowerCaseSurahName = surah.name.toLowerCase();
      const tags = surah.tags || [];

      // Check if the search text is a partial match for the surah name or any of its tags
      return lowerCaseSurahName.includes(lowerCaseSearchText) || tags.some(tag => tag.includes(lowerCaseSearchText));
    });
  }

  function renderSurahs(surahs) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (const surah of surahs) {
      const yaseen = document.createElement('div');
      yaseen.className = 'yaseen';
      yaseen.innerHTML = surah.name + "<br>" + surah.aya + " Ayahs";
      yaseen.onclick = function () {
        window.location = surah.link;
      };
      container.appendChild(yaseen);
    }
  }

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', function (event) {
    const searchText = event.target.value.trim();
    const filteredSurahs = filterSurahs(searchText);
   
renderSurahs(filteredSurahs);
});

renderSurahs(surahs);


// search animation 
  const searchBar = document.getElementById("search-input");
  const placeholders = ["Search eg: Kahf", "Search eg: Dukhan", "Search eg:Fathiha", "Search eg:Baqara", "Search eg:Anfal"];
  let i = 0;

  setInterval(() => {
    searchBar.setAttribute("placeholder", placeholders[i]);
    i = (i + 1) % placeholders.length;
  }, 2000);
