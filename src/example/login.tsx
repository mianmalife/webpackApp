import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Input, Button } from 'antd'
import { useAuth } from './authProvider'

function Login () {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const location: any = useLocation()
  const auth = useAuth()
  const from = location.state?.from?.pathname || '/'
  function inputUsername (e: any) {
    setUser(e.target.value)
  }
  function login () {
    if (!user.trim()) {
      return
    }
    auth.signin(user, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div className='login__wrapper'>
      <label className='user__label'>Enter any username to log in</label>
      <Input className='username__input'
        placeholder='please input username'
        value={user}
        onChange={inputUsername} />
      <p className='login__btn'><Button type='primary' onClick={login}>Login</Button></p>
    </div>
  )
}

export default Login
