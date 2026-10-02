const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.dataset.theme = savedTheme;
}

function updateThemeButton() {
    const isDark =
        document.documentElement.dataset.theme === "dark";

    themeToggle.setAttribute(
        "aria-pressed",
        String(isDark)
    );

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Enable light mode"
            : "Enable dark mode"
    );

    themeIcon.textContent =
        isDark ? "☀️" : "🌙";

    themeLabel.textContent =
        isDark ? "Light Mode" : "Dark Mode";
}

updateThemeButton();

themeToggle.addEventListener("click", () => {

    const isDark =
        document.documentElement.dataset.theme === "dark";

    const newTheme =
        isDark ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);

    updateThemeButton();
});

const contactForm =
    document.querySelector("#contact-form");

const formStatus =
    document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    formStatus.textContent = "Sending message...";

    setTimeout(() => {

        formStatus.textContent =
            "Message sent successfully.";

        contactForm.reset();

    }, 1000);

});