/*=========================================
Richa World Travels
Main JavaScript File
=========================================*/

/* ==========================
Mobile Menu Toggle
========================== */

const mobileToggle = document.querySelector(".mobile-toggle");
const navigation = document.querySelector("nav");

if (mobileToggle && navigation) {

    mobileToggle.addEventListener("click", function () {

        navigation.classList.toggle("show");

    });

}

/* ==========================
Sticky Header
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* ==========================
Back To Top Button
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================
Highlight Current Page
========================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});

/* ==========================
Scroll Reveal Animation
========================== */

const revealItems = document.querySelectorAll(
    ".package-card, .gallery-item, .service-box, .why-card, .mission-card, .destination-card, .info-box"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealItems.forEach(function(item){

        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < windowHeight - 100){

            item.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================
Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
Image Fade-In
========================== */

const images = document.querySelectorAll("img");

images.forEach(function(img){

    img.addEventListener("load", function(){

        img.style.opacity = "1";

    });

});


/* ==========================
Console Message
========================== */

console.log("Richa World Travels Website Loaded Successfully.");

/* ==========================
Hero Image Slider
========================== */

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    setInterval(function () {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        slides[currentSlide].classList.add("active");

    }, 7000);

}

/* ==========================================
DESTINATION PAGE
========================================== */

const destinationData = {

    bali: {

        title: "Bali",

        description: "Bali is Indonesia's most famous island, known for luxury resorts, beautiful beaches, ancient temples, lush rice terraces and vibrant culture. It is one of the world's favourite honeymoon and family holiday destinations.",

        bestTime: "April to October",

        highlights: [

            "Uluwatu Temple",

            "Tanah Lot Temple",

            "Nusa Penida",

            "Tegallalang Rice Terraces",

            "Seminyak Beach"

        ],

        images: [

            "images/attractions/bali1.jpg",

            "images/attractions/bali2.jpg",

            "images/attractions/bali3.jpg",

            "images/attractions/bali4.jpg"

        ]

    }

};

const cards = document.querySelectorAll(".destination-card");

cards.forEach(card => {

    card.addEventListener("click", function(){

        const place = this.dataset.place;

        loadDestination(place);

        cards.forEach(c=>c.classList.remove("active"));

        this.classList.add("active");

    });

});

function loadDestination(place){

    const data = destinationData[place];

    if(!data) return;

    document.getElementById("destinationTitle").textContent = data.title;

    document.getElementById("destinationDescription").textContent = data.description;

    document.getElementById("bestTime").textContent = data.bestTime;

    const list = document.getElementById("highlights");

    list.innerHTML = "";

    data.highlights.forEach(item=>{

        list.innerHTML += `<li>✔ ${item}</li>`;

    });

    document.getElementById("gallery1").src = data.images[0];

    document.getElementById("gallery2").src = data.images[1];

    document.getElementById("gallery3").src = data.images[2];

    document.getElementById("gallery4").src = data.images[3];

}

loadDestination("bali");