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
      loading: false,
      redirect: false,
      email: '',
      password: '',
      error: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  signOut = () => {
    localStorage.setItem('email', null)
    localStorage.setItem('secretKey', null)
  }

  handleLogin = (event) => {
    event.preventDefault()

    this.setState({loading: true})

    if(this.state.email.toLowerCase().trim().length <= 0 || this.state.password.length <= 0) {
      this.setState({loading: false, error: 'fields cannot be blank'})
    }
    else {
      axios.post('/loginRequest', {
        email: this.state.email.toLowerCase().trim(),
        password: this.state.password
      })
      .then((response) => {
        if(response.data.message === 'success') {
          const secretKey = response.data.secret
          localStorage.setItem('secretKey', secretKey)
          localStorage.setItem('email', this.state.email.toLowerCase().trim())
          this.setState({redirect: true})
        }
        else {
          this.setState({error: response.data.message})
        }

        this.setState({loading: false})
      },
      (error) => {
        this.setState({loading: false, error: error})
      })
    }
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  componentDidMount() {
    this.signOut()
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
      return <Redirect to='/'/>
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
        <div className='flexContainer fullHeight'>
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
                <div className='error'>{this.state.error}</div>
                <input className='loginBtn clickable' type='submit' value='SIGN IN'></input>
              </form>
            </div>
          </div>

          <img className='logoImage' src={logoWhiteRed} alt='logo'></img>
        </div>
      )
    }
  }
}

export default LoginPage
