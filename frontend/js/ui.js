// ========== UI - Funciones de interfaz de usuario ==========

// Función para desplazarse a una sección
function scrollToSection(sectionId) {
    const elemento = document.getElementById(sectionId);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Función para enviar solicitud de registro
async function enviarSolicitud() {
    // Aquí se puede hacer más complejo con un formulario modal
    const datosUsuario = {
        nombre: prompt('¿Cuál es tu nombre?') || 'Nuevo Miembro',
        email: prompt('¿Cuál es tu email?') || 'email@example.com',
        interes: prompt('¿Cuál es tu área de interés?') || 'Tecnología'
    };

    if (datosUsuario.nombre && datosUsuario.email) {
        const resultado = await registrarMiembro(datosUsuario);
        if (resultado.exito) {
            alert(resultado.mensaje || '¡Solicitud enviada exitosamente!');
        } else {
            alert(resultado.mensaje || 'Error al enviar solicitud');
        }
    }
}

// Función para mostrar un mensaje flotante
function mostrarMensaje(texto, tipo = 'info') {
    const mensaje = document.createElement('div');
    mensaje.textContent = texto;
    mensaje.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${tipo === 'exito' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(mensaje);
    
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}

// Función para cargar datos al iniciar
async function cargarDatosIniciales() {
    console.log('Cargando datos iniciales...');
    
    const datos = await obtenerDatosSemillero();
    if (datos) {
        console.log('Datos del semillero:', datos);
    }

    const temas = await obtenerTemas();
    if (temas.length > 0) {
        console.log('Temas disponibles:', temas);
        cargarTemasEnUI(temas);
    }

    // Cargar equipo
    cargarEquipoEnUI();
}

// Función para cargar temas en la UI
function cargarTemasEnUI(temas) {
    const contenedor = document.getElementById('temasContainer');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    temas.forEach(tema => {
        const card = document.createElement('div');
        card.className = 'tema-card';
        card.innerHTML = `
            <h3>${tema.nombre}</h3>
            <p class="investigador">👨‍🔬 ${tema.investigadorPrincipal}</p>
            <p>${tema.descripcion}</p>
            <div class="tema-info">
                <span class="estado">${tema.estado}</span>
                <span>👥 ${tema.estudiantesAsignados} estudiantes</span>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Función para cargar equipo
function cargarEquipoEnUI() {
    const contenedor = document.getElementById('equipoContainer');
    if (!contenedor) return;

    // Datos del equipo simulados
    const equipo = [
        {
            id: 1,
            nombre: "Juliana Vasquez ",
            rol: "Coordinador del Semillero",
            email: "juan.perez@universidad.edu",
            icono: "👨‍🏫"
        },
        {
            id: 2,
            nombre: "no ",
            rol: "Investigadora Principal",
            email: "maria.gonzalez@universidad.edu",
            icono: "👩‍🔬"
        },
        {
            id: 3,
            nombre: "justo ayer no usamos nombres",
            rol: "Investigador en IA",
            email: "carlos.lopez@universidad.edu",
            icono: "👨‍💻"
        },
        {
            id: 4,
            nombre: "floja",
            rol: "Investigadora en Sostenibilidad",
            email: "laura.rodriguez@universidad.edu",
            icono: "👩‍🔧"
        }
    ];

    contenedor.innerHTML = '';

    equipo.forEach(miembro => {
        const card = document.createElement('div');
        card.className = 'miembro-card';
        card.innerHTML = `
            <div class="miembro-avatar">${miembro.icono}</div>
            <div class="miembro-info">
                <h3>${miembro.nombre}</h3>
                <p class="rol">${miembro.rol}</p>
                <p class="email">📧 ${miembro.email}</p>
            </div>
        `;
        contenedor.appendChild(card);
    });
}