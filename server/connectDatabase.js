import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose'

// import { DB_CONNECTION_URI } from './config'

const {DB_USERNAME, DB_PASSWORD} = process.env
const MongoURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.x6bbr.mongodb.net/?retryWrites=true&w=majority`

const connectDatabase = () => {
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  }

  mongoose.connect(MongoURI, config).then(console.log('connected to DADABASE'))
  
}

export default connectDatabase
