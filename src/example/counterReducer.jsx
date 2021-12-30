import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
function CounterReducer ({ step }) {
  function reducer (state, action) {
    switch (action.type) {
      case 'add':
        return state + step
      case 'minus':
        return state - step
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'add' })
    }, 1000)
    return () => clearInterval(id)
  })
  return <div>
    <h2>{count}</h2>
  </div>
}

CounterReducer.propTypes = {
  step: PropTypes.number
}
export default CounterReducer
