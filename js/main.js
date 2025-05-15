// Start Selecting Elements
let togglerDiv = document.querySelector("header .links .icon");
let showedUl = document.querySelector("header .links ul");
let scrollToTopAnchor = document.querySelector(".scroll-to-top");
scrollToTopAnchor.style.cssText = "visibility: hidden; opacity: 0";
// End Selecting Elements
togglerDiv.onclick = function () {
    showedUl.classList.toggle("active");
}
document.querySelector(".landing").onclick = function () {
    showedUl.classList.remove("active");
}
window.onscroll = function () {
    if (window.scrollY >= 265) {
        showedUl.classList.remove("active");
    }
    if (window.scrollY >= 500) {
        scrollToTopAnchor.style.cssText = "visibility: visible; opacity: 1; display: flex";
    } else {
        scrollToTopAnchor.style.cssText = "visibility: visible; opacity: 0; display: flex; cursor: initial;";
    }
}