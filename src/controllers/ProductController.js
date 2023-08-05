//Traigo mis managers
const ProductManager = require('../managers/ProductManager')

const ProductController = {
  //------------------------ AQUI TENGO TODAS MIS ACCIONES -----------------------
  //-- OBTENER PRODUCTO --
  get: async (req, res) => {
    /*
    
    VALIDACIONES
    
    */

    try {
      const product = await ProductManager.get(req)
      if (!product) {
        res.status(404).send('Producto no encontrado')
      } else {
        res.status(200).send(product)
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },

  //-- OBTENER LISTA PRODUCTOS --
  list: async (req, res) => {
    /*
    
    VALIDACIONES
    
    */

    try {
      const productList = await ProductManager.list()
      res.status(200).send(productList)
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },

  //-- INSERTAR PRODUCTO --
  create: async (req, res) => {
    /*
    
    VALIDACIONES
    
    */
    try {
      const productCreated = await ProductManager.create(req)
      res.status(201).send('Producto registrado correctamente')
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },

  //-- ACTUALIZAR PRODUCTO --
  update: async (req, res) => {
    /*
    
    VALIDACIONES
    
    */
    try {
      const productUpdated = await ProductManager.update(req)
      if (!productUpdated) {
        res.status(404).send('Producto no encontrado')
      } else {
        res.status(200).send('Producto actualizado correctamente')
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },

  //-- ELIMINAR PRODUCTO --
  destroy: async (req, res) => {
    /*
    
    VALIDACIONES
    
    */
    try {
      const productDestroyed = await ProductManager.destroy(req)
      if (!productDestroyed) {
        res.status(404).send('Producto no encontrado')
      } else {
        res.status(200).send('Producto eliminado correctamente')
      }
    } catch (error) {
      res.status(500).send('Error interno del servidor')
    }
  },
}

module.exports = ProductController
