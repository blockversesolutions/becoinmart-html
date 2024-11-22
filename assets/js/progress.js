// Configuration
const totalBlocks = 30; // Total number of blocks
const targetPercentage = 50; // Target percentage (loops continuously)
const animationDuration = 2000; // Duration of animation in milliseconds

// Calculate the number of blocks to fill based on the percentage
const filledBlocks = Math.round((totalBlocks * targetPercentage) / 100);

// Get elements
const progressContainer = document.querySelector('.progress-container');
const percentageText = document.querySelector('.percentage');

// Generate blocks dynamically
for (let i = 0; i < totalBlocks; i++) {
  const block = document.createElement('div');
  block.classList.add('progress-block');
  progressContainer.appendChild(block);
}

// Function to animate the progress bar and percentage
function animateProgressBar() {
  const blocks = document.querySelectorAll('.progress-block');
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / animationDuration, 1); // Normalize progress [0, 1]
    const currentFilledBlocks = Math.floor(progress * filledBlocks);

    // Update blocks
    blocks.forEach((block, index) => {
      if (index < currentFilledBlocks) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });

    // Update percentage text
    const currentPercentage = Math.floor(progress * targetPercentage);
    percentageText.textContent = ` ${currentPercentage}%`;

    if (progress < 1) {
      requestAnimationFrame(update); // Continue animation
    } else {
      setTimeout(() => resetProgressBar(), 500); // Delay before restarting
    }
  }

  requestAnimationFrame(update); // Start animation
}

// Function to reset and restart the progress bar animation
function resetProgressBar() {
  // Reset blocks and percentage
  const blocks = document.querySelectorAll('.progress-block');
  blocks.forEach((block) => block.classList.remove('active'));
  percentageText.textContent = `: 0%`;

  // Restart animation
  animateProgressBar();
}

// Start the animation
animateProgressBar();
