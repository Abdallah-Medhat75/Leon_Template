let togglerDiv = document.querySelector("header .links .icon");
let showedUl = document.querySelector("header .links ul");

togglerDiv.onclick = function () {
    showedUl.classList.toggle("active");
}