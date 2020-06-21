import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styles/LoginPage.css'
import logoWhiteRed from '../images/logos/logoWhiteRed.png'

class LoginPage extends React.Component {
  state = {
    redirect: false,
    showLoginPage: true,
    loginBtnColor: 'black',
    signUpBtnColor: 'grey'
  }

  showSignUpPage = () => {
    return this.setState({
      showLoginPage: false,
      loginBtnColor: 'grey',
      signUpBtnColor: 'black'
    })
  }

  showLoginPage = () => {
    return this.setState({
      showLoginPage: true,
      loginBtnColor: 'black',
      signUpBtnColor: 'grey'
    })
  }

  render() {
    const { redirect, showLoginPage } = this.state

    if (redirect) {
      return <Redirect to='/home'/>
    }
    else {
      const Navbar = () => (
        <div className='navbar'>
          <div onClick={this.showLoginPage} className='navbar-item clickable' style={{color: this.state.loginBtnColor}}>
            Login
          </div>

          <div onClick={this.showSignUpPage} className='navbar-item clickable' style={{color: this.state.signUpBtnColor}}>
            Sign Up
          </div>
        </div>
      )

      const LoginForm = () => (
        <div className='loginFormContainer'>
          <Navbar/>
          <form className='form'>
            <input className='emailInput' type='email' placeholder='Email'></input>
            <input className='passwordInput' type='password' placeholder='Password'></input>
            <input className='loginBtn clickable' type='submit' value='SIGN IN'></input>
          </form>
          <div>New to TokTok? <div className='clickable hyperlink' onClick={this.showSignUpPage}>Sign Up Here</div></div>
        </div>
      )

      const SignUpForm = () => (
        <div className='loginFormContainer'>
          <Navbar/>
          <form className="form">
            <input className='emailInput' type='email' placeholder='Email'></input>
            <input className='passwordInput' type='password' placeholder='Password'></input>
            <input className='passwordInput' type='password' placeholder='Confirm password'></input>
            <input className='loginBtn clickable' type='submit' value='SIGN UP'></input>
          </form>
          <div>Already have an account? <div className='clickable hyperlink' onClick={this.showLoginPage}>Login Here</div></div>
        </div>
      )

      return (
        <div className='flexContainer'>
          <div className='halfColumn primaryColor centerColumnItems'>
            <h1 className='logoTitle'>TOKTOK</h1>
            <h2 className='logoSubtitle'>keep track of everything</h2>
          </div>

          <div className='halfColumn'>
            { showLoginPage ? <LoginForm/> : <SignUpForm/> }
          </div>

          <img className='logoImage' src={logoWhiteRed} alt='logo'></img>
        </div>
      )
    }
  }
}

export default LoginPage
