import PostMessage from '../models/postMessage.js'
import moongose from 'mongoose'

export const getPosts = async (req, res) => {
  try {
    //we make it await becouse it takes time to search database
    console.log('oooooooo')
    const postMessages = await PostMessage.find()

    //200 success (request succeeded), 404 Not found
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  //post is something we take from frontend, the info we later use to ppulate our database model
  const post = req.body

  //we create newpost with previousle created and imported model, and we put info from 'post' above
  const newPost = new PostMessage(post)

  try {
    //asyncronys process becouse saving can take some time
    console.log('1qw1w12w')
    await newPost.save()

    //201 succesful creation, 409 (conflict) failed creation
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  // destructuring id from page param /posts/234 and naming it _id
  //renaming because _id is moongose object id
  const { id: _id } = req.params
  const post = req.body

  if (!moongose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Object with that id not found')
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  })

  res.json(updatedPost)
}
