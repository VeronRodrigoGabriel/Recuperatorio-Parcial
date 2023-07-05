const formReserva = document.querySelector('#formNuevaReserva');
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const pais = document.querySelector('#pais');
const ciudad = document.querySelector('#ciudad');
const fecha_vuelo = document.querySelector('#fecha_vuelo');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');



document.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch(`/api/${reservaId}`);
    const data = await response.json();


    nombre.value = data.nombre;
    apellido.value = data.apellido;
    pais.value = data.pais;
    ciudad.value = data.ciudad;
    fecha_vuelo.value = data.fecha_vuelo;
    telefono.value = data.telefono;
    email.value = data.email;
});


formReserva.addEventListener('submit', async (e) => {

    e.preventDefault();

    reservaActualizada =
    {
        nombre: nombre.value,
        apellido: apellido.value,
        fecha_vuelo: fecha_vuelo.value,
        pais: pais.value,
        ciudad: ciudad.value,
        telefono: telefono.value,
        emai: email.value
    }




    const response = await fetch(`/api/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();



    alert(data.message);
    window.location.href = '/'




})