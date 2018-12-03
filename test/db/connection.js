/* global after, describe, it */
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised).should()

const { sequelize } = require('../../db')

describe('Basic connection check ', function () {
  after(function () {
    sequelize.close()
  })

  it('connects!', function () {
    return sequelize.authenticate().should.be.fulfilled
  })
})
