(function () {
  'use strict';

  const PHONE = '972542980277';

  const i18n = {
    he: {
      name: 'מיכל נונו',
      title: 'יצירת תוכן & UGC | אסטרטגיה דיגיטלית',
      about_tagline: 'אז היי! נעים להכיר, שמי מיכל נונו, בת 25. חיה ונושמת את הרשתות החברתיות, אוהבת ועושה את העבודה שלי על הצד הטוב ביותר !',
      about_desc: 'אני מאמינה שבעולם של היום, אנשים לא קונים רק ממותגים - הם קונים בעיקר מאנשים. המשימה שלי היא לייצר עבורכם תוכן אותנטי, כזה שמרגיש כמו המלצה חמה מחברה טובה, תוך שילוב של אסתטיקה בלתי מתפשרת ואסטרטגיה שיווקית שמניעה לפעולה. אני כאן כדי להפוך את הסיפור של המותג שלכם לסרטון שאי אפשר להפסיק לצפות בו.',
      portfolioTitle: 'תיק העבודות שלי',
      filterAll: 'הכל',
      filterProducts: 'מוצרים',
      filterCleaning: 'ניקיון',
      filterLifestyle: 'פנאי',
      advantages_title: 'למה לעבוד איתי?',
      stat1: 'סה"כ עוקבים',
      stat2: 'חשיפות חודשיות',
      stat3: 'מותגים מרוצים',
      ctaTitle: 'בואו נתחיל לדבר!',
      ctaWhatsapp: 'WhatsApp',
      emailCopied: 'מייל הועתק בהצלחה! ✨',
      waMessage: 'היי מיכל !\nראיתי את הכרטיס הדיגיטלי שלך ואשמח לשוחח על שיתוף פעולה. ✨',
      advantages: [{
          title: 'הפקת סרטוני וידאו',
          desc: 'יצירת וידאו קריאייטיבי ומותאם למותג ברשתות החברתיות (Reels & TikTok).'
        },
        {
          title: 'כתיבת תסריטים שיווקיים',
          desc: 'פיתוח קונספטים ותסריטים יצירתיים שמחברים את הקהל ומניעים למכירה.'
        },
        {
          title: 'שיתופי פעולה ו-UGC',
          desc: 'יצירת תוכן בגובה העיניים עם מגוון רחב של חברות ומותגים מובילים.'
        },
        {
          title: 'אסטרטגיה ואסתטיקה',
          desc: 'שילוב מדויק בין מראה ויזואלי יוקרתי לבין תוצאות שיווקיות בשטח.'
        }
      ],
      projects: [{
          brand: 'בושם DO SON',
          handle: '@Products',
          badge: '+30% מכירות',
          category: 'products',
          thumb: './assets/DOSON.png',
          video: 'https://res.cloudinary.com/dqcnb2bdy/video/upload/v1781762693/%D7%91%D7%95%D7%A9%D7%9D_PARIS_lsmalj.mp4'
        },
        {
          brand: 'עגליס',
          handle: '@Products',
          badge: '100K צפיות',
          category: 'products',
          thumb: './assets/agalease-baby.png',
          video: 'https://res.cloudinary.com/dqcnb2bdy/video/upload/v1781728828/%D7%A2%D7%92%D7%9C%D7%99%D7%A1_-_%D7%98%D7%99%D7%95%D7%9C%D7%95%D7%9F_h7qnqq.mov'
        },
        {
          brand: 'עגלת ציקו',
          handle: '@HomeCleaning',
          badge: '+45% מעורבות',
          category: 'products',
          thumb: './assets/chicco.png',
          video: 'https://res.cloudinary.com/dqcnb2bdy/video/upload/v1781728782/%D7%98%D7%99%D7%95%D7%9C%D7%95%D7%9F_%D7%9E%D7%91%D7%99%D7%AA_%D7%A6_%D7%99%D7%A7%D7%95_-_%D7%A2%D7%92%D7%9C%D7%99%D7%A1_b4nnuc.mov'
        },
        {
          brand: 'מפיץ ריח A500',
          handle: '@HomeCleaning',
          badge: '+45% מעורבות',
          category: 'products',
          thumb: './assets/johnsonclean.png',
          video: 'https://res.cloudinary.com/dqcnb2bdy/video/upload/v1781728774/A500_bqxi39.mov'
        },
        {
          brand: 'The Pink Stuff',
          handle: '@HomeCleaning',
          badge: '+45% מעורבות',
          category: 'products',
          thumb: './assets/ThePinkStuff.png',
          video: 'https://res.cloudinary.com/dqcnb2bdy/video/upload/v1781728793/the_pink_stuff_-_%D7%A0%D7%99%D7%A7%D7%99%D7%95%D7%9F_%D7%9E%D7%A7%D7%9C%D7%97%D7%AA_zzjdva.mov'
        },

      ]
    },
    en: {
      name: 'Michal Nunu',
      title: 'UGC & Content Creator | Digital Strategy',
      about_tagline: "Hi! Nice to meet you, I'm Michal Nono, 25. I live and breathe social media, and I'm dedicated to delivering my absolute best work!",
      about_desc: "I truly believe that in today's world, people don't just buy from brands - they buy from people. My mission is to create authentic content for you that feels like a warm recommendation from a close friend, blending uncompromising aesthetics with action-driven marketing strategies. I am here to turn your brand's story into a video people just can't stop watching.",
      portfolioTitle: 'My Portfolio',
      filterAll: 'All',
      filterProducts: 'Products',
      filterCleaning: 'Cleaning',
      filterLifestyle: 'Lifestyle',
      advantages_title: 'Why Work With Me?',
      stat1: 'Total Audience',
      stat2: 'Monthly Exposures',
      stat3: 'Happy Brands',
      ctaTitle: "Let's Start Talking!",
      ctaWhatsapp: 'Chat on WhatsApp',
      emailCopied: 'Email copied! ✨',
      waMessage: "Hi Michal!\nI saw your digital card and I'd love to discuss a collaboration. ✨",
      advantages: [{
          title: 'Video Production',
          desc: 'Creating creative, tailor-made social media videos (Reels & TikTok).'
        },
        {
          title: 'Marketing Scriptwriting',
          desc: 'Developing engaging scripts and concepts that drive connections and sales.'
        },
        {
          title: 'UGC & Partnerships',
          desc: 'Crafting relatable, authentic content for a wide range of leading brands.'
        },
        {
          title: 'Strategy & Aesthetics',
          desc: 'Perfectly balancing high-end visual appeal with real-world marketing results.'
        }
      ],
      projects: [{
          brand: 'LUXE Products Brand',
          handle: '@Products',
          badge: '+30% Sales',
          category: 'products',
          thumb: 'https://images.unsplash.com/photo-1483985988355-763728ad1994?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          brand: 'GLOW Beauty',
          handle: '@Products',
          badge: '100K Views',
          category: 'lifestyle',
          thumb: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          brand: 'URBAN BREW Coffee',
          handle: '@HomeCleaning',
          badge: '+45% Engagement',
          category: 'lifestyle',
          thumb: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        },
        {
          brand: 'FOOD CORNER',
          handle: '@FoodCorner',
          badge: '1M+ Reels Views',
          category: 'lifestyle',
          thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
        },
        {
          brand: 'CLEAN PRO',
          handle: '@CleanPro',
          badge: '+60% Conversions',
          category: 'cleaning',
          thumb: 'https://images.unsplash.com/photo-1585421516928-4e1f2a1b3f86?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        }
      ]
    }
  };

  const advantageIcons = [
    '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    '<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
  ];

  let currentLang = 'he';
  let currentPortfolioFilter = 'all';

  const portfolioGrid = document.getElementById('portfolioGrid');
  const advantagesGrid = document.getElementById('advantagesGrid');
  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge'); // kept for easy badge restore
  const modalClose = document.getElementById('modalClose');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toastNotification = document.getElementById('toast-notification');
  let toastTimeout = null;

  function buildWhatsAppUrl(message) {
    return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(message);
  }

  function showEmailToast() {
    toastNotification.textContent = i18n[currentLang].emailCopied;
    toastNotification.classList.add('toast-show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toastNotification.classList.remove('toast-show');
    }, 2500);
  }

  copyEmailBtn.addEventListener('click', function () {
    const email = copyEmailBtn.getAttribute('data-email');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(showEmailToast).catch(function (err) {
        console.error('Could not copy email: ', err);
        fallbackCopyEmail(email);
      });
    } else {
      fallbackCopyEmail(email);
    }
  });

  function fallbackCopyEmail(email) {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showEmailToast();
    } catch (err) {
      console.error('Could not copy email: ', err);
    }
    document.body.removeChild(textarea);
  }

  function updateWhatsAppLinks() {
    const t = i18n[currentLang];
    document.getElementById('ctaWhatsapp').href = buildWhatsAppUrl(t.waMessage);
  }

  function applyPortfolioFilter(selectedFilter) {
    const cards = portfolioGrid.querySelectorAll('.portfolio-card');

    cards.forEach(function (card) {
      const cardCategory = card.getAttribute('data-category');

      if (selectedFilter === 'all' || cardCategory === selectedFilter) {
        card.classList.remove('is-hidden');
        setTimeout(function () {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.classList.add('is-hidden');
      }
    });
  }

  function initPortfolioFilters() {
    document.querySelectorAll('.filter-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(function (btn) {
          btn.classList.remove('active');
        });
        button.classList.add('active');
        currentPortfolioFilter = button.getAttribute('data-filter');
        applyPortfolioFilter(currentPortfolioFilter);
      });
    });
  }

  function optimizeCloudinaryUrl(url) {
    if (!url || !url.includes('cloudinary.com') || url.includes('f_auto')) {
      return url;
    }

    if (url.includes('/video/upload/')) {
      return url.replace('/video/upload/', '/video/upload/f_auto,q_auto/');
    }

    if (url.includes('/image/upload/')) {
      return url.replace('/image/upload/', '/image/upload/f_auto,q_auto/');
    }

    if (url.includes('/upload/')) {
      return url.replace('/upload/', '/upload/f_auto,q_auto/');
    }

    return url;
  }

  function renderPortfolio() {
    const projects = i18n[currentLang].projects;
    portfolioGrid.innerHTML = projects.map(function (p, i) {
      return (
        '<article class="portfolio-card" data-index="' + i + '" data-category="' + p.category + '" tabindex="0" role="button" aria-label="' + p.brand + '">' +
        '<div class="card-thumb">' +
        '<img src="' + optimizeCloudinaryUrl(p.thumb) + '" alt="' + p.brand + '" loading="lazy">' +
        '<div class="card-play">' +
        '<div class="card-play-icon">' +
        '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="card-body">' +
        '<h3 class="card-brand">' + p.brand + '</h3>' +
        '<span class="card-handle">' + p.handle + '</span>' +
        // '<span class="card-badge">' + p.badge + '</span>' +
        '</div>' +
        '</article>'
      );
    }).join('');

    portfolioGrid.querySelectorAll('.portfolio-card').forEach(function (card) {
      card.addEventListener('click', openModal);
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal.call(card);
        }
      });
    });

    applyPortfolioFilter(currentPortfolioFilter);
  }

  function renderAdvantages() {
    const items = i18n[currentLang].advantages;
    advantagesGrid.innerHTML = items.map(function (item, i) {
      return (
        '<div class="advantage-card">' +
        '<div class="advantage-icon">' + advantageIcons[i] + '</div>' +
        '<div class="advantage-content">' +
        '<h3 class="advantage-title">' + item.title + '</h3>' +
        '<p class="advantage-desc">' + item.desc + '</p>' +
        '</div>' +
        '</div>'
      );
    }).join('');
  }

  function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    const isRtl = lang === 'he';

    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = isRtl ? 'מיכל נונו | כרטיס דיגיטלי' : 'Michal Nunu | Digital Business Card';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    renderPortfolio();
    renderAdvantages();
    updateWhatsAppLinks();

    try {
      localStorage.setItem('michal-lang', lang);
    } catch (e) {}
  }

  function openModal() {
    const index = parseInt(this.getAttribute('data-index'), 10);
    const project = i18n[currentLang].projects[index];

    modalTitle.textContent = project.brand;
    // modalBadge.textContent = project.badge; // Restore metric badge in modal when needed
    modalVideo.src = optimizeCloudinaryUrl(project.video);
    modalVideo.load();

    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    modalVideo.play().catch(function () {});
  }

  function closeModal() {
    videoModal.classList.remove('active');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  modalClose.addEventListener('click', closeModal);

  videoModal.addEventListener('click', function (e) {
    if (e.target === videoModal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) closeModal();
  });

  var saved = null;
  try {
    saved = localStorage.getItem('michal-lang');
  } catch (e) {}
  initPortfolioFilters();
  setLanguage(saved === 'en' ? 'en' : 'he');
})();