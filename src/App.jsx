import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layouts from './layout'
import CssComponent from '@/page/css/CssComponent'
import IndexPage from '@/page/reactPage/index'
import NotFound from './notFound'
import LessComponent from '@/page/less/index'

import './App.less'

function App () {
  return (
      <div className='routes__container'>
        <Routes>
          <Route element={<Layouts />}>
            <Route index element={<IndexPage />} />
            <Route path='/' element={<IndexPage />} />
            <Route path='home' element={<IndexPage />}></Route>
            <Route path='css' element={<CssComponent />} />
            <Route path='less' element={<LessComponent />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  )
}
export default App
