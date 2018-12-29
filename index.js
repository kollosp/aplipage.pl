const express = require('express')
const app = express()

//express settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/web/frontend'))
app.use('/lib', express.static(__dirname + '/lib'))

//routers include
const index = require('./web/backend/index')


//routing array
app.use('/', index)


app.listen(8050, () => {
	console.log('server is listening on port 8050')
})