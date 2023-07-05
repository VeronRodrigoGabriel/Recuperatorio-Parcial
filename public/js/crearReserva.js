const formCrearReserva = document.querySelector('#formNuevaReserva')

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const pais = document.querySelector('#pais').value;
    const ciudad = document.querySelector('#ciudad').value;
    const fecha_vuelo = document.querySelector('#fecha_vuelo').value;
    const precio = document.querySelector('#precio').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;



    const reserva = {
        nombre,
        apellido,
        pais,
        precio,
        ciudad,
        fecha_vuelo,
        telefono,
        email
    }

    const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    alert(data.message)
    window.location.href = "/"


})