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

app.post('/loginRequest', async (req, res) => {
  const dao = new DAO()

  const email = req.body.email
  const password = req.body.password

  const databaseName = 'users'
  const collectionName = 'accounts'

  const hash = await dao.getPasswordHash(databaseName, collectionName, email)

  bcrypt.compare(password, hash, function(err, match) {
    if(match) {
      res.send({ message: 'success' })
    }
    else {
      res.send({ message: 'incorrect password' })
    }
  })
})

app.post('/signupRequest', async (req, res) => {
  const dao = new DAO()

  const email = req.body.email
  const password = req.body.password

  const databaseName = 'users'
  const collectionName = 'accounts'

  const userExists = await dao.userExists(databaseName, collectionName, email)

  if(userExists) {
    res.send({ message: 'email is already in use' })
  }
  else {
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      const dao = new DAO()

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
  }
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/build', 'index.html'))
})

app.listen(PORT)

console.log(`listening on port ${PORT}`)
