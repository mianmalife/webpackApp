import React from 'react'
import RootContext from './rootContext'
import { Breadcrumb, Layout, Menu, theme, DatePicker } from 'antd'
import './App.less'
const { Header, Content, Footer } = Layout

const App = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <RootContext.Provider value={theme}>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1
              return {
                key,
                label: `nav ${key}`
              }
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            <DatePicker onChange={onChange} picker='week' />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design Demo ©2023 Created by Skea
        </Footer>
      </Layout>
    </RootContext.Provider>
  )
}

export default App
