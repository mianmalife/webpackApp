import React from 'react'
import { hot } from 'react-hot-loader/root'
import Test from '@/testComponent/testCmp'
import UseReduce from '@/example/useReducer'
import CounterTest from '@/example/useState'
import CounterClass from '@/example/classState'
import UseList from '@/example/useEffect'
import axios from '@/shared/axios'
import { Button } from 'antd'
// https://www.fastmock.site/mock/1be825ab4ec5090ee9bbd467d7bc5694/apis/api/getDetails
// https://www.fastmock.site/mock/1be825ab4ec5090ee9bbd467d7bc5694/apis/getdetail

function App (props: any) {
  const getDataTable = () => {
    axios({
      url: 'https://www.fastmock.site/mock/1be825ab4ec5090ee9bbd467d7bc5694/apis/api/getDetails',
      method: 'GET',
      params: { test: 1 }
    })
  }
  const getDataNo = () => {
    axios({
      url: 'https://www.fastmock.site/mock/1be825ab4ec5090ee9bbd467d7bc5694/apis/getdetail',
      method: 'post',
      params: { test: 1 }
    }, {
      repeat_request_cancel: false
    })
  }
  return (
    <div>
      <Test />
      <UseReduce initialCount={0}/>
      <p>--------------------------</p>
      <Button onClick={() => getDataTable()}>发射1号</Button>
      <p>-----------------------</p>
      <Button onClick={() => getDataNo()}>发射2号</Button>
      <p>-------------------------------</p>
      <CounterTest />
      <CounterClass />
      <UseList />
    </div>
  )
}
export default hot(App)
