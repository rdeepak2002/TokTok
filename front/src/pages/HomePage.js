import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    redirect: false
  }

  signOut = () => {
    localStorage.setItem('email', null)
    localStorage.setItem('secretKey', null)
    this.setState({redirect: true})
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>
    }
    else {
      return (
        <div className='container'>
          <h1>Home Page</h1>
          <p>
            <button onClick={this.signOut}>sign out</button>
          </p>
        </div>
      )
    }
  }
}

export default HomePage
