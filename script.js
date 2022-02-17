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

(function () {
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach((form) => {
            form.addEventListener('submit', (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        })

})()

window.onscroll = function () {
    const top = window.scrollY;
    // console.log(top);

    const homeheight = parseInt(document.getElementById('home').clientHeight);
    // console.log("about height " + document.getElementById('aboutsection').clientHeight);
    // console.log("start of top" + document.getElementById('aboutsection').offsetTop);

    if (top >= 280 && top <= 10333) {
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
function scrollheader() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
    console.log("pageHeight : ", pageHeight);
}

