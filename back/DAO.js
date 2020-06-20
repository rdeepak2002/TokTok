const { MongoClient } = require('mongodb')
const credentials = require('./key.json')

class DAO {
  constructor() {
    this.uri = `mongodb+srv://${credentials.username}:${credentials.password}@${credentials.cluster}/test?retryWrites=true&w=majority`
    this.client = new MongoClient(this.uri, { useUnifiedTopology: true } )
  }

  async listDatabases() {
    try {
      await this.client.connect()
      const databasesList = await this.client.db().admin().listDatabases()
      console.log("Databases:")
      databasesList.databases.forEach(db => console.log(` - ${db.name}`))
    }
    catch (e) {
      console.error(e)
    }
    finally {
      await this.client.close()
    }
  }

  async createDocument(databaseName, collectionName, documentInfo) {
    try {
      await this.client.connect()
      const result = await this.client.db(databaseName).collection(collectionName).insertOne(documentInfo)
      console.log(`New document created: ${result}`)
    }
    catch (e) {
      console.error(e)
    }
    finally {
      await this.client.close()
    }
  }
}

module.exports = DAO
