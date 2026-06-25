$(function(){
    // Scroll Header Change & Scroll Go to top
    $(window).scroll(function(){
      if($(window).scrollTop() > 50) {
        $('header, .gototop').addClass('on')
      }
      else {
        ($('header, .gototop')).removeClass('on')
      }
    })

  // Header Footer Include
  $('.header-include').load('include/header.html', function(){
    $('.lnb a').mouseenter(function(){
      $('#menu1').slideUp().css('opacity', '0')
      $('#menu4').slideUp().css('opacity', '0')
      $('#menu5').slideUp().css('opacity', '0')
      $('#menu6').slideUp().css('opacity', '0')
      $('#menu7').slideUp().css('opacity', '0')
      $('#menu8').slideUp().css('opacity', '0')
  
      var menuNum = $(this).attr('data-text')
      $('#' + menuNum).slideDown().css('opacity', '1')
    })
    $('.lnb-menu').mouseleave(function(){
      $('.lnb-menu').slideUp().css('opacity', '0')
    })
  })
  $('.footer-include').load('include/footer.html')

  // Weekly-best btn
  $('.weekly-best-btn a').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    $('.weekly-best-item').removeClass('active')
    var dataNum = $(this).attr('data-text')
    // console.log(dataNum)
    $('#' + dataNum).addClass('active')
  })

  // New Arrivals
  $('.new-arrivals .btn-more').click(function(){
    $('.arrival-more').addClass('on')
  })

  // Register Checked
  $(document).ready(function() {
    $('#chkAll').click(function() {
      if($('#chkAll').is(':checked')) $('input[name=chk]').prop('checked', true); 
      else $('input[name=chk]').prop('checked', false); 
    });
  
    $('input[name=chk]').click(function() {
      var total = $('input[name=chk]').length;
      var checked = $('input[name=chk]:checked').length;
      
      if(total != checked) $('#chkAll').prop('checked', false);
      else $('#chkAll').prop('checked', true); 
    });

    $('.open-content').click(function(){
      $('.view-contents').fadeIn()
    })
    $('.close-content').click(function(){
      $('.view-contents').fadeOut()
    })
  });

    // Slick Slider: Review
    $('.review-slider').slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4
    });
  
    // Product Page : Slick Slider: Section : Cloth-Outer
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
      variableWidth: true
    });

  // Product Page : Cloth Accordion
  $('.faq-title').click(function(){
    $(this).siblings('.faq-content').stop().slideUp()
    $(this).next().stop().slideToggle()
    $(this).siblings('.faq-title').removeClass('active')
    $(this).toggleClass('active')
  })

  $('.btn-signin').click(function(){
    $('.modal-login').fadeIn()
    $('body').addClass('active')
  })
  $('.close-modal').click(function(){
    $('.modal-login').fadeOut()
    $('body').removeClass('active')
  })

})

// Product Page : Cloth-info Numbering
$(function(){
  function convert_price_str(price_str) {
    let   sliced_price_str = [];
    let conv_price_str;
    let loop;
    for (loop = price_str.length; loop > 0; loop = loop - 3)
    {
      sliced_price_str.unshift(price_str.substring(loop - 3, loop));
    }
    conv_price_str = sliced_price_str.join(",");
    return conv_price_str;
  }
	$('.__count_range input[count_range]').click(function(e){
    e.preventDefault();
    var type = $(this).attr('count_range');
    var $count = $(this).parent().children('input.result');
    var count_val = $count.val(); // min 1
    var conv_price;
    var price_str;
    if(type=='m'){
      if(count_val<2){
        return;
      }
       $count.val(parseInt(count_val)-1);
    }
    else if(type=='p'){
       $count.val(parseInt(count_val)+1);
    }
    price_str = ($count.val() * 75000).toString();
    conv_price = convert_price_str(price_str);
    $('#price').html('Total : ' + conv_price + ' 원');
    })
	})



