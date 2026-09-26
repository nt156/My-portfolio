/* ============================================================
   PORTFOLIO — main.js
   Navbar · Mobile menu · Scroll reveal · Active nav highlight
   Dark mode · Language switcher (EN / VI)
   ============================================================ */

(function () {
  "use strict";

  /* ==========================================================
     1. TRANSLATIONS
     ========================================================== */
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.contact": "Contact",

      "hero.eyebrow": "Portfolio — 2026",
      "hero.role": "Industrial & Graphic Design Student",
      "hero.tagline": "“I create visual experiences through design, form and ideas.”",
      "hero.cta1": "View My Work",
      "hero.cta2": "About Me",
      "hero.scroll": "Scroll",

      "about.title": "About <em>Me</em>",
      "about.lead": "I am a design student working across <strong>industrial design, graphic design, 3D and visual communication</strong> — driven by the meeting point of aesthetics, function and design thinking.",
      "about.p2": "My practice focuses on turning ideas into meaningful products and visual experiences: objects with purpose, images with intent, and systems that communicate clearly. I believe good design is quiet, honest and precise.",
      "about.f1h": "Education",
      "about.f1p": "BFA in Industrial Design<br /><span class=\"fact-sub\">University of Architecture — 2023 → Present</span>",
      "about.f2h": "Focus",
      "about.f2p": "Product &amp; Form<br /><span class=\"fact-sub\">Editorial · Branding · 3D</span>",
      "about.f3h": "Interests",
      "about.f3p": "Typography, material culture,<br /><span class=\"fact-sub\">photography &amp; craft</span>",

      "projects.title": "Selected <em>Projects</em>",
      "projects.desc": "A curated selection of work across editorial, product, 3D and identity design.",
      "project.view": "View Project",
      "p1.cat": "Graphic Design / Editorial Design",
      "p1.desc": "Editorial magazine exploring the identity, culture and visual language of Vietnamese Robusta coffee.",
      "p2.cat": "Industrial Design / Product Design",
      "p2.desc": "A minimalist display model inspired by the form and symbolism of the lotus.",
      "p3.cat": "3D / Character Design",
      "p3.desc": "A stylized 3D character exploration focusing on form, personality and visual storytelling.",
      "p4.cat": "Graphic Design / Branding",
      "p4.desc": "An experimental visual identity project exploring typography, composition and contemporary aesthetics.",

      "skills.title": "Skills &amp; <em>Tools</em>",
      "skill.6": "Graphic Design",
      "skill.7": "Industrial Design",
      "skill.8": "Visual Communication",
      "skill.9": "Design Thinking",

      "contact.headline": "Let's create something <em>meaningful</em>.",
      "contact.text": "I'm open to internships, freelance projects and creative collaborations. If you have an idea, a brief, or simply want to talk about design — I'd love to hear from you.",
      "contact.cta": "Get in Touch",

      "footer.copy": "© 2026 [TÊN CỦA BẠN]. All rights reserved.",

      // Section names shown on the navbar
      "section.home": "[TÊN]",
      "section.about": "About Me",
      "section.projects": "Selected Projects",
      "section.skills": "Skills & Tools",
      "section.contact": "Contact"
    },

    vi: {
      "nav.home": "Trang chủ",
      "nav.about": "Giới thiệu",
      "nav.projects": "Dự án",
      "nav.contact": "Liên hệ",

      "hero.eyebrow": "Hồ sơ năng lực — 2026",
      "hero.role": "Sinh viên Thiết kế Công nghiệp & Đồ họa",
      "hero.tagline": "“Tôi kiến tạo trải nghiệm thị giác qua thiết kế, hình khối và ý tưởng.”",
      "hero.cta1": "Xem dự án",
      "hero.cta2": "Về tôi",
      "hero.scroll": "Cuộn xuống",

      "about.title": "Về <em>Tôi</em>",
      "about.lead": "Tôi là một sinh viên thiết kế, làm việc trong các lĩnh vực <strong>thiết kế công nghiệp, thiết kế đồ họa, 3D và truyền thông thị giác</strong> — luôn tìm kiếm điểm giao thoa giữa thẩm mỹ, công năng và tư duy thiết kế.",
      "about.p2": "Tôi tập trung vào việc biến ý tưởng thành những sản phẩm và trải nghiệm trực quan có giá trị: vật thể có mục đích, hình ảnh có chủ đích và hệ thống truyền tải rõ ràng. Tôi tin rằng thiết kế tốt là thiết kế lặng lẽ, chân thật và chính xác.",
      "about.f1h": "Học vấn",
      "about.f1p": "Cử nhân Thiết kế Công nghiệp<br /><span class=\"fact-sub\">Trường Đại học Kiến trúc — 2023 → Nay</span>",
      "about.f2h": "Chuyên môn",
      "about.f2p": "Sản phẩm &amp; Hình khối<br /><span class=\"fact-sub\">Biên tập · Nhận diện · 3D</span>",
      "about.f3h": "Sở thích",
      "about.f3p": "Typography, văn hóa vật chất,<br /><span class=\"fact-sub\">nhiếp ảnh &amp; thủ công mỹ nghệ</span>",

      "projects.title": "Dự án <em>Tiêu biểu</em>",
      "projects.desc": "Tuyển chọn các dự án trong lĩnh vực biên tập, sản phẩm, 3D và thiết kế nhận diện.",
      "project.view": "Xem dự án",
      "p1.cat": "Thiết kế Đồ họa / Thiết kế Biên tập",
      "p1.desc": "Tạp chí biên tập khám phá bản sắc, văn hóa và ngôn ngữ hình ảnh của cà phê Robusta Việt Nam.",
      "p2.cat": "Thiết kế Công nghiệp / Thiết kế Sản phẩm",
      "p2.desc": "Mô hình trưng bày tối giản lấy cảm hứng từ hình thể và biểu tượng của hoa sen.",
      "p3.cat": "3D / Thiết kế Nhân vật",
      "p3.desc": "Nghiên cứu nhân vật 3D cách điệu, tập trung vào hình khối, cá tính và khả năng kể chuyện bằng hình ảnh.",
      "p4.cat": "Thiết kế Đồ họa / Nhận diện Thương hiệu",
      "p4.desc": "Dự án nhận diện thị giác thử nghiệm, khám phá typography, bố cục và thẩm mỹ đương đại.",

      "skills.title": "Kỹ năng &amp; <em>Công cụ</em>",
      "skill.6": "Thiết kế Đồ họa",
      "skill.7": "Thiết kế Công nghiệp",
      "skill.8": "Truyền thông Thị giác",
      "skill.9": "Tư duy Thiết kế",

      "contact.headline": "Hãy cùng tạo nên điều <em>ý nghĩa</em>.",
      "contact.text": "Tôi luôn sẵn sàng cho các cơ hội thực tập, dự án tự do và hợp tác sáng tạo. Nếu bạn có một ý tưởng, một brief, hay đơn giản là muốn trò chuyện về thiết kế — tôi rất mong được lắng nghe.",
      "contact.cta": "Liên hệ ngay",

      "footer.copy": "© 2026 [TÊN CỦA BẠN]. Bảo lưu mọi quyền.",

      // Tên mục hiển thị trên thanh điều hướng
      "section.home": "[TÊN]",
      "section.about": "Về Tôi",
      "section.projects": "Dự Án Tiêu Biểu",
      "section.skills": "Kỹ Năng & Công Cụ",
      "section.contact": "Liên Hệ"
    }
  };

  const pageTitles = {
    en: "[TÊN CỦA BẠN] — Industrial & Graphic Design Portfolio",
    vi: "[TÊN CỦA BẠN] — Portfolio Thiết kế Công nghiệp & Đồ họa"
  };

  /* ---------- Shared state: navbar section label ---------- */
  const logoText = document.getElementById("navLogoText");
  let currentSection = "home";

  function setLogoText(text) {
    if (!logoText || !text || logoText.textContent === text) return;
    logoText.classList.add("fade");
    setTimeout(() => {
      logoText.textContent = text;
      logoText.classList.remove("fade");
    }, 200);
  }

  /* ==========================================================
     2. LANGUAGE SWITCHER
     ========================================================== */
  const langButtons = document.querySelectorAll(".lang-opt");
  const savedLang = localStorage.getItem("lang");
  const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  let currentLang = savedLang || (browserLang === "vi" ? "vi" : "en");

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Plain text
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // HTML content (contains <em>, <strong>, <br />...)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang;
    document.title = pageTitles[lang];

    langButtons.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.lang === lang)
    );

    localStorage.setItem("lang", lang);
    currentLang = lang;

    // Refresh the navbar section label in the new language
    setLogoText(translations[lang][`section.${currentSection}`]);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(currentLang);

  /* ==========================================================
     3. DARK MODE
     ========================================================== */
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ==========================================================
     4. NAVBAR — transparent → blurred on scroll
     ========================================================== */
  const navbar = document.getElementById("navbar");

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ==========================================================
     5. MOBILE HAMBURGER MENU
     ========================================================== */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  const closeMenu = () => {
    menu.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) closeMenu();
  });

  /* ==========================================================
     6. SCROLL REVEAL ANIMATIONS
     ========================================================== */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  /* ==========================================================
     7. NAVBAR SECTION LABEL + ACTIVE NAV LINK
     The logo text shows the name of the section in view
     (e.g. "Kỹ Năng & Công Cụ" at the Skills section) while
     still linking back to Home. Matching nav links get the
     gold active state.
     ========================================================== */
  const navLinks = document.querySelectorAll(".nav-link");

  // Observe every section in <main>
  const sections = [...document.querySelectorAll("main section[id]")];

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          currentSection = entry.target.id;

          // 1. Update navbar label (translated)
          const label =
            translations[currentLang][`section.${currentSection}`];
          if (label) setLogoText(label);

          // 2. Highlight the matching nav link (if any)
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${currentSection}`
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
