$(function(){
  $('.accordion-inner .title').click(function(){
    $(this).next().stop().slideToggle()
    $(this).toggleClass('active')
  })
  $('.accordion-inner .content').click(function(){
    $(this).stop().slideUp()
    $(this).siblings('.title').toggleClass('active')
  })
})