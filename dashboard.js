// Select all cards
const cards = document.querySelectorAll('.card');

// Add click event to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            // Navigate to the link
            window.location.href = link;
        }
    });

    // Optional: change cursor on hover
    card.style.cursor = 'pointer';
});
