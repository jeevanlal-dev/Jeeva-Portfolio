function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu"); // Fixed method name

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive"; // Added space before "responsive"
    } else {
        menuBtn.className = "nav-menu";
    }
}

window.onscroll = function() { headerShadow(); ScrollActive(); };

function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

var typingEffect = new Typed(".typedtext", {
    strings: ["Developer"],
    loop: true,
    typeSpeed: 100, // Corrected property name
    backSpeed: 80,  // Corrected property name
    backDelay: 2000
});

const sr = ScrollReveal({
    origin: 'top',  // Fixed origin value (it should be in quotes)
    distance: '50px',
    duration: 2000,
    reset: true
});

sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social-icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

// projectbox
sr.reveal('.project-box', { interval: 200 });

// heading
sr.reveal('.top-header', {});

// about info  
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});

srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

// About skills and form box 
srLeft.reveal('.top-footer', { delay: 100 });
srLeft.reveal('.middle-footer', { delay: 100 });
srLeft.reveal('.footer-social-icons', { delay: 100 });





// About skill 
const srRight = ScrollReveal({
    origin: 'right',
    distance: '50px',
    duration: 2000,
    reset: true
});
srRight.reveal('.skill-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });



const sections = document.querySelectorAll('section[id]');

// Corrected function syntax for ScrollActive function
function ScrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');

        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

// Fixed the event listener syntax: added quotes around 'scroll' event
window.addEventListener('scroll', ScrollActive);
