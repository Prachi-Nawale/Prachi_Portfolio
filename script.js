/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================
   ACTIVE NAV SECTION
========================= */

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* =========================
   TERMINAL TYPING EFFECT
========================= */

const typing =
    document.querySelector("#typing");

const messages = [
    "building impact...",
    "debugging edge cases...",
    "learning Spring Boot...",
    "shipping better code...",
    "testing before release..."
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const message =
        messages[messageIndex];

    if (!deleting) {

        characterIndex++;

        typing.textContent =
            message.substring(
                0,
                characterIndex
            );

        if (
            characterIndex ===
            message.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;
        }

    } else {

        characterIndex--;

        typing.textContent =
            message.substring(
                0,
                characterIndex
            );

        if (characterIndex === 0) {

            deleting = false;

            messageIndex =
                (messageIndex + 1)
                % messages.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 35 : 65
    );

}

setTimeout(typeEffect, 800);


/* =========================
   CURSOR GLOW
========================= */

const glow =
    document.querySelector(".cursor-glow");

if (
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            glow.style.left =
                `${event.clientX}px`;

            glow.style.top =
                `${event.clientY}px`;

            glow.style.opacity = "1";

        }
    );

}


/* =========================
   PROJECT TILT
========================= */

const projects =
    document.querySelectorAll(".project");


projects.forEach(project => {

    project.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth < 900
            ) {
                return;
            }

            const rect =
                project.getBoundingClientRect();

            const x =
                (
                    (event.clientX -
                        rect.left) /
                    rect.width -
                    0.5
                ) * 2;

            const y =
                (
                    (event.clientY -
                        rect.top) /
                    rect.height -
                    0.5
                ) * 2;

            project.style.transform =
                `
                perspective(1200px)
                rotateY(${x * 1.3}deg)
                rotateX(${-y * 1.3}deg)
                translateY(-5px)
                `;

        }
    );


    project.addEventListener(
        "mouseleave",
        () => {

            project.style.transform = "";

        }
    );

});


/* =========================
   PLACEHOLDER LINK WARNING
========================= */

document
    .querySelectorAll('a[href="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                alert(
                    "Replace this # with your actual GitHub, LinkedIn, Live Demo or Certificate URL."
                );

            }
        );

    });