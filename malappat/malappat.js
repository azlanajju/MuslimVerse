const surahs = [
  { name: 'محي الدين مالا', link: './malapats/muhyuddinmala.html', tags: ['muh', 'fatiha','fathiha']},
  { name: '1. الفَاتِحَة', link: './surahs/01fathiha.html', aya: 7 ,tags: ['alfatiha', 'fatiha','fathiha']},
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
      yaseen.innerHTML = surah.name + "<br>" ;
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
