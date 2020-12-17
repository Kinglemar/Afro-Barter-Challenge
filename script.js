// ************************************drop down button*************************************

let start = document.querySelector(".drop-down-btn")
let end = document.querySelector(".anchor")

start.classList.remove("hidden")
end.classList.add("hidden")

function reveal(){
    start.classList.toggle("hidden")
    end.classList.toggle("hidden")
}

start.addEventListener("focus", reveal, false)