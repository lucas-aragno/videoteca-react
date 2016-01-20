import React from 'react'
import { IndexRedirect, Route } from 'react-router'

import App from './components/containers/App'

import LoginPage from './components/pages/LoginPage'
import NotFoundPage from './components/pages/NotFoundPage'
import VideosPage from './components/pages/VideosPage'

const routes = (
<Route path='/' component={App}>
  <IndexRedirect to='videos' />
  <Route path='login' components={LoginPage} />
  <Route path='videos' components={VideosPage} />
  <Route path='*' components={NotFoundPage} />
</Route>
)

export default routes
