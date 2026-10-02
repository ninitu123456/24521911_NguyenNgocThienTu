const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.dataset.theme = savedTheme;
}
themeToggle.textContent =
    document.documentElement.dataset.theme === "dark"
        ? "Light Mode"
        : "Dark Mode";
        
themeToggle.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.dataset.theme === "dark"
            ? "dark"
            : "light";

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    document.documentElement.dataset.theme = newTheme;

    localStorage.setItem("theme", newTheme);

    themeToggle.textContent =
        newTheme === "dark"
            ? "Light Mode"
            : "Dark Mode";
});