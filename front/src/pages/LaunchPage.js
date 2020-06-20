import React from 'react'
import { Link } from 'react-router-dom'

export default function LaunchPage() {
  return (
    <div className="container">
      <h1>Launch Page</h1>
      <p>
        <Link to="/login">login</Link>
      </p>
    </div>
  )
}
