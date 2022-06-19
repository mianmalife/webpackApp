import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link, Outlet, useLocation } from 'react-router-dom'
const Layout = () => {
  const [current, setCurrent] = useState({ activeMenu: 'home' })
  const location = useLocation()
  useEffect(() => {
    const { pathname } = location
    if (pathname === '/') {
      console.log(2)
      setCurrent({ activeMenu: 'home' })
    } else {
      setCurrent({ activeMenu: pathname.replace('/', '') })
    }
  }, [location.pathname])
  return (
    <div>
      <Menu
        selectedKeys={[current.activeMenu]}
        theme={new Date().getHours() > 18 ? 'dark' : 'light'}
        mode='horizontal'
      >
        <Menu.Item key='home'>
          <Link to='/home'>React</Link>
        </Menu.Item>
        <Menu.Item key='css'>
          <Link to='/css'>CSS</Link>
        </Menu.Item>
        <Menu.Item key='less'>
          <Link to='/less'>LESS</Link>
        </Menu.Item>
      </Menu>
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
