$(function(){
  // Header Download
  $(window).scroll(function(){
    if($(window).scrollTop() > 500) {
      $('.download').addClass('active')
    }
    else {
      $('.download').removeClass('active')
    }
  })

  // Footer Sitemap
  $('.link-item-title').click(function(){
    $(this).parent().siblings().children('.link-item-content').slideUp()
    $(this).next().slideDown()

    $(this).addClass('active')
    $(this).parent().siblings().children('.link-item-title').removeClass('active')
  })
})