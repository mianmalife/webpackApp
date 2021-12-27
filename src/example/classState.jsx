import React from 'react'

class CounterClass extends React.Component {
  state = {
    count: 0
  }

  componentDidUpdate () {
    const { count } = this.state
    setTimeout(() => {
      console.log('you clicked class count ' + count + ' times')
    }, 3000)
  }

  render () {
    return <div>
      <p>you clicked { this.state.count } times</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>click class me</button>
    </div>
  }
}

export default CounterClass
