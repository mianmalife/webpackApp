import React, { useReducer } from 'react'
import { Button } from 'antd'

function init (initCount: number) {
  return { count: initCount }
}
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'minus':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      return state
  }
}
function Counter ({ initialCount }: any) {
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return <div>
    <h2>{state.count}</h2>
    <Button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>Reset</Button>
    <p>----------------------------分割符</p>
    <Button type="primary" onClick={() => dispatch({ type: 'add' })}>+1+1</Button>
    <p>----------------------------分隔符</p>
    <Button onClick={() => dispatch({ type: 'minus' })}>-1-1</Button>
  </div>
}

export default Counter
