import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import RootComponent from './components/root'
import rootReducer from './reducers/root'

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()))

const main = () => {
  ReactDOM.render(
    <Provider store={ store }>
      <RootComponent />
    </Provider>
  , document.getElementById('app'))

  setInterval(() => store.dispatch({type:'INCREMENT'}), 5000)
}

document.addEventListener('DOMContentLoaded', main)
