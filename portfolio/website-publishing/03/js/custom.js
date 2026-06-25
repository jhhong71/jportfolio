$(function () {
    // --- 0. Initialize Plugins ---
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // --- 1. SIMPLIFIED CURSOR FOLLOWER ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (cursorDot && cursorOutline) {
        // GSAP quickTo for performance
        const xToDot = gsap.quickTo(cursorDot, "x", { duration: 0.1, ease: "power3" });
        const yToDot = gsap.quickTo(cursorDot, "y", { duration: 0.1, ease: "power3" });
        
        const xToOutline = gsap.quickTo(cursorOutline, "x", { duration: 0.3, ease: "power3" });
        const yToOutline = gsap.quickTo(cursorOutline, "y", { duration: 0.3, ease: "power3" });

        // Initial set to center
        gsap.set(".cursor-dot, .cursor-outline", { xPercent: -50, yPercent: -50 });

        window.addEventListener("mousemove", e => {
            xToDot(e.clientX);
            yToDot(e.clientY);
            xToOutline(e.clientX);
            yToOutline(e.clientY);
        });

        // Hover Effect Handlers
        document.querySelectorAll('.hover-trigger').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('active');
            });
        });
    }

    // --- Hero Animation ---
    const heroTl = gsap.timeline();
    heroTl.to(".hero-text", {
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
    });

    // --- Text Marquee ---
    gsap.to("#scrolling-text", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: "#scrolling-text-container",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // --- Count Up ---
    gsap.utils.toArray('.count-up').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        ScrollTrigger.create({
            trigger: el,
            start: "top 80%",
            once: true,
            onEnter: () => {
                gsap.to(el, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    modifiers: {
                        innerHTML: value => Math.floor(value) + "%"
                    }
                });
            }
        });
    });

    // --- dRAST Scrollytelling ---
    const solutionTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#solution-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
            anticipatePin: 1
        }
    });

    solutionTl
        .to("#drast-circle", { scale: 1.2, borderColor: "#00909C", duration: 1 })
        .to("#stage-1", { opacity: 1, y: 0, duration: 1 }, "<")
        .to("#stage-1", { opacity: 0, y: -20, duration: 0.5 })
        .to("#scanner", { opacity: 1, top: "100%", duration: 1.5, ease: "power1.inOut" })
        .to("#stage-2", { opacity: 1, y: 0, duration: 0.5 }, "-=0.5")
        .to("#stage-2", { opacity: 0, y: -20, duration: 0.5 })
        .to("#scanner", { opacity: 0, duration: 0.1 })
        .to("#drast-circle", {
            backgroundColor: "#0f172a",
            scale: 0.8,
            boxShadow: "0 0 150px rgba(0, 144, 156, 0.4)",
            duration: 1.5
        })
        .to("#solution-title", { textShadow: "0 0 30px white", color: "#fff", duration: 1 }, "<")
        .to("#stage-3", { opacity: 1, y: 0, duration: 0.5 }, "-=0.5");

    // --- Bacteria Animation ---
    const petriDish = document.querySelector('.petri-dish .absolute');
    if (petriDish) {
        for (let i = 0; i < 10; i++) {
            const dot = document.createElement('div');
            dot.className = 'w-2 h-2 rounded-full bg-red-700 absolute animate-ping';
            dot.style.left = Math.random() * 80 + 10 + '%';
            dot.style.top = Math.random() * 80 + 10 + '%';
            dot.style.animationDelay = Math.random() * 2 + 's';
            dot.style.animationDuration = (Math.random() * 2 + 1) + 's';
            petriDish.appendChild(dot);
        }
    }

    // --- 2. CONSTELLATION EFFECT (Mouse Radius Limited) ---
    // 마우스 주변에서만 별자리가 보이도록 설정된 Modern GSAP 버전
    const canvas = document.getElementById('constellation');
  
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let points = [];
        
        // 설정값
        const config = {
            particleColor: 'rgba(0, 144, 156, 0.3)', // 점 색상 (브랜드 컬러)
            lineColor: 'rgba(0, 144, 156,',          // 선 색상
            particleAmount: 0,                        
            defaultSpeed: 0.5,                        
            variantSpeed: 1,                          
            linkRadius: 150,                          
            mouseRadius: 250 // 마우스 반경 (이 안에서만 보임)
        };

        const mouse = { x: -1000, y: -1000 };

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            
            const area = width * height;
            config.particleAmount = Math.floor(area / 5000); // 점 밀도 조절

            initPoints();
        }

        function initPoints() {
            points = [];
            for (let i = 0; i < config.particleAmount; i++) {
                points.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * (config.defaultSpeed + Math.random() * config.variantSpeed),
                    vy: (Math.random() - 0.5) * (config.defaultSpeed + Math.random() * config.variantSpeed),
                    size: Math.random() * 2 + 1 
                });
            }
        }

        gsap.ticker.add(() => {
            ctx.clearRect(0, 0, width, height);
            
            // 마우스 반경 체크를 위한 제곱 거리 (성능 최적화)
            const mouseRadiusSq = config.mouseRadius * config.mouseRadius;

            for (let i = 0; i < points.length; i++) {
                let p = points[i];

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // 마우스와의 거리 계산
                let dx = p.x - mouse.x;
                let dy = p.y - mouse.y;
                let distSq = dx * dx + dy * dy;

                // 마우스 반경 내에 있을 때만 그리기
                if (distSq < mouseRadiusSq) {
                    // 거리에 따른 투명도 조절 (가까울수록 진하게)
                    let alpha = 1 - distSq / mouseRadiusSq;
                    
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    // 색상에 투명도 적용
                    ctx.fillStyle = config.particleColor.replace('0.3)', (0.3 * alpha).toFixed(2) + ')');
                    ctx.fill();

                    // 선 연결 로직 (보이는 점들끼리만)
                    for (let j = i + 1; j < points.length; j++) {
                        let p2 = points[j];
                        let dx2 = p.x - p2.x;
                        let dy2 = p.y - p2.y;
                        let dist2 = Math.hypot(dx2, dy2);

                        if (dist2 < config.linkRadius) {
                            let opacity = (1 - dist2 / config.linkRadius) * alpha;
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = config.lineColor + opacity + ')';
                            ctx.stroke();
                        }
                    }
                }
            }
        });

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX; 
            mouse.y = e.clientY;
        });

        // 초기화 지연 실행
        setTimeout(resize, 100);
    }
});