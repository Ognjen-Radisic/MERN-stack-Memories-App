import * as api from '../api'

//Action Creators (functions that return actions)
export const getPosts = () => async (dispatch) => {
  //action is just an object that has type(name) and payload
  //but Fetching all the posts takes some time so we need tool to that(reddux-thunk)
  //   const action = { type: 'FETCH_ALL', payload: [] }

  //we do not return, we dispatch because of redux-thunk
  //   dispatch(action)
  try {
    //response.data
    const { data } = await api.fetchPosts()

    dispatch({ type: 'FETCH_ALL', payload: data })
  } catch (error) {
    console.log(error.message)
  }
}
