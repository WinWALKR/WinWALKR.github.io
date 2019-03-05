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

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("instagram-media");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex  - 1].style.display = "block";
}