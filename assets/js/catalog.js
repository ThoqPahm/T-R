document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(window.location.href);
  const searchInput = document.querySelector('#search');
  const categorySelect = document.querySelector('#category');
  const resultCount = document.querySelector('#result-count');
  const catalogGrid = document.querySelector('#catalog-grid');
  const emptyState = document.querySelector('#catalog-empty');
  const form = document.querySelector('#filter-form');

  if (!searchInput || !categorySelect || !resultCount || !catalogGrid || !emptyState) {
    return;
  }

  APP_CATEGORIES.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });

  const initialKeyword = url.searchParams.get('q') || '';
  const initialCategory = url.searchParams.get('category') || 'all';

  searchInput.value = initialKeyword;
  categorySelect.value = initialCategory;

  function updateResults() {
    const keyword = searchInput.value;
    const category = categorySelect.value;

    const results = searchApps(keyword, category);
    catalogGrid.innerHTML = '';

    if (!results.length) {
      emptyState.hidden = false;
      resultCount.textContent = '0';
      return;
    }

    emptyState.hidden = true;
    resultCount.textContent = formatNumber(results.length);

    results.forEach((app) => {
      catalogGrid.appendChild(createAppCard(app));
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const keyword = searchInput.value.trim();
    const category = categorySelect.value;

    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (category && category !== 'all') params.set('category', category);

    const newUrl = `${window.location.pathname}${params.toString() ? `?${params}` : ''}`;
    window.history.replaceState({}, '', newUrl);
    updateResults();
  });

  updateResults();
});
