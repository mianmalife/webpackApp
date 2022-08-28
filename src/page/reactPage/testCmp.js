import rootContext from '@/rootContext'
import React, { useContext } from 'react'
import { Image } from 'antd'
import UlComp, { Child } from '@/page/reactPage/reactType'
import SvgIcon from '@/common/svgIcon'
import SmileSvg from '@/asset/icon/smile.svg'
import settingIcon from '@/asset/icon/setting.svg?url'

function TestCmp() {
  const theme = useContext(rootContext)
  console.log(theme)
  return (
    <div>
      <h3>svg react compnent</h3>
      <SmileSvg />
      <h3>svg url</h3>
      <Image src={settingIcon} />
      <h3>动态加载</h3>
      <SvgIcon
        name='smile'
        style={{ fontSize: 80, color: theme === 'light' ? '#fff' : '#5468ff' }}
      ></SvgIcon>
      <h3>React element type</h3>
      <UlComp>
        <Child>1</Child>
        <Child>2</Child>
        <Child>3</Child>
      </UlComp>
    </div>
  )
}

export default TestCmp
