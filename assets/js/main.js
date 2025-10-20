document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });
  }

  const yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  renderFeaturedWeek();
  renderTrending();
  renderCategories();
  renderTimeline();
  bindNewsletterForms();
});

function createAppCard(app) {
  const card = document.createElement('article');
  card.className = 'app-card';
  card.innerHTML = `
    <div class="card-header">
      <span class="tag">${app.version}</span>
      <div class="rating" aria-label="Đánh giá ${app.rating} trên 5">
        <span>${app.rating.toFixed(1)}</span>
        <span>★</span>
      </div>
    </div>
    <h3>${app.name}</h3>
    <p>${app.shortDescription}</p>
    <ul class="meta">
      <li><span aria-hidden="true">⬇️</span>${app.downloads} lượt tải</li>
      <li><span aria-hidden="true">📁</span>${app.size}</li>
    </ul>
    <a class="button" href="app.html?id=${encodeURIComponent(app.id)}">Xem chi tiết</a>
  `;
  return card;
}

function renderTrending() {
  const container = document.querySelector('#trending-grid');
  if (!container) return;
  container.innerHTML = '';
  getTrendingApps(4).forEach((app) => {
    container.appendChild(createAppCard(app));
  });
}

function renderFeaturedWeek() {
  const list = document.querySelector('#featured-week');
  if (!list) return;
  const featured = getTrendingApps(3);
  list.innerHTML = featured
    .map(
      (app) => `
        <li>
          <span class="bullet"></span>
          <div>
            <strong>${app.name}</strong>
            <p>${app.shortDescription}</p>
          </div>
        </li>
      `
    )
    .join('');
}

function renderCategories() {
  const grid = document.querySelector('#category-grid');
  if (!grid) return;
  grid.innerHTML = APP_CATEGORIES.map(
    (category) => `
      <a class="category-card" href="catalog.html?category=${category.id}">
        <span class="icon" aria-hidden="true">${category.icon}</span>
        <div>
          <h3>${category.name}</h3>
          <p>${category.description}</p>
        </div>
      </a>
    `
  ).join('');
}

function renderTimeline() {
  const container = document.querySelector('#update-timeline');
  if (!container) return;
  container.innerHTML = UPDATE_LOG.slice(0, 6)
    .map(
      (log) => `
        <div class="timeline-item">
          <span class="timeline-dot"></span>
          <div>
            <p class="timeline-date">${formatDate(log.date)} · ${log.version}</p>
            <h3>${log.appName}</h3>
            <ul>
              ${log.changes.map((change) => `<li>${change}</li>`).join('')}
            </ul>
            <a class="link" href="app.html?id=${log.appId}">Xem chi tiết</a>
          </div>
        </div>
      `
    )
    .join('');
}

function bindNewsletterForms() {
  document.querySelectorAll('.cta-form, .footer-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) return;
      if (!input.value.trim()) {
        input.classList.add('error');
        input.focus();
        return;
      }
      input.classList.remove('error');
      form.classList.add('submitted');
      form.innerHTML = '<p class="success">🎉 Đăng ký thành công! Hãy kiểm tra email của bạn.</p>';
    });
  });
}
