import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import dayjs from 'dayjs'
import App from './App'
import 'antd/dist/antd.less'
import '@/asset/less/app.less'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app')
)
