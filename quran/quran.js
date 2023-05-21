const surahs = [
    { name: '1. الفَاتِحَة', link: './surahs/01fathiha.html', aya: 7 ,tags: ['alfatiha', 'fatiha','fathiha']},
    { name: '2. البَقَرَة', link: './surahs/02baqarah.html', aya: 286 ,tags: ['albaqarah', 'baqarah','baqara','bakara']},
    { name: '3. آل عِمرَان', link: './surahs/03imran.html', aya: 200 ,tags: ['alimraan', 'imraan','imran']},
    { name: '4. النِّسَاء', link: './surahs/04nisa.html', aya: 176 ,tags: ['alnnisaa', 'annisa','nisa']},
    { name: '5. المَائدة', link: './surahs/05maida.html', aya: 120 ,tags: ['almaaida', 'maaida','maidah']},
    { name: '6. الأنعَام', link: './surahs/06anam.html', aya: 165 ,tags: ['alanaam', 'anaam','alanam','anam']},
    { name: '7. الأعرَاف', link: './surahs/07aaraf.html', aya: 206 ,tags: ['alaraaf', 'alaraf','araaf','araf', 'aaraf']},
    { name: '8. الأنفَال', link: './surahs/08anfal.html', aya: 75 ,tags: ['alanfaal', 'alanfal','anfaal','anfal']},
    { name: '9. التوبَة', link: './surahs/09tawba.html', aya: 129 ,tags: ['attawba', 'altaubah','taubah','tawba']},
    { name: '10. يُونس', link: './surahs/10yunus.html', aya: 109 ,tags: ['yunus']},
    { name: '11. هُود', link: './surahs/11hudh.html', aya: 123 ,tags: ['hud','hudh','hood']},
    { name: '12. يُوسُف', link: './surahs/12yusuf.html', aya: 111 ,tags: ['yusuf']},
    { name: '13. الرَّعْد', link: './surahs/13arrad.html', aya: 43 ,tags: ['arrad','arraad','raad','raadh']},
    { name: '14. إبراهِيم', link: './surahs/14ibrahim.html', aya: 52 ,tags: ['ibrahim']},
    { name: '15. الحِجْر', link: './surahs/15hijr.html', aya: 99 ,tags: ['alhijr', 'hijr','alhejr','hejr']},
    { name: '16. النَّحْل', link: './surahs/16nafl.html', aya: 128 ,tags: ['annahl', 'nahl','nal']},
    { name: '17. الإسْرَاء', link: './surahs/17israa.html', aya: 111 ,tags: ['alisraa', 'alisra','israa','isra']},
    { name: '18. الكهْف', link: './surahs/18kahf.html', aya: 110 ,tags: ['alkahf', 'kahf']},
    { name: '19. مَريَم', link: './surahs/19maryam.html', aya: 98 ,tags: ['maryam']},
    { name: '20. طه', link: './surahs/20taaha.html', aya: 135 ,tags: ['taahaa', 'taha']},
    { name: '21. الأنبيَاء', link: './surahs/21anbiyaa.html', aya: 112 ,tags: ['alanbiyaa', 'anbiyaa','anbiya']},
    { name: '22. الحَج', link: './surahs/22hajj.html', aya: 78 ,tags: ['alhajj', 'hajj']},
    { name: '23. المُؤمنون', link: './surahs/23muminoon.html', aya: 118 ,tags: ['almuminoon','almuminun','muminoon','muminun']},
    { name: '24. النُّور', link: './surahs/24noor.html', aya: 64 ,tags: ['annoor', 'noor','nur','annur']},
    { name: '25. الفُرْقان', link: './surahs/25furqaan.html', aya: 77 ,tags: ['alfurqaan', 'alfurqan','furqaan','furqan']},
    { name: '26. الشُّعَرَاء', link: './surahs/26shuara.html', aya: 227 ,tags: ['ashshuara', 'shuara','shuaraa']},
    { name: '27. النَّمْل', link: './surahs/27naml.html', aya: 93 ,tags: ['annaml', 'naml']},
    { name: '28. القَصَص', link: './surahs/28qasas.html', aya: 88 ,tags: ['alqasas', 'qasas']},
    { name: '29. العَنكبوت', link: './surahs/29ankaboot.html', aya: 69 ,tags: ['alankaboot', 'alankabut','ankaboot','ankabut']},
    { name: '30. الرُّوم', link: './surahs/30room.html', aya: 60 ,tags: ['arroom', 'arrum','room','rum']},
    { name: '31. لقمَان', link: './surahs/31luqman.html', aya: 34 ,tags: ['luqman']},
    { name: '32. السَّجدَة', link: './surahs/32sajda.html', aya: 30 ,tags: ['assajda', 'sajda']},
    { name: '33. الأحزَاب', link: './surahs/33ahzaab.html', aya: 73 ,tags: ['alahzaab', 'ahzaab','ahzab']},
    { name: '34. سَبَأ', link: './surahs/34saba.html', aya: 54 ,tags: ['saba']},
    { name: '35. فَاطِر', link: './surahs/35faatir.html', aya: 45 ,tags: ['faatir', 'fatir']},
    { name: '36. يس', link: '/surahs/36yaseen.html', aya: 83 ,tags: ['yaseen', 'yasin']},
    { name: '37. الصَّافات', link: './surahs/37saaffat.html', aya: 182 ,tags: ['assaaffaat', 'saaffaat','saffat']},
    { name: '38. ص', link: './surahs/38saad.html', aya: 88 ,tags: ['saad']},
    { name: '39. الزُّمَر', link: './surahs/39zumar.html', aya: 75 ,tags: ['azzumar', 'zumar']},
    { name: '40. غَافِر', link: './surahs/40ghafir.html', aya: 85 ,tags: ['alghaafir', 'ghaafir','ghafir']},
    { name: '41. فُصِّلَتْ', link: './surahs/41fussilat.html', aya: 54 ,tags: ['fussilat']},
    { name: '42. الشُّورَى', link: './surahs/42shura.html', aya: 53 ,tags: ['ashshura', 'shura']},
    { name: '43. الزُّخْرُف', link: './surahs/43zukhrif.html', aya: 89 ,tags: ['azzukhruf', 'zukhruf']},
    { name: '44. الدُّخان', link: './surahs/44dukhan.html', aya: 59 ,tags: ['addukhaan', 'dukhan','dukhaan']},
    { name: '45. الجاثِية', link: './surahs/45jathiya.html', aya: 37 ,tags: ['aljaathiya', 'jathiya']},
    { name: '46. الأحقاف', link: './surahs/46ahqaf.html', aya: 35 ,tags: ['alahqaf', 'ahqaf']},
    { name: '47. مُحَمّد', link: './surahs/47muhammad.html', aya: 38 ,tags: ['muhammad']},
    { name: '48. الفَتْح', link: './surahs/48fath.html', aya: 29 ,tags: ['alfath', 'fath']},
    { name: '49. الحُجُرات', link: './surahs/49hujuraat.html', aya: 18 ,tags: ['alhujuraat', 'hujuraat']},
    { name: '50. ق', link: './surahs/50qaaf.html', aya: 45 ,tags: ['qaaf', 'qaf']},
    { name: '51. الذَّاريَات', link: './surahs/51dhariyat.html', aya: 60 ,tags: ['adhdhaariyat', 'dhaariyat','dhariyat']},
    { name: '52. الطُّور', link: './surahs/52tur.html', aya: 49 ,tags: ['attur', 'tur']},
    { name: '53. النَّجْم', link: './surahs/53najm.html', aya: 62 ,tags: ['annajm', 'najm']},
    { name: '54. القَمَر', link: './surahs/54.html', aya: 55 ,tags: ['alqamar', 'qamar']},
    { name: '55. الرَّحمن', link: './surahs/55rahmaan.html', aya: 78 ,tags: ['arrahmaan', 'rahmaan','rahman']},
    { name: '56. الواقِعَة', link: './surahs/56waaqia.html', aya: 96 ,tags: ['alwaaqia', 'waaqia','waqia']},
    { name: '57. الحَديد', link: './surahs/57hadid.html', aya: 29 ,tags: ['alhadid', 'hadid']},
    { name: '58. المُجادَلة', link: './surahs/58mujaadila.html', aya: 22 ,tags: ['almujaadila', 'mujaadila','mujadila']},
    { name: '59. الحَشْر', link: './surahs/59hashr.html', aya: 24 ,tags: ['alhashr', 'hashr']},
    { name: '60. المُمتَحَنة', link: './surahs/60mumthana.html', aya: 13 ,tags: ['almumtahana', 'mumtahana']},
    { name: '61. الصَّف', link: './surahs/61saff.html', aya: 14 ,tags: ['assaff', 'saff']},
    { name: '62. الجُّمُعة', link: './surahs/62jumua.html', aya: 11 ,tags: ['aljumua', 'jumua']},
    { name: '63. المُنافِقُون', link: './surahs/63munafiqoon.html', aya: 11 ,tags: ['almunaafiqoon', 'munaafiqoon','munafiqoon']},
    { name: '64. التَّغابُن', link: './surahs/64taghabun.html', aya: 18 ,tags: ['attaghaabun', 'taghaabun','taghabun']},
    { name: '65. الطَّلاق', link: './surahs/65talaq.html', aya: 12 ,tags: ['attalaaq', 'talaaq','talaq']},
    { name: '66. التَّحْريم', link: './surahs/66tahrim.html', aya: 12 ,tags: ['attahrim', 'tahrim']},
    { name: '67. المُلْك', link: './surahs/67mulk.html', aya: 30 ,tags: ['almulk', 'mulk']},
    { name: '68. القَلـََم', link: './surahs/68qalam.html', aya: 52 ,tags: ['alqalam', 'qalam']},
    { name: '69. الحَاقّـَة', link: './surahs/69haaqqa.html', aya: 52 ,tags: ['alhaaqqa', 'haaqqa']},
    { name: '70. المَعارِج', link: '/surahs/70maarij.html', aya: 44 ,tags: ['almaaarij', 'almaarij','maarij']},
    { name: '71. نُوح', link: '/surahs/71nooh.html', aya: 28 ,tags: ['nooh', 'noah','nuh']},
    { name: '72. الجِنّ', link: './surahs/72jinn.html', aya: 28 ,tags: ['aljinn', 'jinn']},
    { name: '73. المُزَّمّـِل', link: './surahs/73muzzammil.html', aya: 20 ,tags: ['almuzzammil', 'muzzammil']},
    { name: '74. المُدَّثــِّر', link: './surahs/74muddathir.html', aya: 56 ,tags: ['almuddaththir', 'muddaththir','muddathir']},
    { name: '75. القِيامَة', link: './surahs/75qiyamah.html', aya: 40 ,tags: ['alqiyaama', 'alqiyamah','qiyaama','qiyamah']},
    { name: '76. الإنسان', link: './surahs/76insaan.html', aya: 31 ,tags: ['alinsaan', 'insaan']},
    { name: '77. المُرسَلات', link: './surahs/77mursalat.html', aya: 50 ,tags: ['almursalaat', 'almursalat','mursalat']},
    { name: '78. النـَّبأ', link: './surahs/78naba.html', aya: 40 ,tags: ['alnnaba', 'naba']},
    { name: '79. النـّازِعات', link: './surahs/79naazilat.html', aya: 46 ,tags: ['annaaziaat', 'naaziaat','naziat']},
    { name: '80. عَبَس', link: './surahs/80abasa.html', aya: 42 ,tags: ['abasa']},
    { name: '81. التـَّكْوير', link: './surahs/81takwir.html', aya: 29 ,tags: ['attakwir', 'takwir','takweer']},
    { name: '82. الإنفِطار', link: './surahs/82infitar.html', aya: 19 ,tags: ['alinfitaar', 'infitaar','infitar']},
    { name: '83. المُطـَفِّفين', link: './surahs/83mutaffifin.html', aya: 36 ,tags: ['almutaffifin', 'mutaffifin','mutafifeen']},
    { name: '84. الإنشِقاق', link: './surahs/84.html', aya: 25 ,tags: ['alinshiqaaq', 'inshiqaaq','inshiqaq']},
    { name: '85. البُروج', link: './surahs/85burooj.html', aya: 22 ,tags: ['alburooj', 'burooj','buruj']},
    { name: '86. الطّارق', link: './surahs/86tariq.html', aya: 17 ,tags: ['altaariq', 'taariq','tariq','taarik','tarik','tareeq','taareek']},
    { name: '87. الأعلی', link: './surahs/87alaa.html', aya: 19 ,tags: ['alalaa', 'alaa','ala']},
    { name: '88. الغاشِيَة', link: './surahs/88ghaasiya.html', aya: 26 ,tags: ['alghaashiya', 'ghaashiya','ghashiya']},
    { name: '89. الفَجْر', link: './surahs/89fajr.html', aya: 30 ,tags: ['alfajr', 'fajr']},
    { name: '90. البَـلـَد', link: './surahs/90balad.html', aya: 20 ,tags: ['albalad', 'balad']},
    { name: '91. الشــَّمْس', link: './surahs/91shams.html', aya: 15 ,tags: ['ashshams', 'shams']},
    { name: '92. اللـَّيل', link: './surahs/92lail.html', aya: 21 ,tags: ['allail', 'lail','allayl']},
    { name: '93. الضُّحی', link: './surahs/93dhuhaa.html', aya: 11 ,tags: ['addhuhaa', 'dhuhaa','duhaa']},
    { name: '94. الشَّرْح', link: './surahs/94sharh.html', aya: 8 ,tags: ['ashsharh', 'sharh']},
    { name: '95. التـِّين', link: './surahs/95atteen.html', aya: 8 ,tags: ['attin', 'atteen']},
    { name: '96. العَلـَق', link: './surahs/96alak.html', aya: 19 ,tags: ['alalaq', 'alalak']},
    { name: '97. القـَدر', link: './surahs/97qadr.html', aya: 5 ,tags: ['alqadr', 'qadr','kadr']},
    { name: '98. البَيِّنَة', link: './surahs/98bayyinah.html', aya: 8 ,tags: ['albayyina', 'albayyinah','bayyinah']},
    { name: '99. الزلزَلة', link: './surahs/99zalzalah.html', aya: 8 ,tags: ['azzalzala', 'zalzala','zalzalah']},
    { name: '100. العَادِيات', link: './surahs/100adiyath.html', aya: 11 ,tags: ['alaadiyaat', 'aadiyaat','aadiyaath','adiyath','aadiyath','adiyaath']},
    { name: '101. القارِعَة', link: './surahs/101qaariah.html', aya: 11 ,tags: ['alqaaria', 'alqaariya','qaariah']},
    { name: '102. التَكاثـُر', link: './surahs/102thakasur.html', aya: 8 ,tags: ['attakaathur', 'takathur','taqathur','thakasur']},
    { name: '103. العَصْر', link: './surahs/103asr.html', aya: 3 ,tags: ['alasr', 'asr']},
    { name: '104. الهُمَزَة', link: './surahs/104humaza.html', aya: 9 ,tags: ['alhumaza', 'humaza','humazah']},
    { name: '105. الفِيل', link: './surahs/105feel.html', aya: 5 ,tags: ['alfil', 'fil','feel']},
    { name: '106. قـُرَيْش', link: './surahs/106quraish.html', aya: 4 ,tags: ['quraish', 'kuraish','khuraish']},
    { name: '107. المَاعُون', link: './surahs/107maaoon.html', aya: 7 ,tags: ['almaaun', 'maun','maaoon','almaaoon']},
    { name: '108. الكَوْثَر', link: './surahs/108kausar.html', aya: 3 ,tags: ['alkawthar', 'kawthar','kavthar','kousar','kausar']},
    { name: '109. الكَافِرُون', link: './surahs/109kafirun.html', aya: 6 ,tags: ['alkaafiroon', 'kaafiroon','kaafirun','kafirun']},
    { name: '110. النـَّصر', link: './surahs/110nasr.html', aya: 3 ,tags: ['annasr', 'nasr']},
    { name: '111. المَسَد', link: './surahs/111masad.html', aya: 5 ,tags: ['almasad', 'masad']},
    { name: '112. الإخْلَاص', link: './surahs/112ikhlas.html', aya: 4 ,tags: ['aliklaas', 'iklaas','ikhlaas','ikhlas']},
    { name: '113. الفَلَق', link: './surahs/113falak.html', aya: 5 ,tags: ['aalfalaq', 'falaq','falak']},
    { name: '114. النَّاس', link: './surahs/114naas.html', aya: 6 ,tags: ['annaas', 'naas','nas']},
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



