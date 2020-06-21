import React from 'react'
import { Redirect } from 'react-router-dom'

class NotFoundPage extends React.Component {
  render() {
    return <Redirect to='/'/>
  }
}

export default NotFoundPage
