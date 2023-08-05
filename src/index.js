//Obtengo mis modulos de terceros
const express = require('express')

//Obtengo mis modulos
const initializeApp = require('./initialize') // Este modulo sirve para inicializar y sincronizar las tablas de mi base de datos que especifique con respecto a mi modelo definido con sequelize (en este caso sincronizo todas mis tablas)

// Mis rutas
const productRoutes = require('./routes/ProductRoute')

//Sincronizo mis modelos de la base de datos
initializeApp()

// Creo Mi Aplicacion Express
const app = express()
app.use(express.json()) // Especifico que express use JSON para el body

// Especifico mi puerto a usar
const port = process.env.PORT || 3001

// Agrego mis rutas a mi app Express
app.use('/api', productRoutes)

// Cualquier otra ruta no especificada resultara en 404 NOT FOUND
app.get('*', (req, res) => {
  res.status(404).send('Esta página no existe')
})

//Ejecucion de mi servidor
app.listen(port, () => {
  console.log('Servidor escuchando en el puerto', port)
})
