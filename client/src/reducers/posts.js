//one single reducer is a function that accepts the "state" and "action"
//in reducer for one specific ACTION, there will be specific changes to the STATE

//in reducer state need to be equal to something (here is [])
//and we name our state 'posts' (in this reducer "state" == "posts")
export default (posts = [], action) => {
  //we use switch to got trough different types of ACTION
  //switch key is action.type
  //and case value is the name of the action(for exp. "CREATE" or "DELETE")

  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload

    case 'CREATE':
      return [...posts, action.payload]

    case 'UPDATE':
    case 'LIKE':
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )

    case 'DELETE':
      return posts.filter((p) => p._id !== action.payload)

    default:
      return posts
  }
}

//because we dont use reducer here we just write (export default)
