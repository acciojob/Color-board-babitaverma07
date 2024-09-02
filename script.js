const container = document.querySelector('.container');

for (let i = 0; i < 800; i++) {
    // Create a new square element
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Optionally, you can add random colors when the square is displayed
    // square.style.backgroundColor = getRandomColor();
    
    // Append the square to the container
    container.appendChild(square);
}

// Optional: Function to generate random colors
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
