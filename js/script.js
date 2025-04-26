let isDarkMode = false;

function toggleTheme() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');

    // Swap the lightbulb icon based on the current mode
    const lightbulb = document.getElementById('lightbulb');
    if (isDarkMode) {
        lightbulb.src = "photos/lightbulb2.png";  // Light mode icon
    } else {
        lightbulb.src = "photos/darkbulb2.png";  // Dark mode icon
    }

    // Flip the dark mode state
    isDarkMode = !isDarkMode;
}

document.addEventListener("DOMContentLoaded", function () {
    const totalImages = 99; // Total number of images available
    const folderPath = "photos/pic/"; // Folder containing the images
    const imageElements = document.querySelectorAll(".random-image");

    // Generate an array of image numbers (1 to totalImages) and shuffle it
    const imageNumbers = Array.from({ length: totalImages }, (_, i) => i + 1);
    shuffleArray(imageNumbers);

    // Assign each image element a unique image from the shuffled array
    imageElements.forEach((img, index) => {
        if (index < imageNumbers.length) {
            const randomIndex = imageNumbers[index];
            img.src = `${folderPath}pexels${randomIndex}.jpg`; // Update src to a unique random image
        }
    });

    // Handle dropdowns to close other open dropdowns when a new one is clicked
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.stopPropagation();
            closeAllDropdowns();
            this.nextElementSibling.classList.toggle("show");
        });
    });

    // Handle language selector
    document.querySelector('.language-button').addEventListener('click', function(event) {
        event.stopPropagation();
        closeAllDropdowns();
        document.querySelector('.language-dropdown').classList.toggle('show');
    });

    // Close all dropdowns if clicking outside of any dropdown
    document.addEventListener('click', function() {
        closeAllDropdowns();
    });
});

// Function to close all dropdowns
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown-content, .language-dropdown");
    dropdowns.forEach(dropdown => dropdown.classList.remove("show"));
}

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
