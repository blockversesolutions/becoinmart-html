// Configuration
const totalBlocks = 30; // Total number of blocks
const targetPercentage = 90; // Target percentage
const animationDuration = 2000; // Duration of animation in milliseconds
const loopInterval = 3000; // Interval between loop animations (in milliseconds)

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

// Function to animate the progress bar
function animateProgressBar() {
  const blocks = document.querySelectorAll('.progress-block');
  const startTime = performance.now();

  function updateBlocks(currentTime) {
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

    if (progress < 1) {
      requestAnimationFrame(updateBlocks); // Continue animation
    } else {
      setTimeout(() => resetProgressBar(), loopInterval); // Delay before restarting
    }
  }

  requestAnimationFrame(updateBlocks); // Start block animation
}

// Function to reset the progress bar animation
function resetProgressBar() {
  const blocks = document.querySelectorAll('.progress-block');
  blocks.forEach((block) => block.classList.remove('active'));
  animateProgressBar(); // Restart block animation
}

// Function to animate the percentage value (one-time only)
function animatePercentage() {
  const startTime = performance.now();

  function updatePercentage(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / animationDuration, 1); // Normalize progress [0, 1]
    const currentPercentage = Math.floor(progress * targetPercentage);

    // Update percentage text
    percentageText.textContent = ` ${currentPercentage}%`;

    if (progress < 1) {
      requestAnimationFrame(updatePercentage); // Continue percentage animation
    }
  }

  requestAnimationFrame(updatePercentage); // Start percentage animation
}

// Start the animations
animateProgressBar(); // Start continuous progress bar animation
animatePercentage(); // Animate percentage one time
