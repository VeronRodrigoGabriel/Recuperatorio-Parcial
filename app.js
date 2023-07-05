// Imports
require('dotenv').config()
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const path = require('path');
require('ejs')


const app = express();


const { sequelize } = require("./database")
sequelize.authenticate()
    .then(() => console.log("Base de datos  conectada"))
    .catch((error) => {
        console.log(error);
        process.exit()
    });

// Middlewares
// TODO: Implementar middlewares
app.use(cors())
app.use(morgan('dev'))
// app. use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")



app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render("404.ejs")

})



const PORT = process.env.PORT || 4000
// Starting the server
app.listen(PORT, () => console.log('Server on port', PORT));