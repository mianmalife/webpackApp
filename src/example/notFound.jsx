import React from 'react'
import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

function NotFound () {
  return <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link to='/home'>Back Index</Link></Button>}
  />
}

export default NotFound
