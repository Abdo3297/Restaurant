/* toggle navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
/* close nav when clicking on a nav item */
document.addEventListener("click", function (e) {
    if (e.target.closest(".nav-item")) {
        toggleNav();
    }
});
/* loading page and animation */
window.addEventListener("load", function () {
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function () {
            document.querySelector(".page-loader").style.display = "none";
    }, 600);
    AOS.init();
});




/* sticky header */
window.addEventListener("scroll", function () {
    window.scrollY > 60 ? document.querySelector(".header").classList.add("sticky") : document.querySelector(".header").classList.remove("sticky");
});
/*filter*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")) {
        const targett = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menusection = document.querySelector(".menu-section");
        menusection.querySelector(".menu-tab-content.active").classList.remove("active");
        menusection.querySelector(targett).classList.add("active");
        AOS.init();
    }
});
/*scroll to top*/
let span = document.querySelector(".up");
window.onscroll = function () {
    this.scrollY >= 550 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
};
