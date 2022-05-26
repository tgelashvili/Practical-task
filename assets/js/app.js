// menu lines
function myFunction(x) {
    x.classList.toggle("change");
}
//   slider - swiper
const slides = document.querySelectorAll('.slide-item');
const slideArea = document.querySelector('.slide-area');
const slidesLength = slides.length;
const dots = document.querySelectorAll('.dots span');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;
function renderSlider() {
    slides.forEach((element, index) => {
      element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
    })
  };
function nextSlide(){
    if (activeIndex=== (slidesLength - 1)){
        activeIndex = 0;
    }else {
        activeIndex = activeIndex + 1;
    }
    renderSlider();
};
function prevSlide(){
    if (activeIndex=== 0){
        activeIndex = slidesLength - 1;
    }else {
        activeIndex = activeIndex - 1;
    }
    renderSlider();
};
renderSlider();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

//კლავიატურის ისრებსაც გადავეცი იფივე ფუქცია, რაც აქვს next and prev slide -ის ფუნქციებს
document.addEventListener('keydown', (e) => {
// console.log(e.code);
if(e.code === 'ArrowRight'){
    nextSlide();
}
if(e.code === 'ArrowLeft'){
    prevSlide();
}
});
// release our intervalID from the variable
let intervalId = null;
function startAutoSliding() {
    if(!intervalId){
        intervalId = setInterval(() => {
        nextSlide();
        }, 5000);
    }
}
// startAutoSliding();
// დავასელექთე ნოუდი, გავასუფთავე შენახული IntervalID
const mouseMove = document.querySelector(".slide-area");
function stopAutoSliding (){
    console.log(stopAutoSliding)
    if (startAutoSliding) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
mouseMove.addEventListener('mouseenter', stopAutoSliding);
let iconNext = document.querySelector('.dots');
let iconItems = Object.entries(iconNext);
dots.forEach((dot) => {
    dot.addEventListener('click', e => {
        const index = e.target.getAttribute('data-index');
        activeIndex = Number(index);
        dots.forEach((dot) => {
            dot.classList.remove('active')
        });
        e.target.classList.add('active');
        renderSlider();
    });
}); 