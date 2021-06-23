
// prevent default
document.querySelector('body').addEventListener('click', preventDflt);
function preventDflt(e) {
  var tElment = e.target.getAttribute('href');
  var tElmentP = e.target.parentElement.getAttribute('href');
  if (tElment == '#' || tElmentP == '#') {
    e.preventDefault();
  }
}

//login pop up
var modal_login = document.getElementById("login1");

// Get the button that opens the modal_login
var btn_login = document.getElementById("log");

// When the user clicks on the button, open the modal_login
btn_login.onclick = function () {
  modal_login.style.display = "flex";
}

//signup pop up
// Get the modal
var modal = document.getElementById("signup1");

// Get the button that opens the modal
var btn = document.getElementById("sign");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal_login) {
    modal_login.style.display = "none";
  }
  if (!event.target.matches('.header-menu li a') && !event.target.matches('.burger-menu')) {
    navLinks.classList.remove("open");
    hamburger.style.display = "block"
    links.forEach(link => {
      link.classList.remove("fade");
    });
  };

}


// login signup

function login_input() {
  document.getElementById('mail2').value = '';
  document.getElementById('pass').value = '';

}
function login_signup() {
  document.getElementById('mail3').value = '';
  document.getElementById('pass2').value = '';
  document.getElementById('pass3').value = '';
  document.getElementById('name').value = '';

}

const btnRecent = document.getElementById('btn-recent');
const btnMW = document.getElementById('btnMW');
const btnFamous = document.getElementById('btn-famous');
const checkMw = document.getElementsByClassName('most-view');
const checkRecent = document.getElementsByClassName('recent');
const checkFamous = document.getElementsByClassName('famous');



//accordian
document.querySelectorAll('.acordian__button').forEach(button => {
  button.addEventListener('click', () => {
    let acording_content = button.nextElementSibling;
    button.classList.toggle('acordian__button--active')
    if (button.classList.contains('acordian__button--active')) {
      acording_content.style.maxHeight = '80px';
      acording_content.style.transition = "all 1s";

    }
    else {
      acording_content.style.maxHeight = 0;
    }
  })
});


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", " ");
    this.className += " active1";
  });
}


// filters buttons
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("collection-slideshow");
  let dots = document.getElementsByClassName("btn");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active1", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";
}

function saaa(n) {
  let i;
  let slides = document.getElementsByClassName("collection-slideshow");
  let dots = document.getElementsByClassName("btn");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active1", "");
  }
  slides[0].style.display = "block";
  dots[0].className += " active1";

};

// email submission
function fun() {
  if (document.getElementById('mail').value !== '') {
    document.getElementById('mail').value = '';
    document.getElementById("small-e1").style.display = "none";
    document.getElementById("small").style.display = "block";
  }
  else {
    document.getElementById("small").style.display = "none";
    document.getElementById("small-e1").style.display = "block";
  }
}

// menu bar
var hamburger = document.querySelector(".burger-menu");
var navLinks = document.querySelector(".header-menu");
var links = document.querySelectorAll(".header-menu li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.style.display = "none"
  links.forEach(link => {
    link.classList.toggle("fade");
  });

});


// section2 slider
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }
  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  slides[current].classList.add("active");
  slides[current].style.transition = "all 1.5s";
  slides[prev].classList.add("prev");
  slides[prev].style.transition = "all 1.5s";
  slides[next].classList.add("next");
  slides[next].style.transition = "all 1.5s";
}

