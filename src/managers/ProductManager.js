//Traigo mi repository del producto
const ProductRepository = require('../repository/ProductRepository')

const ProductManager = {
  //------------------------ AQUI TENGO TODAS MIS ACCIONES -----------------------
  //-- OBTENER PRODUCTO --
  get: async (req, res) => {
    /*
    
    LOGICA DE NEGOCIOS
    
    */
    const { id } = req.params
    return await ProductRepository.findByPk(id)
  },

  //-- OBTENER LISTA PRODUCTOS --
  list: async (req, res) => {
    /*
    
    LOGICA DE NEGOCIOS
    
    */
    return await ProductRepository.findAll()
  },

  //-- INSERTAR PRODUCTO --
  create: async (req, res) => {
    /*
    
    LOGICA DE NEGOCIOS
    
    */
    return await ProductRepository.create({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
    })
  },

  //-- ACTUALIZAR PRODUCTO --
  update: async (req, res) => {
    /*
    
    LOGICA DE NEGOCIOS
    
    */
    const { id } = req.params
    const product = await ProductRepository.findByPk(id)
    if (product) {
      product.productName = req.body.productName
      product.productDescription = req.body.productDescription
      return await product.save()
    }
  },

  //-- ELIMINAR PRODUCTO --
  destroy: async (req, res) => {
    /*
    
    LOGICA DE NEGOCIOS
    
    */
    const { id } = req.params
    const product = await ProductRepository.findByPk(id)
    if (product) {
      return await product.destroy()
    }
  },
}

module.exports = ProductManager
