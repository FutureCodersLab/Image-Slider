const images = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
];
let currentIndex = 0;

const mainImage = document.getElementById("main-image");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

document.addEventListener("DOMContentLoaded", () => {
    const updateImage = () => {
        mainImage.src = images[currentIndex];
    };

    updateImage();

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
});
