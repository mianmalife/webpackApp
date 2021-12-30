import React, { useState, useEffect, useCallback } from 'react'

function Child ({ fetchData }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchData().then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data.hits)
      })
  }, [fetchData])
  return <div>
    <ul>
      {data && data.map(item => <li key={item.objectID}>
        <a href={item.url}>{item.title}</a>
      </li>)}
    </ul>
  </div>
}

function GetNewsData () {
  const [query, setQuery] = useState('react')
  const fetchData = useCallback(() => {
    const url = 'https://hn.algolia.com/api/v1/search?query=' + query
    return fetch(url)
  }, [query])

  return <div>
    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    <Child fetchData={fetchData} />
  </div>
}

export default GetNewsData
