import { createStore, applyMiddleware, combineReducers } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'

import appReducer from './components/App/app-reducer'
import postsReducer from './components/Posts/posts-reducer'

const logger = store => next => action => {
  console.log('action:', action, '\nprev state:', store.getState())
  return next(action)
}

export const history = createBrowserHistory()
export const store = createStore(
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    posts: postsReducer,
  }),
  applyMiddleware(thunk, routerMiddleware(history), logger),
)
