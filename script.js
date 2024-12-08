const card = document.querySelector('.card');
const imgBox = document.querySelector('.img-box');
const details = document.querySelector('.details');
const audio = document.getElementById('cardOpenAudio'); // Get the audio element

// Set the volume to 0.2 (20%)
audio.volume = 0.2;

let isOpen = false;
let autoOpenTimeout;

function animateCard() {
    if (isOpen) {
        card.style.transform = "rotate(-5deg)";
        imgBox.style.transform = "rotateY(-160deg)";
        details.style.transform = "rotateY(-20deg)";
        audio.play(); // Play audio when the card opens
    } else {
        card.style.transform = "rotate(0deg) translateX(-25%)";
        imgBox.style.transform = "rotateY(0deg)";
        details.style.transform = "rotateY(0deg)";
    }
}

function resetAutoOpen() {
    clearTimeout(autoOpenTimeout);
    autoOpenTimeout = setTimeout(() => {
        isOpen = true;
        animateCard();
    }, 4000); // 4000 milliseconds = 4 seconds
}

// Event listeners for clicks
imgBox.addEventListener('click', () => {
    isOpen = !isOpen;
    animateCard();
    resetAutoOpen(); // Reset the auto-open timer on click
});

details.addEventListener('click', () => {
    isOpen = !isOpen;
    animateCard();
    resetAutoOpen(); // Reset the auto-open timer on click
});

// Start the auto-open timer when the script runs
resetAutoOpen();