import React from 'react'
import { useParams, Link } from 'react-router-dom'

const UserDetail = ({ onRemoveUser, userData }) => {
  const { userId } = useParams()
  return (
    <div>
      <h2>Hello {userData.find(item => item.id === userId).name}</h2>
      <Link to='/users'>Back User |</Link>
      <a type='primary' onClick={() => onRemoveUser(userId)}> Delete user</a>
    </div>
  )
}

export default UserDetail
