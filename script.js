document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.jpeg",
        "03-11.png",
        "05-11.png",
        "06-11.png",
        "09-11.png",
        "11-11.png",
        "20-11_SIQ.png",
        "20-11.png",
        "22-11.png",
        "24-11.png",
        "25-11.png",
        "26-11.png",
        "28-11.png",
        "29-11_SIQ.png",
        "29-11.png",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
