import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Test from '../testComponent/testCmp'

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
    </div>
  )
}
export default hot(App)
