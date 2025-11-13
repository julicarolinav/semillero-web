// ========== CONTROLADOR DE MIEMBROS ==========

let miembros = [
    {
        id: 1,
        nombre: "Juan Bermejo",
        email: "juan@universidad.edu",
        telefono: "3001234567",
        programa: "Ingeniería electrónica",
        semestre: 8,
        interes: "nada",
        estado: "Activo",
        fechaInscripcion: "2024-01-15"
    },
    {
        id: 2,
        nombre: "Lucas Romero",
        email: "lucas@universidad.edu",
        telefono: "3007654321",
        programa: "Ingeniería electrónica y eléctrica",
        semestre: 8,
        interes: "plata",
        estado: "Activo",
        fechaInscripcion: "2024-02-20"
    }
];

let idActual = 3;

// Obtener todos los miembros
function obtenerTodos() {
    return miembros;
}

// Obtener miembro por ID
function obtenerPorId(id) {
    return miembros.find(miembro => miembro.id === parseInt(id));
}

// Crear nuevo miembro
function crearMiembro(datos) {
    const nuevoMiembro = {
        id: idActual++,
        ...datos,
        estado: "Pendiente",
        fechaInscripcion: new Date().toISOString().split('T')[0]
    };
    miembros.push(nuevoMiembro);
    console.log('Nuevo miembro registrado:', nuevoMiembro);
    return {
        exito: true,
        mensaje: '¡Solicitud registrada correctamente!',
        data: nuevoMiembro
    };
}

// Actualizar miembro
function actualizar(id, datos) {
    const miembro = miembros.find(m => m.id === parseInt(id));
    if (miembro) {
        Object.assign(miembro, datos);
        return miembro;
    }
    return null;
}

// Eliminar miembro
function eliminar(id) {
    const index = miembros.findIndex(m => m.id === parseInt(id));
    if (index > -1) {
        miembros.splice(index, 1);
        return { exito: true };
    }
    return { exito: false };
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crearMiembro,
    actualizar,
    eliminar
};