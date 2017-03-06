$('.nav-container').height($('main').height());
$('header .toggle-nav').click(function () {
  $('.nav-list, .nav-footer').toggleClass('hide');
});
$('td').click(function(){
  var td = $(this);
  if (td.text()) {
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  }
});