const { DataTypes } = require('sequelize')
const sequelize = require('../connection')

const Product = sequelize.define(
  'Product',
  {
    // Los atributos del modelo se definen aqui
    productId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Las otras opciones del modelo van aqui
  }
)

module.exports = Product

/* NOTA: sequelize.define tambien regresa el modelo

    Esto quiere decir que: 
    (User === sequelize.models.User) ==> true



    --- Sequelize Define Campos Automaticamente al crear una tabla de createdAt y updatedAt ---
*/
