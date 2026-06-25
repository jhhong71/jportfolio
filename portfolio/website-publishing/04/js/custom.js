$(function(){
  // Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb, body, .overlay').toggleClass('active')
  })
  $('.gnb a, .overlay').click(function(){
    $('.gnb, .trigger, .overlay, body').removeClass('active')
  })

  // Scroll header Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('on')
      $('.trigger span').css('background-color', '#000')
    }
    else {
      $('header, .gototop').removeClass('on')
      $('.trigger span').css('background-color', '')
    }
  })

  // Slick Slider
  $('.myslider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
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
          arrows: false
        }
      }
    ]
  });
})

