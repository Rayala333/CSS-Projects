// fist js

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds;
};



// second js



var Index = 1;
displaySlides(Index);

// Next/previous controls
function plusSlides(n) {
  displaySlides(Index += n);
}

function displaySlides(n) {
var i;
var slides = document.getElementsByClassName("Slides");

if (n > slides.length) {Index = 1}
if (n < 1) {Index = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slides[Index-1].style.display = "block";
};


// 3


var Index = 1;
displaygalary(Index);

// Next/previous controls
function plusgalary(n) {
    displaygalary(Index += n);
}

function displaygalary(n) {
    var i;
    var galary = document.getElementsByClassName("galary");

    if (n > galary.length) {
        Index = 1
    }
    if (n < 1) {
        Index = galary.length
    }
    for (i = 0; i < galary.length; i++) {
        galary[i].style.display = "none";
    }

    galary[Index - 1].style.display = "block";
};



// 4


var Index = 1;
displaymain(Index);

// Next/previous controls
function plusmessage(n) {
    displaymain(Index += n);
}

function displaymain(n) {
    var i;
    var galary = document.getElementsByClassName("main");

    if (n > main.length) {
        Index = 1
    }
    if (n < 1) {
        Index = main.length
    }
    for (i = 0; i < main.length; i++) {
      main[i].style.display = "none";
    }

    main[Index - 1].style.display = "block";
};