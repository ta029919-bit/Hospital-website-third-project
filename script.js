// Hamburger Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
    }
});

// Dark / Light Mode
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Appointment Form Validation
const form = document.getElementById("appointment-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;

    if (name === "" || email === "" || phone === "" || date === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Appointment Booked Successfully!");
        form.reset();
    }
});

// Department Search
const search = document.getElementById("search");
const cards = document.querySelectorAll(".department-card");

search.addEventListener("keyup", () => {
    let value = search.value.toLowerCase();

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// FAQ Accordion
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    const answer = faq.querySelector("p");
    answer.style.display = "none";

    faq.querySelector("h3").addEventListener("click", () => {

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Testimonial Slider
const testimonials = [
    {
        text: "Excellent doctors and friendly staff.",
        name: "Ayesha"
    },
    {
        text: "Very clean hospital and quick service.",
        name: "Ali"
    },
    {
        text: "Highly recommended for family healthcare.",
        name: "Fatima"
    }
];

let index = 0;

const testimonial = document.querySelector(".testimonial");

setInterval(() => {

    index++;

    if (index >= testimonials.length) {
        index = 0;
    }

    testimonial.innerHTML = `
        <p>"${testimonials[index].text}"</p>
        <h4>- ${testimonials[index].name}</h4>
    `;

}, 3000);