import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.less'
import './styles.scss'

const H = 'hello'

const mountNode = document.getElementById('app')
ReactDOM.render(<App name={H} />, mountNode)
