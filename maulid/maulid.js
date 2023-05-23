const maulids = [
  { name: '1. منقوص المولد', link: './manqoosMaulid/index.html', tags: ['manqoos', 'mankus', 'mankoos'] },
  { name: '2. مولد  بدر', link: './maulid/badr.html', tags: ['badar', 'badr'] },
];

function filterMaulids(searchText) {بدر
  return maulids.filter(maulid => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const lowerCaseMaulidName = maulid.name.toLowerCase();
    const tags = maulid.tags || [];

    // Check if the search text is a partial match for the maulid name or any of its tags
    return lowerCaseMaulidName.includes(lowerCaseSearchText) || tags.some(tag => tag.includes(lowerCaseSearchText));
  });
}

function renderMaulids(maulids) {
  const container = document.getElementById('container');
  container.innerHTML = '';
  for (const maulid of maulids) {
    const maulidElement = document.createElement('div');
    maulidElement.className = 'maulid';
    maulidElement.innerHTML = maulid.name;
    maulidElement.onclick = function () {
      window.location = maulid.link;
    };
    container.appendChild(maulidElement);
  }
}

const searchBar = document.getElementById('search-bar');
const placeholders = ["Search 'manqoos maulid'", "Search 'badr maulid'"];
let i = 0;

setInterval(() => {
  searchBar.setAttribute('placeholder', placeholders[i]);
  i = (i + 1) % placeholders.length;
}, 2000);

searchBar.addEventListener('input', function (event) {
  const searchText = event.target.value.trim();
  const filteredMaulids = filterMaulids(searchText);
  renderMaulids(filteredMaulids);
});

renderMaulids(maulids);
