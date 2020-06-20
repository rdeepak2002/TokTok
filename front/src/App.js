import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LaunchPage from './pages/LaunchPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LaunchPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  )
}

export default App
