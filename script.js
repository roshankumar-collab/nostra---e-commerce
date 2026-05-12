//Carousel Left and Right Scroll
const carousel = document.getElementById('carousel');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const scrollAmount = window.innerWidth;

rightArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

//Like the Most Wanter
function heartColor1() {
    const heart1 = document.querySelector('#like-heart1');
    if (heart1.getAttribute('fill') === "red") {
        heart1.setAttribute('fill', 'none');
        heart1.setAttribute('stroke', 'currentColor');
    } else {
        heart1.setAttribute('fill', 'red');
        heart1.setAttribute('stroke', 'red');
    }
}
function heartColor2() {
    const heart2 = document.querySelector('#like-heart2');
    if (heart2.getAttribute('fill') === 'red') {
        heart2.setAttribute('fill', 'none');
        heart2.setAttribute('stroke', 'currentColor');
    } else {
        heart2.setAttribute('fill', 'red');
        heart2.setAttribute('stroke', 'red');
    }
}
function heartColor3() {
    const heart3 = document.querySelector('#like-heart3');
    if (heart3.getAttribute('fill') === 'red') {
        heart3.setAttribute('fill', 'none');
        heart3.setAttribute('stroke', 'currentColor');
    } else {
        heart3.setAttribute('fill', 'red');
        heart3.setAttribute('stroke', 'red');
    }
}
function heartColor4() {
    const heart4 = document.querySelector('#like-heart4');
    if (heart4.getAttribute('fill') === 'red') {
        heart4.setAttribute('fill', 'none');
        heart4.setAttribute('stroke', 'currentColor');
    } else {
        heart4.setAttribute('fill', 'red');
        heart4.setAttribute('stroke', 'red');
    }
}

// hide HeadOffer

var hideBtn = document.getElementById("hidebtn")
var hideHeading = document.getElementById("hideheading")
hideBtn.addEventListener("click", function () {
    hideHeading.style.display = "none"
})

//Side navbar
var sideNav = document.getElementById("sideNav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("close-nav")

menuicon.addEventListener("click", function () {
    sideNav.style.left = 0
})

closeNav.addEventListener("click", function () {
    sideNav.style.left = "-50%";
})

//Newarrival moving smoothly
document.getElementById("newArrival").onclick = function(e) {
    e.preventDefault();
    document.getElementById("new-arrival").scrollIntoView({ behavior: "smooth" });
  };

//MostWanter mooving smoothly
document.getElementById("mostWanted").onclick = function(e) {
    e.preventDefault();
    document.getElementById("most-wanted").scrollIntoView({ behavior: "smooth" });
  };