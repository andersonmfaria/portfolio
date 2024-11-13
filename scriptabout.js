let currentIndex = 0; // Índice da imagem atualmente exibida
const images = document.querySelectorAll('.grid-item'); // Seleciona todas as imagens da galeria

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    // Define o índice da imagem atualmente aberta
    currentIndex = parseInt(element.getAttribute('data-index'));
    lightboxImage.src = element.src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Função para navegar no lightbox (direção: -1 para anterior, 1 para próxima)
function navigateLightbox(direction) {
    currentIndex += direction;

    // Garante que o índice esteja dentro do intervalo das imagens
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Atualiza a imagem do lightbox
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[currentIndex].src;
}
