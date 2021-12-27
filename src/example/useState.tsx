import React, { useEffect, useRef, useState } from 'react'

function CounterTest () {
  const [count, setCount] = useState(0)
  const latestCount = useRef(count)
  function handleAert () {
    setTimeout(() => {
      alert('show count ' + count)
    }, 3000)
  }
  useEffect(() => {
    document.title = `you click ${count}次`
  })

  useEffect(() => {
    latestCount.current = count
    setTimeout(() => {
      console.log(`you clicked ${latestCount.current} times`)
    }, 3000)
  })
  return <div>
    <p>you click {count} 次</p>
    <button onClick={() => setCount(count + 1)}>count++</button>
    <button onClick={() => handleAert()}>show alert</button>
  </div>
}

export default CounterTest
