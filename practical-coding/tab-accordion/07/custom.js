$(function(){
  // $('.accordion-inner .content').eq(0).show();
  $('.accordion-inner .title').click(function(){
    $(this).parent().siblings().children('.accordion-inner .content').stop().slideUp()
    $(this).next().stop().slideToggle()
    $(this).toggleClass('active')
    $(this).parent().siblings().children('.accordion-inner .title').removeClass('active')
  })
  $('.accordion-inner .content').click(function(){
    $(this).stop().slideToggle()
  })
})