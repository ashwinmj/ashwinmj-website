//Use smooth scrolling when clicking on navigation
$('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
  if (location.pathname.replace(/^\//,'') ===
  this.pathname.replace(/^\//,'') &&
  location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 500);
      return false;
    } //target.length
  } //click function
}); //smooth scrolling
