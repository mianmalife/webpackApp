import React from 'react'
import { Link } from 'react-router-dom'

function HelloWorld () {
  return (
    <div>
      <h2>Hello World Outlet</h2>
      <Link to='/home'>Back HOME</Link>
    </div>
  )
}

export default HelloWorld
