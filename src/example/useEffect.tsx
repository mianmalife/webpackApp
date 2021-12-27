import React, { useEffect, useState } from 'react'
import fetchApi from '@/shared/axios'
export default function getDataCmp () {
  const [list, setList] = useState([])

  useEffect(() => {
    async function getData () {
      try {
        const resp: any = await fetchApi({
          url: 'https://www.fastmock.site/mock/1be825ab4ec5090ee9bbd467d7bc5694/apis/api/getDetails',
          method: 'GET',
          params: { test: 1 }
        })
        setList(resp.Data2)
      } catch (error) {
        console.warn(error)
      }
    }
    getData()
  }, [])

  // 函数式更新 和 Google Docs
  return <div>
    hello
    <ul>
      {list.map((item: any) => <li key={item.paraid}>{item.statNote}</li>)}
    </ul>
  </div>
}
