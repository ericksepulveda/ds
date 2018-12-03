const express = require('express')
const router = express.Router()
const { Issue } = require('../db')

/* GET issues listing. */
router.get('/', async function (req, res, next) {
  const issues = await Issue.findAll()
  res.send(issues)
})

/* POST new issue */
router.post('/', async function (req, res, next) {
  const { title, description, flightCode } = req.body
  const newIssue = await Issue.create({ title, description, flightCode })
  res.send(newIssue)
})

/* POST logged user assigns himself as the manager fot he required issue */
router.post('/:id/assign', async function (req, res, next) {
  const { id } = req.params
  const IssuerId = 1
  const updated = await Issue.update({ IssuerId, status: 'wip' }, { where: { id } })
  res.send(updated)
})

router.post('/:id/status', async function (req, res, next) {
  const { id } = req.params
  const { status } = req.body
  const updated = await Issue.update({ status }, { where: { id } })
  res.send(updated)
})

module.exports = router
