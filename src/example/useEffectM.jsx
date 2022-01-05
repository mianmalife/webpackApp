import React, { useState } from 'react'
import { Input, Spin, Button } from 'antd'
import UserHackerNews from './useHackerNewApi'
function Child ({ data, loading, Error }) {
  return <div>
    <Spin tip='加载中...' spinning={loading}>
      {Error && <p>出错了!</p>}
      <ul>
        {data && data.map((item, index) => <li key={item.objectID}>
          <a href={item.url}>{index + 1}：{item.title}</a>
        </li>)}
      </ul>
    </Spin>
  </div>
}

function GetNewsData () {
  const [query, setQuery] = useState('react')
  const [{ data, loading, Error }, setUrl] = UserHackerNews()
  // const fetchData = useCallback(() => {
  //   return fetchApi(url)
  // }, [url])

  return <div>
    <Input
      value={query}
      style={{ width: 240 }}
      onChange={(e) => setQuery(e.target.value)} />
    <Button
      style={{ marginLeft: 20 }}
      type='primary'
      onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>
      Search
    </Button>
    <Child
      data={data}
      loading={loading}
      Error={Error}
    />
  </div>
}

export default GetNewsData
