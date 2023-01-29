import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
// import { enableAllPlugins } from 'immer'
import dayjs from 'dayjs'
import App from './App'
import 'antd/dist/reset.css'
import '@/asset/less/app.less'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
// enableAllPlugins()

const root = createRoot(document.getElementById('app'))
root.render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: '#00b96b'
      }
    }}
  >
    <App />
  </ConfigProvider>
)
