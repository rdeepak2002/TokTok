import React from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    redirect: false,
    loading: true
  }

  autoLogin = () => {
    axios.post('/verifyCredentials', {
      email: localStorage.getItem('email'),
      secretKey: localStorage.getItem('secretKey')
    })
    .then((response) => {
      if(response.data.message !== 'success') {
        this.setState({loading: false, redirect: true})
      }
      else {
        this.setState({loading: false})
      }
    },
    (error) => {
      this.setState({loading: false})
    })
  }

  signOut = () => {
    localStorage.setItem('email', null)
    localStorage.setItem('secretKey', null)
    this.setState({redirect: true})
  }

  componentDidMount() {
    this.autoLogin()
  }

  render() {
    const { redirect, loading } = this.state

    if(loading) {
      return (
        <div className="loader">
          <Loader
            type="Bars"
            color="#FF0000"
            height={100}
            width={100}
          />
        </div>
      )
    }
    else if (redirect) {
      return <Redirect to='/login'/>
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
