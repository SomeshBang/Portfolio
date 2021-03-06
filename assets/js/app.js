// For changing Theme
function themeChange() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// -------------------------------------------------------------------------

// Typing effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typeWrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typeWrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// -------------------------------------------------------------------------------


// Back to Top and Hiring box 

let myUpBtn = document.getElementById("btn-back-to-top");   //Get the button
let hiring_btn = document.getElementById("hbox_id");    //Hiring Btn

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollUpFunction();
  right_resume();
};

function scrollUpFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    myUpBtn.style.display = "block";
  } else {
    myUpBtn.style.display = "none";
  }
}

function right_resume() {
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    hiring_btn.style.display = "block";
  } else {
    hiring_btn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
myUpBtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//----------------------------------------------------------------------------------------------------