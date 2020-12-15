import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    //we make it await becouse it takes time to search database
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
    await newPost.save()

    //201 succesful creation, 409 (conflict) failed creation
    res.status(201).json(newPost)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
