// Select elements from the DOM
const nextEL = document.querySelector(".btn-next"); // Next button
const previousEL = document.querySelector(".btn-previous"); // Previous button
const imageContainerEL = document.querySelector(".image-container"); // Image container
const images = document.querySelectorAll(".image-container img"); // Get all images

let currentImage = 1; // Tracks the currently displayed image
let timeout; // Stores timeout for auto-slide

// Event listener for previous button click
previousEL.addEventListener("click", () => {
  currentImage--; // Move to the previous image
  clearTimeout(timeout); // Stop auto-slide when user interacts
  updateImg(); // Update image display
});

// Event listener for next button click
nextEL.addEventListener("click", () => {
  currentImage++; // Move to the next image
  clearTimeout(timeout); // Stop auto-slide when user interacts
  updateImg(); // Update image display
});

// Function to update image display
function updateImg() {
  // Check boundaries to loop the images
  if (currentImage > images.length) {
    currentImage = 1; // Loop back to first image
  } else if (currentImage < 1) {
    currentImage = images.length; // Loop to last image
  }

  // Move the image container to show the current image
  imageContainerEL.style.transform = `translateX(-${
    (currentImage - 1) * 500
  }px)`;

  // Restart the auto-slider after user interaction
  timeout = setTimeout(() => {
    currentImage++; // Move to the next image
    updateImg(); // Recursively call update function
  }, 3000); // Set auto-slide interval to 3 seconds
}

// Start auto-slide when the page loads
updateImg();
