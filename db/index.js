const Sequelize = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, {
  host: config.db.host,
  port: config.db.port,
  dialect: 'mysql'
})

const User = require('./models/User')(sequelize, Sequelize)
const Issue = require('./models/Issue')(sequelize, Sequelize)

Issue.belongsTo(User, { as: 'Issuer' })
Issue.belongsTo(User, { as: 'Manager' })

module.exports = {
  sequelize,
  User,
  Issue
}

try {
  (async function seed () {
    const user = await User.findOne({ where: { id: 1 } })
    if (!user) await User.create({ user: 'demo', pass: 'seed', isAdmin: true })
  })()
} catch (e) {}
