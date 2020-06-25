const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const DAO = require('./DAO')
const credentials = require('./key.json')

const app = express()
const saltRounds = 12
const secret = credentials.secret
const PORT = 5000

app.use(express.static(path.join(__dirname, '../front/build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/deleteTimer', async (req, res) => {
  if(req.body.timerTitle == undefined) {
    res.send({ message: 'failure' })
  }
  else {
    const dao = new DAO()

    const documentData = { 'timerTitle': req.body.timerTitle }

    const databaseName = 'users'
    const collectionName = 'timers'

    await dao.deleteDocument(databaseName, collectionName, documentData)

    res.send({ message: 'success' })
  }
})

app.post('/getTimers', async (req, res) => {
  if(req.body.email == undefined) {
    res.send({ message: 'failure', timers: []  })
  }
  else {
    const dao = new DAO()

    const email = req.body.email

    const databaseName = 'users'
    const collectionName = 'timers'

    const timers = await dao.getTimers(databaseName, collectionName, email)

    res.send({ message: 'success', timers: timers })
  }
})

app.post('/createTimer', async (req, res) => {
  if(req.body.email == undefined) {
    res.send({ message: 'failure' })
  }
  else {
    const dao = new DAO()

    const timerTitle = req.body.timerTitle
    const timerDate = req.body.timerDate
    const email = req.body.email

    const databaseName = 'users'
    const collectionName = 'timers'
    const documentData = { 'email' : email, 'timerTitle' : timerTitle, 'timerDate' : timerDate }

    await dao.createDocument(databaseName, collectionName, documentData)

    res.send({ message: 'success' })
  }
})

app.post('/verifyCredentials', async (req, res) => {
  if(req.body.email == undefined || req.body.secretKey == undefined) {
    res.send({ message: 'failure' })
  }
  else {
    const dao = new DAO()

    const email = req.body.email
    const secretKey = req.body.secretKey

    const databaseName = 'users'
    const collectionName = 'accounts'

    const hash = await dao.getPasswordHash(databaseName, collectionName, email)

    bcrypt.compare(secretKey, hash, function(err, match) {
      if(match) {
        res.send({ message: 'success' })
      }
      else {
        res.send({ message: 'failure' })
      }
    })
  }
})

app.post('/loginRequest', async (req, res) => {
  const dao = new DAO()

  const email = req.body.email
  const password = req.body.password + secret

  const secretKey = crypto.createHash('sha256').update(password).digest('base64')

  const databaseName = 'users'
  const collectionName = 'accounts'

  const hash = await dao.getPasswordHash(databaseName, collectionName, email)

  bcrypt.compare(secretKey, hash, function(err, match) {
    if(match) {
      res.send({ message: 'success', secret: secretKey })
    }
    else {
      res.send({ message: 'incorrect password' })
    }
  })
})

app.post('/signupRequest', async (req, res) => {
  const dao = new DAO()

  const email = req.body.email
  const password = req.body.password + secret

  const secretKey = crypto.createHash('sha256').update(password).digest('base64')

  const databaseName = 'users'
  const collectionName = 'accounts'

  const userExists = await dao.userExists(databaseName, collectionName, email)

  if(userExists) {
    res.send({ message: 'email is already in use' })
  }
  else {
    bcrypt.hash(secretKey, saltRounds, async (err, hash) => {
      const dao = new DAO()

      const documentData = { 'email' : email, 'password' : hash }

      try {
        await dao.createDocument(databaseName, collectionName, documentData)
        res.send({ message: 'success', secret: secretKey })
      }
      catch (error) {
        console.error(error)
        res.send({ message: error.toString() })
      }
    })
  }
})

app.get('/.well-known/pki-validation/516F8DC54D7DEBB4AC0FB6BDA1345E88.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '516F8DC54D7DEBB4AC0FB6BDA1345E88.txt'))
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/build', 'index.html'))
})

app.listen(PORT)

console.log(`listening on port ${PORT}`)
