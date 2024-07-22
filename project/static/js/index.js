// header

window.addEventListener("scroll", function () {
  var mm = this.document.querySelector('.m-m');
  var header = this.document.querySelector('.m-header');
  if (this.window.scrollY > 1) {
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

function DisplayNone() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

function NoActive() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
}

next.addEventListener('click', function () {
  n++;
  if (n > slides.length - 1) {
    n = 0;
  }
  DisplayNone();
  NoActive();
  slides[n].style.display = 'block';
  slides[n].classList.add('active');
  dots[n].classList.add('active');
});

prev.addEventListener('click', function () {
  n--;
  if (n < 0) {
    n = slides.length - 1;
  }
  DisplayNone();
  NoActive();
  slides[n].style.display = 'block';
  slides[n].classList.add('active');
  dots[n].classList.add('active');
});

setInterval(function () {
  n++;
  if (n > slides.length - 1) {
    n = 0;
  }
  DisplayNone();
  NoActive();
  slides[n].style.display = 'block';
  slides[n].classList.add('active');
  dots[n].classList.add('active');
}, 5000);

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function () {
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
const productItems = productContainer.querySelectorAll('.product-items');

function moveSlider(direction) {
  const itemWidth = productItems[0].offsetWidth + parseInt(getComputedStyle(productItems[0]).marginRight);
  const scrollAmount = direction * itemWidth;
  productContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}



// category bar 
document.addEventListener('DOMContentLoaded', function () {
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  const categoryBar = document.querySelector('.category-bar');

  let scrollAmount = 0;
  const itemWidth = 160 + 15;

  leftBtn.addEventListener('click', () => {
      scrollAmount = Math.max(scrollAmount - itemWidth, 0);
      categoryBar.style.transform = `translateX(-${scrollAmount}px)`;
  });

  rightBtn.addEventListener('click', () => {
      const maxScroll = categoryBar.scrollWidth - categoryBar.clientWidth;
      scrollAmount = Math.min(scrollAmount + itemWidth, maxScroll);
      categoryBar.style.transform = `translateX(-${scrollAmount}px)`;
  });

  let startX = 0;
  let isDragging = false;

  categoryBar.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
  });

  categoryBar.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      const maxScroll = categoryBar.scrollWidth - categoryBar.clientWidth;
      scrollAmount = Math.min(Math.max(scrollAmount + diff, 0), maxScroll);
      categoryBar.style.transform = `translateX(-${scrollAmount}px)`;
      startX = currentX; 
  });

  categoryBar.addEventListener('touchend', () => {
      isDragging = false;
  });
});

// resize slider img src 
function updateImageSrc() {
  const isMobile = window.innerWidth <= 600;
  const images = document.querySelectorAll('.slider-image');

  images.forEach(img => {
    const originalSrc = img.getAttribute('src');
    const mobileSrc = img.getAttribute('data-mobile-src');

    if (isMobile) {
      img.setAttribute('src', mobileSrc);
    } else {
      img.setAttribute('src', originalSrc);
    }
  });
}

window.addEventListener('resize', updateImageSrc);
window.addEventListener('load', updateImageSrc);


// ajaxs
var changersec = document.getElementById("changer-sec");

var home = document.getElementById("home");
var cart = document.getElementById("cart");
var category = document.getElementById("category");
var profile = document.getElementById("profile");

function ajax(button, address) {
  button.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      changersec.innerHTML = this.responseText;
      window.history.pushState({ address: address }, "", address);
    }
    xhr.open("GET", address, true);
    xhr.send();
  };
}


ajax(cart, "/cart/");
ajax(category, "/category/");
ajax(profile, "/signin/");

window.onpopstate = function (event) {
  if (event.state) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      changersec.innerHTML = this.responseText;
    }
    xhr.open("GET", event.state.address, true);
    xhr.send();
  }
};
