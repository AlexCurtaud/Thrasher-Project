
const blackAndWhite = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const thrasherCovers = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

// Create Image from the Black & White Gallery
function createBAW(array) {
    const divGalleryBAW = document.querySelector('.gallery-baw');
    for (const src of array) {
        const image = document.createElement("img");
        image.src = "assets/img/gallery/black_white/" + src;
        image.className = "image-gallery";
        const titreImg = document.createElement("h3");
        titreImg.innerText = src;
        const divImage = document.createElement("div");

        divImage.appendChild(titreImg);
        divImage.appendChild(image);
        divGalleryBAW.appendChild(divImage);
    }
}

// Create Image from the Cover Gallery
function createCovers(array) {
    const divGalleryCovers = document.querySelector('.gallery-covers');
    for (const src of array) {
        const image = document.createElement("img");
        image.src = "assets/img/gallery/covers/" + src;
        image.className = "image-gallery";

        divGalleryCovers.appendChild(image);
    }
}

createBAW(blackAndWhite);
createCovers(thrasherCovers);

// Display buttons
// One Image per Row

const one = document.querySelector("#one-icon");
one.addEventListener("click", function () {
    const divOne = document.querySelectorAll(".gallery-global");
    for (const div of divOne) {
        if (div.innerHTML.includes("one-display") === false) {
            div.classList.add("one-display");
            div.classList.remove("mult-display");
            console.log(divOne);
        }
    }
});

// Multiple with Wrap (3 max per row)
const mult = document.querySelector("#mult-icon");
mult.addEventListener("click", function () {
    divMult = document.querySelectorAll(".gallery-global");
    for (const div of divMult) {
        if (div.innerHTML.includes("mult-display") === false) {
            div.classList.add("mult-display");
            div.classList.remove("one-display");
            console.log(divMult);
        }
    }
});

// Add Image button
// Click Icon to Show the Add Image Form
const addIcon = document.querySelector("#add-image");
addIcon.addEventListener("click", function () {
    const form = document.querySelector(".container-form-add");
    form.classList.remove("hide");
});

// Click Icon to Close de Add Image Form
const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", function () {
    const form = document.querySelector(".container-form-add");
    form.classList.add("hide");
});

// Form to Insert a new Image
const addImage = document.querySelector(".confirm-add")
addImage.addEventListener("click", function () {
    // const form = document.querySelector(".container-form-add");
    // form.classList.add("hide");
    const img = new Image();
    const file = document.querySelector("#add-file").files[0];
    const galleryChoice = document.querySelector("#gallery-name").value;
    img.src = URL.createObjectURL(file);
    console.log(galleryChoice);
    img.onload = () => {
        console.log(img.width);
        if (img.width !== 500 && img.height !== 750) {
            throw new Error("Wrong size");
        } else {
            if (galleryChoice == 1) {
                const divGalleryBAW = document.querySelector(".gallery-baw");
                divGalleryBAW.appendChild(img);
                console.log(galleryChoice);
            } else if (galleryChoice == 2) {
                const divGalleryCovers = document.querySelector(".gallery-covers");
                divGalleryCovers.appendChild(img);
            }
        }
    }
});