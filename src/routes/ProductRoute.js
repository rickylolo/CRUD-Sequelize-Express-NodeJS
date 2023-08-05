const express = require('express')
const router = express.Router()

// Mi Controlador de Producto
const productController = require('../controllers/ProductController')

// Asignación de acciones a las rutas y funciones a realizar
router.get('/product:id', productController.get)
router.get('/product', productController.list)
router.post('/product', productController.create)
router.put('/product:id', productController.update)
router.delete('/product:id', productController.destroy)

module.exports = router
