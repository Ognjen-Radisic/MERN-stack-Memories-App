import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
//to use redux functionality and global state
import { useSelector } from 'react-redux'

//components
import Post from './Post/Post.js'
import useStyles from './styles.js'

const Posts = ({ setCurrentID }) => {
  //state.posts because in reducers/index.js in combineReducers we have posts:posts
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  console.log(posts)

  return (
    <>
      <h1>POSTS</h1>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          className={classes.container}
          alignItems='stretch'
          spacing={3}
        >
          {posts.map((post) => {
            return (
              <Grid item key={post._id} xs={12} sm={6}>
                <Post post={post} setCurrentID={setCurrentID} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </>
  )
}

export default Posts
