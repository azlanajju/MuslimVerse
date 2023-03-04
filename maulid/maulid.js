  const searchBar = document.getElementById("search-bar");
  const placeholders = ["Search 'manqoos maulid'", "Search 'badr maulid'"];
  let i = 0;

  setInterval(() => {
    searchBar.setAttribute("placeholder", placeholders[i]);
    i = (i + 1) % placeholders.length;
  }, 2000);
