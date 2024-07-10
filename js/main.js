const menu = document.querySelector(".menu");
const btnMenu = document.getElementById("btnMenu");
const clockMenu = document.getElementById("clockMenu");
const body = document.querySelector("body");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active")
})
clockMenu.addEventListener("click", () => {
    menu.classList.remove("active")
})
body.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !btnMenu.contains(event.target)) {
        menu.classList.remove("active");
    }
});