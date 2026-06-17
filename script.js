(function () {
  'use strict';

  const PHONE = '972542980277';

  const i18n = {
    he: {
      name: 'מיכל נונו',
      title: 'מנהלת סושיאל ומייצרת תוכן למותגים',
      tagline: 'עוזרת למותגים לספר סיפורים, להגיע לקהלי יעד וליצור שיתופי פעולה שמניבים תוצאות אמיתיות.',
      about: 'מומחית באסטרטגיה דיגיטלית, יצירת תוכן ויראלי וייצור וידאו באיכות גבוהה - Reels, TikTok וקמפיינים שמניעים צמיחה, מעורבות ומכירות.',
      portfolioTitle: 'תיק העבודות שלי',
      whyTitle: 'למה לעבוד איתי?',
      stat1: 'סה"כ עוקבים',
      stat2: 'חשיפות חודשיות',
      stat3: 'מותגים מרוצים',
      ctaTitle: 'בואו נתחיל לדבר!',
      ctaWhatsapp: 'וואטסאפ',
      ctaConsult: 'לקביעת שיחת ייעוץ',
      floatWhatsapp: 'דברו איתי בוואטסאפ',
      waMessage: 'היי מיכל !\nראיתי את הכרטיס הדיגיטלי שלך ואשמח לשוחח על שיתוף פעולה. ✨',
      consultMessage: 'היי מיכל! אשמח לקבוע שיחת ייעוץ.',
      advantages: [
        'חדשנות ויצירתיות - תוכן שבולט ומדבר אל הקהל',
        'עמידה קפדנית בדדליינים וניהול פרויקטים מקצועי',
        'מעקב עמוק אחרי טרנדים ופלטפורמות חדשות',
        'התאמה מלאה לערכי המותג ולקהל היעד'
      ],
      projects: [
        {
          brand: 'מותג אופנה LUXE',
          handle: '@LuxeStyle',
          badge: '+30% מכירות',
          thumb: 'https://images.unsplash.com/photo-1483985988355-763728ad1994?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          brand: 'ביוטי גלו GLOW',
          handle: '@GlowBeauty',
          badge: '100K צפיות',
          thumb: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          brand: 'קפה אורבן BREW',
          handle: '@UrbanBrew',
          badge: '+45% מעורבות',
          thumb: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        },
        {
          brand: 'פוד קורנר FOOD',
          handle: '@FoodCorner',
          badge: '1M+ צפיות Reels',
          thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
        }
      ]
    },
    en: {
      name: 'Michal Nono',
      title: 'Social Media Manager & Brand Partnerships',
      tagline: 'Helping brands tell stories, reach target audiences, and create collaborations that drive real results.',
      about: 'Expert in digital strategy, viral content creation, and high-impact video production - Reels, TikTok, and campaigns that drive growth, engagement, and sales.',
      portfolioTitle: 'My Portfolio',
      whyTitle: 'Why Work With Me?',
      stat1: 'Total Audience',
      stat2: 'Monthly Exposures',
      stat3: 'Happy Brands',
      ctaTitle: "Let's Start Talking!",
      ctaWhatsapp: 'WhatsApp',
      ctaConsult: 'Book a Consultation',
      floatWhatsapp: 'Chat on WhatsApp',
      waMessage: "Hi Michal! I saw your digital card and I'd love to discuss a collaboration.",
      consultMessage: "Hi Michal! I'd like to book a consultation call.",
      advantages: [
        'Innovation & Creativity - content that stands out and resonates',
        'Strict deadline adherence & professional project management',
        'In-depth trend tracking across platforms',
        'Full alignment with brand values and target audience'
      ],
      projects: [
        {
          brand: 'LUXE Fashion Brand',
          handle: '@LuxeStyle',
          badge: '+30% Sales',
          thumb: 'https://images.unsplash.com/photo-1483985988355-763728ad1994?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          brand: 'GLOW Beauty',
          handle: '@GlowBeauty',
          badge: '100K Views',
          thumb: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
        },
        {
          brand: 'URBAN BREW Coffee',
          handle: '@UrbanBrew',
          badge: '+45% Engagement',
          thumb: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
        },
        {
          brand: 'FOOD CORNER',
          handle: '@FoodCorner',
          badge: '1M+ Reels Views',
          thumb: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=500&fit=crop',
          video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
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

  const portfolioGrid = document.getElementById('portfolioGrid');
  const advantagesGrid = document.getElementById('advantagesGrid');
  const videoModal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalClose = document.getElementById('modalClose');

  function buildWhatsAppUrl(message) {
    return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(message);
  }

  function updateWhatsAppLinks() {
    const t = i18n[currentLang];
    const waUrl = buildWhatsAppUrl(t.waMessage);
    const consultUrl = buildWhatsAppUrl(t.consultMessage);
    document.getElementById('ctaWhatsapp').href = waUrl;
    document.getElementById('ctaConsult').href = consultUrl;
    document.getElementById('floatWhatsapp').href = waUrl;
  }

  function renderPortfolio() {
    const projects = i18n[currentLang].projects;
    portfolioGrid.innerHTML = projects.map(function (p, i) {
      return (
        '<article class="portfolio-card" data-index="' + i + '" tabindex="0" role="button" aria-label="' + p.brand + '">' +
          '<div class="card-thumb">' +
            '<img src="' + p.thumb + '" alt="' + p.brand + '" loading="lazy">' +
            '<div class="card-play">' +
              '<div class="card-play-icon">' +
                '<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="card-body">' +
            '<h3 class="card-brand">' + p.brand + '</h3>' +
            '<span class="card-handle">' + p.handle + '</span>' +
            '<span class="card-badge">' + p.badge + '</span>' +
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
  }

  function renderAdvantages() {
    const items = i18n[currentLang].advantages;
    advantagesGrid.innerHTML = items.map(function (text, i) {
      return (
        '<div class="advantage-card">' +
          '<div class="advantage-icon">' + advantageIcons[i] + '</div>' +
          '<p class="advantage-text">' + text + '</p>' +
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
    document.title = isRtl ? 'מיכל נונו | כרטיס דיגיטלי' : 'Michal Nono | Digital Business Card';

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

    try { localStorage.setItem('michal-lang', lang); } catch (e) {}
  }

  function openModal() {
    const index = parseInt(this.getAttribute('data-index'), 10);
    const project = i18n[currentLang].projects[index];

    modalTitle.textContent = project.brand;
    modalBadge.textContent = project.badge;
    modalVideo.src = project.video;
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
  try { saved = localStorage.getItem('michal-lang'); } catch (e) {}
  setLanguage(saved === 'en' ? 'en' : 'he');
})();
