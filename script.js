const images = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg",
    "./images/image4.jpg",
];
let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

document.addEventListener("DOMContentLoaded", () => {
    const updateImage = () => {
        mainImage.src = images[currentIndex];
    };

    updateImage();

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length; // Move to next, loop back at end
        updateImage();
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to previous, loop back at start
        updateImage();
    });
});
