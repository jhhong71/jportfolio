(function() {
    $(window).scroll(function() {
        // gnb fixed
        if ($(this).scrollTop() > 100) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }

        //gnb anchor css
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();
        var mainPosition = $('#mainSec').offset().top;
        var mainHeight = $('#mainSec').innerHeight();
        var bannerPosition = $('#bannerSec').offset().top;
        var bannerHeight = $('#bannerSec').innerHeight();
        var programPosition = $('#program').offset().top;
        var programHeight = $('#program').innerHeight();
        var reviewPosition = $('#review').offset().top;
        var bannerBgPosition = $('#bannerBgSec').offset().top;
        var contactPosition = $('#contact').offset().top;
        var contactHeight = $('#contact').innerHeight();
        
        $('.menu-item').each(function() {
            var linkHref = $(this).find('a').attr('href');
            if (linkHref === '#program' && scrollPosition >= 400 && scrollPosition < bannerBgPosition) {
                $(this).addClass('on');
                $(this).siblings('.menu-item').removeClass('on');
            } else if (linkHref === '#review' && scrollPosition + 210 > bannerBgPosition  && scrollPosition < reviewPosition) {
                $(this).addClass('on');
                $(this).siblings('.menu-item').removeClass('on');
            } else if (linkHref === '#contact' && scrollPosition + 200 >= reviewPosition && scrollPosition >= documentHeight - 300) {
                $(this).addClass('on');
                $(this).siblings('.menu-item').removeClass('on');
            } else {
                $(this).removeClass('on');
            }

            if (scrollPosition + windowHeight >= documentHeight - 10) {
                $('.menu-item').eq(1).removeClass('on');
                $('.menu-item').eq(2).addClass('on');
            }

            //글로벌 연수후기
            if( bannerBgPosition < scrollPosition+300){
                $("#review").addClass('animated');
            }else{
                $("#review").removeClass('animated');
            }
        });

        //Quick Menu
        var footerTop = $('footer').offset().top;
        var quickMenu = $('#quickMenu');
        var scrollBottom = $(window).scrollTop() + $(window).height(); // 브라우저의 하단 위치

        if (scrollBottom > footerTop - 20) {
            // footer에 도달했을 때
            quickMenu.css('bottom', scrollBottom - footerTop + 20);
        } else {
            // footer에 도달하지 않았을 때
            quickMenu.css('bottom', '20px');
        }

        if(scrollPosition > 100){
            $("#quickMenu").addClass('on');
        }else{
            $("#quickMenu").removeClass('on');
        }

    }); //End of the $(window).scroll

    $(document).ready(function() {
        //가상데이터 세팅
        var dummyData = [
            {
                classify: "인공지능",
                title: "ChatRTX 업데이트",
                date: "2025.01.20 ~ 2025.04.30",
                price: "110,000원",
                badge: "일반",
                image: ""
            },
            {
                classify: "디자인 및 시뮬레이션",
                title: "OpenUSD로 제조업의 미래를 열다",
                date: "2025.05.15 ~ 2025.06.15",
                price: "120,000원",
                badge: "일반",
                image: "/image"
            },
            {
                classify: "로보틱스 및 엣지 컴퓨팅",
                title: "제조 및 물류에 생성적 AI를 활용하는 NVIDIA Isaac",
                date: "2025.05.01 ~ 2025.12.10",
                price: "215,000원",
                badge: "일반",
                image: "/image"
            },
            {
                classify: "고성능 컴퓨팅",
                title: "NVIDIA, 국가 AI 연구 리소스 파일러에 주요 기여자 참여 등록",
                date: "2025.05.10 ~ 2025.06.10",
                price: "130,000원",
                badge: "일반",
                image: ""
            },
            {
                classify: "게이밍 및 크리에이티브",
                title: "GeForce RTX 40 시리즈 그래픽",
                date: "2025.08.05 ~ 2025.10.05",
                price: "140,000원",
                badge: "일반",
                image: "/image"
            },
            {
                classify: "오토모티브",
                title: "글로벌 자동차 파트너, AI의 미래를 선보이다",
                date: "2025.09.01 ~ 2025.12.01",
                price: "150,000원",
                badge: "일반",
                image: "/image"
            }
        ];

        //가상데이터2 세팅
        var dummyData2 = [
            {
                classify: "인공지능",
                title: "ChatRTX 업데이트",
                date: "2025.01.20 ~ 2025.04.30",
                price: "110,000원",
                badge: "일반",
                image: "/image"
            },
            {
                classify: "디자인 및 시뮬레이션",
                title: "OpenUSD로 제조업의 미래를 열다",
                date: "2025.05.15 ~ 2025.06.15",
                price: "120,000원",
                badge: "일반",
                image: "/image"
            },
            {
                classify: "로보틱스 및 엣지 컴퓨팅",
                title: "제조 및 물류에 생성적 AI를 활용하는 NVIDIA Isaac",
                date: "2025.05.01 ~ 2025.12.10",
                price: "215,000원",
                badge: "일반",
                image: "/image"
            },
            {
                classify: "고성능 컴퓨팅",
                title: "NVIDIA, 국가 AI 연구 리소스 파일러에 주요 기여자 참여 등록",
                date: "2025.05.10 ~ 2025.06.10",
                price: "130,000원",
                badge: "일반",
                image: "/image"
            },
            {
                classify: "게이밍 및 크리에이티브",
                title: "GeForce RTX 40 시리즈 그래픽",
                date: "2025.08.05 ~ 2025.10.05",
                price: "140,000원",
                badge: "일반",
                image: ""
            },
            {
                classify: "오토모티브",
                title: "글로벌 자동차 파트너, AI의 미래를 선보이다",
                date: "2025.09.01 ~ 2025.12.01",
                price: "150,000원",
                badge: "일반",
                image: ""
            }
        ];

        //가상데이터3 세팅
        var dummyData3 = [
            {
                label: "blog",
                title: "ChatRTX 업데이트",
                text: "Georgia Tech Unveils New AI Makerspace in Collaboration with NVIDIA",
                classify1: "College of Engineering",
                classify2: "인공지능",
                link: "https://coe.gatech.edu/news/2024/04/georgia-tech-unveils-new-ai-makerspace-collaboration-nvidia",
                backgroundImage: "url('/portfolio/website-publishing/01/resources/images/news-01.jpg')"
            },
            {
                label: "blog",
                title: "",
                text: "Joins $110 Million Partnership to Help Universities Teach AI Skills",
                classify1: "Education",
                classify2: "AI기술교육",
                link: "https://blogs.nvidia.com/blog/partnership-universities-teach-ai-skills/",
                backgroundImage: "url('/portfolio/website-publishing/01/resources/images/news-02.jpg')"
            },
            {
                label: "blog",
                title: "AI/LLM",
                text: "Healthcare Launches Generative AI Microservices to Advance Drug Discovery, MedTech and Digital Health",
                classify1: "생성형 AI",
                classify2: "AI/LLM",
                link: "https://nvidianews.nvidia.com/news/healthcare-generative-ai-microservices",
                backgroundImage: "url('/portfolio/website-publishing/01/resources/images/news-03.jpg')"
            },
            {
                label: "blog",
                title: "시뮬레이션",
                text: "Into the Omniverse: Unlocking the Future of Manufacturing With OpenUSD on Siemens Teamcenter X",
                classify1: "OpenUSD",
                classify2: "Siemens Tech",
                link: "https://blogs.nvidia.com/blog/siemens-unlocks-future-of-manufacturing-with-openusd/",
                backgroundImage: "url('/portfolio/website-publishing/01/resources/images/news-04.jpg')"
            },
            {
                label: "blog",
                title: "Omniverse",
                text: "Staying in Sync: NVIDIA Combines Digital Twins With Real-Time AI for Industrial Automation",
                classify1: "RTX",
                classify2: "Omniverse",
                link: "https://blogs.nvidia.com/blog/ai-digital-twins-industrial-automation-demo/",
                backgroundImage: "url('/portfolio/website-publishing/01/resources/images/news-05.jpg')"
            }
        ];

        var html = "";
        $.each(dummyData, function(index, conference) {
            html += '<div class="swiper-slide">';
            var imgClass = (conference.image == "")? "no-img-data" : "";
            html += '    <a class="edu-img '+imgClass+'" href="#"></a>';
            html += '    <div class="base-info">';
            html += '        <span class="classify">' + conference.classify + '</span>';
            html += '        <h3 onclick="">' + conference.title + '</h3>';
            html += '    </div>';
            html += '    <div class="price-area">';
            html += '        <span class="badge">' + conference.badge + '</span>';
            html += '        <p class="prd">' + conference.date + '</p>';
            html += '        <p class="price"><strong>' + conference.price + '</strong></p>';
            html += '    </div>';
            html += '</div>';
        });

        $('#program .swiper-wrapper').html(html);

        var htmlR = "";
        $.each(dummyData2, function(index, conference) {
            htmlR += '<div class="swiper-slide">';
            var imgClass = (conference.image == "")? "no-img-data" : "";
            htmlR += '    <a class="edu-img '+imgClass+'" href="#"></a>';
            htmlR += '    <div class="base-info">';
            htmlR += '        <span class="classify">' + conference.classify + '</span>';
            htmlR += '        <h3 onclick="">' + conference.title + '</h3>';
            htmlR += '    </div>';
            htmlR += '    <div class="price-area">';
            htmlR += '        <span class="badge">' + conference.badge + '</span>';
            htmlR += '        <p class="prd">' + conference.date + '</p>';
            htmlR += '        <p class="price"><strong>' + conference.price + '</strong></p>';
            htmlR += '    </div>';
            htmlR += '</div>';
        });
        $('.regular-section .swiper-wrapper').html(htmlR);

        var htmlN = "";
        $.each(dummyData3, function(index, item) {
            htmlN += '<div class="list-item">';
            htmlN += '  <a href="' + item.link + '" tabindex="0">';
            htmlN += '    <div class="item-inner" style="background-image:' + item.backgroundImage + '">';
            htmlN += '      <span class="label">' + item.label + '</span>';
            htmlN += '      <div class="txt-box">';
            htmlN += '        <p class="tit">' + item.title + '</p>';
            htmlN += '        <p class="txt">' + item.text + '</p>';
            htmlN += '        <p class="classify"><span>' + item.classify1 + '</span><i></i><span>' + item.classify2 + '</span></p>';
            htmlN += '      </div>';
            htmlN += '    </div>';
            htmlN += '  </a>';
            htmlN += '</div>';
        });

        $('#review .main-review-list').html(htmlN);

        // 모바일 화면 크기 정의
        var isMobile = window.innerWidth <= 768;
        // 태블릿 화면 크기 정의
        var isTablet = window.innerWidth <= 1024;

        // Swiper :: .main-swiper
        var listArray = ["[미국] KMA-CES 2024 한국대표단", "세계적인 경영 석학, 게리 하멜 교수가 전하는 기업 생존전략!", "인도네시아 비지니스 전출 전략 연수"];
        var mainSwiper = new Swiper('.main-swiper', {
            effect: 'fade',
            // autoplay: { // 자동 재생
            //     delay: 3000, //css animation과 시간 맞춰줘야함
            //     disableOnInteraction: false, //사용자 슬라이더 상호작용시 자동재생기능 비활성화여부
            // },
            pagination: { // bullet
                el: '.main-swiper .swiper-pagination',
                // clickable: false,
                // type: 'custom',
                // renderCustom: function(swiper, current, total) {
                //     return '<span class="current">' + ('0' + current).slice(-2) + '</span>' + '<span class="total">' + ('0' + total).slice(-2) + '</span>';
                // }
                clickable: true,
                type: 'bullets',
                renderBullet: function (index, className) {
                    if(isTablet){
                        return '<span class="' + className + '"></span>';
                    }else{
                        return '<span class="' + className + '">' + '<em>'+ listArray[index] +'</em>' + '<i></i>' + '<b></b>' + '</span>';
                    }
                }
            },
            navigation: { // arrow
                nextEl: '.main-swiper .swiper-button-next',
                prevEl: '.main-swiper .swiper-button-prev',
            },
        });

        //Swiper :: .banner-swiper
        var bannerSwiper = new Swiper('.banner-swiper', {
            loop: true, // 무한 슬라이드
            pagination: { 
                el: '.banner-swiper .swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        });

        //Swiper :: .conference-swiper
        var conferenceSwiper = new Swiper('.conference-swiper', {
            slidesPerView: 2,
            spaceBetween: 14, //슬라이드 사이 간격
            navigation: {
                nextEl: '.conference-swiper .swiper-button-next',
                prevEl: '.conference-swiper .swiper-button-prev',
            },
            breakpoints: {
                1280: { // 브라우저 >= 1280
                  slidesPerView: 4,  
                  spaceBetween: 26.7   
                },
                
            },
        });

        //Swiper :: .regular-swiper
        var regularSwiper = new Swiper('.regular-swiper', {
            slidesPerView: 2,
            spaceBetween: 14, //슬라이드 사이 간격
            navigation: {
                nextEl: '.regular-swiper .swiper-button-next',
                prevEl: '.regular-swiper .swiper-button-prev',
            },
            breakpoints: {
                1280: { // 브라우저 >= 1280
                  slidesPerView: 4,  
                  spaceBetween: 26.7   
                },
                
            },
        });

        // Slick :: #review
        var reviewCon = $('.main-review-list');
        var reviewItemLength = reviewCon.find('.list-item').length;

        // setTimeout(function(){
        //     reviewCon.find('.list-item').eq(0).find('svg').addClass('on');
        // },200)

        reviewCon.on('beforeChange', function(event, slick, currentSlide, nextSlide) {	
            $(this).addClass('slide-on');
            $(this).find('.list-item').find('svg').removeClass('on');
            $(this).find('.list-item').eq(nextSlide).find('svg').addClass('on');
            if (currentSlide < nextSlide) {

                for (var i=0; i<nextSlide; i++) {
                    $(this).find('.list-item').eq(i).addClass('off');
                }
            }else {
                
                for (var i=reviewItemLength; i>nextSlide; i--) {
                    $(this).find('.list-item').eq(i).removeClass('off');
                }
            }

            if (nextSlide === reviewItemLength - 1) {
                location.href = "/home/case/case.html";
            }
        });

        reviewCon.not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots:true,
            autoplay: false,
            speed:500,
            infinite:false,
            draggable : true,
            focusOnSelect:true,
            easing: 'linear',
            pauseOnHover:true,
            useTransform: false,

        });

        // 슬라이드 이미지 정사각형 비율 자동조정
        adjustImageSize();

        $(window).on("resize",function  () {
            adjustImageSize(); //슬라이드 이미지 정사각형 비율 자동조정
    
            if (getWindowWidth() < mobileWidth) {
                reviewCon.slick('slickRemove', reviewItemLength - 1);
                //reviewCon.slick('slickRemove', reviewItemLength - 2);
            }
        });
    
        $(window).on("load",function  () {
            if (getWindowWidth() < mobileWidth) {
                reviewCon.slick('slickRemove', reviewItemLength - 1);
            }
        })
    
        reviewScroll();
        $(window).on('resize', reviewScroll);

    }); // End of the Document ready

    //슬라이드 이미지 정사각형 비율 자동조정
    function adjustImageSize() {
        var imageContainer = $('.swiper-slide .edu-img');
        var width = imageContainer.width(); // 컨테이너의 현재 너비를 가져옴
        imageContainer.css('height', width); // 너비에 맞춰 높이 조정
    }

    /* ************************
    * 브라우저의 가로값, 세로값 측정 함수
    * return 가로값/세로값
    ************************ */
    var mobileWidth = 800;
    /* 임의의 영역을 만들어 스크롤바 크기 측정 */ 
    function getScrollBarWidth(){
        if($(document).height() > $(window).height()){
            $('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
            fakeScrollBar = $('#fakescrollbar');
            fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
            var w1 = fakeScrollBar.find('div').innerWidth();
            fakeScrollBar.css('overflow-y', 'scroll');
            var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
            fakeScrollBar.remove();
            return (w1-w2);
        }
        return 0;
    }
    /* 브라우저 가로, 세로크기 측정 */ 
    function getWindowWidth () {
        return $(window).outerWidth() + getScrollBarWidth() ;
    }
    function getWindowHeight () {
        return $(window).height() ;
    }

     /* ************************
    * 모바일 체크 함수
    * return : 모바일 true / PC false
    * Ipad Safari userAgent 변경으로 인해 if문 추가 (2020-07-17)
    * Mac Os - Big Sur, Safari(14.0) Macintosh 로 체크되어 mobile로 분류되는 이슈로 가로사이즈 조건문 추가(2021-06-15)
    ************************ */
    function isMobile(){
        var UserAgent = navigator.userAgent;
        if (UserAgent.match(/iPhone|iPad|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
        {
            return true;
        }else{
            // Ipad Safari Browser
            if ( detectIpad() ) {
                return true;
            }else {
                return false;
            } 
        }
    }
    function detectIpad() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Lying iOS13 iPad
        if (userAgent.match(/Macintosh/i) !== null && getWindowWidth () < 1025 ) {
            // need to distinguish between Macbook and iPad
            var canvas = document.createElement("canvas");
            if (canvas !== null) {
                var context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                if (context) {
                    var info = context.getExtension("WEBGL_debug_renderer_info");
                    if (info) {
                        var renderer = context.getParameter(info.UNMASKED_RENDERER_WEBGL);
                        if (renderer.indexOf("Apple") !== -1)
                        return true;
                    }
                }
            }
        }
        return false;
    }

     /* ************************
    * OS 체크 함수
    * android/ios 체크할때 사용
    ************************ */
    function detectOS(){
        var agent = navigator.userAgent.toLowerCase(); 
        var osCheck; 

        if ( agent.indexOf('android') > -1) {
            return "android";
        } else if ( agent.indexOf("iphone") > -1|| agent.indexOf("ipad") > -1|| agent.indexOf("ipod") > -1 || agent.indexOf("macintosh") > -1 ) {
            return "ios";
        } else {
            return "other";
        }

        return osCheck;
    }

     /* ************************
    * smooth Scroll
    * gsap.min.js, ScrollToPlugin.min.js
    ************************ */
    // Check Passive Support
    function smoothScroll_passive(){
        var supportsPassive = false;
        try {document.addEventListener("test", null, { get passive() { supportsPassive = true }});
        } catch(e) {}
        return supportsPassive;
    }

    // Start smooth Scroll
    function smoothScroll(){
        if( isMobile() || detectOS() === "ios" ) return;
        var $window = $(window);
        if(smoothScroll_passive()){
            window.addEventListener("wheel",smoothScroll_scrolling,{passive: false});
        }else{
            $window.on("mousewheel DOMMouseScroll", smoothScroll_scrolling);
        }
        $("html").addClass("smooth-srolling");
    }

    // Scroll Event
    function smoothScroll_scrolling(event){
        event.preventDefault();
        var $window = $(window);
        var scrollTime = 1.5;
        // var scrollDistance = $window.height() / 2.5;
        var delta = 0;
        if(smoothScroll_passive()){
            var scrollDistance = 400; //$window.height() / 8;
            delta = event.wheelDelta/120 || -event.originalEvent.detail/3;
        }else{
            var scrollDistance = $window.height() / 2.5;
            if(typeof event.originalEvent.deltaY != "undefined"){
                delta = -event.originalEvent.deltaY/120;
            }else{
                delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
            }
        }

        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);
        winScrolling = gsap.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power4.easeOut,
            overwrite: 5
        });
    }

    // Destroy smooth Scroll
    function smoothScroll_destory (event) {
        if( isMobile() || detectOS() === "ios" ) return;
        if(smoothScroll_passive()){
            window.removeEventListener("wheel",smoothScroll_scrolling);
        }else{
            $(window).off("mousewheel DOMMouseScroll", smoothScroll_scrolling);
        }
        gsap.killTweensOf($(window),{scrollTo:true});
    }
	
	function reviewScroll () {
		smoothScroll_destory();

		// var infotechOuter = $('#review').offset().top
		// var searchOuter = $('#mainSearch').offset().top
		var $infotechBottomTxt = $('#review .bottom-txt');
		var slideScroll = $('.main-review-list').find('.slick-slide');
		
		if ( $(window).width() > mobileWidth ) {
			slideScroll.on('mouseenter', function(){
				$(this).parents('#review').addClass('hover');
			})
			slideScroll.on('mouseleave', function(){
				$(this).parents('#review').removeClass('hover');
			})
			slideScroll.on('wheel', (function (e) {
					
				if (e.originalEvent.deltaY < 0) {
					e.preventDefault();
					setTimeout(function(){
						if ( reviewCon.find('.list-item').eq(0).hasClass('slick-current') === false ) {
							reviewCon.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
								//$(this).find('.list-item').eq(currentSlide).removeClass('off');
							});
							reviewCon.slick('slickPrev');
						}else {
							//moveScrollTop (0, 500)
						}
					},100);
					
				} else {
					e.preventDefault();
					setTimeout(function(){
						if ( reviewCon.find('.list-item.last').hasClass('slick-current') === false ) {
							reviewCon.on('beforeChange', function(event, slick, currentSlide, nextSlide) {	
								//$(this).find('.list-item').eq(currentSlide).addClass('off');
								$infotechBottomTxt.css('left', ((nextSlide / 5) * 100) + '%');

							});
							reviewCon.slick('slickNext');
						}else {
							//moveScrollTop ($('#mainSearch').offset().top, 500)
						}
					},100);
				}
			}));
		}
	}

    // 위로 이동
    function goToGo() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
    
})(); //End of the 즉시실행함수
