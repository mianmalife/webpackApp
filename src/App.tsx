import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Test from '../testComponent/testCmp'

function App (props: any) {
  const [count, setCount] = useState(0)
  const { name } = props
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      {name}124
      {count}
      <Test />
    </div>
  )
}
export default hot(App)
