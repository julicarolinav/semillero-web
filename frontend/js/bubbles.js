// Array con las rutas de tus imágenes
const images = [
    'img/momento1.JPG',
    'img/momento2.JPG',
    'img/momento3.JPG',
    'img/momento4.JPG',
    'img/momento5.JPG',
    'img/momento6.JPG',
    'img/momento7.JPG'
];

// Función para crear burbujas
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles-container');
    
    if (!bubblesContainer) return;

    // Crear una burbuja para cada imagen
    images.forEach((imagePath, index) => {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Asignar tamaños aleatorios
        const sizes = ['small', 'medium', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        bubble.classList.add(randomSize);
        
        // Asignar la imagen de fondo
        bubble.style.backgroundImage = `url('${imagePath}')`;
        
        // Agregar la burbuja al contenedor
        bubblesContainer.appendChild(bubble);
    });
}

// Inicializar las burbujas cuando se carga la página
document.addEventListener('DOMContentLoaded', createBubbles);

// Recrear burbujas cada cierto tiempo para efecto continuo
setInterval(() => {
    const bubblesContainer = document.querySelector('.bubbles-container');
    if (bubblesContainer) {
        // Las burbujas se recrearán automáticamente por la animación infinita
        // Este código es opcional para efectos adicionales
    }
}, 20000);