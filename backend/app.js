const express = require('express')
const app = express()
const consign = require('consign')
const cors = require('cors')
const knex = require('../backend/db/config.js')
const port = 3000

app.knex = knex
app.use(express.json())
app.use(cors())

consign()
    .then('./api')
    .then('./routes.js')
    .into(app)

app.listen(port, () => {
    console.log(`Tudo certo na porta ${port}`)
})

module.exports = app