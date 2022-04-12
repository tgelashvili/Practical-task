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


var clicks = 0;
function onClick(){
    clicks +=1;
    document.getElementById("clicks").innerHTML = clicks
}



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