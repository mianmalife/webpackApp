import { Card, Button } from 'antd'
import React, { useState } from 'react'
import { createStore } from 'redux'

const initialState = {
  counter: 1
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, counter: state.counter + 1 }
    case 'minus':
      return { ...state, counter: state.counter - 1 }
  }
}

const store = createStore(counterReducer)

function ReduxTest() {
  const [counter, setCounter] = useState(1)
  store.subscribe(() => {
    console.log(store.getState())
    setCounter(store.getState().counter)
  })
  return (
    <Card>
      <Button type='primary' onClick={() => store.dispatch({ type: 'add' })}>
        add-count
      </Button>
      <br />
      <Button
        style={{ marginTop: 20 }}
        onClick={() => store.dispatch({ type: 'minus' })}
      >
        minus-count
      </Button>
      <p>{counter}</p>
    </Card>
  )
}
export default ReduxTest
