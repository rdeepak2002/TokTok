import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styles/LoginPage.css'
import logoWhiteRed from '../images/logos/logoWhiteRed.png'

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      email: '',
      password: '',
      confirmPassword: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleSignUp = (event) => {
    event.preventDefault()

    if(this.state.password == this.state.confirmPassword) {
      let data = {}

      data.email = this.state.email
      data.password = this.state.password

      let xmlhttp = new XMLHttpRequest()
      let theUrl = '/signupRequest'

      xmlhttp.open('POST', theUrl)
      xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xmlhttp.send(JSON.stringify(data))

      xmlhttp.onload  = function (e) {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            let obj = JSON.parse(xmlhttp.responseText)
            alert(obj.message)
          } else {
            console.error(xmlhttp.statusText)
            console.log(2)
            alert('Error contacting server.')
          }
        }
      }
    }
    else {
      alert('draw red text saying that the cpass and pass do not match')
    }
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  handleConfirmPasswordChange = (event) => {
    this.setState({confirmPassword: event.target.value})
  }

  showLoginPage = () => {
    alert('redirect to login')
    return <Redirect to='/'/>
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to='/home'/>
    }
    else {
      const Navbar = () => (
        <div className='navbar'>

          <Link to="/" className='navbar-item clickable noBottomBorder' style={{ textDecoration: 'none' }} >
            Login
          </Link>

          <div className='navbar-item clickable bottomBorder'>
            Sign Up
          </div>
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
              <form onSubmit={this.handleSignUp} className="form">
                <input className='emailInput' type='email' placeholder='Email' onChange={this.handleEmailChange}></input>
                <input className='passwordInput' type='password' placeholder='Password' onChange={this.handlePasswordChange}></input>
                <input className='passwordInput' type='password' placeholder='Confirm password' onChange={this.handleConfirmPasswordChange}></input>
                <input className='loginBtn clickable' type='submit' value='SIGN UP'></input>
              </form>
              <div>Already have an account? <Link to="/" className='clickable hyperlink' style={{ textDecoration: 'none' }} >Login Here</Link></div>
            </div>
          </div>

          <img className='logoImage' src={logoWhiteRed} alt='logo'></img>
        </div>
      )
    }
  }
}

export default SignUpPage