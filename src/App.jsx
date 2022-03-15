import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layouts from '@/page/layout'
import CssComponent from '@/page/css/CssComponent'
import Tree from '@/page/react/tree'
import NotFound from '@/example/notFound'

import './App.less'

function App () {
  return (
      <div className='routes__container'>
        <Routes>
          <Route element={<Layouts />}>
            <Route index element={<Tree />} />
            <Route path='/' element={<Tree />} />
            <Route path='home' element={<Tree />}></Route>
            <Route path='picture' element={<CssComponent />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  )
}
export default App
