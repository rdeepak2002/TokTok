import React from 'react'
import Loader from 'react-loader-spinner'
import Modal from 'react-modal'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import '../styles/HomePage.css'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      loading: true,
      timers: [],
      showModal: false,
      modalTitle: '',
      modalDate: new Date()
    }

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleDateChange = (event) => {
    this.setState({modalDate: event.target.value})
  }

  handleTitleChange = (event) => {
    this.setState({modalTitle: event.target.value})
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

    if(this.state.modalTitle.length > 0 && this.state.modalDate !== undefined) {
      this.setState({loading: true})

      axios.post('/createTimer', {
        email: localStorage.getItem('email'),
        timerTitle: this.state.modalTitle,
        timerDate: this.state.modalDate
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
    else {
      alert('Fields cannot be blank')
    }
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

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ modalTitle: '' })
    this.setState({ showModal: false })
  }

  deleteTimer = (eventTitle) => {
    if (window.confirm(`Delete ${eventTitle}?`)) {
      this.setState({loading: true})

      axios.post('/deleteTimer', {
        timerTitle: eventTitle
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
        <div className='flexContainer primaryColor fullHeight'>
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
        <div className='primaryColor fullHeight'>
          <div className='flexContainer centerFlex primaryColor topOffset'>
            <button className='addCounterBtn clickable' onClick={this.handleOpenModal}>Add New Counter</button>

            <Modal isOpen={this.state.showModal} contentLabel='Minimal Modal Example' className='Modal' overlayClassName='Overlay' onRequestClose={this.handleCloseModal} shouldCloseOnOverlayClick={true}>
              <input className='modalTitleInput' type='text' placeholder='Event Name' onChange={this.handleTitleChange}></input>
              <input className='modalDateInput' type='datetime-local' placeholder='Date' onChange={this.handleDateChange}></input>

              <button onClick={this.createTimer} className='createCounterBtn clickable'>Create Timer</button>
              <button onClick={this.handleCloseModal} className='closeModalBtn clickable'>close</button>
            </Modal>

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
                  <div onClick={this.deleteTimer.bind(this, timerTitle)} className='timerBox clickable'>
                    <h2>{timerTitle}</h2>
                    <h1 className='doneTimerText'>TODAY</h1>
                  </div>
                )
              }
              else if(curDate >= timerDate) {
                return (
                  <div onClick={this.deleteTimer.bind(this, timerTitle)} className='timerBox clickable'>
                    <h2>{timerTitle}</h2>
                    <h1 className='doneTimerText'>PASSED</h1>
                  </div>
                )
              }
              else {
                return (
                  <div onClick={this.deleteTimer.bind(this, timerTitle)} className='timerBox clickable'>
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
        </div>

      )
    }
  }
}

export default HomePage
