import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
  state = {
    redirect: false
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/home'/>
    }
    else {
      return (
        <div className="container">
          <h1>Login Page</h1>
          <p>
            <Link to="/home">home</Link>
          </p>
        </div>
      )
    }
  }
}

export default LoginPage
