document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const appId = params.get('id');
  const app = appId ? findAppById(appId) : null;

  const main = document.querySelector('#app-main');
  const empty = document.querySelector('#app-empty');

  if (!app) {
    empty.hidden = false;
    if (main) main.hidden = true;
    return;
  }

  if (main) main.hidden = false;
  if (empty) empty.hidden = true;

  document.title = `${app.name} | ModHub`;

  document.querySelector('#breadcrumb-name').textContent = app.name;
  document.querySelector('#app-name').textContent = app.name;
  document.querySelector('#app-description').textContent = app.description;

  const meta = document.querySelector('#app-meta');
  meta.innerHTML = `
    <span>Phiên bản ${app.version}</span>
    <span>${app.size}</span>
    <span>${app.requirements}</span>
    <span>${formatNumber(app.downloads)} lượt tải</span>
  `;

  const featureList = document.querySelector('#feature-list');
  featureList.innerHTML = app.features.map((feature) => `<li>${feature}</li>`).join('');

  const installSteps = document.querySelector('#install-steps');
  installSteps.innerHTML = app.installSteps
    .map((step) => `<li>${step}</li>`)
    .join('');

  const screenshotGrid = document.querySelector('#screenshot-grid');
  if (app.screenshots?.length) {
    screenshotGrid.innerHTML = app.screenshots
      .map((src, index) => `<figure><img src="${src}" alt="Ảnh chụp màn hình ${index + 1} của ${app.name}"></figure>`)
      .join('');
  } else {
    screenshotGrid.innerHTML = '<p>Chưa có ảnh chụp cho ứng dụng này.</p>';
  }

  const changelogContainer = document.querySelector('#changelog');
  changelogContainer.classList.add('timeline');
  changelogContainer.innerHTML = app.changelog
    .map(
      (entry) => `
        <article class="timeline-item">
          <span class="timeline-dot"></span>
          <div>
            <p class="timeline-date">${formatDate(entry.date)} · ${entry.version}</p>
            <ul>${entry.changes.map((change) => `<li>${change}</li>`).join('')}</ul>
          </div>
        </article>
      `
    )
    .join('');

  const downloadList = document.querySelector('#download-list');
  downloadList.innerHTML = app.downloadLinks
    .map((link) => `<li><a href="${link.url}" target="_blank" rel="noopener">${link.label}<span>${link.mirror}</span></a></li>`)
    .join('');

  const infoList = document.querySelector('#info-list');
  infoList.innerHTML = `
    <li>Thể loại: ${APP_CATEGORIES.find((cat) => cat.id === app.category)?.name || 'Không xác định'}</li>
    <li>Cập nhật: ${formatDate(app.updatedAt)}</li>
    <li>Đánh giá: ${app.rating.toFixed(1)} / 5</li>
    <li>Tags: ${app.tags.join(', ')}</li>
  `;

  const relatedContainer = document.querySelector('#related-list');
  const relatedApps = APPS.filter((item) => item.id !== app.id && item.category === app.category).slice(0, 3);

  relatedContainer.innerHTML = relatedApps.length
    ? relatedApps
        .map(
          (related) => `
            <div class="related-item">
              <a class="link" href="app.html?id=${related.id}">${related.name}</a>
              <span>${related.shortDescription}</span>
            </div>
          `
        )
        .join('')
    : '<p>Đang cập nhật thêm ứng dụng liên quan.</p>';
});
