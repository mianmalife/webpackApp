import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
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
        theme={new Date().getHours() > 18 ? 'dark' : 'light'}
        mode="horizontal">
        <Menu.Item key="home">
          <Link to='/home'>React</Link>
        </Menu.Item>
        <Menu.Item key="picture">
          <Link to='/picture'>CSS</Link>
        </Menu.Item>
      </Menu>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
