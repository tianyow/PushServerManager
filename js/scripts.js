$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  $('.btn-app-setting').click(function(e){
  	e.preventDefault();
  	$('.property-wrapper').toggleClass('open');
  });
  $('.btn-close-panel').click(function(e){
  	$('.property-wrapper').removeClass('open');
  });
})