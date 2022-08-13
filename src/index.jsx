import React from 'react'
import { createRoot } from 'react-dom/client'
import { enableAllPlugins } from 'immer'
import dayjs from 'dayjs'
import App from './App'
import 'antd/dist/antd.less'
import '@/asset/less/app.less'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
enableAllPlugins()

const root = createRoot(document.getElementById('app'))
root.render(<App />)
