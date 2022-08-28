import React, { useState } from 'react'
import RootContext from './rootContext'
import { Breadcrumb, Layout, Menu } from 'antd'
import SvgIcon from '@/common/svgIcon'
import './App.less'
import TestCmp from '@/page/reactPage/testCmp'
const { Header, Content } = Layout
const items1 = ['1', '2', '3', '4'].map((key) => ({
  key,
  label: `nav ${key}`
}))

const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <RootContext.Provider value={theme}>
      <Layout className='layoutContainer'>
        <Header
          className='header'
          style={{ backgroundColor: theme === 'light' ? '#fff' : '#001529' }}
        >
          <div className='logo'></div>
          <Menu
            theme={theme === 'light' ? 'light' : 'dark'}
            className='top__menulist'
            mode='horizontal'
            defaultSelectedKeys={['1']}
            items={items1}
          />
          <SvgIcon
            name={theme === 'light' ? 'sun' : 'moon'}
            onClick={toggleTheme}
            style={{ fontSize: 24, cursor: 'pointer' }}
          ></SvgIcon>
        </Header>
        <Layout
          style={{
            padding: '0 20px 20px',
            margin: 0
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
              userSelect: 'none'
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 20,
              margin: 0,
              background: '#fff'
            }}
          >
            <TestCmp></TestCmp>
          </Content>
        </Layout>
      </Layout>
    </RootContext.Provider>
  )
}

export default App
