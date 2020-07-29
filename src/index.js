import React from 'react'
import sanity from '@sanity/client'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router-dom'
import { store, history } from './store'
import './styles/index.scss'

import App from './components/App/App'

const {
  NODE_ENV,
  REACT_APP_SANITY_PROJECT_ID: SANITY_PROJECT_ID,
  REACT_APP_SANITY_DATASET: SANITY_DATASET,
} = process.env

export const sanityClient = sanity({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: NODE_ENV === 'production',
})

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
