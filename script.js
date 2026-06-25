/* ============================================================
   J's Front-end Publisher — Portfolio
   Data, gallery rendering, and interactions
   (built on the VOXR AI landing system)
   ============================================================ */
(function () {
  "use strict";

  const IMG = "images/";
  const SITE = "https://merryhee71.cafe24.com/";
  // LOCAL = self-hosted demos bundled into this project (relative path).
  // Migrate links from SITE → LOCAL as each demo folder is uploaded.
  const LOCAL = "";

  /* ---------- DATA ---------- */

  const enterprise = [
    { img: "enterprise-afgcms.png", title: "어센틱 CMS", contrib: "100%", scope: "화면 퍼블리싱", work: "화면설계서 기획 및 수수료 화면 구현, 컴포넌트 퍼블리싱", stack: ["Dhtmlx", "jQuery", "JSP"], links: [] },
    { img: "enterprise-afgerp.png", title: "어센틱 ERP", contrib: "100%", scope: "화면 퍼블리싱", work: "수수료 화면 구현 및 컴포넌트 퍼블리싱", stack: ["Dhtmlx", "jQuery", "JSP"], links: [] },
    { img: "enterprise-thebest.png", title: "더베스트", contrib: "100%", scope: "화면 퍼블리싱", work: "수수료 화면 퍼블리싱 및 유지보수", stack: ["Dhtmlx", "jQuery", "JSP"], links: [] },
    { img: "enterprise-openhi.png", title: "오픈노하우", contrib: "100%", scope: "화면 퍼블리싱 및 프론트엔드 개발", work: "강의 결제 및 학습창 구현 및 메인, 상세 화면 개발", stack: ["Kendo UI", "jQuery", "JSP"], links: [] },
    { img: "enterprise-01.png", title: "SGA 데이터연계시스템", contrib: "100%", scope: "Vue.js 기반 화면 퍼블리싱", work: "폐쇄망 내에서 Vuetify · ag-Grid 활용 UI 구현", stack: ["Vue.js", "Vuetify", "ag-Grid"], links: [{ t: "GitHub", u: "https://github.com/jhhong71/lms-admin-project", code: true }, { t: "Live Demo", u: "https://lms-admin-project.vercel.app/", solid: true }] },
    { img: "enterprise-02.png", title: "서울사립초등학교", contrib: "100%", scope: "화면 퍼블리싱 및 프론트엔드 개발", work: "회원가입 및 입학 신청 시스템 구현", stack: ["JSP", "jQuery", "Kendo UI"], links: [{ t: "GitHub", u: "https://github.com/jhhong71/student-admission-system", code: true }, { t: "Live Demo", u: "https://student-admission-system-snowy.vercel.app/", solid: true }] },
    { img: "enterprise-03.png", title: "에듀퓨어 LMS 시스템", contrib: "80%", scope: "LMS 화면 퍼블리싱 및 유지보수", work: "강의 영상 플레이어 UI 커스터마이징 및 진도율 연동", stack: ["JSP", "jQuery", "MediaElement", "Kendo UI"], links: [{ t: "Live Demo", u: "https://custom-player-ui.vercel.app/", solid: true }] },
    { img: "enterprise-04.png", title: "전기안전인재개발원", contrib: "30%", scope: "웹접근성 인증마크 갱신", work: "웹접근성 기준 점검 및 개선 반영", stack: ["JSP", "jQuery", "slick-slider"], links: [] },
    { img: "enterprise-05.png", title: "교원대학교", contrib: "90%", scope: "화면 퍼블리싱 및 프론트엔드 개발", work: "교육 시스템 UI 구현", stack: ["JSP", "jQuery", "Kendo UI"], links: [] },
    { img: "enterprise-06.png", title: "KMA 하계 최고경영자 세미나 신청", contrib: "100%", scope: "사용자 · 관리자 화면 퍼블리싱 및 프론트엔드", work: "교육 · 숙박 · 항공 · 렌터카 · 골프 예약 시스템 구현", stack: ["JSP", "jQuery", "Kendo UI"], links: [] },
    { img: "enterprise-07.png", title: "대한산업안전협회", contrib: "30%", scope: "유지보수 및 추가기능 개발", work: "수료증 출력 · PDF 다운로드 및 리스트 UI 개선", stack: ["JSP", "jQuery", "Kendo UI"], links: [] },
    { img: "enterprise-08.png", title: "KMA 공개교육", contrib: "80%", scope: "홈페이지 리뉴얼 퍼블리싱 및 프론트엔드", work: "메인 리뉴얼 및 학습 캘린더 기능 구현 (Mobiscroll)", stack: ["JSP", "jQuery", "swiper", "Mobiscroll"], links: [] },
    { img: "enterprise-09.png", title: "KMA HUB", contrib: "80%", scope: "홈페이지 리뉴얼 퍼블리싱", work: "인터랙션 애니메이션 구현", stack: ["JSP", "jQuery", "GSAP", "AOS", "CountUp"], links: [] },
    { img: "enterprise-10.png", title: "서울특별시교육청 교육연수원", contrib: "80%", scope: "고도화 퍼블리싱 및 프론트엔드", work: "Kendo Chart 기반 데이터 시각화 화면 구현", stack: ["JSP", "jQuery", "Kendo UI"], links: [] },
    { img: "enterprise-11.png", title: "한국산업기술보호협회", contrib: "80%", scope: "화면 퍼블리싱 및 유지보수", work: "디자인 변경 사항 반영", stack: ["JSP", "jQuery", "Kendo UI"], links: [] },
    { img: "enterprise-12.png", title: "경운대학교", contrib: "100%", scope: "화면 퍼블리싱 및 프론트엔드 개발", work: "다국어(한국어 · 베트남어) 지원 및 채용공고 기능 구현", stack: ["JSP", "jQuery", "Kendo UI"], links: [] },
    { img: "enterprise-13.png", title: "현대NGV", contrib: "100%", scope: "화면 퍼블리싱 및 프론트엔드", work: "내부 시스템 UI 구현", stack: ["JSP", "jQuery", "Kendo UI"], links: [] }
  ];

  const websites = [
    {
      img: "web-01.png", shot: "web-01-screen.png", kicker: "가방 브랜드 쇼핑몰", title: "TOUTYEST · 투티에",
      desc: "가방 브랜드 투티에를 반응형으로 제작했습니다. 기존 사이트에서 가려져 있던 네비게이션이 잘 보이도록 사용자 편의성을 더욱 고려했습니다.",
      specs: [["디자인", "Photoshop"], ["퍼블리싱", "HTML · CSS · jQuery"], ["레이아웃", "CSS Flex"], ["플러그인", "Slick slider"], ["제작기간", "0.5일"], ["참여율", "100%"]],
      links: [{ t: "PC Ver.", u: LOCAL + "portfolio/website-publishing/01/index.html", solid: true }, { t: "Mobile Ver.", u: LOCAL + "portfolio/website-publishing/website-publishing-mockup-01.html" }]
    },
    {
      img: "web-02.png", shot: "web-02-screen.png", kicker: "여성의류 쇼핑몰", title: "MOIA · 모이아",
      desc: "개선점을 기획 단계부터 체계적으로 분석하고, 기능을 고려해 UI 디자인을 진행했습니다. 문자열 변환 함수로 수량 증감에 따른 총합계 금액 계산을 JavaScript로 구현했습니다.",
      specs: [["디자인", "Photoshop"], ["퍼블리싱", "+ JavaScript"], ["레이아웃", "CSS Flex"], ["플러그인", "Slick slider"], ["제작기간", "2일"], ["참여율", "100%"]],
      links: [{ t: "PC Ver.", u: LOCAL + "portfolio/website-publishing/02/index.html", solid: true }, { t: "기획서", u: LOCAL + "doc/moia-web-plan.pdf" }, { t: "기능정의서", u: LOCAL + "doc/moia-web-function-wireframe.pdf" }]
    },
    {
      img: "web-03.png", shot: "web-03-screen.png", kicker: "바이오 기업 홍보 페이지", title: "Quanta Matrix",
      desc: "퀀타매트릭스 기업 페이지를 GSAP 라이브러리로 리디자인했습니다. ScrollTrigger, Timeline, Stagger, Modifiers & Snap, Utils를 활용해 작업했습니다.",
      specs: [["퍼블리싱", "GSAP"], ["레이아웃", "CSS"], ["제작기간", "0.1일"], ["참여율", "100%"]],
      links: [{ t: "PC Ver.", u: LOCAL + "portfolio/website-publishing/03/index.html", solid: true }, { t: "Mobile Ver.", u: LOCAL + "portfolio/website-publishing/website-publishing-mockup-03.html" }]
    },
    {
      img: "web-04.png", shot: "web-04-screen.png", kicker: "호텔 · 리조트", title: "샹그릴라 보라카이 리조트",
      desc: "기존 샹그릴라 보라카이 리조트를 벤치마킹해 새로운 구조로 리디자인했습니다. 단시간에 반응형을 고려한 구조 설계에 가장 중점을 두었으며 Flex를 사용했습니다.",
      specs: [["디자인", "Photoshop"], ["퍼블리싱", "HTML · CSS · jQuery"], ["레이아웃", "CSS Flex"], ["플러그인", "Slick slider"], ["제작기간", "0.1일"], ["참여율", "100%"]],
      links: [{ t: "PC Ver.", u: LOCAL + "portfolio/website-publishing/04/index.html", solid: true }, { t: "Mobile Ver.", u: LOCAL + "portfolio/website-publishing/website-publishing-mockup-04.html" }]
    }
    /* Hidden per request — 풀무원 디자인밀 DESIGNMEAL card. Uncomment to restore.
    ,{
      img: "mobile-01.png", kicker: "모바일 웹 리뉴얼 · 기획부터 퍼블리싱까지", title: "풀무원 디자인밀 DESIGNMEAL",
      desc: "건강식 정기배송 수요 증가 트렌드에 맞춰, 보다 편리하게 정기구독·구매할 수 있도록 모바일 웹을 리뉴얼했습니다. 디자인밀 고유의 건강한 아이덴티티 컬러 사용범위를 넓혀 확실한 건강식 이미지를 전달합니다.",
      swatches: ["#113E3A", "#3E806A", "#FA622F"],
      specs: [["담당 범위", "기획 · UI 디자인 · 퍼블리싱"], ["웹 스킬", "HTML · CSS · jQuery · JS"], ["레이아웃", "Flex 기반"], ["기간 · 참여", "5일 · 100%"]],
      links: [{ t: "VIEW", u: SITE + "mobile-web-detail.html", solid: true }]
    }
    */
  ];

  const clones = [
    { img: "clone-01.jpg", title: "Netflix", links: [{ t: "PC Ver.", u: LOCAL + "portfolio/clone-coding/01/index.html", solid: true }, { t: "Mobile Ver.", u: LOCAL + "portfolio/clone-coding/clone-coding-mockup-01.html" }] },
    { img: "clone-02.jpg", title: "Apple", links: [{ t: "PC Ver.", u: LOCAL + "portfolio/clone-coding/02/index.html", solid: true }, { t: "Mobile Ver.", u: LOCAL + "portfolio/clone-coding/clone-coding-mockup-02.html" }] },
    { img: "clone-03.jpg", title: "Chrome", links: [{ t: "PC Ver.", u: LOCAL + "portfolio/clone-coding/03/index.html", solid: true }, { t: "Mobile Ver.", u: LOCAL + "portfolio/clone-coding/clone-coding-mockup-03.html" }] }
  ];

  const PC = "portfolio/practical-coding/";
  const practical = {
    Prototype: range(11).map((n) => ({ img: "prototype-ui-" + pad(n) + (n === 6 ? "-1" : n === 9 ? "-1" : "") + ".png", u: LOCAL + PC + "prototype/" + pad(n) + "/index.html" })),
    "Tab · Accordion": range(9).map((n) => ({ img: "tab-accordion-" + pad(n) + ".png", u: LOCAL + PC + "tab-accordion/" + pad(n) + "/index.html" })),
    Hover: range(7).map((n) => ({ img: "hover-effect-ui-" + pad(n) + ".png", u: LOCAL + PC + "hover-effect/" + pad(n) + "/index.html" })),
    Form: range(7).map((n) => ({ img: "form-ui-" + pad(n) + ".png", u: LOCAL + PC + "form/" + pad(n) + "/index.html" })),
    "Card UI": range(6).map((n) => ({ img: "card-ui-" + pad(n) + ".png", u: LOCAL + PC + "card-ui/" + pad(n) + "/" + (n === 4 ? "index-light-dark-change.html" : "index.html") })),
    Animation: range(9).map((n) => ({ img: "animation-ui-" + pad(n) + ".png", u: LOCAL + PC + "animation/" + pad(n) + "/index.html" }))
  };

  const scssWorks = [
    { img: "scss-01.png", label: "Login form" }, { img: "scss-02.png", label: "Animation" },
    { img: "scss-03.png", label: "Accordion" }, { img: "scss-04.png", label: "Hover effect" },
    { img: "scss-05.png", label: "Hover effect" }, { img: "scss-06.png", label: "Figma logo" }
  ].map((x, i) => ({ ...x, u: LOCAL + PC + "scss/" + pad(i + 1) + "/index.html" }));

  const graphics = [
    ["graphic-01.png", "Map", "Illustrator"], ["graphic-02.png", "Watch", "Illustrator"],
    ["graphic-03.png", "Airplane", "Illustrator"], ["graphic-04.png", "Business Card", "Illustrator"],
    ["graphic-05.png", "Business Card", "Illustrator"], ["graphic-06.png", "Magazine", "InDesign"],
    ["graphic-07.png", "Book Cover", "InDesign"], ["graphic-08.png", "Leaflet", "InDesign"],
    ["graphic-09.png", "Leaflet", "InDesign"], ["graphic-10.png", "Poster", "Illustrator"],
    ["graphic-11.png", "CD", "Photoshop"], ["graphic-12.png", "CD", "Photoshop"],
    ["graphic-13.png", "Label", "Illustrator"]
  ];

  function pad(n) { return String(n).padStart(2, "0"); }
  function range(n) { return Array.from({ length: n }, (_, i) => i + 1); }
  function extLink(label, url, opts) {
    opts = opts || {};
    const cls = "proj-link" + (opts.solid ? " proj-link--solid" : "");
    const icon = opts.code
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';
    return '<a class="' + cls + '" href="' + url + '" target="_blank" rel="noopener">' + icon + label + "</a>";
  }

  /* ---------- RENDER ---------- */

  // Enterprise — Swiper slides
  const entMount = document.getElementById("enterpriseGrid");
  if (entMount) {
    // Enterprise screenshots are now bundled locally (uploaded by the owner).
    const entShot = (img) => IMG + img;
    entMount.innerHTML = enterprise.map((p) => `
      <div class="swiper-slide">
        <article class="proj-card">
          <div class="proj-card__thumb${p.img ? "" : " proj-card__thumb--nda"}">
            ${p.img
              ? `<img src="${entShot(p.img)}" alt="${p.title}" loading="lazy" />`
              : `<span class="nda-thumb__lock" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span><span class="nda-thumb__note">NDA · 내부 시스템</span>`}
            ${p.contrib ? `<span class="proj-card__contrib">${p.contrib} 기여</span>` : ""}
          </div>
          <div class="proj-card__body">
            <h3 class="proj-card__title">${p.title}</h3>
            <ul class="proj-card__meta">
              <li><b>담당</b><span class="kr">${p.scope}</span></li>
              <li><b>작업</b><span class="kr">${p.work}</span></li>
            </ul>
            ${p.stack ? `<div class="proj-card__stack">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
            ${p.links.length ? `<div class="proj-card__links">${p.links.map((l) => extLink(l.t, l.u, { solid: l.solid, code: l.code })).join("")}</div>` : ""}
          </div>
        </article>
      </div>`).join("");
    if (window.Swiper) {
      const entSwiper = new Swiper(".ent-swiper", {
        slidesPerView: 1.08,
        spaceBetween: 20,
        grabCursor: true,
        watchOverflow: true,
        navigation: { prevEl: "#entPrev", nextEl: "#entNext" },
        pagination: { el: "#entPagination", clickable: true },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          980: { slidesPerView: 3, spaceBetween: 22 },
          1280: { slidesPerView: 4, spaceBetween: 22 },
          1480: { slidesPerView: 5, spaceBetween: 22 }
        }
      });
      // Show at most 5 pagination dots, advancing one "page" (5) at a time.
      windowPagination(entSwiper, document.getElementById("entPagination"), 5);
    }
  }

  /* Limit a Swiper's pagination to a sliding window of `size` bullets.
     The window flips in pages (0–4, 5–9, …) as the active slide moves,
     keeping the dot row compact on small screens. */
  function windowPagination(swiper, el, size) {
    if (!swiper || !el) return;
    const apply = () => {
      const bullets = Array.from(el.querySelectorAll(".swiper-pagination-bullet"));
      if (bullets.length <= size) { bullets.forEach((b) => (b.style.display = "")); return; }
      let active = bullets.findIndex((b) => b.classList.contains("swiper-pagination-bullet-active"));
      if (active < 0) active = swiper.realIndex || 0;
      const page = Math.floor(active / size);
      const start = page * size;
      const end = start + size;
      bullets.forEach((b, i) => { b.style.display = i >= start && i < end ? "" : "none"; });
    };
    swiper.on("paginationRender", apply);
    swiper.on("paginationUpdate", apply);
    swiper.on("slideChange", apply);
    apply();
  }

  // Website publishing (scroll-pin track)
  const webMount = document.getElementById("casesTrack");
  if (webMount) {
    const intro = webMount.querySelector(".cases-pin__intro");
    const cards = websites.map((w) => {
      // All web-case thumbnails are local PC-site screenshots captured from
      // the self-hosted demos under portfolio/website-publishing/.
      const shot = w.shot ? IMG + w.shot : IMG + w.img;
      return `
      <article class="web-case${w.swatches ? " web-case--mobile" : ""}">
        <div class="web-case__shot"><img src="${shot}" alt="${w.title} — 실제 PC 화면" loading="lazy" /></div>
        <div class="web-case__info">
          <span class="web-case__kicker">${w.kicker}</span>
          <h3 class="web-case__title">${w.title}</h3>
          <p class="web-case__desc kr">${w.desc}</p>
          ${w.swatches ? `<div class="web-case__swatches">${w.swatches.map((c) => `<i style="background:${c}"></i>`).join("")}</div>` : ""}
          <div class="web-case__specs">${w.specs.map((s) => `<div><b>${s[0]}</b>${s[1]}</div>`).join("")}</div>
          <div class="web-case__links">${w.links.map((l) => extLink(l.t, l.u, { solid: l.solid })).join("")}</div>
        </div>
      </article>`;
    }).join("");
    intro.insertAdjacentHTML("afterend", cards);

    // Equalize all web-case heights to the tallest card (no inner scroll).
    const caseEls = Array.from(webMount.querySelectorAll(".web-case"));
    const equalizeCases = () => {
      caseEls.forEach((c) => { c.style.height = "auto"; });
      // next frame so layout reflows at natural height before measuring
      requestAnimationFrame(() => {
        let max = 0;
        caseEls.forEach((c) => { max = Math.max(max, c.offsetHeight); });
        if (max > 0) caseEls.forEach((c) => { c.style.height = max + "px"; });
      });
    };
    equalizeCases();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalizeCases);
    window.addEventListener("load", equalizeCases);
    window.addEventListener("resize", equalizeCases);
    caseEls.forEach((c) => {
      const img = c.querySelector(".web-case__shot img");
      if (img && !img.complete) img.addEventListener("load", equalizeCases, { once: true });
    });
    setTimeout(equalizeCases, 600);
    setTimeout(equalizeCases, 1500);
  }

  // Clone coding
  const cloneMount = document.getElementById("cloneGrid");
  if (cloneMount) {
    const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>';
    const cloneLink = (l) => {
      const short = /^PC/.test(l.t) ? "PC" : /^Mobile/i.test(l.t) ? "Mo" : l.t;
      const cls = "proj-link proj-link--abbr" + (l.solid ? " proj-link--solid" : "");
      return `<a class="${cls}" href="${l.u}" target="_blank" rel="noopener">${arrow}<span class="lbl-full">${l.t}</span><span class="lbl-short">${short}</span></a>`;
    };
    cloneMount.innerHTML = clones.map((c, i) => `
      <div class="swiper-slide">
        <article class="proj-card reveal" data-delay="${i + 1}">
          <div class="proj-card__thumb"><img src="${IMG + c.img}" alt="${c.title}" loading="lazy" /></div>
          <div class="proj-card__body">
            <h3 class="proj-card__title">${c.title}</h3>
            <div class="proj-card__links">${c.links.map(cloneLink).join("")}</div>
          </div>
        </article>
      </div>`).join("");

    // Same carousel design as Enterprise Publishing (3-up desktop → swipe on mobile).
    if (window.Swiper) {
      new Swiper(".clone-swiper", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        grabCursor: true,
        watchOverflow: true,
        navigation: { prevEl: "#clonePrev", nextEl: "#cloneNext" },
        pagination: { el: "#clonePagination", clickable: true },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          980: { slidesPerView: 3, spaceBetween: 22 }
        }
      });
    }
  }

  // Practical — filter tabs + groups
  const tabsMount = document.getElementById("practicalTabs");
  const galMount = document.getElementById("practicalGallery");
  if (tabsMount && galMount) {
    const cats = Object.keys(practical);
    tabsMount.innerHTML =
      '<div class="swiper-wrapper">' +
      cats.map((c, i) => `<button class="swiper-slide filter-tab${i === 0 ? " is-active" : ""}" data-cat="${c}">${c}</button>`).join("") +
      "</div>";
    galMount.innerHTML = cats.map((c, i) => `
      <div class="thumb-group${i === 0 ? " is-active" : ""}" data-group="${c}">
        <div class="thumb-grid">
          ${practical[c].map((it) => `
            <a class="thumb" href="${it.u}" target="_blank" rel="noopener">
              <img src="${IMG + it.img}" alt="${c} UI" loading="lazy" />
              <span class="thumb__cap"><span>View demo</span></span>
            </a>`).join("")}
        </div>
      </div>`).join("");

    // Glide the tab row like swiper-slides: free-drag with momentum.
    let tabsSwiper = null;
    if (window.Swiper) {
      tabsSwiper = new Swiper(tabsMount, {
        slidesPerView: "auto",
        spaceBetween: 10,
        grabCursor: true,
        centerInsufficientSlides: true,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        resistanceRatio: 0.72,
        freeMode: { enabled: true, sticky: false, momentum: true, momentumRatio: 0.7, momentumVelocityRatio: 0.7 }
      });
      // Recalculate once the real fonts swap in — otherwise Swiper measures the
      // narrower fallback-font tab widths, thinks nothing overflows, and blocks
      // scrolling toward the end (right→left drag).
      const refreshTabs = () => tabsSwiper && tabsSwiper.update();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshTabs);
      window.addEventListener("load", refreshTabs);
      window.addEventListener("resize", refreshTabs);
      setTimeout(refreshTabs, 400);
      setTimeout(refreshTabs, 1200);
    }

    tabsMount.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;
      if (tabsSwiper && tabsSwiper.allowClick === false) return; // ignore the click that ends a drag
      tabsMount.querySelectorAll(".filter-tab").forEach((b) => b.classList.toggle("is-active", b === btn));
      galMount.querySelectorAll(".thumb-group").forEach((g) => g.classList.toggle("is-active", g.dataset.group === btn.dataset.cat));
      if (tabsSwiper) {
        const idx = Array.from(tabsMount.querySelectorAll(".filter-tab")).indexOf(btn);
        if (idx > -1) tabsSwiper.slideTo(idx); // smoothly bring the chosen tab into view
      }
    });
  }

  // SCSS works
  const scssMount = document.getElementById("scssGrid");
  if (scssMount) {
    scssMount.innerHTML = scssWorks.map((s) => `
      <a class="thumb" href="${s.u}" target="_blank" rel="noopener">
        <img src="${IMG + s.img}" alt="${s.label}" loading="lazy" />
        <span class="thumb__cap"><b>${s.label}</b></span>
      </a>`).join("");
  }

  // Graphic works (open in lightbox)
  const gxMount = document.getElementById("graphicGrid");
  if (gxMount) {
    gxMount.innerHTML = graphics.map(([img, name, tool]) => `
      <a class="graphic-item" href="${IMG + img}" data-lightbox>
        <img src="${IMG + img}" alt="${name}" loading="lazy" />
        <span class="graphic-item__cap"><b>${name}</b><small>by ${tool}</small></span>
      </a>`).join("");
  }

  /* ---------- LIGHTBOX ---------- */
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    document.addEventListener("click", (e) => {
      const a = e.target.closest("[data-lightbox]");
      if (a) { e.preventDefault(); lbImg.src = a.getAttribute("href"); lightbox.classList.add("is-open"); return; }
      if (e.target.closest(".lightbox__close") || e.target === lightbox) lightbox.classList.remove("is-open");
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") lightbox.classList.remove("is-open"); });
  }

  /* ============================================================
     INTERACTIONS (from the VOXR system)
     ============================================================ */

  /* 1. Navbar background on scroll */
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > 24) navbar.classList.add("is-scrolled");
    else navbar.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* 2. Mobile menu */
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  navToggle.addEventListener("click", () => {
    const open = navToggle.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });
  mobileMenu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navToggle.classList.remove("is-open");
      mobileMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* 3. Scroll-reveal */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    const revealInView = () => {
      revealEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.96 && r.bottom > 0) { el.classList.add("is-visible"); io.unobserve(el); }
      });
    };
    revealInView();
    window.addEventListener("load", revealInView);
    setTimeout(() => {
      revealEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) { el.style.transition = "none"; el.classList.add("is-visible"); void el.offsetWidth; }
      });
    }, 1300);
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* 4. FAQ accordion */
  const faqGrid = document.getElementById("faqGrid");
  if (faqGrid) {
    faqGrid.querySelectorAll(".faq-item__q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const answer = item.querySelector(".faq-item__a");
        const isOpen = item.classList.contains("is-open");
        faqGrid.querySelectorAll(".faq-item").forEach((other) => {
          other.classList.remove("is-open");
          other.querySelector(".faq-item__a").style.maxHeight = null;
          other.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("is-open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* 5. Horizontal scroll-pin (website cases) + impact parallax */
  const pin = document.querySelector(".cases-pin");
  const track = document.getElementById("casesTrack");
  const statCards = Array.from(document.querySelectorAll("#statCards .stat-card"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const STAT_FACTORS = [1.8, 0.85, 1.35];
  const STAT_RANGE = 250, STAT_DOWN_CAP = 36;

  function layoutPin() {
    if (!pin || !track) return;
    if (isMobile() || reduceMotion) { pin.style.height = ""; return; }
    const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
    pin.style.height = window.innerHeight + overflow + "px";
  }
  let targetX = 0, currentX = 0;
  function computeTargets() {
    if (pin && track && !isMobile() && !reduceMotion) {
      const total = pin.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - pin.offsetTop;
      const p = clamp(scrolled / (total || 1), 0, 1);
      const maxX = Math.max(0, track.scrollWidth - window.innerWidth);
      targetX = -p * maxX;
    } else { targetX = 0; }
    if (statCards.length && !reduceMotion && !isMobile()) {
      // Drive the staggered rise by the impact section's pin progress, so the
      // cards visibly separate while the screen is held fixed on entry.
      const impact = document.getElementById("impact");
      if (impact) {
        const total = impact.offsetHeight - window.innerHeight;
        const scrolled = window.scrollY - impact.offsetTop;
        const p = clamp(scrolled / (total || 1), 0, 1);
        const STAT_START = [320, 200, 270];   // each card starts a different distance down
        const STAT_DELAY = [0, 0.18, 0.34];  // and begins rising at a different time
        statCards.forEach((card, i) => {
          const d = STAT_DELAY[i % STAT_DELAY.length];
          const local = clamp((p - d) / (1 - d), 0, 1);
          const eased = 1 - Math.pow(1 - local, 3);
          const y = STAT_START[i % STAT_START.length] * (1 - eased);
          card.style.transform = "translateY(" + y.toFixed(1) + "px)";
        });
      }
    } else if (statCards.length) {
      statCards.forEach((card) => { card.style.transform = ""; });
    }
  }
  function rafLoop() {
    computeTargets();
    currentX += (targetX - currentX) * 0.12;
    if (Math.abs(targetX - currentX) < 0.1) currentX = targetX;
    if (track && !isMobile() && !reduceMotion) track.style.transform = "translateX(" + currentX.toFixed(2) + "px)";
    requestAnimationFrame(rafLoop);
  }
  window.addEventListener("resize", layoutPin);
  window.addEventListener("load", layoutPin);
  layoutPin();
  if (!reduceMotion) requestAnimationFrame(rafLoop);
  else computeTargets();

  /* 5a. Desktop pin: let a horizontal trackpad swipe (or mouse drag) advance
     the pinned gallery — it's driven by vertical scroll, so translate the
     horizontal gesture into vertical scroll while the section is pinned. */
  if (pin) {
    const pinned = () => {
      if (isMobile() || reduceMotion) return false;
      const top = pin.offsetTop;
      const bottom = top + pin.offsetHeight - window.innerHeight;
      return window.scrollY >= top - 1 && window.scrollY <= bottom + 1;
    };
    pin.addEventListener("wheel", (e) => {
      if (!pinned()) return;
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical scroll handled natively
      e.preventDefault();
      window.scrollBy(0, e.deltaX); // swipe left → advance, swipe right → go back
    }, { passive: false });

    // mouse drag-to-scrub on desktop pin
    let dDrag = false, dStartX = 0, dStartY = 0, moved = false;
    pin.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || !pinned()) return;
      if (e.target.closest("a, button")) return; // don't fight links/buttons
      dDrag = true; moved = false; dStartX = e.clientX; dStartY = window.scrollY;
      pin.style.cursor = "grabbing";
    });
    window.addEventListener("pointermove", (e) => {
      if (!dDrag) return;
      const dx = e.clientX - dStartX;
      if (Math.abs(dx) > 4) moved = true;
      window.scrollTo(0, dStartY - dx); // drag left → advance
    });
    window.addEventListener("pointerup", () => {
      if (!dDrag) return;
      dDrag = false; pin.style.cursor = "";
    });
    pin.addEventListener("click", (e) => { if (moved) { e.preventDefault(); } }, true);
  }

  /* 5b. Swipeable cases on mobile / reduced-motion:
     dot indicators + mouse drag-to-scroll + wheel→horizontal.
     Only active when the track is actually a horizontal scroller. */
  const dotsWrap = document.getElementById("casesDots");
  const scrollMode = () => {
    if (!track) return false;
    const ox = getComputedStyle(track).overflowX;
    return ox === "auto" || ox === "scroll";
  };
  function cardCenterOffset(card) {
    const tr = track.getBoundingClientRect();
    const cr = card.getBoundingClientRect();
    return track.scrollLeft + (cr.left - tr.left) - (track.clientWidth - cr.width) / 2;
  }
  if (track && dotsWrap) {
    const cards = Array.from(track.querySelectorAll(".web-case"));
    // all swipe targets, including the intro panel (so drag-back can reach it)
    const slides = Array.from(track.children).filter((el) =>
      el.matches(".cases-pin__intro, .web-case")
    );
    dotsWrap.innerHTML = cards
      .map((_, i) => `<button type="button" role="tab" aria-label="${i + 1}번째 프로젝트로 이동"></button>`)
      .join("");
    const dots = Array.from(dotsWrap.children);

    dots.forEach((dot, i) =>
      dot.addEventListener("click", () => {
        track.scrollTo({ left: Math.max(0, cardCenterOffset(cards[i])), behavior: "smooth" });
      })
    );

    function nearestEl(list) {
      const tr = track.getBoundingClientRect();
      const center = tr.left + track.clientWidth / 2;
      let best = list[0], bestDist = Infinity;
      list.forEach((el) => {
        const cr = el.getBoundingClientRect();
        const d = Math.abs(cr.left + cr.width / 2 - center);
        if (d < bestDist) { bestDist = d; best = el; }
      });
      return best;
    }

    let syncQueued = false;
    function nearestCard() {
      const tr = track.getBoundingClientRect();
      const center = tr.left + track.clientWidth / 2;
      let best = 0, bestDist = Infinity;
      cards.forEach((card, i) => {
        const cr = card.getBoundingClientRect();
        const d = Math.abs(cr.left + cr.width / 2 - center);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    }
    function syncDots() {
      syncQueued = false;
      if (!scrollMode() || !cards.length) return;
      const best = nearestCard();
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === best));
    }
    track.addEventListener("scroll", () => {
      if (!syncQueued) { syncQueued = true; requestAnimationFrame(syncDots); }
    }, { passive: true });
    window.addEventListener("resize", syncDots);
    syncDots();

    /* NOTE: no wheel→horizontal hijack here. Converting vertical wheel into
       horizontal scroll (with preventDefault) would swallow the page's
       vertical scroll on narrow widths, making the page feel stuck while the
       pointer is over this section. Mouse users drag the cards (below) or tap
       the dots; touch + trackpad horizontal swipes work via native overflow. */

    /* mouse drag-to-scroll (touch uses native scroll/snap) */
    let dragging = false, startX = 0, startScroll = 0;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse" || !scrollMode()) return;
      dragging = true; startX = e.clientX; startScroll = track.scrollLeft;
      track.classList.add("is-dragging");
    });
    window.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      track.scrollLeft = startScroll - (e.clientX - startX);
    });
    window.addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove("is-dragging");
      if (slides.length) track.scrollTo({ left: Math.max(0, cardCenterOffset(nearestEl(slides))), behavior: "smooth" });
    });
  }

  /* 6. Smooth-scroll offset for fixed navbar */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const id = this.getAttribute("href");
      if (id === "#" || id === "#top") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
