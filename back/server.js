const express = require('express')
const path = require('path')
const { MongoClient } = require('mongodb')

const credentials = require(__dirname + '/key.json')
const uri = 'mongodb+srv://'+credentials.username+':'+credentials.password+'@'+credentials.cluster+'/test?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useUnifiedTopology: true } )

const app = express()

app.use(express.static(path.join(__dirname, '../front/build')))

async function main(){
  try {
    await client.connect()
    await listDatabases(client)
  }
  catch (e) {
    console.error(e)
  }
  finally {
    await client.close()
  }
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases()

  console.log("Databases:")
  databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

main().catch(console.error);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../front/build', 'index.html'))
})

app.listen(5000)
