const express = require('express')
var router = express()
const create = require('../controller/dest')
const view = require('../controller/dest')
const update = require('../controller/dest')
const remove = require('../controller/dest')
const bodyparser = require('body-parser');

router.use(bodyparser.json())
router.post('/create',create.create)
router.get('/',view.view)
router.patch('/:id',update.update)
router.delete('/delete/:id',remove.remove)


module.exports = router