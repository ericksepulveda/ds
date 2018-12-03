module.exports = (sequelize, Sequelize) => {
  return sequelize.define('issue', {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    state: { type: Sequelize.STRING, defaultValue: 'pending' },
    flightCode: Sequelize.STRING
  })
}
