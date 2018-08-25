$(function() {
  $('#backButton1').on('click', function() {
    scrolled = $('.scrollContainer').scrollLeft() + $('#header').offset().left;
    $('.scrollContainer').animate(
      {scrollLeft: scrolled}, 'slow'
    );
  });
  $('#firstButton').on('click', function() {
    scrolled = $('.scrollContainer').scrollLeft() + $('#section2').offset().left;
    $('.scrollContainer').animate(
      {scrollLeft: scrolled}, 'slow'
    );
  });
  $('#backButton2').on('click', function() {
    scrolled = $('.scrollContainer').scrollLeft() + $('#section2').offset().left;
    $('.scrollContainer').animate(
      {scrollLeft: scrolled}, 'slow'
    );
  });
  $('#nextButton1').on('click', function() {
    scrolled = $('.scrollContainer').scrollLeft() + $('#section3').offset().left;
    $('.scrollContainer').animate(
      {scrollLeft: scrolled}, 'slow'
    );
  });
  $('#backButton3').on('click', function() {
    scrolled = $('.scrollContainer').scrollLeft() + $('#section3').offset().left;
    $('.scrollContainer').animate(
      {scrollLeft: scrolled}, 'slow'
    );
  });
  $('#nextButton2').on('click', function() {
    scrolled = $('.scrollContainer').scrollLeft() + $('#footer').offset().left;
    $('.scrollContainer').animate(
      {scrollLeft: scrolled}, 'slow'
    );
  });
});