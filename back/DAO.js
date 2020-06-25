const { MongoClient } = require('mongodb')
const credentials = require('./key.json')

class DAO {
  constructor() {
    this.uri = `mongodb+srv://${credentials.username}:${credentials.password}@${credentials.cluster}/test?retryWrites=true&w=majority`
    this.client = new MongoClient(this.uri, { useUnifiedTopology: true })
  }

  async userExists(databaseName, collectionName, emailIn) {
    try {
      await this.client.connect()
      const result = await this.client.db(databaseName).collection(collectionName).find({ email: emailIn }).toArray()
      return (result.length > 0 ? true : false)
    }
    catch (e) {
      console.error(e)
    }
    finally {
      await this.client.close()
    }
  }

  async getPasswordHash(databaseName, collectionName, emailIn) {
    try {
      await this.client.connect()
      const result = await this.client.db(databaseName).collection(collectionName).find({ email: emailIn }).toArray()
      if(result == undefined || result[0] == undefined) {
        return ''
      }
      else {
        return result[0].password
      }
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
    }
    catch (e) {
      console.error(e)
    }
    finally {
      await this.client.close()
    }
  }

  async getTimers(databaseName, collectionName, emailIn) {
    try {
      await this.client.connect()
      const result = await this.client.db(databaseName).collection(collectionName).find({ email: emailIn }).toArray()

      if(result == undefined || result[0] == undefined) {
        return []
      }
      else {
        return result
      }
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
