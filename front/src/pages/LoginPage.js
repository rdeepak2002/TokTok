import React from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import '../styles/LoginPage.css'
import logoWhiteRed from '../images/logos/logoWhiteRed.png'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      redirect: false,
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  autoLogin = () => {
    axios.post('/verifyCredentials', {
      email: localStorage.getItem('email'),
      secretKey: localStorage.getItem('secretKey')
    })
    .then((response) => {
      if(response.data.message == 'success') {
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

  handleLogin = (event) => {
    event.preventDefault()

    axios.post('/loginRequest', {
      email: this.state.email.toLowerCase().trim(),
      password: this.state.password
    })
    .then((response) => {
      if(response.data.message == 'success') {
        const secretKey = response.data.secret
        localStorage.setItem('secretKey', secretKey)
        localStorage.setItem('email', this.state.email.toLowerCase().trim())
        this.setState({redirect: true})
      }
      else {
        alert(response.data.message)
      }
    },
    (error) => {
      alert(error)
    })
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
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
      return <Redirect to='/home'/>
    }
    else {
      const Navbar = () => (
        <div className='navbar'>
          <div className='navbar-item clickable bottomBorder'>
            Login
          </div>

          <Link to="/signup" className='navbar-item clickable noBottomBorder' style={{ textDecoration: 'none' }} >
            Sign Up
          </Link>
        </div>
      )

      return (
        <div className='flexContainer'>
          <div className='halfColumn primaryColor centerColumnItems'>
            <h1 className='logoTitle'>TOKTOK</h1>
            <h2 className='logoSubtitle'>keep track of everything</h2>
          </div>

          <div className='halfColumn'>
            <div className='loginFormContainer'>
              <Navbar/>
              <form onSubmit={this.handleLogin} className='form'>
                <input className='emailInput' type='email' placeholder='Email' onChange={this.handleEmailChange}></input>
                <input className='passwordInput' type='password' placeholder='Password' onChange={this.handlePasswordChange}></input>
                <input className='loginBtn clickable' type='submit' value='SIGN IN'></input>
              </form>
              <div>New to TokTok? <Link to="/signup" className='clickable hyperlink' style={{ textDecoration: 'none' }} >Sign Up Here</Link></div>
            </div>
          </div>

          <img className='logoImage' src={logoWhiteRed} alt='logo'></img>
        </div>
      )
    }
  }
}

export default LoginPage
