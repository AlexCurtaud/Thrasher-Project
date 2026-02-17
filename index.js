


// Dropdown menu
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


// Color changes dropdown Menu (foreEach!!)
// querySelectorAll + forEach to iterate on each node
// const dropLinks = document.querySelectorAll(".drop-link");

// dropLinks.forEach(function(dropLink) {

// dropLink.addEventListener("mouseenter", function() {
//     dropLink.classList.add("touched");
// });

// dropLink.addEventListener("mouseleave", function() {
//     dropLink.classList.remove("touched");
// });
// });

