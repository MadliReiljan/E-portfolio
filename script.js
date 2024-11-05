const images = [
    'assets/plants.jpg',
    'assets/medrawing.jpg',
    'assets/oceansaway.jpg'
];

let currentIndex = 0;
const rotatingImage = document.getElementById('rotating-image');

rotatingImage.src = images[currentIndex];
rotatingImage.style.transition = 'opacity 0.8s'; 
rotatingImage.style.width = '90%';
rotatingImage.style.height = 'auto';
rotatingImage.style.objectFit = 'cover';

function updateImage() {
    rotatingImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Increment index
        rotatingImage.src = images[currentIndex]; // Change image source
        rotatingImage.style.opacity = 1; // Fade in
    }, 800); 
}

setTimeout(() => {
    setInterval(updateImage, 5000); 
}, 800);