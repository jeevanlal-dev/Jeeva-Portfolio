document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded! Running scripts...");

    // ✅ Mobile Menu Toggle Function
    function myMenuFunction() {
        var menuBtn = document.getElementById("myNavMenu");

        if (menuBtn.classList.contains("responsive")) {
            menuBtn.classList.remove("responsive");
        } else {
            menuBtn.classList.add("responsive");
        }
    }

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

    // ✅ ScrollReveal Animations (Fixed with proper alignment)
    if (typeof ScrollReveal !== "undefined") {
        console.log("ScrollReveal initialized!");

        const sr = ScrollReveal({
            origin: "top",
            distance: "50px", // Reduced distance to prevent big shifts
            duration: 1500,
            opacity: 0, // Ensures a smooth appearance
            reset: true // ✅ FIXED: Animations will NOT repeat on scroll
        });
        sr.reveal(".featured-text",{beforeReveal : fixAlignment})
        sr.reveal("#about",{beforeReveal : fixAlignment})
        sr.reveal(".featured-text-card", { });
        sr.reveal(".featured-name", { delay: 100, });
        sr.reveal(".featured-text-info", { delay: 200, beforeReveal: fixAlignment });
        sr.reveal(".featured-text-btn", { delay: 200,  });
        sr.reveal(".social-icons", { delay: 200,  });
        sr.reveal(".featured-image", { delay: 300, beforeReveal: fixAlignment });

        sr.reveal(".project-box", { interval: 200, beforeReveal: fixAlignment });
        sr.reveal(".top-header", { beforeReveal: fixAlignment });

        sr.reveal(".about-info", { origin: "left", delay: 100, beforeReveal: fixAlignment });
        sr.reveal(".contact-info", { origin: "left", delay: 100, beforeReveal: fixAlignment });

        sr.reveal(".skill-box", { origin: "right", delay: 100, });
        sr.reveal(".form-control", { origin: "right", delay: 100, });

        console.log("ScrollReveal animations added!");
    } else {
        console.warn("ScrollReveal.js not found!");
    }

    // ✅ Fix Alignment After Animation
    function fixAlignment(el) {
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";
        el.style.flexDirection = "column";
        el.style.opacity = "1";
    }
});
