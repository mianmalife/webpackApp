import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Test from '../testComponent/testCmp'
import UseReduce from '@/example/useReducer'

function App (props: any) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <Test />
      <UseReduce initialCount={0}/>
    </div>
  )
}
export default hot(App)
