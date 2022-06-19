import React from 'react'
import Tree from './tree'
import UseTimeFormatterTest from '@/test/useTimeFormatter.test'
import Count from '@/page/reactPage/lifeCycle'
import ReduxTest from './redux'

function IndexPage() {
  return (
    <>
      <Tree></Tree>
      <UseTimeFormatterTest></UseTimeFormatterTest>
      <Count initValue={2}></Count>
      <ReduxTest></ReduxTest>
    </>
  )
}

export default IndexPage
