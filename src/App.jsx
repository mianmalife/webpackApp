import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Menu } from 'antd'
import UseEffectM from '@/example/useEffectM'
import Picture from '@/example/Picture'
import NotFound from '@/example/notFound'
import './App.less'

function App () {
  const [current, setCurrent] = useState({ activeMenu: 'Index' })
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
        <Menu.Item key="Index">
          <Link to='/'>Index</Link>
        </Menu.Item>
        <Menu.Item key="Picture">
          <Link to='/picture'>Picture</Link>
        </Menu.Item>
      </Menu>
      <div className='routes__container'>
        <Routes>
          <Route path='/' element={<UseEffectM />} />
          <Route path='picture' element={<Picture />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
