import { Card, Button } from 'antd'
import React from 'react'

export default class Cycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    console.log('constructor')
  }
  // render前调用 初始挂载和后续更新都会调用
  static getDerivedStateFromProps(props, state) {
    console.log(props, state, 'getDerivedStateFromProps')
    return state
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, 'getSnapshotBeforeUpdate')
    return 'snaps'
  }
  componentDidMount() {
    console.log('componentDidMount')
    // document.getElementById('btn').addEventListener('click', () => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log(this.state.count)
    // })
  }
  componentDidUpdate(prevProps, prevState, snaps) {
    console.log(prevProps, prevState, snaps, 'componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  add = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log(this.state.count)

    this.setState((prevState, props) => ({ count: prevState.count + 1 }))
    this.setState((prevState, props) => ({ count: prevState.count + 1 }))
    this.setState((prevState, props) => ({ count: prevState.count + 1 }))

    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    //   console.log(this.state.count)
    // }, 0)
  }
  render() {
    console.log('render')
    return (
      <Card>
        <Button type='primary' id='btn' onClick={this.add}>
          +1
        </Button>
        <h2>{this.state.count}</h2>
      </Card>
    )
  }
}
