import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
//to use REDUX we need hook useDispatch that allows us to dispatch action
import { useDispatch } from 'react-redux'

//Components
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'

//image
import memories from './images/memories.png'

//REDUX actions
import { getPosts } from './actions/posts.js'

//Styles
import useStyles from './styles.js'

const App = () => {
  const [currentID, setCurrentID] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    //to dispatch an action we need to import 'actions' first (getPosts) and call it
    dispatch(getPosts())

    //we add currentID because imidiatly after we change currentID to null in FORM (after we submit)
    //we want to refresh the app component (not the whole page) and reload updated posts
  }, [dispatch, currentID])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form setCurrentID={setCurrentID} currentID={currentID} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
