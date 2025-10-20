const APP_CATEGORIES = [
  {
    id: 'games-action',
    name: 'Game hành động',
    description: 'Nhập vai, bắn súng, sống sót với tài nguyên vô hạn.',
    icon: '🎮'
  },
  {
    id: 'games-sim',
    name: 'Game mô phỏng',
    description: 'Xây dựng thế giới riêng và mở khóa tính năng cao cấp.',
    icon: '🛠️'
  },
  {
    id: 'entertainment',
    name: 'Giải trí',
    description: 'Ứng dụng nghe nhạc, xem phim, nội dung không giới hạn.',
    icon: '🎬'
  },
  {
    id: 'productivity',
    name: 'Năng suất',
    description: 'Công cụ tối ưu hiệu suất, không quảng cáo, tính năng premium.',
    icon: '⚙️'
  },
  {
    id: 'tools',
    name: 'Tiện ích',
    description: 'Tiện ích mở rộng, tuỳ chỉnh điện thoại, bảo mật.',
    icon: '🧰'
  },
  {
    id: 'kids',
    name: 'Thiếu nhi',
    description: 'Ứng dụng học tập, giải trí an toàn cho trẻ em.',
    icon: '🧒'
  }
];

const APPS = [
  {
    id: 'shadow-fight-4',
    name: 'Shadow Fight 4 MOD',
    category: 'games-action',
    shortDescription: 'Chiến đấu đối kháng với tiền và năng lượng không giới hạn.',
    description: 'Shadow Fight 4 mang đến trải nghiệm chiến đấu đỉnh cao với đồ họa 3D tuyệt đẹp. Bản MOD mở khóa toàn bộ nhân vật, trang bị và cung cấp năng lượng vô hạn để bạn luyện combo không giới hạn.',
    version: 'v1.4.2',
    size: '148 MB',
    updatedAt: '2024-10-05',
    requirements: 'Android 8.0+',
    features: ['Vô hạn tiền & kim cương', 'Mở khóa toàn bộ skin', 'Menu MOD tùy chỉnh'],
    installSteps: ['Gỡ bản gốc (nếu có).', 'Cài đặt file APK MOD.', 'Đăng nhập tài khoản khách và thưởng thức.'],
    screenshots: ['assets/img/shadowfight-1.svg', 'assets/img/shadowfight-2.svg'],
    tags: ['PvP', 'Fighting', 'Offline'],
    downloads: '82.451',
    rating: 4.8,
    trending: true,
    changelog: [
      { version: '1.4.2', date: '2024-10-05', changes: ['Tối ưu menu MOD', 'Fix lỗi khởi động trên Android 14'] },
      { version: '1.4.0', date: '2024-09-18', changes: ['Cập nhật nhân vật mới', 'Thêm hiệu ứng ánh sáng'] }
    ],
    downloadLinks: [
      { label: 'Link tải nhanh', url: '#', mirror: 'Google Drive' },
      { label: 'Link dự phòng', url: '#', mirror: 'Mega.nz' }
    ]
  },
  {
    id: 'spotify-premium',
    name: 'Spotify Premium MOD',
    category: 'entertainment',
    shortDescription: 'Nghe nhạc không quảng cáo, tải playlist offline.',
    description: 'Bản mod Spotify mở khóa Premium với chất lượng âm thanh 320kbps, bỏ giới hạn chuyển bài và hỗ trợ tải ngoại tuyến không giới hạn.',
    version: 'v8.9.54',
    size: '42 MB',
    updatedAt: '2024-09-30',
    requirements: 'Android 7.0+',
    features: ['Không quảng cáo', 'Tải nhạc ngoại tuyến', 'Tùy chỉnh equalizer nâng cao'],
    installSteps: ['Gỡ bản Spotify gốc.', 'Cài đặt APK MOD.', 'Đăng nhập bằng tài khoản mới để tránh khóa.'],
    screenshots: ['assets/img/spotify-1.svg', 'assets/img/spotify-2.svg'],
    tags: ['Music', 'Streaming'],
    downloads: '205.778',
    rating: 4.9,
    trending: true,
    changelog: [
      { version: '8.9.54', date: '2024-09-30', changes: ['Tương thích Android 15', 'Thêm chủ đề tối Pitch Black'] },
      { version: '8.8.90', date: '2024-08-02', changes: ['Fix lỗi playlist không hiển thị', 'Cải thiện tốc độ tải nhạc'] }
    ],
    downloadLinks: [
      { label: 'Link tải chính', url: '#', mirror: 'Direct CDN' },
      { label: 'Bản cũ ổn định', url: '#', mirror: 'MediaFire' }
    ]
  },
  {
    id: 'minecraft-pe',
    name: 'Minecraft PE MOD Menu',
    category: 'games-sim',
    shortDescription: 'Menu MOD đa chức năng, tài nguyên vô hạn.',
    description: 'Khám phá thế giới Minecraft với menu MOD hỗ trợ bay, xuyên tường, spawn vật phẩm và kích hoạt RTX giả lập trên thiết bị di động.',
    version: 'v1.21.2',
    size: '163 MB',
    updatedAt: '2024-10-02',
    requirements: 'Android 8.0+',
    features: ['Menu MOD điều khiển nổi', 'Mở khóa texture RTX', 'Không khóa máy chủ riêng'],
    installSteps: ['Cài đặt file APK.', 'Giải nén file data vào thư mục /games/com.mojang.', 'Đăng nhập Xbox để đồng bộ.'],
    screenshots: ['assets/img/minecraft-1.svg', 'assets/img/minecraft-2.svg'],
    tags: ['Sandbox', 'Creative'],
    downloads: '120.033',
    rating: 4.7,
    trending: true,
    changelog: [
      { version: '1.21.2', date: '2024-10-02', changes: ['Thêm biome Cherry Blossom', 'Cải thiện menu MOD mượt hơn'] },
      { version: '1.21.0', date: '2024-08-22', changes: ['Bổ sung mob Armadillo', 'Tối ưu shader mượt 90FPS'] }
    ],
    downloadLinks: [
      { label: 'Link chuẩn', url: '#', mirror: 'Google Drive' },
      { label: 'Link tốc độ cao', url: '#', mirror: 'OneDrive' }
    ]
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro MOD',
    category: 'productivity',
    shortDescription: 'Xuất video 4K, không watermark, preset premium.',
    description: 'CapCut Pro MOD mở khóa toàn bộ preset, bộ lọc AI, gỡ bỏ watermark và thêm bộ preset TikTok hot nhất. Bản mod đã vá đăng nhập bắt buộc.',
    version: 'v10.9.1',
    size: '112 MB',
    updatedAt: '2024-09-28',
    requirements: 'Android 7.0+',
    features: ['Không watermark', 'Preset độc quyền', 'Xuất video 4K 60FPS'],
    installSteps: ['Cài APK như thường.', 'Đăng nhập tài khoản khách.', 'Cho phép quyền lưu trữ khi được hỏi.'],
    screenshots: ['assets/img/capcut-1.svg', 'assets/img/capcut-2.svg'],
    tags: ['Video Editor', 'Creator'],
    downloads: '98.550',
    rating: 4.6,
    trending: false,
    changelog: [
      { version: '10.9.1', date: '2024-09-28', changes: ['Thêm preset “Neon Pulse”', 'Cải thiện xuất video 4K'] }
    ],
    downloadLinks: [
      { label: 'Link chuẩn', url: '#', mirror: 'Direct CDN' }
    ]
  },
  {
    id: 'youtube-revanced',
    name: 'YouTube ReVanced Extended',
    category: 'entertainment',
    shortDescription: 'Chặn quảng cáo, phát nền, sponsorblock tích hợp.',
    description: 'ReVanced Extended cung cấp trải nghiệm YouTube cao cấp: phát nền, picture-in-picture, sponsorblock, override HDR và hỗ trợ chỉnh tốc độ playback chi tiết.',
    version: 'v18.39.40',
    size: '132 MB',
    updatedAt: '2024-09-25',
    requirements: 'Android 8.0+',
    features: ['SponsorBlock tích hợp', 'Chặn toàn bộ quảng cáo', 'Tùy chỉnh UI nâng cao'],
    installSteps: ['Cài đặt microG đi kèm.', 'Cài APK ReVanced.', 'Đăng nhập bằng Google thông qua microG.'],
    screenshots: ['assets/img/revanced-1.svg', 'assets/img/revanced-2.svg'],
    tags: ['Video', 'Streaming'],
    downloads: '340.204',
    rating: 4.9,
    trending: true,
    changelog: [
      { version: '18.39.40', date: '2024-09-25', changes: ['Fix login lỗi 403', 'Thêm chế độ AMOLED'] }
    ],
    downloadLinks: [
      { label: 'Link chuẩn', url: '#', mirror: 'Direct CDN' },
      { label: 'Bản microG', url: '#', mirror: 'Mirror 2' }
    ]
  },
  {
    id: 'notebloc-pro',
    name: 'Notebloc Scanner Pro',
    category: 'tools',
    shortDescription: 'Quét tài liệu không giới hạn, OCR tiếng Việt.',
    description: 'Notebloc Pro MOD mở khóa chức năng quét không giới hạn, xuất PDF HD và bộ nhận diện chữ viết tay tiếng Việt chính xác.',
    version: 'v4.0.2',
    size: '56 MB',
    updatedAt: '2024-09-18',
    requirements: 'Android 6.0+',
    features: ['OCR tiếng Việt', 'Xuất PDF không watermark', 'Chế độ quét batch tự động'],
    installSteps: ['Cài APK.', 'Đăng nhập bằng tài khoản khách hoặc Google.', 'Bật quyền camera & bộ nhớ.'],
    screenshots: ['assets/img/notebloc-1.svg'],
    tags: ['Scanner', 'Office'],
    downloads: '45.876',
    rating: 4.5,
    trending: false,
    changelog: [
      { version: '4.0.2', date: '2024-09-18', changes: ['Thêm bộ lọc tài liệu AI', 'Tăng tốc độ xử lý 30%'] }
    ],
    downloadLinks: [
      { label: 'Link tải nhanh', url: '#', mirror: 'Google Drive' }
    ]
  }
];

const UPDATE_LOG = APPS
  .flatMap((app) => app.changelog.map((entry) => ({
    appId: app.id,
    appName: app.name,
    ...entry
  })))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

function findAppById(id) {
  return APPS.find((app) => app.id === id);
}

function searchApps(keyword = '', category = 'all') {
  const normalized = keyword.trim().toLowerCase();
  return APPS.filter((app) => {
    const matchesKeyword =
      !normalized ||
      app.name.toLowerCase().includes(normalized) ||
      app.shortDescription.toLowerCase().includes(normalized) ||
      app.tags.some((tag) => tag.toLowerCase().includes(normalized));

    const matchesCategory = category === 'all' || app.category === category;
    return matchesKeyword && matchesCategory;
  });
}

function getTrendingApps(limit = 4) {
  return APPS.filter((app) => app.trending).slice(0, limit);
}

function formatNumber(value) {
  return new Intl.NumberFormat('vi-VN').format(Number(String(value).replace(/\D/g, '')));
}

function formatDate(date) {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date));
}
