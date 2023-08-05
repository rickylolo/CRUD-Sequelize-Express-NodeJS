const { Sequelize } = require('sequelize')

//Mis Credenciales e Informacion para mi conexion con MS SQL
const sequelize = new Sequelize('CRUDNodeJS', 'sa', 'admin', {
  dialect: 'mssql',
  host: 'localhost',
  port: '1066',
})

module.exports = sequelize
