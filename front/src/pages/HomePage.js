import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    redirect: false
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>
    }
    else {
      return (
        <div className="container">
          <h1>Home Page</h1>
          <p>
            <Link to="/">sign out</Link>
          </p>
        </div>
      )
    }
  }
}

export default HomePage
