import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AuthStatus } from '@/example/authProvider'
const Layout = () => {
  const [current, setCurrent] = useState({ activeMenu: 'home' })
  const location = useLocation()
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
      <AuthStatus />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
