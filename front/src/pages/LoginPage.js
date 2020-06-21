import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styles/LoginPage.css'
import logoWhiteRed from '../images/logos/logoWhiteRed.png'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      email: '',
      password: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleLogin = (event) => {
    event.preventDefault()
    alert(this.state.email)
  }

  handleEmailChange = (event) => {
    console.log(event.target.value)
    this.setState({email: event.target.value})
  }

  handlePasswordChange = (event) => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
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
