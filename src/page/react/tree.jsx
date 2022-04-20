import React, { Fragment, useEffect, useState } from 'react'
import { Card } from 'antd'
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons'
import fetchApi from '@/shared/axios'
import _cloneDeep from 'lodash/cloneDeep'
import './tree.scss'
function Tree() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetchApi('https://www.fastmock.site/mock/9a0b75972e6f3de5f1aebeb764372e80/redux/api/dimension')
      .then(data => {
        setData(data)
      })
      .catch(() => {
        setData(null)
      })
  }, [])
  function expand(id, category) {
    const copy = _cloneDeep(data)
    const resp = (arr) => {
      return arr.map(item => {
        if (item.id === id) {
          console.log(item, id)
          item.fold = !item.fold
        }
        if (item.children) {
          resp(item.children)
        }
        return item
      })
    }
    copy[category] = resp(copy[category])
    setData(copy)
  }
  function onHandle(obj, depth) {
    function generateChild(seChild, dept, key, bgColor, color) {
      const nextDepth = dept + 5
      return seChild.length && seChild.map(item => {
        return <li key={item.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 10,
              backgroundColor: bgColor,
              color: color,
              cursor: item.children && 'pointer'
            }}
            key={item.id}
            data-id={item.id}
            onClick={item.children && expand.bind(this, item.id, key)}>
            {item.children &&
              <span style={{
                marginLeft: nextDepth,
                display: 'inline-block',
                width: '10px',
                height: '24px'
              }}>
              </span>}
            <div
              className='indicator__name'
              style={{
                textIndent: !item.children && nextDepth,
                padding: !item.children && '0 24px'
              }}
              title={item.name}>
              {!item.fold ? item.children && <CaretDownOutlined /> : item.children && <CaretRightOutlined />}{item.name}
            </div>
          </div>
          {
            item.children &&
            <ul style={{ display: item.fold ? 'none' : 'block' }}>
              {generateChild(item.children, nextDepth, key, bgColor, color)}
            </ul>
          }
        </li>
      })
    }
    function generate(firstChild, dept, key) {
      const nextDepth = dept + 5
      return firstChild.length && firstChild.map(item => {
        return <li key={item.id}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 10,
              backgroundColor: item.bgColor,
              color: item.color,
              cursor: item.children && 'pointer'
            }}
            key={item.id}
            data-id={item.id}
            onClick={item.children && expand.bind(this, item.id, key)}>
            {item.children &&
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '24px'
                }}>
              </span>}
            <div className='indicator__name'
              style={{ padding: !item.children && '0 24px' }}
              title={item.name}>{!item.fold ? <CaretDownOutlined /> : <CaretRightOutlined />}{item.name}</div>
          </div>
          {
            item.children &&
            <ul style={{ display: item.fold ? 'none' : 'block' }}>
              {generateChild(item.children, nextDepth, key, item.bgColor, item.color)}
            </ul>
          }
        </li>
      })
    }
    return Object.keys(obj).map(key => {
      const nextDepth = depth + 5
      return <div key={key}>
        <div>{key}</div>
        <ul>{obj[key].length && generate(obj[key], nextDepth, key)}</ul>
      </div>
    })
  }
  return <Fragment>
    <Card title="React递归实现树结构" className='tree__wrapperd' style={{ height: 300, overflow: 'auto' }}>
      {data ? onHandle(data, 0) : '暂无数据'}
    </Card>
  </Fragment>
}

export default Tree
