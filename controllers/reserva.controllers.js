const ctrlReservas = {};
const Reserva = require('../models/Reserva')

//vista de usuarios 
ctrlReservas.renderListadoreservas = (req, res) => {
    res.render('index')
}

ctrlReservas.renderCrearReservas = (req, res) => {
    res.render('crear-reserva')
}


ctrlReservas.renderEditarReservas = (req, res) => {
    const { id } = req.params;
    res.render('editar-reserva', { id })
}

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.ObtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        })
        return res.json(reservas)
    } catch (error) {
        console.log("Error al obtener las reservas", error)
        return res.status(500).json({
            message: "error al obtener las reservas"
        })
    }



}
// Obtener una reserva
ctrlReservas.ObtenerunaReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener la reserva'
        })
    }
}
// Crear una reserva
ctrlReservas.CrearReserva = async (req, res) => {
    const {
        nombre,
        apellido,
        pais,
        ciudad,
        precio,
        fecha_vuelo,
        habitacion,
        telefono,
        email,
    } = req.body

    try {
        const nuevaReserva = new Reserva({
            nombre,
            apellido,
            codigo: new Date().getTime(),
            pais,
            precio,
            ciudad,
            fecha_vuelo,
            habitacion,
            telefono,
            email,
        })
        await nuevaReserva.save()

        return res.status(201).json({
            message: 'Reserva del vuelo creada con exito'
        })

    } catch (error) {
        console.log("Error al crear reserva", error)
        return res.status(500).json({
            message: "error al crear reserva"
        })
    }

}
// Actualizar una reserva
ctrlReservas.editarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        await reserva.update(req.body)
        return res.json({
            message: 'Reserva actualizada exitosamente'
        });
    } catch (error) {
        console.log('Error al actualizar la reserva', error);
        return res.status(500).json({
            message: 'Error al actualizar la reserva'
        })
    }
}
// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await Reserva.destroy({
            where: {
                id
            }
        });
        // await reserva.update({ estado: false });

        return res.json({ message: 'Reserva se eliminó correctamente' })
    } catch (error) {
        console.log('Error al eliminar la reserva', error);
        return res.status(500).json({
            message: 'Error al eliminar la reserva'
        })
    }
}

module.exports = ctrlReservas;