import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Go to Home
      </Link>
    </div>
  )
}

export default NotFound