
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Automatic Current Year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact Form
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

// CHANGE THIS TO YOUR BUSINESS EMAIL
const businessEmail = "nsburdak07@gmail.com";

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);

    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    if (businessEmail === "nsburdak07@gmail.com") {
        formNote.textContent =
            "Please add your business email in script.js first.";
        return;
    }

    const subject = encodeURIComponent(
        "New Project Enquiry - " + service
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nService: " + service +
        "\nProject Details: " + message
    );

    const mailtoLink =
        "mailto:" + businessEmail +
        "?subject=" + subject +
        "&body=" + body;

    formNote.textContent =
        "Opening your email application...";

    window.location.href = mailtoLink;
});
