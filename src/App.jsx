import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layouts from '@/page/layout'
import UseEffectM from '@/page/react/useEffectM'
import CssComponent from '@/page/css/CssComponent'
import NotFound from '@/example/notFound'

import './App.less'

function App () {
  return (
      <div className='routes__container'>
        <Routes>
          <Route element={<Layouts />}>
            <Route index element={<UseEffectM />} />
            <Route path='/' element={<UseEffectM />} />
            <Route path='home' element={<UseEffectM />}></Route>
            <Route path='picture' element={<CssComponent />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  )
}
export default App
