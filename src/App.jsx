import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Layouts from '@/example/layout'
import UseEffectM from '@/example/useEffectM'
import Picture from '@/example/picture'
import NotFound from '@/example/notFound'
import HelloWorld from '@/example/helloworld'
import Users from '@/example/user'
import UserDetail from '@/example/userDetail'
import { AuthProvider, RequireAuth } from '@/example/authProvider'
// import Login from '@/example/login'
import DragTest from './example/dragTest'
import './App.less'
const data = [
  {
    name: 'Annie Hastur',
    id: '1'
  },
  {
    name: 'ashe',
    id: '2'
  },
  {
    name: 'Alistar',
    id: '3'
  },
  {
    name: 'Twisted Fate ',
    id: '4'
  }
]

function App () {
  const [user, setUser] = useState(data)
  const navgateTo = useNavigate()

  const onRemoveUser = (nowId) => {
    setUser(state => state.filter(item => item.id !== nowId))
    navgateTo('/users')
  }
  const searchUser = name => {
    if (name) {
      setUser(state => data.filter(item => item.name.includes(name)))
    } else {
      setUser(data)
    }
  }
  return (
    <AuthProvider>
      <div className='routes__container'>
        <Routes>
          <Route element={<RequireAuth><Layouts /></RequireAuth>} >
            <Route index element={<UseEffectM />} />
            <Route path='/' element={<UseEffectM />} />
            <Route path='home' element={<UseEffectM />}>
              <Route path='helloOutlet' element={<HelloWorld />} />
            </Route>
            <Route path='picture' element={<Picture />} />
            <Route
              path='users'
              element={
                <Users userData={user} searchUser={searchUser} />
              } />
            <Route
              path='users/:userId'
              element={<UserDetail onRemoveUser={onRemoveUser} userData={user} />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='login' element={<DragTest />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
export default App
