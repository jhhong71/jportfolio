$(function(){
  // Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb, body, .overlay').toggleClass('active')
  })
  $('.gnb a, .overlay').click(function(){
    $('.gnb, body, .trigger, .overlay').removeClass('active')
  })

  // Scroll Header Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('on')
    }
    else {
      ($('header, .gototop')).removeClass('on')
      $('.trigger span').css('background-color', '')
    }
  })

  // Slick Slider: Sidebar-slider
  $('.sidebar-slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
        }
      }
    ]
  });

  // Slick Slider: Shop
  $('.shop-slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 4,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover : true,
    dotsClass : "slick-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
        }
      }
    ]
  });

  // Slick Slider: Collection
  $('.collection-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover : true
  });

  // Login Tab Menu
  $('.login-btn span').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    $('.login-item').removeClass('active')
    var dataNum = $(this).attr('data-text')
    // console.log(dataNum)
    $('#' + dataNum).addClass('active')
  })

  $('.open-login').click(function(){
    $('.fullscreen-login').fadeIn()
    $('body').toggleClass('active')
  })
  $('.close-login').click(function(){
    $('.fullscreen-login').fadeOut()
    $('body').removeClass('active')
  })


})

