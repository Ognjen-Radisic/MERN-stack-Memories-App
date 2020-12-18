import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'
import FileBase from 'react-file-base64'

//JSX COMPONENTS FROM MATERIAL-UI
import { TextField, Button, Typography, Paper } from '@material-ui/core'

//using redux so we can dispatch form as a POST and send it
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentID, setCurrentID }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  //we need to fetch the post with currentID so we can display its info in the forms
  // and later use it in useEffect to populate values of the form
  const post = useSelector((state) =>
    currentID ? state.posts.find((p) => p._id === currentID) : null
  )

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  /////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])
  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentID) {
      dispatch(updatePost(currentID, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }
  const clear = () => {
    setCurrentID(null)
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
  }
  /////////////////////////////////////////////////////////////////////////////////////
  return (
    //Paper is like a div and has a whiteish background and small border shadow
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          {currentID ? 'Editing' : 'Creating'} a Memory
        </Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
