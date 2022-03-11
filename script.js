// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const leftemail = document.querySelector('.leftfixed p')
const forms = document.querySelectorAll('.needs-validation');






window.addEventListener("resize", function () {

    if (window.screen.width <= 700) {
        toggleFullScreen();
    }
}, false);

function toggleFullScreen() {
    console.log("called ");
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}



window.onscroll = function () {
    const top = window.scrollY;
    // console.log(top);

    const homeheight = parseInt(document.getElementById('home').clientHeight);
    // console.log("about height " + document.getElementById('aboutsection').clientHeight);
    // console.log("start of top" + document.getElementById('aboutsection').offsetTop);

    if (top >= 280 && top <= 9022.7021484375) {
        if (top >= 3100) {


            document.querySelector('.github-icon').style.cssText = 'color:white !important';

        }
        else {
            document.querySelector('.github-icon').style.cssText = 'color:black !important';
        }

        leftemail.style.display = "block";
    }
    else {
        leftemail.style.display = "none";
    }

    if (top >= homeheight) {
        header.style.display = "block";
        // console.log('I am Here block');
    }
    else {

        header.style.display = "none";
        // console.log('I am Here hide');
    }
}



function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");

        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

console.log(document.querySelector('.nav-item  a'));

let navlinks = document.querySelectorAll('.nav-item  a')
console.log(navlinks);

for (let i = 0; i < navlinks.length; i++) {

    navlinks[i].addEventListener('click', function () {


        document.querySelector(".navbar-collapse").classList.remove('show');
        var element = document.querySelector(".animated-icon1");
        element.classList.toggle("open");
    });
}


document.querySelector(".first-button").addEventListener('click', (e) => {

    var element = document.querySelector(".animated-icon1");
    element.classList.toggle("open");

})



const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {

    let scroll = 600;
    if (window.screen.width <= 1000) {
        scroll = 300;
    }

    document.querySelector('.slides').scrollLeft += scroll;
    if (document.querySelector('.slides').scrollLeft > scroll * 2) {
        document.querySelector('.slides').scrollLeft = 0;
    }

};
buttonLeft.onclick = function () {
    let scroll = 600;
    if (window.screen.width <= 1000) {
        scroll = 300;
    }
    document.querySelector('.slides').scrollLeft -= scroll;
    console.log("=> ", document.querySelector('.slides').scrollLeft)



};