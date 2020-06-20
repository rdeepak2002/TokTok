import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <p>
        <Link to="/home">home</Link>
      </p>
    </div>
  )
}
