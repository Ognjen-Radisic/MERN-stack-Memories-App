import { combineReducers } from 'redux'

//this is one individual reducer, and the only one we use for now
import posts from './posts'

//in here we can use all the individual reducers that we have
export default combineReducers({
  posts,
  //here can be more reducers
})
