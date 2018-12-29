var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
	res.render(__dirname + '/pages/index/index')
})


module.exports = router