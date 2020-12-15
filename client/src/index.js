import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//place where we initialize REDUX
/////

//Provider keeps track of global store (global state)...
//...so we can wrap our app with it and access store(state) anywhere in the app
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index.js'

/////

//seting up redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))

//now lets use this store variable in our application
//first after we wrap our App in provider, we will use 'dispatch' in App so we can start using redux

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
