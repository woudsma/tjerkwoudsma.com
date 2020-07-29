import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import { sanityClient } from '../../index'
import { initApp, updatePages } from './app-actions'
import { getPagesQuery } from './app-queries'
import './App.scss'

import Menu from '../Menu/Menu'
import Page from '../Page/Page'
import Posts from '../Posts/Posts'

const App = () => {
  const dispatch = useDispatch()
  const { isLoading, error, data } = useQuery('pages', () =>
    sanityClient.fetch(getPagesQuery),
  )

  useEffect(() => {
    dispatch(initApp())
  }, [dispatch])

  useEffect(() => {
    if (data) dispatch(updatePages(data))
  }, [data, dispatch])

  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching pages</div>}
      {data && (
        <>
          <Menu />
          <Switch>
            {data.map(({ id, title, slug }) => (
              <Route
                key={id}
                exact
                path={slug === '/' ? slug : `/${slug}`}
                render={() => (
                  <Page title={title}>{slug === '/' && <Posts />}</Page>
                )}
              />
            ))}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </>
      )}
    </div>
  )
}

export default App
