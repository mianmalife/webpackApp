import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, Image } from 'antd'
import React, { useState } from 'react'
import SmileSvg from '@/asset/icon/smile.svg'
import settingIcon from '@/asset/icon/setting.svg?url'
import './App.less'
const { Header, Content, Sider } = Layout
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`
}))
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1)
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label: `option${subKey}`
        }
      })
    }
  }
)

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className='layoutContainer'>
      <Header className='header'>
        <div className='logo'></div>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed)
          }
        )}
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0'
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: '#fff'
            }}
          >
            <h3>svg react compnent</h3>
            <SmileSvg />
            <h3>svg url</h3>
            <Image src={settingIcon} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
