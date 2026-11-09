
let images = document.querySelectorAll(".gallery img");

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let currentIndex = 0;

// Open image
images.forEach(function(image, index) {

    image.addEventListener("click", function() {

        currentIndex = index;

        lightboxImg.src = image.src;

        lightbox.style.display = "flex";

    });

});

// Close image
close.addEventListener("click", function() {

    lightbox.style.display = "none";

});

// Next image
next.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;

});

// Previous image
prev.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;

});
