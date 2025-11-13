// ========== MAIN - Inicialización principal ==========

// Evento para cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página inicializada');
    cargarDatosIniciales();
    configurarEventosNavegacion();
});

// Configurar eventos de navegación
function configurarEventosNavegacion() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                scrollToSection(href.substring(1));
            }
        });
    });
}

// Agregar animación de scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 8px 30px rgba(0, 102, 204, 0.3)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 102, 204, 0.2)';
    }
});