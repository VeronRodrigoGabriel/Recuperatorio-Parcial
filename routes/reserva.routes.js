// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const { renderListadoreservas, ObtenerReservas, CrearReserva, editarReserva, eliminarReserva, ObtenerunaReserva, renderCrearReservas, renderEditarReservas } = require('../controllers/reserva.controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', renderListadoreservas)
// Formulario para crear una reserva
router.get('/crear-reserva', renderCrearReservas)
// Formulario para actualizar una reserva
router.get('/editar-reserva/:id', renderEditarReservas)
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api', ObtenerReservas);

// Crear una reserva
router.post('/api', CrearReserva);

// Actualizar una reserva
router.put('/api/:id', editarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);

//Obtener una reserva 
router.get('/api/:id', ObtenerunaReserva)


module.exports = router;