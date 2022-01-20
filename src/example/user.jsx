import React from 'react'
import { List, Avatar } from 'antd'
import { Link } from 'react-router-dom'

const Users = ({ userData }) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={userData}
        renderItem={item => (
          <List.Item actions={
            [
              <Link key={item.id} to={`${item.id}`}>detail</Link>
            ]
          }>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description="hello world"
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Users
