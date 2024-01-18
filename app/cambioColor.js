function changeBackgroundColor() {
    const header = document.querySelector(".encabezado");
    const footer = document.querySelector(".pie");
    const randomColor = getRandomColor();

    
    header.style.transition = "background-color 0.5s ease";
    footer.style.transition = "background-color 0.5s ease";

    header.style.backgroundColor = randomColor;
    footer.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 4000);

function getRandomColor() {
    const colors = ["#A899FF", "#e35999"]; 
    return colors[Math.floor(Math.random() * colors.length)];
}