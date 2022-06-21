// CORS for cross origin allowance
import cors from 'cors'
// start up an instance of app
import express from 'express'
import './forceLoadEnvConfig.js'
// require weather route
import connectDatabase from './connectDatabase.js'
import { transactionRoutes } from './routes/transaction.route.js'
import { userRoutes } from './routes/users.route.js'

// run express
const app = express()

// CORS
app.use(cors())

app.use(express.json({ limit: '50mb', extend: true }))
// middleware for handling urlencoded form
app.use(express.urlencoded({ limit: '30mb', extended: true }))

// DATABASE
connectDatabase()

// ROUTES
app.use('/api/users', userRoutes)
app.use('/api/users/transaction', transactionRoutes)
// app.use('/', userRouter)
// app.use('/fetch-weather-info', weather)

// designates what port the app will listen to for incoming requests
const PORT = process.env.PORT || 8000
app.listen(PORT, (err) => {
  if (err) throw new Error(err)
  console.log(`Server is listening on port ${PORT}!`)
})

app.get('/', function (req, res) {
  res.send('<h1>hello</h1>')
})
