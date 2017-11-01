const env = require('dotenv').config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./controllers/routes')
const morgan = require( 'morgan' );

const port = process.env.PORT

const app = express()

require('ejs')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routes)

app.use((req, res) => {
  res.status(404).render('utilities/not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
