const CLICK = document.querySelector(".drop-down-btn")
const HIDDEN = document.querySelector(".hook")
const CONTENT = document.querySelector(".numbers-content")

console.log(CONTENT)

HIDDEN.classList.remove("hidden")
CONTENT.classList.add("hidden")

function drop(){
    HIDDEN.classList.toggle("hidden")
    CONTENT.classList.toggle("hidden")
}

CLICK.addEventListener("click", drop, false)
// CLICK.addEventListener("focus", drop, false)