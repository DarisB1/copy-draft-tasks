const menu = document.getElementById("menu");
const btnRules = document.querySelector(".btnRules");
const secRule = document.getElementById("secRule");
const secMenu = document.querySelector(".secMenu");

menu.addEventListener("click", () => {
    secMenu.style.display = "flex";
})

btnRules.addEventListener("click", () => {
    secRule.style.display = "none";
    menu.style.display = "none";
})