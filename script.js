document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.jpeg",
        "VLM 01-01.png",
        "NRN 02-01.png",
        "VLM 06-01.png",
        "NRN 09-01.png",        
        "VLM 09-01.png",
        "TTP 10-01.png",
        "GRC 11-01.png",
        "NRN 12-01.png",
        "SAM 13-01.png",
        "VLM 13-01.png",
        "VLM 16-01.png",
        "TTP 18-01.png",
        "VLM 19-01.png",
        "VLM 19-01-24.png",
        "VLM-BTT 21-01.png",
        "TTP 22-01.png",
        "SIQ 22-01.png",
        "VLM 26-01.png",
        "GRC 28-01.png"
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
