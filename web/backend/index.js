var express = require('express')
var router = express.Router()

const pagesDir = __dirname + '/../frontend/pages'

router.get('/', function (req, res) {
	res.render(pagesDir + '/index/index')
})


module.exports = router