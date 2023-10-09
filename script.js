let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  login.classList.toggle('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () =>{
  login.classList.remove('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
    },
    991:{
      slidesPerView: 3,
    },
  },
});

// -----------------------


// Global variable
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

const auto = true;
const intervalTime = 5000;
let slidesInterval;

// Button click listener
nextBtn.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    //reset slide interval
    clearInterval(slidesInterval);

    slidesInterval = setInterval(nextSlide, intervalTime);
  }
});

prevBtn.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    //reset slide interval
    clearInterval(slidesInterval);

    slidesInterval = setInterval(nextSlide, intervalTime);
  }
});

// let's go create a nextSlide function
const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // nextElementSibling for next slide
  if (current.nextElementSibling) {
    // jump current class in next div
    current.nextElementSibling.classList.add("current");
  } else {
    //reset slide
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

// let's go create a prevSlide function
const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // previousElementSibling for prev slide
  if (current.previousElementSibling) {
    // jump current class in previous div
    current.previousElementSibling.classList.add("current");
  } else {
    //reset slide
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

// auto slide in interval time
if (auto) {
  slidesInterval = setInterval(nextSlide, intervalTime);
}




 /* ================================================= 
                 Navigation Bar Code
  ==================================================*/


  const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});




















