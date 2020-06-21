const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const DAO = require('./DAO')

const app = express()
const dao = new DAO()
const PORT = 5000

dao.listDatabases()

app.use(express.static(path.join(__dirname, '../front/build')))

app.post('/signupRequest', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  const databaseName = 'users'
  const collectionName = 'accounts'
  const documentData = {'email' : email, 'password' : password}

  try {
    await dao.createDocument(databaseName, collectionName, documentData)
    res.send({ message: 'success' })
  }
  catch (error) {
    console.error(error)
    res.send({ message: error.toString() })
  }
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/build', 'index.html'))
})

app.listen(PORT)

console.log(`listening on port ${PORT}`)
