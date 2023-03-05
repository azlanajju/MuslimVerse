const surahs = [
    { name: '1. الفَاتِحَة', link: './surahs/01fathiha.html', aya: 7 ,tags: ['alfatiha', 'fatiha','fathiha']},
    { name: '2. البَقَرَة', link: './surahs/02baqarah.html', aya: 286 ,tags: ['albaqarah', 'baqarah','baqara','bakara']},
    { name: '3. آل عِمرَان', link: '/quran/al-mulk.html', aya: 200 ,tags: ['alimraan', 'imraan','imran']},
    { name: '4. النِّسَاء', link: '/quran/al-mulk.html', aya: 176 ,tags: ['alnnisaa', 'annisa','nisa']},
    { name: '5. المَائدة', link: '/quran/al-mulk.html', aya: 120 ,tags: ['almaaida', 'maaida','maidah']},
    { name: '6. الأنعَام', link: '/quran/al-mulk.html', aya: 165 ,tags: ['alanaam', 'anaam','alanam','anam']},
    { name: '7. الأعرَاف', link: '/quran/al-mulk.html', aya: 206 ,tags: ['alaraaf', 'alaraf','araaf','araf']},
    { name: '8. الأنفَال', link: '/quran/al-mulk.html', aya: 75 ,tags: ['alanfaal', 'alanfal','anfaal','anfal']},
    { name: '9. التوبَة', link: '/quran/al-mulk.html', aya: 129 ,tags: ['attawba', 'altaubah','taubah','tawba']},
    { name: '10. يُونس', link: '/quran/al-mulk.html', aya: 109 ,tags: ['yunus']},
    { name: '11. هُود', link: '/quran/al-mulk.html', aya: 123 ,tags: ['hud','hudh']},
    { name: '12. يُوسُف', link: '/quran/al-mulk.html', aya: 111 ,tags: ['yusuf']},
    { name: '13. الرَّعْد', link: '/quran/al-mulk.html', aya: 43 ,tags: ['arrad','arraad','raad','raadh']},
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
    { name: '33. الأحزَاب', link: '/quran/al-mulk.html', aya: 73 ,tags: ['alahzaab', 'ahzaab','ahzab']},
    { name: '34. سَبَأ', link: '/quran/al-mulk.html', aya: 54 ,tags: ['saba']},
    { name: '35. فَاطِر', link: '/quran/al-mulk.html', aya: 45 ,tags: ['faatir', 'fatir']},
    { name: '36. يس', link: '/quran/yaseen.html', aya: 83 ,tags: ['yaseen', 'yasin']},
    { name: '37. الصَّافات', link: '/quran/al-mulk.html', aya: 182 ,tags: ['assaaffaat', 'saaffaat','saffat']},
    { name: '38. ص', link: '/quran/al-mulk.html', aya: 88 ,tags: ['saad']},
    { name: '39. الزُّمَر', link: '/quran/al-mulk.html', aya: 75 ,tags: ['azzumar', 'zumar']},
    { name: '40. غَافِر', link: '/quran/al-mulk.html', aya: 85 ,tags: ['alghaafir', 'ghaafir','ghafir']},
    { name: '41. فُصِّلَتْ', link: '/quran/al-mulk.html', aya: 54 ,tags: ['fussilat']},
    { name: '42. الشُّورَى', link: '/quran/al-mulk.html', aya: 53 ,tags: ['ashshura', 'shura']},
    { name: '43. الزُّخْرُف', link: '/quran/al-mulk.html', aya: 89 ,tags: ['azzukhruf', 'zukhruf']},
    { name: '44. الدُّخان', link: '/quran/al-mulk.html', aya: 59 ,tags: ['addukhaan', 'dukhan','dukhaan']},
    { name: '45. الجاثِية', link: '/quran/al-mulk.html', aya: 37 ,tags: ['aljaathiya', 'jathiya']},
    { name: '46. الأحقاف', link: '/quran/al-mulk.html', aya: 35 ,tags: ['alahqaf', 'ahqaf']},
    { name: '47. مُحَمّد', link: '/quran/al-mulk.html', aya: 38 ,tags: ['muhammad']},
    { name: '48. الفَتْح', link: '/quran/al-mulk.html', aya: 29 ,tags: ['alfath', 'fath']},
    { name: '49. الحُجُرات', link: '/quran/al-mulk.html', aya: 18 ,tags: ['alhujuraat', 'hujuraat']},
    { name: '50. ق', link: '/quran/al-mulk.html', aya: 45 ,tags: ['qaaf', 'qaf']},
    { name: '51. الذَّاريَات', link: '/quran/al-mulk.html', aya: 60 ,tags: ['adhdhaariyat', 'dhaariyat','dhariyat']},
    { name: '52. الطُّور', link: '/quran/al-mulk.html', aya: 49 ,tags: ['attur', 'tur']},
    { name: '53. النَّجْم', link: '/quran/al-mulk.html', aya: 62 ,tags: ['annajm', 'najm']},
    { name: '54. القَمَر', link: '/quran/al-mulk.html', aya: 55 ,tags: ['alqamar', 'qamar']},
    { name: '55. الرَّحمن', link: '/quran/al-mulk.html', aya: 78 ,tags: ['arrahmaan', 'rahmaan','rahman']},
    { name: '56. الواقِعَة', link: '/quran/al-mulk.html', aya: 96 ,tags: ['alwaaqia', 'waaqia','waqia']},
    { name: '57. الحَديد', link: '/quran/al-mulk.html', aya: 29 ,tags: ['alhadid', 'hadid']},
    { name: '58. المُجادَلة', link: '/quran/al-mulk.html', aya: 22 ,tags: ['almujaadila', 'mujaadila','mujadila']},
    { name: '59. الحَشْر', link: '/quran/al-mulk.html', aya: 24 ,tags: ['alhashr', 'hashr']},
    { name: '60. المُمتَحَنة', link: '/quran/al-mulk.html', aya: 13 ,tags: ['almumtahana', 'mumtahana']},
    { name: '61. الصَّف', link: '/quran/al-mulk.html', aya: 14 ,tags: ['assaff', 'saff']},
    { name: '62. الجُّمُعة', link: '/quran/al-mulk.html', aya: 11 ,tags: ['aljumua', 'jumua']},
    { name: '63. المُنافِقُون', link: '/quran/al-mulk.html', aya: 11 ,tags: ['almunaafiqoon', 'munaafiqoon','munafiqoon']},
    { name: '64. التَّغابُن', link: '/quran/al-mulk.html', aya: 18 ,tags: ['attaghaabun', 'taghaabun','taghabun']},
    { name: '65. الطَّلاق', link: '/quran/al-mulk.html', aya: 12 ,tags: ['attalaaq', 'talaaq','talaq']},
    { name: '66. التَّحْريم', link: '/quran/al-mulk.html', aya: 12 ,tags: ['attahrim', 'tahrim']},
    { name: '67. المُلْك', link: '/quran/al-mulk.html', aya: 30 ,tags: ['almulk', 'mulk']},
    { name: '68. القَلـََم', link: '/quran/al-mulk.html', aya: 52 ,tags: ['alqalam', 'qalam']},
    { name: '69. الحَاقّـَة', link: '/quran/al-mulk.html', aya: 52 ,tags: ['alhaaqqa', 'haaqqa']},
    { name: '70. المَعارِج', link: '/quran/yaseen.html', aya: 44 ,tags: ['almaaarij', 'almaarij','maarij']},
    { name: '71. نُوح', link: '/quran/ar-rahman.html', aya: 28 ,tags: ['nooh', 'noah','nuh']},
    { name: '72. الجِنّ', link: '/quran/al-mulk.html', aya: 28 ,tags: ['aljinn', 'jinn']},
    { name: '73. المُزَّمّـِل', link: '/quran/al-mulk.html', aya: 20 ,tags: ['almuzzammil', 'muzzammil']},
    { name: '74. المُدَّثــِّر', link: '/quran/al-mulk.html', aya: 56 ,tags: ['almuddaththir', 'muddaththir','muddathir']},
    { name: '75. القِيامَة', link: '/quran/al-mulk.html', aya: 40 ,tags: ['alqiyaama', 'alqiyamah','qiyaama','qiyamah']},
    { name: '76. الإنسان', link: '/quran/al-mulk.html', aya: 31 ,tags: ['alinsaan', 'insaan']},
    { name: '77. المُرسَلات', link: '/quran/al-mulk.html', aya: 50 ,tags: ['almursalaat', 'almursalat','mursalat']},
    { name: '78. النـَّبأ', link: '/quran/al-mulk.html', aya: 40 ,tags: ['alnnaba', 'naba']},
    { name: '79. النـّازِعات', link: '/quran/al-mulk.html', aya: 46 ,tags: ['annaaziaat', 'naaziaat','naziat']},
    { name: '80. عَبَس', link: '/quran/al-mulk.html', aya: 42 ,tags: ['abasa']},
    { name: '81. التـَّكْوير', link: '/quran/al-mulk.html', aya: 29 ,tags: ['attakwir', 'takwir','takweer']},
    { name: '82. الإنفِطار', link: '/quran/al-mulk.html', aya: 19 ,tags: ['alinfitaar', 'infitaar','infitar']},
    { name: '83. المُطـَفِّفين', link: '/quran/al-mulk.html', aya: 36 ,tags: ['almutaffifin', 'mutaffifin','mutafifeen']},
    { name: '84. الإنشِقاق', link: '/quran/al-mulk.html', aya: 25 ,tags: ['alinshiqaaq', 'inshiqaaq','inshiqaq']},
    { name: '85. البُروج', link: '/quran/al-mulk.html', aya: 22 ,tags: ['alburooj', 'burooj','buruj']},
    { name: '86. الطّارق', link: '/quran/al-mulk.html', aya: 17 ,tags: ['altaariq', 'taariq','tariq','taarik','tarik','tareeq','taareek']},
    { name: '87. الأعلی', link: '/quran/al-mulk.html', aya: 19 ,tags: ['alalaa', 'alaa','ala']},
    { name: '88. الغاشِيَة', link: '/quran/al-mulk.html', aya: 26 ,tags: ['alghaashiya', 'ghaashiya','ghashiya']},
    { name: '89. الفَجْر', link: '/quran/al-mulk.html', aya: 30 ,tags: ['alfajr', 'fajr']},
    { name: '90. البَـلـَد', link: '/quran/al-mulk.html', aya: 20 ,tags: ['albalad', 'balad']},
    { name: '91. الشــَّمْس', link: '/quran/al-mulk.html', aya: 15 ,tags: ['ashshams', 'shams']},
    { name: '92. اللـَّيل', link: '/quran/al-mulk.html', aya: 21 ,tags: ['allail', 'lail','allayl']},
    { name: '93. الضُّحی', link: '/quran/al-mulk.html', aya: 11 ,tags: ['addhuhaa', 'dhuhaa','duhaa']},
    { name: '94. الشَّرْح', link: '/quran/al-mulk.html', aya: 8 ,tags: ['ashsharh', 'sharh']},
    { name: '95. التـِّين', link: '/quran/al-mulk.html', aya: 8 ,tags: ['attin', 'atteen']},
    { name: '96. العَلـَق', link: '/quran/al-mulk.html', aya: 19 ,tags: ['alalaq', 'alalak']},
    { name: '97. القـَدر', link: '/quran/al-mulk.html', aya: 5 ,tags: ['alqadr', 'qadr','kadr']},
    { name: '98. البَيِّنَة', link: '/quran/al-mulk.html', aya: 8 ,tags: ['albayyina', 'albayyinah','bayyinah']},
    { name: '99. الزلزَلة', link: '/quran/al-mulk.html', aya: 8 ,tags: ['azzalzala', 'zalzala','zalzalah']},
    { name: '100. العَادِيات', link: '/quran/al-mulk.html', aya: 11 ,tags: ['alaadiyaat', 'aadiyaat','aadiyaath','adiyath','aadiyath','adiyaath']},
    { name: '101. القارِعَة', link: '/quran/al-mulk.html', aya: 11 ,tags: ['alqaaria', 'alqaariya','qaariah']},
    { name: '102. التَكاثـُر', link: '/quran/al-mulk.html', aya: 8 ,tags: ['attakaathur', 'takathur','taqathur']},
    { name: '103. العَصْر', link: '/quran/al-mulk.html', aya: 3 ,tags: ['alasr', 'asr']},
    { name: '104. الهُمَزَة', link: '/quran/al-mulk.html', aya: 9 ,tags: ['alhumaza', 'humaza','humazah']},
    { name: '105. الفِيل', link: '/quran/yaseen.html', aya: 5 ,tags: ['alfil', 'fil','feel']},
    { name: '106. قـُرَيْش', link: '/quran/al-mulk.html', aya: 4 ,tags: ['quraish', 'kuraish','khuraish']},
    { name: '107. المَاعُون', link: '/quran/al-mulk.html', aya: 7 ,tags: ['almaaun', 'maun','maaoon','almaaoon']},
    { name: '108. الكَوْثَر', link: '/quran/al-mulk.html', aya: 3 ,tags: ['alkawthar', 'kawthar','kavthar']},
    { name: '109. الكَافِرُون', link: '/quran/al-mulk.html', aya: 6 ,tags: ['alkaafiroon', 'kaafiroon','kaafirun','kafirun']},
    { name: '110. النـَّصر', link: '/quran/al-mulk.html', aya: 3 ,tags: ['annasr', 'nasr']},
    { name: '111. المَسَد', link: '/quran/al-mulk.html', aya: 5 ,tags: ['almasad', 'masad']},
    { name: '112. الإخْلَاص', link: '/quran/al-mulk.html', aya: 4 ,tags: ['aliklaas', 'iklaas','ikhlaas','ikhlas']},
    { name: '113. الفَلَق', link: '/quran/al-mulk.html', aya: 5 ,tags: ['aalfalaq', 'falaq','falak']},
    { name: '114. النَّاس', link: '/quran/al-mulk.html', aya: 6 ,tags: ['annaas', 'naas','nas']},
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



