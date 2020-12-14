import express from 'express'
import bodyPaser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

//http://localhost:5000/posts
app.use('/posts', postRoutes)

app.use(bodyPaser.json({ limit: '30mb', extended: true }))
app.use(bodyPaser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

//https://www.mongodb.com/cloud/atlas
const CONNECTION_URL =
  'mongodb+srv://ognjen:<password>@cluster0.z7qkn.mongodb.net/<dbname>?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
