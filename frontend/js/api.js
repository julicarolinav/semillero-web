// ========== API - Funciones para comunicarse con el backend ==========

// URL base del servidor (cambiar si es necesario)
const API_URL = 'http://localhost:3000/api';

// Función para obtener datos del semillero
async function obtenerDatosSemillero() {
    try {
        const response = await fetch(`${API_URL}/semillero`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos del semillero:', error);
        return null;
    }
}

// Función para obtener temas de investigación
async function obtenerTemas() {
    try {
        const response = await fetch(`${API_URL}/temas`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener temas:', error);
        return [];
    }
}

// Función para registrar un nuevo miembro
async function registrarMiembro(datos) {
    try {
        const response = await fetch(`${API_URL}/miembros`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error al registrar miembro:', error);
        return { exito: false, mensaje: 'Error en la solicitud' };
    }
}

// Función para obtener un tema específico por ID
async function obtenerTemaPorId(id) {
    try {
        const response = await fetch(`${API_URL}/temas/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener tema:', error);
        return null;
    }
}