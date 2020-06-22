const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const DAO = require('./DAO')

const app = express()
const saltRounds = 12
const PORT = 5000

app.use(express.static(path.join(__dirname, '../front/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/signupRequest', async (req, res) => {
  const dao = new DAO()

  const email = req.body.email
  const password = req.body.password

  bcrypt.hash(password, saltRounds, async (err, hash) => {
    const databaseName = 'users'
    const collectionName = 'accounts'

    const documentData = { 'email' : email, 'password' : hash }

    try {
      await dao.createDocument(databaseName, collectionName, documentData)
      res.send({ message: 'success' })
    }
    catch (error) {
      console.error(error)
      res.send({ message: error.toString() })
    }
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/build', 'index.html'))
})

app.listen(PORT)

console.log(`listening on port ${PORT}`)
