module.exports = (sequelize, Sequelize) => {
  return sequelize.define('user', {
    user: Sequelize.STRING,
    pass: Sequelize.STRING,
    isAdmin: Sequelize.BOOLEAN
  })
}
