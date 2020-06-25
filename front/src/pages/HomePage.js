import React from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import '../styles/HomePage.css'

class HomePage extends React.Component {
  state = {
    redirect: false,
    loading: true,
    timers: []
  }

  updateTimers = () => {
    this.setState({})
  }

  getTimers = () => {
    if(localStorage.getItem('email') !== undefined) {
      axios.post('/getTimers', {
        email: localStorage.getItem('email')
      })
      .then((response) => {
        if(response.data.message === 'success') {
          this.setState({timers: response.data.timers, loading: false})
        }
        else {
          alert('failure!')
          this.setState({loading: false})
        }
      },
      (error) => {
        this.setState({loading: false})
        alert(error)
      })
    }
    else {
      this.setState({redirect:true, loading: false})
    }
  }

  createTimer = () => {
    this.setState({loading: true})

    axios.post('/createTimer', {
      email: localStorage.getItem('email'),
      timerTitle: 'example timer',
      timerDate: new Date()
    })
    .then((response) => {
      if(response.data.message === 'success') {
        window.location.reload(false)
      }
      else {
        alert(response.data.message)
        this.setState({loading: false})
      }
    },
    (error) => {
      this.setState({loading: false})
    })
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
        this.getTimers()

        this.interval = setInterval(this.updateTimers, 1000)
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

  componentWillUnmount() {
    clearInterval(this.interval);
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
        <div className='flexContainer centerFlex primaryColor topOffset'>
          <button className='addCounterBtn' onClick={this.createTimer}>Add New Counter</button>

          {this.state.timers.map(timer => {
            const curDate = new Date()
            const timerDate = new Date(timer.timerDate)
            const timerTitle = timer.timerTitle

            let delta = Math.abs(curDate - timerDate) / 1000
            const dDays = Math.floor(delta / 86400)
            delta -= dDays * 86400
            const dHours = Math.floor(delta / 3600) % 24
            delta -= dHours * 3600
            const dMinutes = Math.floor(delta / 60) % 60
            delta -= dMinutes * 60
            const dSeconds = Math.round(delta % 60)

            if(curDate >= timerDate && dDays < 1) {
              return (
                <div className='timerBox'>
                  <h2>{timerTitle}</h2>
                  <h1 className='doneTimerText'>NOW</h1>
                </div>
              )
            }
            else if(curDate >= timerDate) {
              return (
                <div className='timerBox'>
                  <h2>{timerTitle}</h2>
                  <h1 className='doneTimerText'>PASSED</h1>
                </div>
              )
            }
            else {
              return (
                <div className='timerBox'>
                  <h2>{timerTitle}</h2>
                  <h1>{dDays}</h1>
                  <p>days</p>
                  <div className='timerBoxCountdowns'>
                    <div className='countdown'>
                      <h1>{dHours}</h1>
                      <p>hours</p>
                    </div>

                    <div className='countdown'>
                      <h1>{dMinutes}</h1>
                      <p>minutes</p>
                    </div>

                    <div className='countdown'>
                      <h1>{dSeconds}</h1>
                      <p>seconds</p>
                    </div>
                  </div>
                </div>
              )
            }

          })}

        </div>
      )
    }
  }
}

export default HomePage
