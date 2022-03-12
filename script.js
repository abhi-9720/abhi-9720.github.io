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



let navlinks = document.querySelectorAll('.nav-item  a')


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




};


function scrollheader() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);

}


const scrollProgress = document.getElementById('scroll-progress');
const height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
    const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});







const sections = document.querySelectorAll("section");

const navLi = document.querySelectorAll("nav .container-fluid ul li")

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;// this give section top , depth of section from 0
        const sectionHeight = section.clientHeight; // height of each section

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");

        }
    });


    navLi.forEach((li) => {

        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});