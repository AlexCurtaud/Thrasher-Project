

const dropButton = document.querySelector(".dropbutton");
const dropContent = document.querySelector(".dropcontent");


dropButton.addEventListener("mouseenter", function() {
dropContent.classList.remove("hide");
})

dropButton.addEventListener("mouseleave", function() {
dropContent.classList.add("hide");
})

dropContent.addEventListener("mouseenter", function() {
dropContent.classList.remove("hide");
})

dropContent.addEventListener("mouseleave", function() {
dropContent.classList.add("hide");
})