import React from 'react'

//to use redux functionality and global state
import { useSelector } from 'react-redux'

//components
import Post from './Post/Post.js'
import useStyles from './styles.js'

const Posts = () => {
  //state.posts because in reducers/index.js in combineReducers we have posts:posts
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log(posts)

  return (
    <div>
      <h1>POSTS</h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts
