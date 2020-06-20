const express = require('express')
const path = require('path')
const DAO = require('./DAO')

const app = express()
const dao = new DAO()

app.use(express.static(path.join(__dirname, '../front/build')))

// main().catch(console.error);
dao.listDatabases()

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../front/build', 'index.html'))
})

app.listen(5000)
