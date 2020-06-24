import React from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import '../styles/HomePage.css'

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
        <div className='flexContainer primaryColor'>
          <div className='loader'>
            <Loader
              type='Bars'
              color='white'
              height={100}
              width={100}
            />
          </div>
        </div>
      )
    }
    else if (redirect) {
      return <Redirect to='/login'/>
    }
    else {
      return (
        <div className='flexContainer centerFlex primaryColor'>
          <button className='addCounterBtn'>Add New Counter</button>

          <div className='timerBox'>
            <h2>timer title</h2>
            <h1>5</h1>
            <p>days</p>
            <div className='timerBoxCountdowns'>
              <div className='countdown'>
                <h1>23</h1>
                <p>hours</p>
              </div>

              <div className='countdown'>
                <h1>58</h1>
                <p>minutes</p>
              </div>

              <div className='countdown'>
                <h1>77</h1>
                <p>seconds</p>
              </div>
            </div>
          </div>

          <div className='timerBox'>
            <h2>timer title</h2>
            <h1>5</h1>
            <p>days</p>
            <div className='timerBoxCountdowns'>
              <div className='countdown'>
                <h1>23</h1>
                <p>hours</p>
              </div>

              <div className='countdown'>
                <h1>58</h1>
                <p>minutes</p>
              </div>

              <div className='countdown'>
                <h1>77</h1>
                <p>seconds</p>
              </div>
            </div>
          </div>

        </div>
      )
    }
  }
}

export default HomePage
