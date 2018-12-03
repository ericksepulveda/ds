require('dotenv').load()

module.exports = {
  db: {
    name: getEnv('DB_NAME'),

    host: getEnv('DB_HOST'),
    port: getEnv('DB_PORT'),

    user: getEnv('DB_USER'),
    pass: getEnv('DB_PASS')
  }
}

function getEnv (v) {
  return process.env[v]
}
