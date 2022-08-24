import React from 'react'
import Icon from '@ant-design/icons'
import svgList from '@/asset/icon'

export default function SvgIcon({ name, style, rotate, spin }) {
  return (
    <Icon
      component={svgList[name]}
      style={style}
      rotate={rotate}
      spin={spin}
    ></Icon>
  )
}
