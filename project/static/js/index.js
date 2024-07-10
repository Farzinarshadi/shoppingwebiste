// header
window.addEventListener("scroll" , function(){
  var mm = this.document.querySelector('.m-m');
  var header = this.document.querySelector('.m-header');
  if (this.window.scrollY > 20){
    mm.classList.add('efect');
    header.classList.add('scroled');
  } else {
    header.classList.remove('scroled');
    mm.classList.remove('efect');
  };
});

// slider
var slides = document.getElementsByClassName('slide');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var dots = document.getElementsByClassName('dot');
var n = 0;

function DisplayNone(){
  for (var i=0 ; i<slides.length;i++){
    slides[i].style.display='none';
  };
};

function NoActive(){
  for (var i=0;i<slides.length;i++){
    slides[i].classList.remove('active');
  };
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
};


next.addEventListener('click' , function(){
  n++;
  if (n<slides.length-1){
    n=1;
  }
  DisplayNone();
  NoActive();
  slides[n].style.display = 'block';;
  slides[n].classList.add('active');
  dots[n].classList.add('active');

});

prev.addEventListener('click' , function(){
  n--;
  if (n<0){
    n=slides.length-1;
  }
  DisplayNone();
  NoActive();
  slides[n].style.display = 'block';;
  slides[n].classList.add('active');
  dots[n].classList.add('active');

});


setInterval(function(){
  n++;
  if (n>slides.length-1){
    n=0;
  }
  DisplayNone();
  NoActive();
  slides[n].style.display = 'block';;
  slides[n].classList.add('active');
  dots[n].classList.add('active');
},5000);


for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function() {
    var slideIndex = parseInt(this.getAttribute('data-slide'));
    n = slideIndex;
    DisplayNone();
    NoActive();
    slides[n].style.display = 'block';
    slides[n].classList.add('active');
    dots[n].classList.add('active');
  });
}

// scroll product bar 
const productsSlider = document.getElementById('products-slider');
const productContainer = productsSlider.querySelector('.product-container');

function moveSlider(direction) {
    const scrollAmount = direction > 0 ? productContainer.offsetWidth : -productContainer.offsetWidth;
    productContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

