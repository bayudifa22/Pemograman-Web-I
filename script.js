/**
 * Momen Bareng — Undangan Digital Personal & Berkesan
 * Core JavaScript Logic (Modular & Accessible ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Ikon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Konfigurasi WhatsApp Bisnis Terpusat
  const CONFIG = {
    whatsappNumber: '6281234567890', // Format nomor internasional tanpa '+'
    defaultGreeting: 'Halo Momen Bareng, saya ingin konsultasi mengenai pembuatan undangan digital.'
  };

  /**
   * Buka WhatsApp di tab baru dengan pesan yang diformat
   * @param {string} customMessage
   */
  const openWhatsApp = (customMessage) => {
    const text = encodeURIComponent(customMessage || CONFIG.defaultGreeting);
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Delegasi trigger semua elemen dengan atribut [data-wa-trigger]
  document.querySelectorAll('[data-wa-trigger]').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const message = button.getAttribute('data-wa-trigger');
      openWhatsApp(message);
    });
  });

  // 3. Header & Sticky Navbar Effect
  const header = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('back-to-top');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (header) {
      if (scrollPosition > 40) {
        header.classList.add('shadow-nav-scrolled', 'bg-ivory/95');
        header.classList.remove('bg-ivory/80');
      } else {
        header.classList.remove('shadow-nav-scrolled', 'bg-ivory/95');
        header.classList.add('bg-ivory/80');
      }
    }

    if (backToTopBtn) {
      if (scrollPosition > 400) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Mobile Menu Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    const toggleMobileMenu = (forceClose = false) => {
      const isCurrentlyOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      const shouldOpen = forceClose ? false : !isCurrentlyOpen;

      mobileMenuBtn.setAttribute('aria-expanded', String(shouldOpen));

      if (shouldOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.innerHTML = '<i class="w-6 h-6" data-lucide="x"></i>';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i class="w-6 h-6" data-lucide="menu"></i>';
      }

      if (window.lucide) {
        window.lucide.createIcons();
      }
    };

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Tutup mobile menu saat salah satu link navigasi diklik
    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        toggleMobileMenu(true);
      });
    });

    // Tutup mobile menu saat user klik di luar area menu
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
          toggleMobileMenu(true);
        }
      }
    });
  }

  // 5. Featured Collection Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const collectionItems = document.querySelectorAll('.collection-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Perbarui style button aktif
      filterButtons.forEach((b) => {
        b.classList.remove('active', 'bg-deep-brown', 'text-ivory');
        b.classList.add('bg-ivory', 'text-deep-brown/80');
      });
      btn.classList.add('active', 'bg-deep-brown', 'text-ivory');
      btn.classList.remove('bg-ivory', 'text-deep-brown/80');

      const filterCategory = btn.getAttribute('data-filter');

      collectionItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        if (filterCategory === 'all' || itemCategory === filterCategory) {
          item.style.display = 'block';
          requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(16px)';
          setTimeout(() => {
            if (btn.getAttribute('data-filter') !== 'all' && item.getAttribute('data-category') !== btn.getAttribute('data-filter')) {
              item.style.display = 'none';
            }
          }, 250);
        }
      });
    });
  });

  // 6. Modal Preview Desain Template
  const modal = document.getElementById('preview-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');
  const modalWaBtn = document.getElementById('modal-wa-btn');

  const openModal = (data) => {
    if (!modal) return;
    if (modalTitle) modalTitle.textContent = data.title || 'Nama Template';
    if (modalBadge) modalBadge.textContent = data.category || 'Koleksi';
    if (modalDesc) modalDesc.textContent = data.desc || '';
    if (modalImg) {
      modalImg.src = data.img || '';
      modalImg.alt = `Preview ${data.title || 'Desain'}`;
    }

    if (modalWaBtn) {
      modalWaBtn.onclick = () => {
        openWhatsApp(`Halo Momen Bareng, saya tertarik memesan undangan desain "${data.title}" (${data.category}).`);
      };
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  // Delegasi tombol pratinjau (mendukung tombol desktop hover, ikon mata, dan klik card gambar)
  document.querySelectorAll('.preview-btn, .preview-icon-btn, .preview-card-img').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Jika event terjadi di dalam tombol preview anak, cegah double trigger
      if (e.target.closest('.preview-btn') && btn.classList.contains('preview-card-img')) {
        return;
      }
      e.preventDefault();
      const target = e.currentTarget;
      openModal({
        title: target.getAttribute('data-title'),
        category: target.getAttribute('data-category'),
        desc: target.getAttribute('data-desc'),
        img: target.getAttribute('data-img')
      });
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Tutup jika backdrop diklik
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Tutup modal dengan tombol Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // 7. Interactive Accordion FAQ
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const toggle = item.querySelector('.faq-toggle');
    const content = item.querySelector('.faq-content');
    const iconContainer = item.querySelector('.faq-icon');

    if (!toggle || !content) return;

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';

      // Tutup accordion lain agar tampilan tetap rapi
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherToggle = otherItem.querySelector('.faq-toggle');
          const otherContent = otherItem.querySelector('.faq-content');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherToggle && otherContent) {
            otherToggle.setAttribute('aria-expanded', 'false');
            otherContent.classList.add('hidden');
            if (otherIcon) {
              otherIcon.innerHTML = '<i data-lucide="plus" class="w-5 h-5"></i>';
            }
          }
        }
      });

      // Toggle item saat ini
      if (isOpen) {
        toggle.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        if (iconContainer) {
          iconContainer.innerHTML = '<i data-lucide="plus" class="w-5 h-5"></i>';
        }
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        if (iconContainer) {
          iconContainer.innerHTML = '<i data-lucide="minus" class="w-5 h-5"></i>';
        }
      }

      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });

  // 8. Intersection Observer Reveal Animations
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback untuk browser lawas
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 9. Copyright Year Otomatis
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
