document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const openCardBtn = document.querySelector('.open-card-btn');
    const confettiContainer = document.querySelector('.confetti-container');

    // Handle card opening
    openCardBtn.addEventListener('click', () => {
        cardContainer.classList.add('open');
        setTimeout(() => {
            createConfetti(100);
        }, 500); // Start confetti after the card begins to open
    });

    // Create a burst of confetti
    function createConfetti(count) {
        const colors = ['#ff69b4', '#ffb6c1', '#ffff00', '#00ff00']; // Match CSS colors
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettiContainer.appendChild(confetti);
        }
    }
});
