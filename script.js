// Initialize AOS for animations on scroll
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: false, // Header animations only show once
});

// Smooth scroll and reset AOS on navigation link click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get target section ID
        const targetElement = document.querySelector(targetId); // Get target section

        // Scroll to the target section smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Refresh AOS for sections
        setTimeout(() => AOS.refresh(), 300); // Adjust delay if needed
    });
});

// Get modal elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];

// Event listener for images in the gallery
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block"; // Show the modal
        modalImage.src = this.src; // Set the clicked image to the modal
        captionText.innerHTML = this.alt; // Set the caption text
    });
});

// Close the modal when the close button is clicked
closeModal.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
}

// Change header background and padding on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled"); // Add class on scroll
    } else {
        header.classList.remove("scrolled"); // Remove class when at the top
    }
};
