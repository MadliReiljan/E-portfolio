const images = [
    'assets/portfolio_picture.png',
    'assets/profile.jpg',
    'assets/portfoolio_pilt.jpg'
];

let currentIndex = 0;
const rotatingImage = document.getElementById('rotating-image');

// Set the initial image source
rotatingImage.src = images[currentIndex];

function updateImage() {
    rotatingImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Increment index
        rotatingImage.src = images[currentIndex]; // Change image source
        rotatingImage.style.opacity = 1; // Fade in
    }, 800); // Wait for fade out to finish
}

// Set initial delay for starting the rotation
setTimeout(() => {
    // Set interval for automatic image rotation
    setInterval(updateImage, 5000); // Change image every 3 seconds
}, 800); // Wait half a second before starting the interval