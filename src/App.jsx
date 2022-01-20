import React, { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import Layouts from '@/example/layout'
import UseEffectM from '@/example/useEffectM'
import Picture from '@/example/picture'
import NotFound from '@/example/notFound'
import HelloWorld from '@/example/helloworld'
import Users from '@/example/user'
import UserDetail from '@/example/userDetail'
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
  const [current, setCurrent] = useState({ activeMenu: 'home' })
  const [user, setUser] = useState(data)
  const location = useLocation()
  const navgateTo = useNavigate()
  useEffect(() => {
    const { pathname } = location
    if (pathname === '/') {
      setCurrent({ activeMenu: 'home' })
    } else {
      setCurrent({ activeMenu: pathname.replace('/', '') })
    }
  }, [location])
  const clickNav = e => {
    setCurrent({ activeMenu: e.key })
  }
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
    <div>
      <Menu
        onClick={clickNav}
        selectedKeys={[current.activeMenu]}
        theme='light'
        mode="horizontal">
        <Menu.Item key="home">
          <Link to='/home'>HOME</Link>
        </Menu.Item>
        <Menu.Item key="picture">
          <Link to='/picture'>PICTURE</Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to='/users'>USER</Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Link to='/search'>SEARCH</Link>
        </Menu.Item>
      </Menu>
      <div className='routes__container'>
        <Routes>
          <Route element={<Layouts />} >
            <Route index element={<UseEffectM />} />
            <Route path='/' element={<UseEffectM />} />
            <Route path='home' element={<UseEffectM />}>
              <Route path='helloOutlet' element={<HelloWorld />} />
            </Route>
          </Route>
          <Route path='picture' element={<Picture />} />
          <Route path='users' element={<Users userData={user} searchUser={searchUser} />} />
          <Route
            path='users/:userId'
            element={<UserDetail onRemoveUser={onRemoveUser} userData={user} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
