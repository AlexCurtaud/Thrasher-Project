// Dropdown menu
// Could have been done with CSS for performance & efficiency
// But the goal here is to improve with JS
const dropButton = document.querySelector(".dropbutton");
const dropContent = document.querySelector(".dropcontent");

dropButton.addEventListener("mouseenter", function() {
dropContent.classList.remove("hide");
});

dropButton.addEventListener("mouseleave", function() {
dropContent.classList.add("hide");
});

dropContent.addEventListener("mouseenter", function() {
dropContent.classList.remove("hide");
});

dropContent.addEventListener("mouseleave", function() {
dropContent.classList.add("hide");
});

