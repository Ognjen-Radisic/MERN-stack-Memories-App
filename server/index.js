import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

//http://localhost:5000/posts
//IT NEEDS to be after cors()
app.use('/posts', postRoutes)

//https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  'mongodb+srv://ognjen:ognjen123@cluster0.z7qkn.mongodb.net/<dbname>?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
