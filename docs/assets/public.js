// Local-only history filtering. No requests, analytics or third-party code.
const search = document.querySelector('#history-search');
if (search) {
  const entries = [...document.querySelectorAll('.history-entry')];
  const count = document.querySelector('#history-count');
  const filter = () => {
    let matches = 0;
    for (const entry of entries) {
      entry.hidden = !entry.textContent.toLowerCase().includes(search.value.toLowerCase());
      if (!entry.hidden) matches++;
    }
    count.textContent = `${matches} matching history entries`;
  };
  search.addEventListener('input', filter);
  filter();
}
