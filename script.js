
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


// ........................ 


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


//   const nav = document.querySelector(".nav"),
//   searchIcon = document.querySelector("#searchIcon"),
//   navOpenBtn = document.querySelector(".navOpenBtn"),
//   navCloseBtn = document.querySelector(".navCloseBtn");

// searchIcon.addEventListener("click", () => {
//   nav.classList.toggle("openSearch");
//   nav.classList.remove("openNav");
//   if (nav.classList.contains("openSearch")) {
//     return searchIcon.classList.replace("uil-search", "uil-times");
//   }
//   searchIcon.classList.replace("uil-times", "uil-search");
// });

// navOpenBtn.addEventListener("click", () => {
//   nav.classList.add("openNav");
//   nav.classList.remove("openSearch");
//   searchIcon.classList.replace("uil-times", "uil-search");
// });
// navCloseBtn.addEventListener("click", () => {
//   nav.classList.remove("openNav");
// });




























