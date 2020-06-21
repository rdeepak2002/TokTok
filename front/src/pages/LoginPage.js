import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styles/LoginPage.css'
import logoWhiteRed from '../images/logos/logoWhiteRed.png'

class LoginPage extends React.Component {
  state = {
    redirect: false
  }

  render() {
    const { redirect } = this.state
    const showLoginPage = false

    if (redirect) {
      return <Redirect to='/home'/>
    }
    else {
      const LoginForm = () => (
        <div>
          <form>
            login stuff
          </form>
        </div>
      )

      const SignUpForm = () => (
        <div>
          <form>
            sign up stuff
          </form>
        </div>
      )

      return (
        <div className='flexContainer'>
          <div className='halfColumn lightGreen'>
            <h1 className='logoTitle'>TOKTOK</h1>
            <h2 className='logoSubtitle'>Keep track of everything</h2>
          </div>

          <div className='halfColumn'>
            { showLoginPage ? <LoginForm /> : <SignUpForm /> }
          </div>

          <img className='logoImage' src={logoWhiteRed} alt='logo'></img>
        </div>
      )
    }
  }
}

export default LoginPage
