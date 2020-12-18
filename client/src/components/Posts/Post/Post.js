import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import moment from 'moment'

import useStyles from './styles.js'

//to use redux
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts.js'

const Post = ({ post, setCurrentID }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} />

      {/* LEFT OVERLAY // creator and time that passed after post creation */}
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography>{moment(post.createdAt).fromNow()}</Typography>
      </div>

      {/* RIGHT overlay //Icon with 3 dots for the edit option*/}
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentID(post._id)}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>

      {/* HASHTAGS */}
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      {/* TITLE and post message */}
      <Typography className={classes.title} variant='h4'>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='h5'>{post.message}</Typography>
      </CardContent>

      {/* DELETE BUTTON and LIKE BUTTON and Number of LIKES*/}
      <CardActions className={classes.cardActions}>
        <Button color='primary' size='small' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' />
          Like
          {post.likeCount}
        </Button>
        <Button
          color='secondary'
          size='small'
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
