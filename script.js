const menu = document.getElementById("menu-icon");
const sideNavbar = document.getElementById("side-navbar");
const mainDashboard = document.getElementById("main-dashboard");

let toggle = true;
menu.addEventListener("click", () => {
    if (toggle) {
        sideNavbar.style.width = "0";
        mainDashboard.style.width = "100vw";
        menu.classList = "bx bx-menu-alt-left"
        toggle = false
    } else {
        sideNavbar.style.width = "20vw";
        mainDashboard.style.width = "80vw";
        menu.classList = "bx bx-menu"
        toggle = true
    }
})