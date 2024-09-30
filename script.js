function goToMemories() {
    // Start creating hearts when the button is clicked
    createHearts();
    window.location.href = 'memories.html'; // Redirect to the memories page
}

const images = [
    'images/Image1.jpg', // Adjust these paths as needed
    'images/Image2.jpg',
    'images/Image3.jpg',
    'images/Image4.jpg'
];

let currentIndex = 0;
const slideshowImage = document.getElementById('slideshowImage');
slideshowImage.src = images[currentIndex];

function showNextImage() {
    const allImages = document.querySelectorAll('.slideshow img');
    allImages.forEach(img => img.classList.remove('active')); // Hide all images
    currentIndex = (currentIndex + 1) % images.length;
    slideshowImage.src = images[currentIndex];
    slideshowImage.classList.add('active'); // Show the current image
}

const imageInterval = setInterval(() => {
    showNextImage();
}, 5000); // Change image every 5 seconds

// Show love message after slideshow is done
setTimeout(() => {
    clearInterval(imageInterval); // Stop the slideshow
    slideshowImage.classList.remove('active'); // Hide the last image
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.style.display = 'block'; // Make the message block
    setTimeout(() => {
        loveMessage.style.opacity = 1; // Fade in the love message
    }, 50); // Short delay to ensure display is set before fading

    // Start popping hearts
    createHearts();
}, 5000 * images.length); // Adjust timing based on number of images

function createHearts() {
    const body = document.body;
    for (let i = 0; i < 20; i++) { // Create 20 hearts
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        heart.style.backgroundColor = Math.random() < 0.5 ? 'pink' : 'purple'; // Random color
        heart.style.width = Math.random() * 30 + 10 + 'px'; // Random size between 10px and 40px
        heart.style.height = heart.style.width; // Maintain aspect ratio

        body.appendChild(heart);

        // Remove heart after animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

function goBack() {
    window.location.href = 'index.html'; // Redirect to the main apology page
}
