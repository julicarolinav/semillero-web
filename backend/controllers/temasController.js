// ========== CONTROLADOR DE TEMAS ==========

const temas = [
    {
        id: 1,
        nombre: "Inteligencia Artificial",
        descripcion: "Investigación en IA y machine learning",
        investigadorPrincipal: "Dr. Carlos López",
        estado: "Activo",
        estudiantesAsignados: 5
    },
    {
        id: 2,
        nombre: "Desarrollo Sostenible",
        descripcion: "Proyectos enfocados en sostenibilidad ambiental",
        investigadorPrincipal: "Dra. María González",
        estado: "Activo",
        estudiantesAsignados: 4
    },
    {
        id: 3,
        nombre: "Biotecnología",
        descripcion: "Avances en biología molecular y genética",
        investigadorPrincipal: "Dr. Roberto Martínez",
        estado: "Activo",
        estudiantesAsignados: 6
    },
    {
        id: 4,
        nombre: "Energías Renovables",
        descripcion: "Desarrollo de tecnologías limpias y sostenibles",
        investigadorPrincipal: "Ing. Laura Rodríguez",
        estado: "Activo",
        estudiantesAsignados: 3
    }
];

// Obtener todos los temas
function obtenerTodos() {
    return temas;
}

// Obtener tema por ID
function obtenerPorId(id) {
    return temas.find(tema => tema.id === parseInt(id));
}

// Crear nuevo tema
function crear(datosTema) {
    const nuevoTema = {
        id: temas.length + 1,
        ...datosTema,
        estado: 'Activo',
        estudiantesAsignados: 0
    };
    temas.push(nuevoTema);
    return nuevoTema;
}

// Actualizar tema
function actualizar(id, datosTema) {
    const tema = temas.find(t => t.id === parseInt(id));
    if (tema) {
        Object.assign(tema, datosTema);
        return tema;
    }
    return null;
}

// Eliminar tema
function eliminar(id) {
    const index = temas.findIndex(t => t.id === parseInt(id));
    if (index > -1) {
        temas.splice(index, 1);
        return { exito: true };
    }
    return { exito: false };
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar
};