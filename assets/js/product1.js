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


// adding items plus/minus buttom
var clicks = 0;
function addMore(){
    clicks +=1;
    document.getElementById("clicks").innerHTML = clicks
}
var clicks = 0;
function removeMore () {
  clicks -=1;
  document.getElementById("clicks").innerHTML = clicks
}
console.log(addMore());
console.log(removeMore());


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

console.log(myFunction());




  // product page sorter
  // function myFunction(this) {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
    
  // function filterFunction() {
  //   var input, filter, ul, li, a, i;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   div = document.getElementById("myDropdown");
  //   a = div.getElementsByTagName("a");
  //   for (i = 0; i < a.length; i++) {
  //     txtValue = a[i].textContent || a[i].innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       a[i].style.display = "";
  //     } else {
  //       a[i].style.display = "none";
  //     }
  //   }
  // }