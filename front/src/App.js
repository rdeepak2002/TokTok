import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'

import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'

class App extends React.Component {
  componentDidMount() {
    document.title = 'TokTok'
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/home" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    )
  }
}

export default App
