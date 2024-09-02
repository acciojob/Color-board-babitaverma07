//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            square.style.transition = 'background-color 0.5s ease'; // Apply transition
        });

        square.addEventListener('mouseleave', () => {
            setTimeout(() => {
                square.style.backgroundColor = '#fff'; // Reset color after 1 second
            }, 1000); // 1 second delay to match transition
        });
    });
});
