import { MongoClient, ServerApiVersion } from 'mongodb'

// import { DB_CONNECTION_URI } from './config'
const { DB_USERNAME, DB_PASSWORD } = process.env

const connectDatabase = async () => {
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }
  const client = new MongoClient(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.x6bbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    config
  )
  try {
    await client.connect()
    console.log('connected to DADABASE')
    await listDb(client)
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

export default connectDatabase
