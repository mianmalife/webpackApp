import React from 'react'
import './index.less'

function LessComponent() {
  return <div className='less__component'>
    <h2>less 函数</h2>
    <div className='boolean'>
      <p className='inner'>Boolean判断, luma方法可以将颜色值转换为百分数</p>
    </div>
    <div className='each'>
      each方法用于遍历
      <ul>
        <li className='child-1'>列表 range可以表示一个范围</li>
        <li className='child-2'>列表 要带单位可以使用unit</li>
        <li className='child-3'>列表</li>
      </ul>
    </div>
    <div className='func'>自定义函数</div>
  </div>
}

export default LessComponent
