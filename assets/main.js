// ✅ Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded! Running scripts...");

    // ✅ Mobile Menu Toggle Function
    function myMenuFunction() {
        var menuBtn = document.getElementById("myNavMenu");

        if (menuBtn.classList.contains("nav-menu")) {
            menuBtn.classList.add("responsive");
        } else {
            menuBtn.classList.remove("responsive");
        }
    }
    
    // ✅ Attach menu function to menu button
    document.querySelector(".nav-menu-btn i").addEventListener("click", myMenuFunction);

    // ✅ Header Shadow on Scroll
    function headerShadow() {
        const navHeader = document.getElementById("header");
        if (window.scrollY > 50) {
            navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else {
            navHeader.style.boxShadow = "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }

    // ✅ Scroll Active Link Highlight
    function ScrollActive() {
        const scrollY = window.scrollY;
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active-link');
            } else {
                navLink?.classList.remove('active-link');
            }
        });
    }

    // ✅ Scroll Event Listeners
    window.addEventListener("scroll", () => {
        headerShadow();
        ScrollActive();
    });

    // ✅ Typed.js Effect
    if (typeof Typed !== "undefined") {
        var typingEffect = new Typed(".typedtext", {
            strings: ["Developer"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000
        });
        console.log("Typed.js initialized!");
    } else {
        console.warn("Typed.js not found!");
    }

    // ✅ ScrollReveal Animations
    if (typeof ScrollReveal !== "undefined") {
        console.log("ScrollReveal initialized!");

        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000
        });

        sr.reveal(".featured-text-card", {});
        sr.reveal(".featured-name", { delay: 100 });
        sr.reveal(".featured-text-info", { delay: 200 });
        sr.reveal(".featured-text-btn", { delay: 200 });
        sr.reveal(".social-icons", { delay: 200 });
        sr.reveal(".featured-image", { delay: 300 });

        sr.reveal(".project-box", { interval: 200 });
        sr.reveal(".top-header", {});

        // About Section Animations
        sr.reveal(".about-info", { origin: "left", delay: 100 });
        sr.reveal(".contact-info", { origin: "left", delay: 100 });
        sr.reveal(".skill-box", { origin: "right", delay: 100 });
        sr.reveal(".form-control", { origin: "right", delay: 100 });

        console.log("ScrollReveal animations added!");
    } else {
        console.warn("ScrollReveal.js not found!");
    }
});
