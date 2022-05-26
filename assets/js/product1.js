// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  // Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
} 
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
} 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
// Open slide mobile
function viewSlide() {
  document.getElementById("popSlide").style.display = "block";
}
// Close slide
function closeSlide() {
  document.getElementById("popSlide").style.display = "none";
}
var imageIndex = 1;
showImages(imageIndex);
// Thumbnail image controls
function currentSlide(n) {
  showImages(imageIndex = n);
}
function showImages(n) {
  var i;
  var images = document.getElementsByClassName("myImages");
  var blocks = document.getElementsByClassName("icon-demo");
  if (n > images.length) {imageIndex = 1}
  if (n < 1) {imageIndex = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < blocks.length; i++) {
    blocks[i].className = blocks[i].className.replace(" active", "");
  }
  images[imageIndex-1].style.display = "block";
  blocks[imageIndex-1].className += " active";
}
// adding items plus/minus buttom
var clicks = 0;
function addMore(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};
var clicks = 0;
function removeMore() {
  clicks -=1;
  document.getElementById("clicks").innerHTML = clicks;
};
// adding items plus/minus buttom for mobile
var addItem = 0;
function plus (){
    addItem +=1;
    document.getElementById("addClick").innerHTML = addItem;
}
var addItem = 0;
function minus () {
  addItem -=1;
  document.getElementById("addClick").innerHTML = addItem;
}
// See more text function
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "მეტის ნახვა";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "აკეცვა";
    moreText.style.display = "inline";
  }
}
// See more text function for mobile
function seeMoreText() {
  var dots = document.getElementById("dotButton");
  var moreText = document.getElementById("showMore");
  var btnText = document.getElementById("pressButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "მეტის ნახვა";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "აკეცვა";
    moreText.style.display = "inline";
  }
}
