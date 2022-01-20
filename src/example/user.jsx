import React from 'react'
import { List, Avatar, Input } from 'antd'
import { Link, useSearchParams } from 'react-router-dom'

const Users = ({ userData, searchUser }) => {
  const [searchParmas, setSearchParams] = useSearchParams()
  const searchTerm = searchParmas.get('name') || ''
  console.log(searchTerm)
  const onPressCallback = e => {
    const name = e.target.value
    if (name) {
      setSearchParams({ name: e.target.value })
    } else {
      setSearchParams({})
    }
    searchUser(name)
  }
  return (
    <div>
      <p style={{ width: 500 }}>
        <Input placeholder="search user" onPressEnter={onPressCallback} />
      </p>
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
