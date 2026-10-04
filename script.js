// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});


// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.innerHTML = "☰";

    });

});


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".section, .about-card, .timeline-item, .skill-card, .certificate-card, .project-card, .resume-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ================================
// ACTIVE NAVBAR LINK
// ================================

const sections = document.querySelectorAll("section[id]");
const navLinksItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinksItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ================================
// SCROLL TO TOP BUTTON
// ================================

const scrollTopButton =
    document.createElement("button");

scrollTopButton.innerHTML = "↑";

scrollTopButton.className =
    "scroll-top";

scrollTopButton.setAttribute(
    "aria-label",
    "Scroll to top"
);

document.body.appendChild(
    scrollTopButton
);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add(
            "visible"
        );

    } else {

        scrollTopButton.classList.remove(
            "visible"
        );

    }

});


scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// ================================
// PAGE LOADED
// ================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});