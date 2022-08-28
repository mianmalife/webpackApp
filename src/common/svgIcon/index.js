import React from 'react'
import Icon from '@ant-design/icons'
import svgList from '@/asset/icon'
// import './index.less'

export default function SvgIcon({
  name,
  style,
  rotate,
  fill,
  spin,
  ...otherProp
}) {
  console.log(otherProp, style, fill)
  return (
    <Icon
      component={svgList[name]}
      style={style}
      // fill={fill}
      rotate={rotate}
      spin={spin}
      {...otherProp}
    ></Icon>
  )
}
