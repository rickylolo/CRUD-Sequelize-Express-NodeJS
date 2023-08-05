const sequelize = require('./connection')

//Exporto mi funcion para sincronizar mi base de datos
module.exports = async function initializeApp() {
  try {
    await sequelize.sync({ force: false })
    console.log('Conexión y sincronización exitosas.')
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error)
  }
}
